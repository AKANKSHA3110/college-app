import { useState } from "react"
import AdminHeader from "./admin/AdminHeader";
export default function Login(){

    let[login,setLogin]=useState({userId:"",password:""})

    const fetchData=(e)=>{

      console.log(e.target.name);
      console.log(e.target.value);

    setLogin({...login,[e.target.name]:e.target.value})
    console.log("login object is"+login);
    }

    const handleForm=(e)=>{
        
        e.preventDefault()

        let {userId,password}=login
        console.log(`submitted data by user is ${userId} and ${password}`);
        setLogin({userId:"",password:""});
  }




    let heading={
        width:"20%",
        height:"20%",
        margin:"auto"

    }
   let divstyle={
    width:"50%",
    height:"50%",
    margin:"auto"
   }




    return(
        <>
    
        <form onSubmit={handleForm}>
        <h1 style={heading}>Login</h1>
        <div style={divstyle}>
        <div  className="form-floating  mt-5 mb-3">
       <input type="text" class="form-control" id="floatingInput" placeholder="Enter your Id " name="userId"onChange={fetchData} value={login.userId}/>
       <label htmlFor="floatingInput">ID</label>
       </div>
       <div className="form-floating mt-5">
       <input type="password" class="form-control " id="floatingPassword" placeholder="Password" name="password" onChange={fetchData} value={login.password}/>
       <label htmlFor="floatingPassword">Password</label>
       <button type="submit" className="btn btn-warning  mt-4">Submit!!!</button>
       </div>
       </div>
       </form>
        </>
    )
}