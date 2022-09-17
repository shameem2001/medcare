import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FixedHeader.scss";
import imgas from "../../../assets/profile.jpg";

export default function Header() {
  const navigate = useNavigate();

  var showLogin = true;
  let userId;

  const isLoggedIn = () => {
    userId = localStorage.getItem("_id");
    console.log(userId);
    if (userId !== null) {
      console.log(userId);
      showLogin = false;
    } else {
      showLogin = true;
    }
  };
  isLoggedIn();

  const logout = () => {
    localStorage.removeItem("_id");
    showLogin = true;
    navigate("/login");
  };

  console.log("showLogin: " + showLogin);
  const username = localStorage.getItem("user_name");
  const user_img = localStorage.getItem("user_img");
  console.log("df" + user_img);

  return (
    <div className="shadow-sm navbar-new1">
      <div className="navbar-left1">
        <Link className="navbar-link1" to="/">
          <h5>
            MED<span>CARE</span>
          </h5>
        </Link>
      </div>
      <div className="navbar-right1">
        <Link className="navbar-right-link1" to="/">
          <a href="d">Home</a>
        </Link>
        <Link className="navbar-right-link1" to="/">
          <a href="#contact">Support</a>
        </Link>
        {showLogin === false ? (
          <Link
            className="navbar-right-link1"
            to="/profile"
            state={{ user_id: userId }}
          >
            <div className="container doctor-header-profile1">
              {user_img === "undefined" || user_img === null ? (
                <img src={imgas} alt="" />
              ) : (
                <img src={user_img} alt="" />
              )}
              <p>{username}</p>
            </div>
          </Link>
        ) : null}
        {showLogin === true ? (
          <Link className="navbar-right-link1 last1" to="/login">
            <a href="d">Login</a>
          </Link>
        ) : (
          <span className="navbar-right-link1 last1" onClick={logout}>
            <i className="fa-solid fa-power-off fa-lg"></i>
          </span>
        )}
      </div>
    </div>
  );
}
