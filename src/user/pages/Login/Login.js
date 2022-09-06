import { React, useState } from "react";
import bcrypt from 'bcryptjs';
import "./Login.scss";
import apis from "../../../apis";
import TextField from "@mui/material/TextField";
import imga from "../../../assets/elder.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let submit = async () => {
    let results;
    await apis
      .get("user")
      .then((data) => {results = data.data})
      .catch((err) => console.log(err));

    let match = false;
    results.map((data)=>{
      bcrypt.compare(password, data.password, (err, res) => {
        console.log(res);
        if(res === true && email === data.email){
          match = true;
          localStorage.setItem("_id", data._id);
          localStorage.setItem("user_name", data.name);
          localStorage.setItem("user_img", data.img);
          console.log(data.img+"log");
          navigate("/");
        }
      });
    if(match === false){
      console.log("invalid credentials");
    }
    });

    
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
