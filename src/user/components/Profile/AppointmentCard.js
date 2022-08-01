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
          <p>03-06-2022</p>
          <p>AFTERNOON</p>
          <p>12:00 PM</p>
          <p>John Doe</p>
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
