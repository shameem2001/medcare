import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apis from "../../../apis";

export default function Prescribtion_card({
  _id,
  use_id,
  doc_id,
  title,
  observation,
  prescription,
}) {
  let [doctorData, setDoctorData] = useState({
    name: "Dr.Feroz BK",
    hospital: "Sreechand Hospital",
    department: "Consulting Physician",
    experience: 3,
    district: "Kannur",
    email: "ferozbk@gmail.com",
  });

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

  let observationList = observation.split("\n");
  let prescriptionList = prescription.split("\n");

  let newRow = (e) => {
    let data = e.split(",");
    return (
      <tr>
        <td>{data[0]}</td>
        <td>{data[1]}</td>
        <td>{data[2]}</td>
      </tr>
    );
  };

  let newRow1 = (e) => {
    return (
      <tr>
        <td>{e}</td>
      </tr>
    );
  };

  const newheading = "heading" + _id;
  const newCollapse = "collapse" + _id;

  return (
    <div className="container shadow-sm profile-prescription-card">
      <div
        className="card-header profile-prescription-card-head"
        id={newheading}
      >
        <div className="profile-prescription-card-head-left">
          <h6>{doctorData.name}</h6>
          <p>{doctorData.department}</p>
        </div>
        <div className="profile-prescription-card-head-right">
          <h6>{title}</h6>
          {/* <h6>Wednesday</h6> */}
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
              <br />
              <h6 className="profile-prescription-card-body-sect-3-header">
                Observation
              </h6>
              {/* <ul>{observationList}</ul> */}
              <table className="table">
                <tbody>
                  {observationList.map((item) => {
                    return newRow1(item);
                  })}
                </tbody>
              </table>
            </div>
            <br />
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
                  {prescriptionList.map((item) => {
                    return newRow(item);
                  })}
                </tbody>
              </table>
              {/* <table className="table"> */}
              {/* <ul>{prescription}</ul> */}
              {/* 
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
                </tbody> */}
              {/* </table> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
