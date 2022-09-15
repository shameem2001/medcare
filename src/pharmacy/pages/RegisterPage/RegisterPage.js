import React from "react";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import "./RegisterPage.scss";
import design from "../../../assets/Doctor.png";
import { TextField, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function RegisterPage() {
  const navigate = useNavigate();
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [phoneNumber, setphonenumber] = useState("");
  let [password, setpassword] = useState("");
  let [hospital, sethospital] = useState("");
  let [district, setdistrict] = useState("");

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
      name: name,
      email: email,
      district: district,
      hospital: hospital,
      phoneNumber: phoneNumber,
      password: password,
    });
    // navigate("/admin/dashboard");
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
          <div className="pharmacy-second-div">
            <TextField
              className="pharmacy-second-div-1"
              size="small"
              required
              label="Name"
              variant="outlined"
              onChange={(e) => setname(e.target.value)}
            />
            {/* <TextField
              className="pharmacy-second-div-2"
              size="small"
              required
              label="Age"
              type="number"
              onChange={(e) => setage(e.target.value)}
            /> */}
            {/* <FormControl
              className="pharmacy-second-div-3"
              required
              size="small"
            >
              <InputLabel>Gender</InputLabel>

              <Select
                label="gender"
                onChange={(e) => setgender(e.target.value)}
              >
                <MenuItem
                  value="Male"
                  onChange={(e) => setgender(e.target.value)}
                >
                  Male
                </MenuItem>
                <MenuItem
                  value="Female"
                  onChange={(e) => setgender(e.target.value)}
                >
                  Female
                </MenuItem>
                <MenuItem
                  value="Other"
                  onChange={(e) => setgender(e.target.value)}
                >
                  Other
                </MenuItem>
              </Select>
            </FormControl> */}
          </div>
          <div className="pharmacy-first-div">
            <TextField
              size="small"
              className="pharmacy-first-div-1"
              required
              label="email-id"
              variant="outlined"
              onChange={(e) => setemail(e.target.value)}
            />
            {/* <TextField
              className="pharmacy-first-div-2"
              size="small"
              required
              label="Experience"
              type="number"
              onChange={(e) => setexp(e.target.value)}
            /> */}
          </div>
          <div className="pharmacy-third-div">
            {/* <TextField
              className="pharmacy-third-div-1"
              size="small"
              required
              type="date"
              onChange={(e) => setdob(e.target.value)}
            /> */}
            <TextField
              className="pharmacy-third-div-2"
              required
              size="small"
              label="Hospital"
              type="text"
              onChange={(e) => sethospital(e.target.value)}
            />
            <FormControl className="pharmacy-third-div-3" required size="small">
              <InputLabel>District</InputLabel>
              <Select
                label="District"
                onChange={(e) => setdistrict(e.target.value)}
              >
                <MenuItem
                  value="Kannur"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Kannur
                </MenuItem>
                <MenuItem
                  value="Kasargod"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Kasaragod
                </MenuItem>
                <MenuItem
                  value="Kozhikode"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Kozhikode
                </MenuItem>
                <MenuItem
                  value="Wayanad"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Wayanad
                </MenuItem>
                <MenuItem
                  value="Malappuram"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Malappuram
                </MenuItem>
                <MenuItem
                  value="Palakkad"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Palakkad
                </MenuItem>
                <MenuItem
                  value="Thrissur"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Thrissur
                </MenuItem>
                <MenuItem
                  value="Ernakulam"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Ernakulam
                </MenuItem>
                <MenuItem
                  value="Alappuzha"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Alappuzha
                </MenuItem>
                <MenuItem
                  value="Kottayam"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Kottayam
                </MenuItem>
                <MenuItem
                  value="Pattanamthitta"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Pattanamthitta
                </MenuItem>
                <MenuItem
                  value="Idukki"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Idukki
                </MenuItem>
                <MenuItem
                  value="Kollam"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Kollam
                </MenuItem>
                <MenuItem
                  value="Thiruvananthapuram"
                  onChange={(e) => setdistrict(e.target.value)}
                >
                  Thiruvananthapuram
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="pharmacy-fourth-div">
            {/* <TextField
              className="pharmacy-fourth-div-1"
              size="small"
              required
              label="Address"
              multiline
              onChange={(e) => setaddress(e.target.value)}
            />
            <TextField
              className="pharmacy-forth-div-2"
              size="small"
              required
              label="Hospital address"
              type="text"
              multiline
              onChange={(e) => sethosp_addr(e.target.value)}
            /> */}
          </div>
          <div className="pharmacy-fifth-div">
            {/* <TextField
              className="pharmacy-fifth-div-1"
              size="small"
              label="Department"
              required
              type="text"
              onChange={(e) => setdepartment(e.target.value)}
            /> */}
            <TextField
              className="pharmacy-fifth-div-2"
              size="small"
              type="text"
              required
              label="Phone number"
              onChange={(e) => setphonenumber(e.target.value)}
            />
          </div>
          <div className="pharmacy-sixth-div">
            <TextField
              className="pharmacy-sixth-div-1"
              size="small"
              required
              label="Password"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <TextField
              className="pharmacy-sixth-div-2"
              size="small"
              required
              label="Confirm Password"
              type="password"
              onChange={(e) => passwordHash(e.target.value)}
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
