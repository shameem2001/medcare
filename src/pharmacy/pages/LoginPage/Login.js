import imga from "../../../assets/pharmacy.jpg";
import TextField from "@mui/material/TextField";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import { React, useEffect, useState } from "react";
import bcrypt from 'bcryptjs';

function Doctorlogin() {
  const navigate = useNavigate();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let submit = () => {
    apis
      .get("pharmacy")
      .then((data) => {
        const same_email = data.data.filter((user) => {
          return email === user.email;
        })[0];

        console.log(same_email);
        if (same_email !== undefined) {
          bcrypt.compare(password, same_email.password, (err, res) => {
            if (res === true) {
              console.log("Logged in");
              localStorage.setItem("pharmacy_id", same_email._id);
              console.log(same_email.hospital_name);
              localStorage.setItem("pharmacy_name", same_email.hospital_name);
              localStorage.setItem("pharmacy_img", same_email.img);
              navigate("/pharmacy/");
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
    <div className="doctor-login-page">
      <div className=" container shadow doctor-login-page-container">
        <div className="doctor-login-page-container-left">
          <img src={imga} alt="somet" />
        </div>
        <div className="doctor-login-page-container-right">
          <h5>
            MED<span>CARE</span>
          </h5>
          <TextField
            className="doctor-email"
            required
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <TextField
            className="doctor-password"
            required
            label="Password"
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button className="btn doctor-login-button" onClick={submit}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Doctorlogin;
