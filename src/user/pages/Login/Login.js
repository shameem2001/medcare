import { React, useState } from "react";
import bcrypt from "bcryptjs";
import "./Login.scss";
import apis from "../../../apis";
import TextField from "@mui/material/TextField";
import imga from "../../../assets/elder.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let submit = () => {
    apis
      .get("user")
      .then((data) => {
        const same_email = data.data.filter((user) => {
          return email === user.email;
        })[0];

        console.log(same_email);
        if (same_email !== undefined) {
          bcrypt.compare(password, same_email.password, (err, res) => {
            if (res === true) {
              console.log("Logged in");
              localStorage.setItem("_id", same_email._id);
              localStorage.setItem("user_name", same_email.name);
              localStorage.setItem("user_img", same_email.img);
              localStorage.setItem("_mail", same_email.email);
              navigate("/");
            } else {
              alert("Incorrect Password!!");
            }
          });
        } else {
          alert("Email doesn't exists!!");
        }
      })
      .catch((err) => console.log(err));
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
          <div className="navigateToDocPharm">
            <button
              className="btn"
              onClick={() => {
                navigate("/doctor/login");
              }}
            >
              Login as a Doctor
            </button>
            <button
              className="btn"
              onClick={() => {
                navigate("/pharmacy/login");
              }}
            >
              Login as a Pharmacist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
