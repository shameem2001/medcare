import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import apis from "../../../apis";
import "./Dashboard.scss";
import DeliveryCard from "../../components/DeliveryCard";


export default function Dashboard() {
    // const location = useLocation().state;
    // const pharmacy_id = location._id;
    // console.log(pharmacy_id);

    // const pharmacy_id = localStorage.getItem('_id');



    // let [pharmacyData, setPharmacyData] = useState();

    // const fetchPharmacyrData = async () => {
    //     let results;
    //     await apis
    //       .get(`pharmacy/${pharmacy_id}`)
    //       .then((data) => {
    //         console.log(data.data);
    //         results = data.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    
    //     if (results !== null) {
    //       setPharmacyData(results);
    //     }
    //   };

    // let hospital_name = pharmacyData.hospital_name;

    // let [doctorData, setDoctorData] = useState();

    // const fetchDoctor = async () => {
    //   let resultd;
    //   await apis
    //     .get("doctor")
    //     .then((datad) => {
    //       resultd = datad.data.filter((doc) => {
    //         return doc.hospital === hospital;
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   if (resultd !== null) {
    //     setDoctorData(resultd);
    //     console.log(resultd);
    //   }
    // };

    // const [details, setDetails] = useState();
  
    // const fetchPrescription = async () => {
    //   let result;
    //   await apis
    //     .get("prescription")
    //     .then((data1) => {
    //       console.log(data1.data);
    //       result = data1.data.filter((presC)=>{
    //         return presC.user_id===user_id;
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
  
    //   if (result !== null) {
    //     setDetails(result);
    //     console.log(result);
    //   }
    // };

  return (
    <div className="Store-Boundary">
      <div className="container shadow Store-basic-card">
        <h4 className="basicHeader">Pharmacy details</h4>
        <ul className="pharma-details">
          <li className="pharma-basic">
            <span className="li-left">Pharmacy Name:</span>
            <span> Neethi Medicals</span>
          </li>
          <li className="pharma-basic">
            <span className="li-left">Hospital Name:</span>
            <span> Aster MIMS</span>
          </li>
        </ul>
      </div>
      <div className="container shadow column-right">
        <div className="container shadow right-header">
            <h4 className=" right-header-inner">PRESCRIPTIONS</h4>
        </div>
        <div className="delivery-card">
            <DeliveryCard no={1}/>
            <DeliveryCard no={2}/>
            <DeliveryCard no={3}/>
            <DeliveryCard no={4}/>
        </div>
      </div>
    </div>
  );
}
