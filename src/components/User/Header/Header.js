import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const navigate = useNavigate();

  var showLogin = true;
  let userId;

  const isLoggedIn = ()=>{
    userId = localStorage.getItem("_id");
    console.log(userId);
    if (userId !== null) {
      console.log(userId);
      showLogin = false;
    } else {
      showLogin = true;
    }
  }
  isLoggedIn();

  const logout = () => {
    localStorage.removeItem("_id");
    showLogin = true;
    navigate("/login");
  }

  console.log("showLogin: "+ showLogin);

  return (
    <div className="shadow-sm navbar-new">
      <div className="navbar-left">
        <Link className="navbar-link" to="/">
          <h5>
            MED<span>CARE</span>
          </h5>
        </Link>
      </div>
      <div className="navbar-right">
        <Link className="navbar-right-link" to="/">
          <a href="d">Home</a>
        </Link>
        <Link className="navbar-right-link" to="/">
          <a href="#contact">Support</a>
        </Link>
        {showLogin === false ? (
          <Link
            className="navbar-right-link"
            to="/profile"
            state={{ user_id: userId }}
          >
            <a href="dh">Profile</a>
          </Link>
        ) : null}
        {showLogin === true ? (
          <Link className="navbar-right-link last" to="/login">
            <a href="d">Login</a>
          </Link>
        ) : (
          <span className="navbar-right-link last" onClick={logout}>
            <i className="fa-solid fa-power-off fa-lg"></i>
          </span>
        )}
      </div>
    </div>
  );
}
