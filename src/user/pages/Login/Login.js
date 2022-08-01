import React from "react";
import "./Login.scss";
import TextField from "@mui/material/TextField";
import imga from "../../../assets/elder.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-page">
      <div className=" container shadow login-page-container">
        <div className="login-page-container-left">
          <img src={imga} alt="somet" />
        </div>
        <div className="login-page-container-right">
          <h5>
            MED<span className="care">CARE</span>
          </h5>
          <TextField
            className="email"
            required
            label="email-id"
            variant="outlined"
          />
          <TextField
            className="password"
            required
            label="Password"
            type="password"
          />

          <Link to="/">
            <button className="btn login-button">LOGIN</button>
          </Link>
          <h6 className="loginnew">
            {" "}
            New User?
            <Link className="loginnew-link" to="/register">
              {" "}
              Sign Up
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
}
