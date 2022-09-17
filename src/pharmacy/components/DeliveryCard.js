import React, { useEffect, useState } from "react";
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

  const [seeMore, setSeeMore] = useState("View more");

  let result;
  const fetchPatientName = async () => {
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

  const set_visited = ()=>{
    apis.put(`prescription/${_id}`, {
      is_visited: true,
    }).then((data)=>console.log(data.data)).catch((e)=>console.log(e));
  }

  useEffect(() => {
    fetchPatientName();
  });

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
            onClick={()=>{
              if(seeMore === "View more"){
                setSeeMore("View less");
              }
              else{
                setSeeMore("View more");
              }
            }}
          >
            {seeMore}
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
          <button className="btn delete-prescription" onClick={set_visited}>Deliver</button>
        </div>
      </div>
    </div>
  );
}
