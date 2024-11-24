import axios from 'axios';
import { useState } from "react";
import Header from './Header';
export default function NewContact(){
    let [userName,setUserName]=useState("")
    let[userEmail,setUserEmail]=useState("")
    let[userPhone,setUserPhone]=useState("")
    let[userQuery,setUserQuery]=useState("")

    const URL="http://localhost:5000/collegeApi/addContact"

    const [contact, setContact]=useState({userName:"",userEmail:"",userPhone:"",userQuery:""})

    const handle_Data=(e)=>{

      setContact({...contact,[e.target.name]:e.target.value})

    }
    const handleSubmit=async(e)=>{
      e.preventDefault() //submit button functionality
          try{
        const response=await axios.post(URL,contact);

        alert(response.data);

        console.log("response from server"+response);
           }
        catch(err)
        {
            console.log(err);
        }

                     

      
     }

    let formstyle={
      height:"50%",
      width:"50%",
      margin:"auto"
  
    }
    let heading={
          margin:"auto",
          height:"20%",
          width:"20%"
    }

  
    
  
        return(
          
          <>
          <Header/>
          <h1 style={heading}> New Contact us</h1>
          <form  onSubmit={handleSubmit} style={formstyle}>
          <div className="form-floating mb-2 mt-5">
    <input type="text" className="form-control" id="floatingInput" name="userName" placeholder="Username" onChange={handle_Data} value={contact.userName}/>
    <label htmlFor="floatingInput">Username</label>
  </div>
  <div className ="form-floating mb-2">
    <input type="email" className="form-control" id="floatingPassword" name="userEmail" placeholder="Email" onChange={handle_Data} value={contact.userEmail}/>
    <label htmlFor="floatingPassword">Email</label>
  </div>
  <div className="form-floating mb-2">
    <input type="number" className="form-control" id="floatingPassword" name="userPhone" placeholder="Phone no" onChange={handle_Data} value={contact.userPhone}/>
    <label htmlFor="floatingPassword">Phone no</label>
  </div>
  <div className="form-floating mb-2">
    <textarea className="form-control" placeholder="Leave a comment here" name="userQuery" id="floatingTextarea" onChange={handle_Data} value={contact.userQuery}></textarea>
    <label htmlFor="floatingTextarea">Query</label>
    <button type="submit" className="btn btn-warning mt-5">Submit!!!</button>
  </div>
  </form>
  </>
        )
  }     