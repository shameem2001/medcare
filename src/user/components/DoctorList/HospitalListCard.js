import React from 'react'
import {Link} from 'react-router-dom';

export default function HospitalCard({img, name, address, departments, doctors}) {
  return (
    <div className="container shadow Hospital-card">
      <div className="left-side">
        <div className="container img-container"></div>
        <div className="title-address">
          <h6>{name}</h6>
          <p>{address}</p>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-top">
          <p className="departments">
            <span className="department-no">{departments}</span> departments
          </p>
          <p className="doctors">
            <span className="doctor-no">{doctors}</span> doctors
          </p>
        </div>
        <Link className="search-appointment-button-link" to="/doctor-details">
          <button className="btn btn-large search-appointment-button">
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
}
