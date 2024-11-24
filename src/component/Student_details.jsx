import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentData from './StudentData';

export default function Student_details() {
    const URL = "http://localhost:8000/collegeApi/allStudents";
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(URL);
                console.log(response.data.student);
                setStudents(response.data.student ); // Adjust according to your API response
            } catch (err) {
                console.log(err);
            }
        };

        fetchStudents();
    }, []);

    return (
        <>
            <h1>Student details as follows</h1>
            <StudentData std={students} />
             </>
    );
}