import './Adddoctor.scss'
import design from "../../../assets/Doctor.png";
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {Link} from 'react-router-dom';

function Add_Doctor() {
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
              label="First-Name"
              variant="outlined"
            />
            <TextField
              className="adddoctor-second-div-2"
              size="small"
              label="Middle-Name"
              variant="outlined"
            />
            <TextField
              className="adddoctor-second-div-3"
              size="small"
              required
              label="Last-Name"
              variant="outlined"
            />
          </div>
          <div className="adddoctor-first-div">
            <TextField
              size="small"
              className="adddoctor-first-div-1"
              required
              label="email-id"
              variant="outlined"
            />
            <TextField
              className="adddoctor-first-div-2"
              size="small"
              required
              label="Doctor-id"
              type="tel"
            />
          </div>
          <div className="adddoctor-third-div">
            <TextField
              className="adddoctor-third-div-1"
              size="small"
              required
              type="date"
            />
            <TextField
              className="adddoctor-third-div-2"
              size="small"
              required
              label="Age"
              type="number"
            />

            <FormControl className="adddoctor-third-div-3" required size="small">
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
          <div className="adddoctor-fourth-div">
            <TextField
              className="adddoctor-fourth-div-2"
              size="small"
              required
              label="Address"
              multiline
              // value={value}
              // onChange={handleChange}
            />
            <FormControl className="adddoctor-fourth-div-1" required size="small">
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
              className="adddoctor-fourth-div-3"
              required
              size="small"
              label="Hospital"
              type="text"
            />
          </div>
          <div className="adddoctor-fifth-div">
            <TextField
              className="adddoctor-fifth-div-1"
              size="small"
              label="Department"
              required
              type="text"
              multiline
              // value={value}
              // onChange={handleChange}
            />
            <TextField
              className="adddoctor-fifth-div-2"
              size="small"
              type="text"
              multiline
              required
              label="Phone number"
              // value={value}
              // onChange={handleChange}
            />
          </div>
          <div className="adddoctor-sixth-div">
            <TextField
              className="adddoctor-sixth-div-1"
              size="small"
              required
              label="Password"
              type="password"
            />
            <TextField
              className="adddoctor-sixth-div-2"
              size="small"
              required
              label="Confirm Password"
              type="password"
            />
          </div>
          <Link to='/admin/dashboard'>
            <button className="btn adddoctor-button">REGISTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Add_Doctor;
