import React from "react";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import "./AddPharmacy.scss";
import design from "../../../assets/pharmacy.jpg";
import { TextField, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function RegisterPage() {
  const navigate = useNavigate();
  let [hospital_name, setHospital_name] = useState("");
  let [email, setemail] = useState("");
  let [phoneNumber, setphonenumber] = useState("");
  let [district, setdistrict] = useState("Kannur");
  let [city, setCity] = useState("");
  let [password, setpassword] = useState("");


  let passwordHash = async (conpassword) => {
    if (password === conpassword) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hashedPassword) {
          setpassword(hashedPassword);
        });
      });
    } else {
      console.log("Password not same");
    }
  };
  let submit = async (e) => {
    console.log("submitted");
    await apis.post("pharmacy", {
      hospital_name: hospital_name,
      email: email,
      phoneNumber: phoneNumber,
      district: district,
      city: city,
      password: password,
    });
    navigate("/pharmacy/login");
  };

  return (
    <div className="pharmacy-page">
      <div className="container shadow pharmacy-page-container">
        <div className="pharmacy-page-container-left">
          <img src={design} alt="somet" />
        </div>
        <div className="pharmacy-page-container-right">
          <h5>
            MED<span>CARE</span>
          </h5>
          <br />
          <div className="pharmacy-div-1">
            <input
              type="text"
              placeholder="Enter Pharmacy"
              className="pharmacy-div-child-1"
              onChange={(e) => {
                setHospital_name(e.target.value);
              }}
            />
            <input
              className="pharmacy-div-child-1"
              type="text"
              placeholder="Enter email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="pharmacy-div-2">
            <input
              className="pharmacy-div-child-2"
              type="text"
              placeholder="Enter Phone"
              onChange={(e) => {
                setphonenumber(e.target.value);
              }}
            />
            <select
              className="pharmacy-div-child-2"
              type="text"
              placeholder="Enter District"
              defaultValue="Kannur"
              value={district}
              onChange={(e) => {
                setdistrict(e.target.value);
              }}
              style={{padding:"5px"}}
            >
              <option value="Kannur">Kannur</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Wayanad">Wayanad</option>
              <option value="Malappuram">Malappuram</option>
            </select>
            <input
              className="pharmacy-div-child-2"
              type="text"
              placeholder="Enter City"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="pharmacy-div-3">
            <input
              className="pharmacy-div-child-3"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              className="pharmacy-div-child-3"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                passwordHash(e.target.value);
              }}
            />
          </div>
          <button className="btn pharmacy-button" onClick={submit}>
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}
