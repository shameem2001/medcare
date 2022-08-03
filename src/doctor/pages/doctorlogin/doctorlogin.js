
import imga from "../../../assets/Doctor.png";
import TextField from '@mui/material/TextField';
import './doctorlogin.scss';
import { Link } from "react-router-dom";

function Doctorlogin() {
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
          />
          <TextField
            className="doctor-password"
            required
            label="Password"
            type="password"
          />

          <Link to="/doctor/">
            <button className="btn doctor-login-button">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Doctorlogin;
