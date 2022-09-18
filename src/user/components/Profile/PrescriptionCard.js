import React, { useEffect, useState } from "react";
import apis from "../../../apis";

export default function PrescriptionCard({
  _id,
  use_id,
  doc_id,
  date,
  blood_p,
  body_t,
  blood_o,
  blood_s,
  observation,
  prescription,
}) {

    let defDoc = [
      {
        name: "Dr.Feroz BK",
        hospital: "Sreechand Hospital",
        department: "Consulting Physician",
        experience: 3,
        district: "Kannur",
        email: "ferozbk@gmail.com",
      },
    ];

    let [doctorData, setDoctorData] = useState(defDoc);

      const getDoctorDetails = async () => {
        let results;
        await apis
          .get(`doctor/${doc_id}`)
          .then((data) => {
            results = data.data;
          })
          .catch((e) => console.log(e));

        if (results !== null) {
          setDoctorData(results);
        }
      };
      // console.log(typeof observation);
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

      useEffect(() => {
        getDoctorDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const [hint, setHint] = useState("View more");

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
          <h6>{date}</h6>
          <button
            className="btn profile-description-card-button"
            data-bs-toggle="collapse"
            data-bs-target={`#${newCollapse}`}
            aria-expanded="false"
            aria-controls={newCollapse}
            style={{
              width:"100px",
              height:"25px"
            }}
            onClick={()=>{
              hint === "View more"? setHint("View less"):setHint("View more");
            }}
          >
            {hint}
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
                  <p>{blood_p} mmHg</p>
                  <p>{body_t} degree celsius</p>
                  <p>{blood_o} %</p>
                  <p>{blood_s} mg/dL</p>
                </div>
              </div>
              <h6 className="profile-prescription-card-body-sect-3-header">
                Observation
              </h6>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
