import AdminHeader from "./AdminHeader"

import { useState,useEffect } from "react"
import axios from "axios"


const AddEmployee=()=>
{

    const url="http://localhost:5000/admin/addemployee"
    let[employee,setEmployee]=useState({

        name:"",
        email:"",
        phone:"",
        
    })
    const[photo,setPhoto]=useState("")
    const handledata=(e)=>
    {
setEmployee({...employee,[e.target.name]:e.target.value})

    }




    const handlesubmit=async(e)=>
    {
        e.preventDefault()
        console.log(employee);
        try{
            const form_data=new FormData()
            form_data.append("name",employee.name)
            form_data.append("email",employee.email)
            form_data.append("phone",employee.phone)
    
            
            form_data.append("photo",photo)
    
    
         const response=await axios.post(url,form_data)
            alert(response.data)
          }
    
        catch(err){
            console.log(err.message);
        }
    }
   


    return(

<>

<AdminHeader/>



          <form>
          <div className="row justify-content-center">
            <div className="col-6">
              <h2 style={{textAlign:"center"}}>Add Employee Details</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
      
        <input type="text"  name="name" className="form-control" value={employee.name} onChange={handledata}/>
      </div>
    


    
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
      
      
        <input type="email"  name="email" className="form-control" value={employee.email} onChange={handledata}/>
      </div>
   

    
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
      
      
        <input type="number"  name="phone" className="form-control" value={employee.phone} onChange={handledata}/>
      </div>
    

    
      <div className="mb-3">
        <label htmlFor="query" className="form-label">Image</label>
      
      
      <input type="file" name="photo" className="form-control"  onChange={(e)=>{
                    
                    console.log(e.target.files[0]);
                    setPhoto(e.target.files[0])}} />
    
            </div>
    </div>
    </div>

    <div className="text-center">
            <button type="submit" onClick={handlesubmit} className="btn btn-primary mt-4" style={{marginLeft:"150px"}}>Submit</button>
         
            </div>
         
          </form>
    






</>

    )
}
export default AddEmployee