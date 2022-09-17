<<<<<<< HEAD
import React from 'react'

export default function AppointmentCard() {
  return (
    <div className="container shadow-sm profile-tabbar-content-all-tab-appointment-card">
      <div className="profile-tabbar-content-all-tab-appointment-card-sect-1">
        <h6>ASTER MIMS, KANNUR</h6>
        <p>Chala East, Kannur, 670003, Kerala, India, 9446422189</p>
      </div>

      <div className="profile-tabbar-content-all-tab-appointment-card-sect-2">
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-2-pic"></div>
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-2-data">
          <h6>DR. RADHIKA</h6>
          <p>DERMATOLOGY</p>
=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apis from "../../../apis";

export default function AppointmentCard({
  uName,
  _id,
  use_id,
  doctor_id,
  date,
  session,
  time,
  status,
}) {

    const navigate = useNavigate();

    let [doctorData, setDoctorData] = useState({});

    const getDoctorDetails = async () => {
      let results;
      await apis.get(`doctor/${doctor_id}`).then((data) => {
        results = data.data;
      });

      if (results !== null) {
        setDoctorData(results);
      }
    };


     const cancelAppointment = async () => {
       await apis
         .delete(`appointment/${_id}`)
         .then((res) => {
          navigate("/profile", {
            state: {
              user_id: localStorage.getItem("_id"),
            },
          });
          console.log(res)})
         .catch((e) => console.log(e));
     };

    useEffect(() => {
      getDoctorDetails();
    });

  return (
    <div className="container shadow-sm profile-tabbar-content-all-tab-appointment-card">
      <div className="profile-tabbar-content-all-tab-appointment-card-sect-1">
        <h6>{doctorData.hospital}</h6>
        <p>{doctorData.hospital_address}</p>
      </div>

      <div className="profile-tabbar-content-all-tab-appointment-card-sect-2">
        <img src={doctorData.img} alt="" className="profile-tabbar-content-all-tab-appointment-card-sect-2-pic"></img>
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-2-data">
          <h6>{doctorData.name}</h6>
          <p>{doctorData.department}</p>
>>>>>>> origin/pharmacy-final
        </div>
      </div>
      <div className="profile-tabbar-content-all-tab-appointment-card-sect-3">
        <div>
          <p>Appointment Date</p>
          <p>Session</p>
          <p>Time</p>
          <p>Booking for</p>
          <p>Appointment Ref Id</p>
        </div>
        <div>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-3-right">
<<<<<<< HEAD
          <p>03-06-2022</p>
          <p>AFTERNOON</p>
          <p>12:00 PM</p>
          <p>John Doe</p>
=======
          <p>{date}</p>
          <p>{session}</p>
          <p>{time}</p>
          <p>{uName}</p>
>>>>>>> origin/pharmacy-final
          <p>MD-139646</p>
        </div>
      </div>
      <div className="profile-tabbar-content-all-tab-appointment-card-sect-4">
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-4-left">
          <p>Confirmed</p>
        </div>
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-4-right">
<<<<<<< HEAD
          <p>CANCEL</p>
=======
          <p onClick={cancelAppointment}>CANCEL</p>
>>>>>>> origin/pharmacy-final
          <p>VIEW</p>
        </div>
      </div>
    </div>
  );
}
