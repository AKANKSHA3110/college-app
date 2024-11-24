// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Header from "./component/Header"
import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
import Home from './component/Home'
import Aboutus from './component/Aboutus'
import NewContact from'./component/NewContact'
import Aboutcoll from './component/Aboutcoll'
import Feedback from './component/Feedback'
// import Login from "./component/Login"
import NewLogin from './component/NewLogin.jsx'
import Quotes from "./component/Quotes.jsx"
import Student_details from "./component/Student_details"
import AdminHome from "./component/admin/AdminHome"
import StudentAccount  from "./component/StudentAccount"
import EditContact from "./component/admin/EditContact.jsx"
import AllContacts from "./component/admin/AllContacts.jsx"
import AddEmployee from "./component/admin/AddEmployee.jsx"


function App(){
  return (
    <>
    <Router>
    {/* <Header/> */}
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<Aboutus/>}></Route>
    <Route path="/contact" element={<NewContact/>}></Route>
    <Route path="/college" element={<Aboutcoll/>}></Route>
    <Route path="/feedback" element={<Feedback/>}></Route>
    <Route path="/login" element={<NewLogin/>}></Route>
    <Route path="/showQuotes" element={<Quotes/>}></Route>
    <Route path="/allStudents" element={<Student_details/>}></Route>
    <Route path ="/adminHome" element={<AdminHome/>}></Route>
    <Route path="/allContacts" element={<AllContacts/>}></Route>
    <Route path="/studentAccount" element ={<StudentAccount/>}></Route>
    <Route path="/editContact" element ={<EditContact/>}></Route>
    <Route path="/addEmployee" element ={<AddEmployee/>}></Route>
    



    </Routes>
    </Router>
     
    </>
  )

}





export default App
