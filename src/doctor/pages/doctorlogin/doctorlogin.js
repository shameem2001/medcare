import imga from "../../../assets/Doctor.png";
import TextField from "@mui/material/TextField";
import "./doctorlogin.scss";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import { React, useEffect, useState } from "react";
import bcrypt from 'bcryptjs';

function Doctorlogin() {
  const navigate = useNavigate();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

<<<<<<< HEAD
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
          localStorage.setItem("doctor_name", data.name);
          localStorage.setItem("doctor_img", data.img);
          navigate("/doctor/");
        }
      });
      if (match === false) {
        console.log("invalid credentials");
      }
    });
  };
=======
  let submit = () => {
    apis
      .get("doctor")
      .then((data) => {
        const same_email = data.data.filter((user) => {
          return email === user.email;
        })[0];

        console.log(same_email);
        if (same_email !== undefined) {
          bcrypt.compare(password, same_email.password, (err, res) => {
            if (res === true) {
              console.log("Logged in");
              localStorage.setItem("doctor_id", same_email._id);
              localStorage.setItem("doctor_name", same_email.name);
              localStorage.setItem("doctor_img", same_email.img);
              localStorage.setItem("hospital_name", same_email.hospital);
              navigate("/doctor/");
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


>>>>>>> origin/pharmacy-final
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
