import React from "react";
<<<<<<< HEAD

export default function Prescribtion_card({ no }) {
  const newheading = "heading" + no;
  const newCollapse = "collapse" + no;
=======
import { useEffect } from "react";
import { useState } from "react";
import apis from "../../../apis";

export default function Prescribtion_card({
  _id,
  use_id,
  doc_id,
  date,
  blood_pressure,
  body_temperature,
  blood_oxygen,
  blood_sugar,
  observation,
  prescription,
}) {
  let observationList = observation.split("\n");
  let prescriptionList = prescription.split("\n");

  let [doctorData, setDoctorData] = useState({
    name: "Dr.Feroz BK",
    hospital: "Sreechand Hospital",
    department: "Consulting Physician",
    experience: 3,
    district: "Kannur",
    email: "ferozbk@gmail.com",
  });

  let [hintText, setHintText] = useState("View more");

  useEffect(() => {
    getDoctorDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDoctorDetails = async () => {
    let results;
    await apis.get(`doctor/${doc_id}`).then((data) => {
      results = data.data;
    });

    if (results !== null) {
      setDoctorData(results);
    }
  };

  const newheading = "heading" + _id;
  const newCollapse = "collapse" + _id;

>>>>>>> origin/pharmacy-final
  return (
    <div className="container shadow-sm profile-prescription-card">
      <div
        className="card-header profile-prescription-card-head"
        id={newheading}
      >
        <div className="profile-prescription-card-head-left">
<<<<<<< HEAD
          <h6>DR. RITHURAJ KV</h6>
          <p>Skin specialist</p>
        </div>
        <div className="profile-prescription-card-head-right">
          <h6>26-05-2022</h6>
          <h6>Wednesday</h6>
=======
          <h6>{doctorData.name}</h6>
          <p>{doctorData.department}</p>
        </div>
        <div className="profile-prescription-card-head-right">
          <h6>{date}</h6>
          {/* <h6>Wednesday</h6> */}
>>>>>>> origin/pharmacy-final
          <button
            className="btn profile-description-card-button"
            data-bs-toggle="collapse"
            data-bs-target={`#${newCollapse}`}
            aria-expanded="false"
<<<<<<< HEAD
            aria-controls={newCollapse}
          >
            expand
=======
            onClick={()=>{if(hintText === "View less"){
                setHintText("View more");
            }
            else{
              setHintText("View less");
            }
            }}
            aria-controls={newCollapse}
          >
            {hintText}
>>>>>>> origin/pharmacy-final
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
<<<<<<< HEAD
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
=======
              <h6
                style={{
                  marginTop: "5px",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Body Condition
              </h6>
              <ul style={{ fontSize: "15.5px" }}>
                <li>Blood Pressure : {blood_pressure} mmHg</li>
                <li>Body Temperature : {body_temperature} Degrees</li>
                <li>Blood Oxygen Level : {blood_oxygen}%</li>
                <li>Blood Sugar Level : {blood_sugar} mg/DL</li>
              </ul>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "15px",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Doctor's Notes
              </h6>
              {/* <ul>{observationList}</ul> */}
              <ul style={{ fontSize: "15.5px" }}>
                {observationList.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div className="profile-prescription-card-body-sect-3">
              <h6
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Medicine Prescriptions
              </h6>
              <table
                style={{ width: "500px" }}
                className="table table-borderless"
              >
                <thead>
                  <tr>
                    <th
                      style={{ fontSize: "15.5px", color: "teal" }}
                      scope="col"
                    >
                      Medicine Name
                    </th>
                    <th
                      style={{ fontSize: "15.5px", color: "teal" }}
                      scope="col"
                    >
                      Dosage
                    </th>
                    <th
                      style={{ fontSize: "15.5px", color: "teal" }}
                      scope="col"
                    >
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptionList.map((item) => {
                    let data = item.split(",");
                    return (
                      <tr>
                        <td style={{ fontSize: "15.5px" }}>{data[0]}</td>
                        <td style={{ fontSize: "15.5px" }}>{data[1]}</td>
                        <td style={{ fontSize: "15.5px" }}>{data[2]}</td>
                      </tr>
                    );
                  })}
>>>>>>> origin/pharmacy-final
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
