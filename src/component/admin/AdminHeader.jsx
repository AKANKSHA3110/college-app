import { Link, useNavigate ,} from "react-router-dom";
 

export default () => {
   const navigate =useNavigate();
      const tokenData =localStorage.getItem("Token_key")
      const logout=(e)=>{
        e.preventDefault();
        if(window.confirm("Do you want to logout"))

        {
            if (!tokenData)
            {
                navigate("/login")
            }
            else{
                localStorage.removeItem("Token_key")
                
                navigate("/login") 
            }
        }
      }

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/allContacts"
                >
                  AllContact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  AllFeedback
                </Link>
              </li>
              <li> 
              <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/addEmployee"
                >
                  AllEmployee
                </Link>
                </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Student
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/studentAccount">
                      Create
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     
                      View
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link login" to="/login" onClick={logout}>

                  LogOut
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
