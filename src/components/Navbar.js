import React, {useEffect} from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

export const Navbar = () => {
  let history = useHistory();
  const handleLogout = () =>{
    localStorage.removeItem('token');
    history.push('/login')
  }

  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname); // location.pathname gives name of the page
  }, [location]);

  return (
    <div>
      <nav  className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNoteBook
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
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/account"?"active":""}`} to="/account">
                  Account
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token')?
            <form className="d-flex">
              <Link style={{color:'white'}} className="btn btn-warning mx-1" to="/login" role="button">Login</Link>
              <Link style={{color:'white'}} className="btn btn-warning mx-3" to="/signup" role="button">Signup</Link>
            </form>
             :<form className="d-flex"><button style={{color:'white'}} onClick={handleLogout} className="btn btn-warning">Logout</button>
              <Link style={{color:'white'}} className="btn btn-warning mx-3" to="/account" role="button">Account</Link></form>} 
            
          </div>
        </div>
      </nav>
      {/* <hr style={{color:'black', backgroundColor: 'black'}} /> */}
    </div>
  );
};
