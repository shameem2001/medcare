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

  return (
    <div className="container shadow-sm PatientSubcard mt-3 mb-3">
      <div className="Status rb leftdiv">
        <h5>{session}</h5>
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
          {img !== "" ? <img src={img} alt="" /> : <img src={imgDef} alt="" />}
          <div className="details-right-div-name">
            <div className="details-right-div-mob">
              <p>{name}</p>
              <h6>
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
