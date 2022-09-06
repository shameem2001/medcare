import React from 'react'
import {Link} from 'react-router-dom';

export default function doctor_card({id, img, name, department, experience, hospital}) {
  return (
    <div className="container shadow doctor-card">
      <div className="doctor-card-circle-avatar"></div>
      <h5 className="doctor-card-name">Dr.{name}</h5>
      <p className="doctor-card-dept">{department}</p>
      <p className="doctor-card-exp">{experience} years experience</p>
      <h6 className="doctor-card-hospital-name">{hospital}</h6>
      <button className="btn btn-large doctor-card-view-profile-button">
        <Link className="doctor-card-view-profile-button-link" to="/doctor-window"
        state={{doctor_id: id}}>
          Book now
        </Link>
      </button>
    </div>
  );
}

