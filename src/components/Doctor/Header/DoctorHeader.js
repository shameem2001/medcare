import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./DoctorHeader.scss";
import img from '../../../assets/profile.jpg'

export default function DoctorHeader() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("doctor_name");
    localStorage.removeItem("doctor_id");
    navigate("/doctor/login");
  };

  const doc_name = localStorage.getItem("doctor_name");
  const doc_img = localStorage.getItem("doctor_img");

  return (
    <div className="shadow-sm header">
      <div className="c1" onClick={()=>{navigate("/doctor/")}}>
        MED<span className="c11">CARE</span>
      </div>
      <div className="c2">
        <div className="container shadow-sm doctor-header-profile" onClick={()=>{navigate("/doctor/profile")}}>
          {doc_img === null || doc_img === "undefined" ? (
            <img src={img} alt="dv" />
          ) : (
            <img src={doc_img} alt="dv" />
          )}
          <p>{doc_name}</p>
        </div>
        <span onClick={logout}>
          <i className="fa-solid fa-power-off fa-lg"></i>
        </span>
      </div>
    </div>
  );
}
