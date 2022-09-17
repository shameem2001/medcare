<<<<<<< HEAD
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import img from "../../../../src/assets/profile.jpg";
import {Link} from 'react-router-dom';

export default function Psubcard({ name, status, phoneNumber, date, time }) {
=======
import React, { useEffect } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import imgDef from "../../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

export default function Psubcard({
  user_id,
  name,
  phone,
  img,
  appointment_id,
  date,
  time,
  session,
  status,
}) {
  const navigate = useNavigate();
>>>>>>> origin/pharmacy-final

  return (
    <div className="container shadow-sm PatientSubcard mt-3 mb-3">
      <div className="Status rb leftdiv">
<<<<<<< HEAD
        <h5>Long Discuss</h5>
=======
        <h5>{session}</h5>
>>>>>>> origin/pharmacy-final
        <h6>{status}</h6>
      </div>
      <div className="rightdiv">
        <div className="date-rightdiv ">
          <div>
            <BsCalendarDate color="cadetblue" /> {date}
          </div>
          <div>
            <BsClock color="cadetblue" /> {time}
          </div>
        </div>
        <div className="details-rightdiv">
<<<<<<< HEAD
          <img src={img} alt="sub" />
=======
          {img !== "" ? <img src={img} alt="" /> : <img src={imgDef} alt="" />}
>>>>>>> origin/pharmacy-final
          <div className="details-right-div-name">
            <div className="details-right-div-mob">
              <p>{name}</p>
              <h6>
<<<<<<< HEAD
                <i class="fa-solid fa-phone-volume"></i> {phoneNumber}
              </h6>
            </div>
            <div className="rightArrowButton">
              <button class="btn">
                <Link
                  className="psubcard-link"
                  to="/doctor/patient-details"
                  state={{
                    user_id: "62ead769d81d326e5183f431",
                    doctor_id: "62eb986b17a3b1c03f675658",
                    appointment_id: "62ee55c7b4cfff02cedaf020",
                  }}
                >
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
=======
                <i class="fa-solid fa-phone-volume"></i> {phone}
              </h6>
            </div>
            <div className="rightArrowButton">
              <button
                class="btn"
                onClick={() => {
                  navigate("/doctor/patient-details", {
                    state: {
                      user_id: user_id,
                      appointment_id: appointment_id,
                      date: date
                    },
                  });
                }}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
>>>>>>> origin/pharmacy-final
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
