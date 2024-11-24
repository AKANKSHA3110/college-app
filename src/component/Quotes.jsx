import { useState , useEffect} from "react"
import axios from 'axios'
export default function Quotes(){

    const URL ="http://localhost:5000/collegeApi/quotes" //api consume

    const[quote,setQuote] =useState([])         
    useEffect(()=>{

    const fetchQuote=async()=>{

        try{
        const response=await axios.get(URL)
        console.log(response);
        console.log(response.data);
        setQuote(response.data.quotes)
        }
        catch(error){
            console.log(error);

        }

    } 
    fetchQuote()
    },[])

    return(
        <>
        <h1>Quotes</h1>
        {
        quote.map((items)=>{
            return(
                <li key={items.key}>{items.quote}|{items.author}</li>
            )
        })  
        }
        </>
    )
}