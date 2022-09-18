import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./PharmacyHeader.scss";
import img from '../../../assets/pharmacy.jpg'

export default function PharmacyHeader() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("pharmacy_name");
    localStorage.removeItem("pharmacy_id");
    localStorage.removeItem("pharmacy_img");
    navigate("/pharmacy/login");
  };

  const pharmacy_name = localStorage.getItem("pharmacy_name");
  console.log(pharmacy_name);
  const pharmacy_img = localStorage.getItem("pharmacy_img");

  return (
    <div className="shadow-sm header-pharmacy">
      <div className="p1" onClick={()=>{navigate("/pharmacy/")}}>
        MED<span className="p11">CARE</span>
      </div>
      <div className="p2">
        <div
          className="container shadow-sm pharmacy-header-profile"
          onClick={() => {
            navigate("/pharmacy/profile");
          }}
        >
          {pharmacy_img == null ? (
            <img src={img} alt="" />
          ) : (
            <img src={pharmacy_img} alt="" />
          )}

          <p>{pharmacy_name}</p>
        </div>
        <span onClick={logout}>
          <i className="fa-solid fa-power-off fa-lg"></i>
        </span>
      </div>
    </div>
  );
}
