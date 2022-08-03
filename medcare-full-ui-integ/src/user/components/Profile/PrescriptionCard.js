import React from "react";

export default function PrescriptionCard({ no }) {
  const newheading = "heading" + no;
  const newCollapse = "collapse" + no;
  return (
    <div className="container shadow-sm profile-prescription-card">
      <div
        className="card-header profile-prescription-card-head"
        id={newheading}
      >
        <div className="profile-prescription-card-head-left">
          <h6>DR.FEROZ B.K</h6>
          <p>Koyili Hospital</p>
          <p>Condition: Wet cough, Fever, Vomitting.</p>
        </div>
        <div className="profile-prescription-card-head-right">
          <h6>26-05-2022</h6>
          <h6>Sunday</h6>
          <button
            className="btn profile-description-card-button"
            data-bs-toggle="collapse"
            data-bs-target={`#${newCollapse}`}
            aria-expanded="false"
            aria-controls={newCollapse}
          >
            View more
          </button>
        </div>
      </div>
      <div
        id={newCollapse}
        className="collapse"
        aria-labelledby={newheading}
        data-parent="#accordion"
      >
        <div className="card-body profile-prescription-card-body">
          <div className="profile-prescription-card-body-sect-1">
            <div>
              <h6>Doctors notes</h6>
              <ul>
                <li>Patient has viral fever</li>
                <li>anaemic</li>
                <li>Chest infection</li>
                <li>Sinus infection</li>
                <li>Rest for 3 days will be needed</li>
              </ul>
            </div>
            <h6>Body Condition</h6>
            <div className="profile-prescription-card-body-sect-2">
              <div>
                <ul>
                  <li>Blood Pressure</li>
                  <li>Body temperature</li>
                  <li>Blood Oxygen Level</li>
                  <li>Blood Sugar Level</li>
                </ul>
              </div>
              <div>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div>
                <p>140/80 mmhg</p>
                <p>37.6 degrees</p>
                <p>97%</p>
                <p>140 mg/dL</p>
              </div>
            </div>
            <h6 className="profile-prescription-card-body-sect-3-header">
              Medicine Prescriptions
            </h6>
            <div className="profile-prescription-card-body-sect-3">
              <table className="table borderless">
                <thead>
                  <tr>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Dosage</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dolo 650g</td>
                    <td>1-1-1</td>
                    <td>5 days</td>
                  </tr>
                  <tr>
                    <td>Levotek-M</td>
                    <td>0-0-1</td>
                    <td>30 days</td>
                  </tr>
                  <tr>
                    <td>Rontac 15g</td>
                    <td>1-0-1</td>
                    <td>5 days</td>
                  </tr>
                  <tr>
                    <td>Azee 50g</td>
                    <td>1-0-1</td>
                    <td>5 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
