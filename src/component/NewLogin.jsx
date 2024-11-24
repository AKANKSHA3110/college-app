import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"//to navigate from one url to another url

export default function NewLogin() {

    const URL = "http://localhost:5000/admin/login"

    let [userLogin, setLogin] = useState({
        userId: "",
        pass: ""
    })
    const navigate= useNavigate();//to call useNavigate function

    const fetchData = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);

        setLogin({ ...userLogin, [e.target.name]: e.target.value })//compare name from inputBOx with value witch we fill
        console.log("userID and Pass " + userLogin);


    }

    const handleForm = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(URL, userLogin)
            if (response.data.code == 200){
                alert("login successfully....")
                navigate("/adminHome")   
                localStorage.setItem("Token_key",response.data.token)//to store data in browser locally  
                 }

                  else if(response.data){
                    alert("password wrong")
                  }

                  else{
                    alert("email id not matched")
                  }

            console.log("reponse is : " + response);

        } catch (error) {
            console.log(error);
        }

    }

    // const handleForm = (e) => {
    //     e.preventDefault()

    //     let { userId, pass } = userLogin //destructure
    //     console.log(submitted data by user id ${userId} and ${pass});

    //     setLogin({
    //         userId: "",
    //         pass: ""
    //     })
    // }

    let login = {
        width: "100%",
        marginTop: "5%",
        background: "#d7bde2",
        boxShow: "2px 5px",
        fontWeight: "600",
        borderRadius: "5px",
    }

    return (
        <>
            <h1 style={{ marginTop: "30px", textAlign: "center", color: "#5b2c6f" }}>Login Form</h1>
            <div className="card container w-50" style={login}>
                <form className="card-body" onSubmit={handleForm}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" >User Id</label>
                        <input type="text" className="form-control" name="userId" required onChange={fetchData} value={userLogin.userId} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required name="pass" onChange={fetchData} value={userLogin.pass} />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginLeft: "40%", marginTop: "16px" }}>Submit</button>
                </form>
            </div>

        </>
    )
}