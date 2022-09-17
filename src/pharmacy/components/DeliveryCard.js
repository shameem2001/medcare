import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apis from "../../apis";

export default function DeliveryCard({
  doctor_id,
  doctor_name,
  patient_name,
  submitted_time,
  priority,
  prescription,
  _id,
  user_id,
  address,
}) {
  const newheading = "heading" + _id;
  const newCollapse = "collapse" + _id;
  let prescriptionList = prescription + "";
  let prescriptionList1 = prescriptionList.split("\n");
  const [DetailsDoc, setDetailsdoc] = useState("");
  // const [address, setAddress] = useState("");

  let result;
  const  fetchPatientName = async () => {
    
    await apis
      .get(`user/${user_id}`)
      .then((data1) => {
        console.log(data1.data);
        result = data1.data.address;
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    if (result !== null) {
      setDetailsdoc(result);
      console.log(result);
    }
  };

  useEffect(()=>{
    fetchPatientName();
  })
  // let tableBody=(e)=>{
  //   let colContents=e.split(",")

  //   return (
  //     colContents.map((item)=>{
  //       return (
  //         <div>
  //        <tr>
  //                   <td>{item[0]}</td>
  //                   <td>{item[1]}</td>
  //                   <td>{item[2]}</td>
  //                 </tr>
  //     </div>
  //       )
  //     })

  //   )
  // }

  // let result1;
  // let results;
  // let returnAddress = async (user_id) => {
    
  //   await apis
  //     .get(`user/${user_id}`)
  //     .then((data) => {
  //       results = data.data;
  //       console.log(data.data)
  //       setAddress(data.data.address)
  //     })
  //     .catch((err) => console.log(err));
  // };



  return (

    <div className="container shadow-sm profile-prescription-card-pharmacy">
      <div
        className="card-header profile-prescription-card-head-pharmacy"
        id={newheading}
      >
        <div className="profile-prescription-card-head-left-pharmacy">
          <h6>Patient : {patient_name}</h6>
          <p>Doctor : {doctor_name}</p>
        </div>
        <div className="profile-prescription-card-head-right-pharmacy">
          <h6>{submitted_time}</h6>
          <h6>
            Priority:<span className="priority">{priority}</span>
          </h6>

          <button
            className="btn profile-description-card-button-pharmacy"
            data-bs-toggle="collapse"
            data-bs-target={`#${newCollapse}`}
            aria-expanded="false"
            aria-controls={newheading}
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
        <div className="card-body profile-prescription-card-body-pharmacy">
          <div className="profile-prescription-card-body-sect-1-pharmacy">
            <h6 className="profile-prescription-card-body-sect-2-header-pharmacy">
              Patient Address:
            </h6>
            <div className="profile-prescription-card-body-sect-2-pharmacy">
              <h6>{DetailsDoc}</h6>
            </div>
            <h6 className="profile-prescription-card-body-sect-3-header-pharmacy">
              Medicine Prescriptions
            </h6>
            <div className="profile-prescription-card-body-sect-3-pharmacy">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Dosage</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptionList1.map((item) => {
                    let data = item.split(",");
                    return (
                      <tr>
                        <td style={{ fontSize: "15.5px" }}>{data[0]}</td>
                        <td style={{ fontSize: "15.5px" }}>{data[1]}</td>
                        <td style={{ fontSize: "15.5px" }}>{data[2]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <button className="btn delete-prescription">Delete</button>
        </div>
      </div>
    </div>
  );
}
