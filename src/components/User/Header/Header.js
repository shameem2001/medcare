import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './Header.scss';
import imgas from "../../../assets/profile.jpg";

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
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_img");
    localStorage.removeItem("_mail");
    showLogin = true;
    navigate("/login");
  }

  console.log("showLogin: "+ showLogin);
  const username = localStorage.getItem("user_name");
  const user_img = localStorage.getItem("user_img");
  console.log("df"+user_img);

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
            <div className="container doctor-header-profile">
              {user_img === "undefined" || user_img === null? (
                <img src={imgas} alt="" />
              ) : (
                <img src={user_img} alt="" />
              )}
              <p>{username}</p>
            </div>
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
