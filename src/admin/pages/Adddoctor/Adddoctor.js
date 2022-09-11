import { React, useState } from "react";
import bcrypt from 'bcryptjs';
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import "./Adddoctor.scss";
import design from "../../../assets/Doctor.png";
import { TextField, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Add_Doctor() {
  const navigate = useNavigate();

  let [name, setname] = useState("");
  let [gender, setgender] = useState("");
  let [age, setage] = useState(0);
  let [email, setemail] = useState("");
  let [phoneNumber, setphonenumber] = useState("");
  let [dob, setdob] = useState("");
  let [password, setpassword] = useState("");
  let [exp, setexp] = useState("");
  let [hospital, sethospital] = useState("");
  let [address, setaddress] = useState("");
  let [district, setdistrict] = useState("");
  let [hosp_addr, sethosp_addr] = useState("");
  let [department, setdepartment] = useState("");

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
      await apis.post("doctor", {
        name: name,
        gender: gender,
        age: age,
        email: email,
        department: department,
        experience: exp,
        district: district,
        hospital: hospital,
        hospital_address: hosp_addr,
        phoneNumber: phoneNumber,
        dob: dob,
        password: password,
        address: address,
      });
      navigate("/admin/dashboard");
  };

  return (
    <div className="adddoctor-page">
      <div className="container shadow adddoctor-page-container">
        <div className="adddoctor-page-container-left">
          <img src={design} alt="somet" />
        </div>
        <div className="adddoctor-page-container-right">
          <h5>
            MED<span>CARE</span>
          </h5>
          <br />
          <div className="adddoctor-second-div">
            <TextField
              className="adddoctor-second-div-1"
              size="small"
              required
              label="Name"
              variant="outlined"
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              className="adddoctor-second-div-2"
              size="small"
              required
              label="Age"
              type="number"
              onChange={(e) => setage(e.target.value)}
            />
            <FormControl
              className="adddoctor-second-div-3"
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
            </FormControl>
          </div>
          <div className="adddoctor-first-div">
            <TextField
              size="small"
              className="adddoctor-first-div-1"
              required
              label="email-id"
              variant="outlined"
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              className="adddoctor-first-div-2"
              size="small"
              required
              label="Experience"
              type="number"
              onChange={(e) => setexp(e.target.value)}
            />
          </div>
          <div className="adddoctor-third-div">
            <TextField
              className="adddoctor-third-div-1"
              size="small"
              required
              type="date"
              onChange={(e) => setdob(e.target.value)}
            />
            <TextField
              className="adddoctor-third-div-2"
              required
              size="small"
              label="Hospital"
              type="text"
              onChange={(e) => sethospital(e.target.value)}
            />
            <FormControl
              className="adddoctor-third-div-3"
              required
              size="small"
            >
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
          <div className="adddoctor-fourth-div">
            <TextField
              className="adddoctor-fourth-div-1"
              size="small"
              required
              label="Address"
              multiline
              onChange={(e) => setaddress(e.target.value)}
            />
            <TextField
              className="adddoctor-forth-div-2"
              size="small"
              required
              label="Hospital address"
              type="text"
              multiline
              onChange={(e) => sethosp_addr(e.target.value)}
            />
          </div>
          <div className="adddoctor-fifth-div">
            <TextField
              className="adddoctor-fifth-div-1"
              size="small"
              label="Department"
              required
              type="text"
              onChange={(e) => setdepartment(e.target.value)}
            />
            <TextField
              className="adddoctor-fifth-div-2"
              size="small"
              type="text"
              required
              label="Phone number"
              onChange={(e) => setphonenumber(e.target.value)}
            />
          </div>
          <div className="adddoctor-sixth-div">
            <TextField
              className="adddoctor-sixth-div-1"
              size="small"
              required
              label="Password"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <TextField
              className="adddoctor-sixth-div-2"
              size="small"
              required
              label="Confirm Password"
              type="password"
              onChange={(e) => passwordHash(e.target.value)}
            />
          </div>
          <button className="btn adddoctor-button" onClick={submit}>
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}
