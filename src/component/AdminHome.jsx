import React,{useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import AllContacts from './AllContacts';
import AdminHeader from './AdminHeader';
export default function AdminHome(){
       
    const navigate=useNavigate();
    const token_data=localStorage.getItem("Token_key")
    console.log(`token data is ${token_data}`);
    useEffect(()=>{
        if(!token_data)             //if no value in token data it means user has not login 
        {
            navigate('/login')
        }

    })


    return(
        
        <>
        
            <h1>This is Admin Home </h1>
            <AdminHeader/>
            {/* <AllContacts/> */}
        </>
    )

     

}