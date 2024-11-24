import React, {useEffect} from 'react'
import AllContacts from './AllContacts.jsx'

import {NavLink, useNavigate} from 'react-router-dom'
import AdminHeader from './AdminHeader.jsx';
export default function AdminHome(){
    const navigate=useNavigate();
    const token_data=localStorage.getItem("Token_key")
    console.log(`token data is ${token_data}`);
    useEffect(()=>{
        if(!token_data){
            navigate('/login')
        }
    })
    
    return(
        <>
        <h2>Hello Admin!!!!!</h2>
        <AdminHeader/>
        {/* <AllContacts /> */}
        </>
    )
}