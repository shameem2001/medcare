import imga from "../../../assets/Doctor.png";
import TextField from "@mui/material/TextField";
import "./doctorlogin.scss";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import { React, useState } from "react";
import bcrypt from 'bcryptjs';

function Doctorlogin() {
  const navigate = useNavigate();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let submit = async () => {
    let results;
    await apis
      .get("doctor")
      .then((data) => {
        results = data.data;
      })
      .catch((err) => console.log(err));

    let match = false;
    results.map((data) => {
      bcrypt.compare(password, data.password, (err, res) => {
        console.log(res);
        if (res === true && email === data.email) {
          match = true;
          localStorage.setItem("doctor_id", data._id);
          navigate("/doctor/");
        }
      });
      if (match === false) {
        console.log("invalid credentials");
      }
    });
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
            label="Doctor-id"
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
