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

  let submit = async () => {
    let results;
    await apis
      .get("pharmacy")
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
          localStorage.setItem("pharmacy_id", data._id);
          localStorage.setItem("hos_name", data.
          hospital_name);
          navigate("/pharmacy/dashboard",{state:{pharmacyId:data._id}});
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
