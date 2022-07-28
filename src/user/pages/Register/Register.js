import React from "react";
import "./Register.scss";
import design from "../../../assets/elder.jpg";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {Link} from 'react-router-dom';

export default function Register() {
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
              size="small"
              className="first-div-1"
              required
              label="email-id"
              variant="outlined"
            />
            <TextField
              className="first-div-2"
              size="small"
              required
              label="Phone number"
              type="tel"
            />
          </div>

          <div className="second-div">
            <TextField
              className="second-div-1"
              size="small"
              required
              label="First-Name"
              variant="outlined"
            />
            <TextField
              className="second-div-2"
              size="small"
              label="Middle-Name"
              variant="outlined"
            />
            <TextField
              className="second-div-3"
              size="small"
              required
              label="Last-Name"
              variant="outlined"
            />
          </div>
          <div className="third-div">
            <TextField
              className="third-div-1"
              size="small"
              required
              type="date"
            />
            <TextField
              className="third-div-2"
              size="small"
              required
              label="Age"
              type="number"
            />

            <FormControl className="third-div-3" required size="small">
              <InputLabel>Gender</InputLabel>

              <Select
                //value={age}
                label="gender"
                //onChange={handleChange}
              >
                <MenuItem>Male</MenuItem>
                <MenuItem>Female</MenuItem>
                <MenuItem>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="fourth-div">
            <TextField
              className="fourth-div-2"
              size="small"
              required
              label="Address"
              multiline
              // value={value}
              // onChange={handleChange}
            />
            <FormControl className="fourth-div-1" required size="small">
              <InputLabel>District</InputLabel>
              <Select
                label="District"
                //value={age}

                //onChange={handleChange}
              >
                <MenuItem>Kasaragod</MenuItem>
                <MenuItem>Kannur</MenuItem>
                <MenuItem>Kozhikode</MenuItem>
                <MenuItem>Wayanad</MenuItem>
                <MenuItem>Malappuram</MenuItem>
                <MenuItem>Palakkad</MenuItem>
                <MenuItem>Thrissur</MenuItem>
                <MenuItem>Ernakulam</MenuItem>
                <MenuItem>Alappuzha</MenuItem>
                <MenuItem>Kottayam</MenuItem>
                <MenuItem>Pattanamthitta</MenuItem>
                <MenuItem>Idukki</MenuItem>
                <MenuItem>Kollam</MenuItem>
                <MenuItem>Thiruvananthapuram</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className="fourth-div-3"
              required
              size="small"
              label="Occupation"
              type="text"
            />
          </div>
          <div className="fifth-div">
            <TextField
              className="fifth-div-1"
              size="small"
              label="Previously consulted doctors"
              type="text"
              multiline
              // value={value}
              // onChange={handleChange}
            />
            <TextField
              className="fifth-div-2"
              size="small"
              type="text"
              multiline
              label="Mentionable medical conditions"
              // value={value}
              // onChange={handleChange}
            />
          </div>
          <div className="sixth-div">
            <TextField
              className="sixth-div-1"
              size="small"
              required
              label="Password"
              type="password"
            />
            <TextField
              className="sixth-div-2"
              size="small"
              required
              label="Confirm Password"
              type="password"
            />
          </div>
          <Link to='/'>
            <button className="btn signup-button">REGISTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
