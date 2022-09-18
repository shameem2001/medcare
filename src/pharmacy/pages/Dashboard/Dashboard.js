import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import apis from "../../../apis";
import "./Dashboard.scss";
import DeliveryCard from "../../components/DeliveryCard";

export default function Dashboard() {
  const pharmacy_id = localStorage.getItem("pharmacy_id");
  const hospital_name = localStorage.getItem("pharmacy_name");
  let addr;

  let [prescDetails, setPrescDetails] = useState([{}]);
  const [sdetails, setSDetails] = useState([]);
  const [doctDetails, setDoctDetails] = useState([]);
  const [address, setAddress] = useState("");
  const [pharm, setPharm] = useState([]);

  let result1, result2;
  const fetchPrescription = async () => {
    let data1 = await apis.get("prescription");
    console.log(data1.data);
    result1 = data1.data.filter((presC) => {
      return presC.hospital_name === hospital_name;
    });

    if (result1 !== null) {
      setPrescDetails(result1);
    }

    let data2 = await apis.get("pharmacy");
    console.log(data1.data);
    result2 = data2.data.filter((presC) => {
      return presC.hospital_name === hospital_name;
    })[0];

    if (result2 !== null) {
      setPharm(result2);
    }
  };

  console.log(prescDetails);
  console.log(pharm);

  useEffect(() => {
    fetchPrescription();
    const interval = setInterval(() => {
      console.log("This will be called every 2 seconds");
      fetchPrescription();
    }, 1000*20);

    return () => clearInterval(interval);
  }, [prescDetails.length]);

  return (
    <div className="Store-Boundary">
      <div className="container shadow Store-basic-card">
        <h4 className="basicHeader">Pharmacy details</h4>
        <ul className="pharma-details">
          <li className="pharma-basic">
            <span className="li-left">Hospital Name:</span>
            <span>{hospital_name}</span>
          </li>
          <li className="pharma-basic">
            <span className="li-left">Email:</span>
            <span> {pharm.email}</span>
          </li>
          <li className="pharma-basic">
            <span className="li-left">District:</span>
            <span>{pharm.district}</span>
          </li>
        </ul>
      </div>
      <div className="container shadow column-right">
        <div className="container shadow right-header">
          <h4 className=" right-header-inner">PRESCRIPTIONS</h4>
        </div>
        <div className="delivery-card">
          {prescDetails
            .sort((a, b) => (a.submitted_time > b.submitted_time ? 1 : -1))
            .filter((data) => {
              return data.is_visited === false && data.priority === "high";
            })
            .map((item) => {
              return (
                <DeliveryCard
                  onClicked={(id) => {
                    console.log("Onclick callback", id);
                    const res = prescDetails.filter((item) => {
                      return item._id !== id;
                    });
                    setPrescDetails(res);
                  }}
                  doctor_id={item.doctor_id}
                  doctor_name={item.doctor_name}
                  patient_name={item.patient_name}
                  submitted_time={item.submitted_time}
                  priority={item.priority}
                  prescription={item.prescription}
                  _id={item._id}
                  user_id={item.user_id}
                />
              );
            })}
          {prescDetails
            .sort((a, b) => (a.submitted_time > b.submitted_time ? 1 : -1))
            .filter((data) => {
              return data.is_visited === false && data.priority === "low";
            })
            .map((item) => {
              console.log(address);
              return (
                <DeliveryCard
                  onClicked={(id) => {
                    console.log("Onclick callback");
                    const res = prescDetails.filter((item) => {
                      return item._id !== id;
                    });
                    setPrescDetails(res);
                  }}
                  doctor_id={item.doctor_id}
                  doctor_name={item.doctor_name}
                  patient_name={item.patient_name}
                  submitted_time={item.submitted_time}
                  priority={item.priority}
                  prescription={item.prescription}
                  _id={item._id}
                  user_id={item.user_id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
