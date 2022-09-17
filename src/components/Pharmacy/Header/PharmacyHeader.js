import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./PharmacyHeader.scss";
import img from '../../../assets/pharmacy.jpg'

export default function PharmacyHeader() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("pharmacy_name");
    localStorage.removeItem("pharmacy_id");
    navigate("/pharmacy/login");
  };

  const pharmacy_name = localStorage.getItem("pharmacy_name");
//   const doc_img = localStorage.getItem("pharmacy_img");

  return (
    <div className="shadow-sm header-pharmacy">
      <div className="p1">
        MED<span className="p11">CARE</span>
      </div>
      <div className="p2">
        <div className="container shadow-sm pharmacy-header-profile">
            <img src={img} alt="dv" />

          <p>{pharmacy_name}</p>
        </div>
        <span onClick={logout}>
          <i className="fa-solid fa-power-off fa-lg"></i>
        </span>
      </div>
    </div>
  );
}
