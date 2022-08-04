import { React, useState } from "react";
import "./Login.scss";
import axios from "axios";
import TextField from "@mui/material/TextField";
import imga from "../../../assets/elder.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let submit = async () => {
    let results;
    await axios
      .get("http://localhost:5000/api/user-details")
      .then((data) => {results = data.data})
      .catch((err) => console.log(err));
    
    let doesMatch = results.filter((data)=>{
      return data.email === email && data.password === password;
    });

    if(doesMatch.length === 0){
      console.log("Incorrect credentials")
    }
    else{
      navigate("/");
    }
  };

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
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <TextField
            className="password"
            required
            label="Password"
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button className="btn login-button" onClick={submit}>
            LOGIN
          </button>
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
