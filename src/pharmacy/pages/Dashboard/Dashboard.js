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

  const pharmacy_id = localStorage.getItem("pharmacy_id");
  const hospital_name = localStorage.getItem("hos_name");
  // const pharmacy_name = localStorage.getItem('pharmacy_name');
  // console.log(pharmacy_name);

  // let pharma = [
  //   {
  //     hospital_name: "Aster mims",
  //     email: "mims@gmail.com",
  //     phoneNumber: "123456789",
  //     district: "Thrissur",
  //     city: "Thrissur",
  //     password: "aster",
  //   },
  // ];
  // let [pharmacyData, setPharmacyData] = useState(pharma);

  // const fetchPharmacyrData = async () => {
  //   let results;
  //   await apis
  //     .get(`pharmacy/${pharmacy_id}`)
  //     .then((data) => {
  //       console.log(data.data);
  //       results = data.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   if (results !== null) {
  //     setPharmacyData(results);
  //     console.log(results);
  //   }
  // };

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

  const [details, setDetails] = useState([{}]);

  const fetchPrescription = async () => {
    let result;
    let data1 = await apis.get("prescription");
    console.log(data1.data);
    result = data1.data.filter((presC) => {
      return presC.hospital_name === hospital_name;
    });

    if (result !== null) {
      setDetails(result);
      console.log(result);
    }
  };
  console.log(details);

  // const [DetailsDoc, setDetailsdoc] = useState();

  // const fetchDoctorName = async () => {
  //   let result;
  //   await apis
  //     .get(`doctor/${details.doctor_id}`)
  //     .then((data1) => {
  //       console.log(data1.data);
  //       result = data1.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   if (result !== null) {
  //     setDetailsdoc(result);
  //     console.log(result);
  //   }
  // };

  // const doc_name = DetailsDoc.name;

  useEffect(() => {
    // fetchPharmacyrData();
    fetchPrescription();
    // fetchDoctorName();
  }, []);

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
            <span className="li-left">e-mail:</span>
            {/* <span> {pharmacyData.email}</span> */}
          </li>
          <li className="pharma-basic">
            <span className="li-left">district:</span>
            {/* <span>{pharmacyData.district}</span> */}
          </li>
        </ul>
      </div>
      <div className="container shadow column-right">
        <div className="container shadow right-header">
          <h4 className=" right-header-inner">PRESCRIPTIONS</h4>
        </div>
        <div className="delivery-card">
          {/* {details.map((item) => {
            return <DeliveryCard doctor_id={item.doctor_id} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
