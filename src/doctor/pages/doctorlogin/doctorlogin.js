
import imga from "../../../assets/Doctor.png";
import TextField from '@mui/material/TextField';
import './doctorlogin.scss';
import { Link } from "react-router-dom";

function Doctorlogin() {
  return (
    <div className="login-page">
      <div className=" container shadow login-page-container">
        <div className="login-page-container-left">
          <img src={imga} alt="somet" />
        </div>
        <div className="login-page-container-right">
          <h5>
            MED<span className="care">CARE</span>
          </h5>
          <TextField
            className="email"
            required
            label="Doctor-id"
            variant="outlined"
          />
          <TextField
            className="password"
            required
            label="Password"
            type="password"
          />

          <Link to="/">
            <button className="btn login-button">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Doctorlogin;
