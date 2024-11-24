import axios from 'axios'
import { useState } from "react"
export default function Contact(){
    let [userName,setUserName]=useState("")
    let[userEmail,setUserEmail]=useState("")
    let[userPhone,setUserPhone]=useState("")
    let[userQuery,setUserQuery]=useState("")

    const URL="http://localhost:5000/collegeApi/addContact"




   const handle_UserName=(e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    setUserName(e.target.value)//assigning value to userName state 
   }

    const handle_UserEmail=(e)=>{
    setUserEmail(e.target.value) 
  

   }

    const handle_UserPhone=(e)=>{
     setUserPhone(e.target.value)
    }

    const handle_UserQuery=(e)=>{
    setUserQuery(e.target.value)

    }
    
    const handleSubmit=async(e)=>{
      e.preventDefault() //submit button functionality
      console.log(`User Name is: ${userName} User Email is: ${userEmail} 
      User Phone is: ${userPhone} User Query is: ${userQuery} `);

      const userContact={
        userName:userName,userEmail:userEmail,userPhone:userPhone,userQuery:userQuery
      }
      const response =awaitaxios.post(URL,userContact)

                      console.log("response from server"+response);

      
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
          <h1 style={heading}>Contact us</h1>
          <form  onSubmit={handleSubmit} style={formstyle}>
          <div className="form-floating mb-2 mt-5">
    <input type="text" className="form-control" id="floatingInput" name="userName" placeholder="Username" onChange={handle_UserName} value={userName}/>
    <label htmlFor="floatingInput">Username</label>
  </div>
  <div className ="form-floating mb-2">
    <input type="email" className="form-control" id="floatingPassword" name="userEmail" placeholder="Email" onChange={handle_UserEmail} value={userEmail}/>
    <label htmlFor="floatingPassword">Email</label>
  </div>
  <div className="form-floating mb-2">
    <input type="number" className="form-control" id="floatingPassword" name="userPhone" placeholder="Phone no" onChange={handle_UserPhone} value={userPhone}/>
    <label htmlFor="floatingPassword">Phone no</label>
  </div>
  <div className="form-floating mb-2">
    <textarea className="form-control" placeholder="Leave a comment here" name="userQuery" id="floatingTextarea" onChange={handle_UserQuery} value={userQuery}></textarea>
    <label htmlFor="floatingTextarea">Query</label>
    <button type="submit" className="btn btn-warning mt-5">Submit!!!</button>
  </div>
  </form>
  </>
        )
  }