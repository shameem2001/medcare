import React from "react";
import AppointmentCard from "../../components/Profile/AppointmentCard";
import DependantCard from "../../components/Profile/DependantCard";
import PrescriptionCard from "../../components/Profile/PrescriptionCard";
import './Profile.scss';

export default function Profile() {
  return (
    <div className="profile">
      {/* <div></div> */}
      <div className="profile-div-left">
        <div className="container shadow profile-card1">
          <div className="profile-card1-grid">
            <div className="profile-card1-circle-avatar"></div>
            <div className="profile-card1-top-right">
              <h3 className="profile-card1-name">John Doe</h3>
              <h6 className="profile-card1-dob">
                <span className="profile-card1-dob-helper">
                  Date of Birth:{" "}
                </span>
                16-04-1989
              </h6>
              <h6 className="profile-card1-gender">
                <span className="profile-card1-gender-helper">Gender: </span>
                Male
              </h6>
              <button className="btn profile-card1-edit-button">
                edit profile
              </button>
            </div>
          </div>
          <hr />
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">age: </span>24 yrs
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">occupation: </span>
            Software Engineer
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">email: </span>
            johndoe16@gmail.com
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">
              mobile number:{" "}
            </span>
            +91 9446422189
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">address: </span>
            Walker House, Taliparamba, Kannur, Kerala
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">blood group: </span>
            O+ve
          </h6>
        </div>
        <div className="container shadow dependents-card">
          <h5>Registered Dependants</h5>
          <hr className="dependants-card-hr" />
          <DependantCard />
          <button className="btn dependents-card-btn">Add Dependant</button>
        </div>
      </div>
      <div className="profile-div-right">
        <div className="container shadow profile-tabbar-container">
          <ul
            className="nav nav-pills mb-3 profile-tabbar"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                className="nav-link active profile-tabbar-tab"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link profile-tabbar-tab"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Appointments
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link profile-tabbar-tab"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                History
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div
            className="tab-content profile-tabbar-contents-container"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade show active profile-tabbar-content-all-tab"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="container shadow profile-tabbar-content-all-tab-overview-container">
                <h5>Overview</h5>
                <hr />
                <ul>
                  <li>Patient has eczema and asthma.</li>
                  <li>
                    Allergic to dust, red meat, cocoa, meat with exoskeletons.
                  </li>
                  <li>
                    Allergic reactions often seen as asthma or itchiness in B/L
                    orbit and legs.
                  </li>
                  <li>No other serious medical conditions.</li>
                </ul>
              </div>
              <div className="container shadow profile-tabbar-content-all-tab-appointments-container">
                <h5>Latest Appointment</h5>
                <hr />
                <AppointmentCard />
              </div>
              <div className="container shadow profile-tabbar-content-all-tab-history-container">
                <h5>History</h5>
                <hr />
                <div
                  id="accordion"
                  className="profile-tabbar-content-all-tab-history-accordion"
                >
                  <PrescriptionCard no={"1"} />
                  <PrescriptionCard no={"2"} />
                  <PrescriptionCard no={"3"} />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="container shadow profile-tabbar-content-all-tab-appointments-container">
                <h5 className="profile-tabbar-content-appointments-tab-container-h5">
                  Appointments
                </h5>
                <hr />
                <div className="profile-tabbar-content-appointments-tab-container">
                  <AppointmentCard />
                  <AppointmentCard />
                  <AppointmentCard />
                  <AppointmentCard />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="container shadow profile-tabbar-content-all-tab-history-container">
                <h5>History</h5>
                <hr />
                <div
                  id="accordion"
                  className="profile-tabbar-content-all-tab-history-accordion"
                >
                  <PrescriptionCard no={"1"} />
                  <PrescriptionCard no={"2"} />
                  <PrescriptionCard no={"3"} />
                  <PrescriptionCard no={"4"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
