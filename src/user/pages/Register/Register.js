import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.scss";
import design from "../../../assets/elder.jpg";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function Register() {
  const navigate = useNavigate();

  let [name, setname] = useState("");
  let [gender, setgender] = useState("");
  let [age, setage] = useState(0);
  let [email, setemail] = useState("");
  let [phoneNumber, setphonenumber] = useState("");
  let [dob, setdob] = useState("");
  let [password, setpassword] = useState("");
  let [cpassword, setcpassword] = useState("");
  let [prev_docs, setprev_docs] = useState("");
  let [prev_cond, setprev_cond] = useState("");
  let [address, setaddress] = useState("");

  let submit = async (e) => {
    if (password === cpassword) {
      console.log("submitted");
      await axios.post("http://localhost:5000/api/add-user", {
        name: name,
        gender: gender,
        age: age,
        email: email,
        phoneNumber: phoneNumber,
        dob: dob,
        password: password,
        prev_docs: prev_docs,
        prev_cond: prev_cond,
        address: address,
      });
      navigate("/login");
    }
    else{
      console.log("Password not same");
    }
  };

  return (
    <div className="signup-page">
      <div className="container shadow signup-page-container">
        <div className="signup-page-container-left">
          <img src={design} alt="somet" />
        </div>
        <div className="signup-page-container-right">
          <h5>
            MED<span>CARE</span>
          </h5>
          <br />
          <div className="first-div">
            <TextField
              className="first-div-1"
              size="small"
              required
              label="Name"
              variant="outlined"
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              className="first-div-2"
              size="small"
              required
              label="Age"
              type="number"
              onChange={(e) => setage(e.target.value)}
            />

            <FormControl className="first-div-3" required size="small">
              <InputLabel>Gender</InputLabel>

              <Select
                //value={age}
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
                  value="Others"
                  onChange={(e) => setgender(e.target.value)}
                >
                  Other
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="second-div">
            <TextField
              size="small"
              className="second-div-1"
              required
              label="email-id"
              variant="outlined"
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              className="second-div-2"
              size="small"
              required
              label="Mobile no"
              type="tel"
              onChange={(e) => setphonenumber(e.target.value)}
            />
            <TextField
              className="second-div-3"
              size="small"
              required
              type="date"
              onChange={(e) => {setdob(e.target.value)}}
            />
          </div>
          <div className="third-div">
            <Textarea
              className="third-div-1"
              required
              label="Address"
              multiline
              // value={value}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div className="fourth-div">
            <TextField
              className="fourth-div-1"
              label="Previously consulted doctors"
              type="text"
              multiline
              // value={value}
              onChange={(e) => setprev_docs(e.target.value)}
            />
            <TextField
              className="fourth-div-2"
              type="text"
              multiline
              label="Mentionable medical conditions"
              // value={value}
              onChange={(e) => setprev_cond(e.target.value)}
            />
          </div>
          <div className="fifth-div">
            <TextField
              className="fifth-div-1"
              size="small"
              required
              label="Password"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <TextField
              className="fifth-div-2"
              size="small"
              required
              label="Confirm Password"
              type="password"
              onChange={(e) => setcpassword(e.target.value)}
            />
          </div>
          <button className="btn signup-button" onClick={submit}>
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}
