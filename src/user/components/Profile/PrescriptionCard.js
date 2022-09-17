<<<<<<< HEAD
import React from "react";

export default function PrescriptionCard({ no }) {
  const newheading = "heading" + no;
  const newCollapse = "collapse" + no;
=======
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

    console.log(doc_id);
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

      console.log(doctorData);

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
      });

      const [hint, setHint] = useState("View more");

>>>>>>> origin/pharmacy-final
  return (
    <div className="container shadow-sm profile-prescription-card">
      <div
        className="card-header profile-prescription-card-head"
        id={newheading}
      >
        <div className="profile-prescription-card-head-left">
<<<<<<< HEAD
          <h6>DR.FEROZ B.K</h6>
          <p>Koyili Hospital</p>
          <p>Condition: Wet cough, Fever, Vomitting.</p>
        </div>
        <div className="profile-prescription-card-head-right">
          <h6>26-05-2022</h6>
          <h6>Sunday</h6>
=======
          <h6>{doctorData.name}</h6>
          <p>{doctorData.department}</p>
        </div>
        <div className="profile-prescription-card-head-right">
          <h6>{date}</h6>
>>>>>>> origin/pharmacy-final
          <button
            className="btn profile-description-card-button"
            data-bs-toggle="collapse"
            data-bs-target={`#${newCollapse}`}
            aria-expanded="false"
            aria-controls={newCollapse}
<<<<<<< HEAD
          >
            View more
=======
            style={{
              width:"100px",
              height:"25px"
            }}
            onClick={()=>{
              hint === "View more"? setHint("View less"):setHint("View more");
            }}
          >
            {hint}
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
=======
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
>>>>>>> origin/pharmacy-final
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/pharmacy-final
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
