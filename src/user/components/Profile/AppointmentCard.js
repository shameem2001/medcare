import React, { useState, useEffect } from 'react';
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

    let defDoc = [
      {
        name: "Dr.Feroz BK",
        hospital: "Sreechand Hospital",
        department: "Consulting Physician",
        experience: 3,
        district: "Kannur",
        hospital: "ASTER MIMS, KANNUR",
        hospital_address:
          "Chala East, Kannur, 670003, Kerala, India, 9446422189",
        email: "ferozbk@gmail.com",
      },
    ];

    let [doctorData, setDoctorData] = useState(defDoc);

    const getDoctorDetails = async () => {
      let results;
      await apis.get(`doctor/${doctor_id}`).then((data) => {
        results = data.data;
      });

      if (results !== null) {
        setDoctorData(results);
      }
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
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-2-pic"></div>
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-2-data">
          <h6>{doctorData.name}</h6>
          <p>{doctorData.department}</p>
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
          <p>{date}</p>
          <p>{session}</p>
          <p>{time}</p>
          <p>{uName}</p>
          <p>MD-139646</p>
        </div>
      </div>
      <div className="profile-tabbar-content-all-tab-appointment-card-sect-4">
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-4-left">
          <p>Confirmed</p>
        </div>
        <div className="profile-tabbar-content-all-tab-appointment-card-sect-4-right">
          <p>CANCEL</p>
          <p>VIEW</p>
        </div>
      </div>
    </div>
  );
}
