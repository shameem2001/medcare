import React from "react";
import DependantCard from "../components/Profile/DependantCard";

export default function Profile() {
  return (
    <div className="profile">
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
          <DependantCard />
          <button className="btn dependents-card-btn">Add Dependant</button>
        </div>
      </div>
      <div className="profile-div-right"></div>
    </div>
  );
}
