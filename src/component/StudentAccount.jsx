import axios from "axios";
import { useState } from "react";
import AdminHeader from "./admin/AdminHeader"

export default () => {
  let [student, setStudent] = useState({
    studentId: "",
    userPassword: "",
    userName: "",
    userEmail: "",
    phone: "",
    course: "",
  });

  const handleData = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  let URL = "http://localhost:5000/admin/addStudent"; //this is a post Api

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let response = await axios.post(URL, student);

      alert(response.data);
      console.log(`response is ${response}`);
    } catch (err) {
      console.log(err);
    }

    setStudent({
      studentId: "",
      userPassword: "",
      userName: "",
      userEmail: "",
      phone: "",
      course: "",
    });
  };

  return (
    <>
      <AdminHeader />
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        <h1>StudentAccount</h1>
        <div className="form-floating mb-3 w-50">
          <input
            type="text"
            name="studentId"
            className="form-control"
            id="floatingInputStudentID"
            placeholder="name"
            onChange={handleData}
            value={student.studentId}
          />
          <label htmlFor="floatingInput">StudentID</label>
        </div>
        <div className="form-floating w-50 mb-3">
          <input
            type="password"
            name="userPassword"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleData}
            value={student.userPassword}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 w-50">
          <input
            type="text"
            name="userName"
            className="form-control"
            id="floatingInputName"
            placeholder="name"
            onChange={handleData}
            value={student.userName}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>

        <div className="form-floating mb-3 w-50">
          <input
            type="email"
            name="userEmail"
            className="form-control"
            id="floatingInputEmail"
            placeholder="name@example.com"
            onChange={handleData}
            value={student.userEmail}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3 w-50">
          <input
            type="number"
            name="phone"
            className="form-control"
            id="floatingInputPhone"
            placeholder="name"
            onChange={handleData}
            value={student.phone}
          />
          <label htmlFor="floatingInput">Phone</label>
        </div>
        <div className="form-floating mb-3 w-50">
          <input
            type="text"
            name="course"
            className="form-control"
            id="floatingInputCourse"
            placeholder="name"
            onChange={handleData}
            value={student.course}
          />
          <label htmlFor="floatingInput">Course</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </>
  );
};
