import React from "react";

export default function Prescribtion_card({ no }) {
  const newheading = "heading" + no;
  const newCollapse = "collapse" + no;
  return (
    <div className="container shadow-sm profile-prescription-card">
      <div
        className="card-header profile-prescription-card-head"
        id={newheading}
      >
        <div className="profile-prescription-card-head-left">
          <h6>DR. RITHURAJ KV</h6>
          <p>Skin specialist</p>
        </div>
        <div className="profile-prescription-card-head-right">
          <h6>26-05-2022</h6>
          <h6>Wednesday</h6>
          <button
            className="btn profile-description-card-button"
            data-bs-toggle="collapse"
            data-bs-target={`#${newCollapse}`}
            aria-expanded="false"
            aria-controls={newCollapse}
          >
            expand
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
              <h6>Observation</h6>
              <ul>
                <li>Mild case of acne on face</li>
                <li>Severe reaction to skin care products with lactic acid content</li>
                <li>Rash formation on elbows and knees</li>
                <li>Dark circles</li>
                <li>Deficiency of macro nutrients in diet</li>
              </ul>
            </div>
            <h6 className="profile-prescription-card-body-sect-3-header">
              Prescriptions
            </h6>
            <div className="profile-prescription-card-body-sect-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Dosage</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dapsone</td>
                    <td>1-0-1</td>
                    <td>2 weeks</td>
                  </tr>
                  <tr>
                    <td>hydrocortisone cream</td>
                    <td>1-1-1</td>
                    <td>30 days</td>
                  </tr>
                  <tr>
                    <td>RoC Retinol Correxion Eye Cream</td>
                    <td>1-0-1</td>
                    <td>7 days</td>
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
