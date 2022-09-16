import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apis from "../../apis";

export default function DeliveryCard({doctor_id}) {
  const newheading = "heading" ;
  const newCollapse = "collapse" ;

  
  const [DetailsDoc, setDetailsdoc] = useState();

  const fetchDoctorName = async () => {
    let result;
    await apis
      .get(`doctor/${doctor_id}`)
      .then((data1) => {
        console.log(data1.data);
        result = data1.data;
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
    fetchDoctorName();
  })  


  return (
    <div className="container shadow-sm profile-prescription-card-pharmacy">
      <div
        className="card-header profile-prescription-card-head-pharmacy"
        id={newheading}
      >
        <div className="profile-prescription-card-head-left-pharmacy">
          <h6>Patient : Muhammed Shameem</h6>
          <p>Doctor : {DetailsDoc.name}</p>
        </div>
        <div className="profile-prescription-card-head-right-pharmacy">
          <h6>26-05-2022</h6>
          <h6>
            Priority:<span className="priority">HIGH</span>
          </h6>

          <button
            className="btn profile-description-card-button-pharmacy"
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
        <div className="card-body profile-prescription-card-body-pharmacy">
          <div className="profile-prescription-card-body-sect-1-pharmacy">
            <h6 className="profile-prescription-card-body-sect-2-header-pharmacy">
              Patient Address:
            </h6>
            <div className="profile-prescription-card-body-sect-2-pharmacy">
              <h6>Devikripa house, Mundathicode p.o Thrissur</h6>
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
          <button className="btn delete-prescription">Delete</button>
        </div>
      </div>
    </div>
  );
}
