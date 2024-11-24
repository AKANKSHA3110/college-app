import axios from "axios";
import { useState,useEffect } from "react";
import AdminHeader from './AdminHeader'


import { Link } from "react-router-dom";

const ViewEmployee=()=>
{

    let url ="http://localhost:5000/admin/viewemployee"

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setEmployee(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, []);



    return(


<>
<AdminHeader/>

<h2 style={{textAlign:"center"}}>Employee Details</h2>
<table className="table">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">phone</th>
                                <th scope="col">image</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                            {employee.map((emp, index) => (
                                <tr key={index}>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    

                                    <td>
    <img src={`http://localhost:5000/employee/${emp.emppic}`} alt="image" style={{width:"100px",height:"100px"}} />
</td>
{/* employee from public */}

                                     
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>






</>


    )
}
export default ViewEmployee