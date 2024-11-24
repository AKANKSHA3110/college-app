import React from 'react'
import axios from 'axios'

import {useState, useEffect} from 'react'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'
export default function AllContacts(){

    const [contact,setContact]=useState([])
    const URL="http://localhost:5000/admin/showContact"
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(URL)
                console.log(response.data);
                setContact(response.data)             
            }
            catch(err){
                console.log(err);
                
            }
        }

        fetchData()
    },[])
    const deleteData =async(e,id)=>{
        e.preventDefault()
        alert(id)
        if (window.confirm("Do you want to Delete the record"))
            //document.write("Hello World");
        {
            const isdelete=await axios.delete(`http://localhost:5000/admin/deleteContact/${id}`);
            if(isdelete.data.code==300)
            {
                alert("Record Deleted successfully")
                setContact(contact.filter(contact=> contact._id !==id))
            }
        }

    }





    return(
        <>
       <AdminHeader/>
        All Contacts
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Query</th>
                <th>Delete</th>
                <th>Edit</th>

            </tr>

            {
            contact.map((item)=>{
                return(
                <tr>
                    <th>{item.username}</th>
                    <th>{item.useremail}</th>
                    <th>{item.userphone}</th>
                    <th>{item.userquery}</th>
                

                    <th>
                        <button className="bg-danger form-control" onClick={(event)=>{deleteData(event,item._id)}}>Delete</button>
                    </th>

                    {/* <th>
                        <Link to={`/editContact?id=${item._id}`}>edit</Link>
                    </th> */}

                    <th>

                        <Link to ={`/editContact?id=${item._id}`}>Edit</Link>
                    </th>
                </tr>
                )

                })
            }
       
        </table>
        </>
    )
}