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
  let addr;
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
  const [sdetails,setSDetails]=useState([{}]);
  const [doctDetails, setDoctDetails] = useState([{}]);
  const [address, setAddress] = useState("");
  const [pharm,setPharm]=useState([{}]);

  let result1, result2;
  const fetchPrescription = async () => {
    let data1 = await apis.get("prescription");
    console.log(data1.data);
    result1 = data1.data.filter((presC) => {
      return presC.hospital_name === hospital_name;
    });

    if (result1 !== null) {
      setDetails(result1);
    }

    

    let data2 = await apis.get("pharmacy");
    console.log(data1.data);
    result2 = data2.data.filter((presC) => {
      return presC.hospital_name === hospital_name;
    });

    if (result2 !== null) {
      setPharm(result2);
    }
  };

  console.log(details);
  console.log(pharm)


  // const [DetailsDoc, setDetailsdoc] = useState();

  // const fetchDoctorName = () => {
  //   let result;
  //   details.filter(async(doct)=>{
  //     await apis
  //     .get(`doctor/${doct.doctor_id}`)
  //     .then((data1) => {
  //       console.log(data1.data);
  //       // result = data1.data;
  //       doctDetails.push(data1.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   if (result !== null) {
  //     // setDetailsdoc(result2);
  //     console.log(result);
  //   }
  //   })

  // };

  // const doc_name = DetailsDoc.name;
  let results;
  // let returnAddress = async (user_id) => {
  //   await apis
  //     .get(`user/${user_id}`)
  //     .then((data) => {
  //       results = data.data;
  //       console.log(data.data.address);

  //       setAddress(data.data.address);
  //       return data.data.address;
  //     })
  //     .catch((err) => console.log(err));
  // };

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
            <span> {pharm.map((data)=>{return data.email})}</span>
          </li>
          <li className="pharma-basic">
            <span className="li-left">district:</span>
            <span>{pharm.map((data)=>{return data.district})}</span>
          </li>
        </ul>
      </div>
      <div className="container shadow column-right">
        <div className="container shadow right-header">
          <h4 className=" right-header-inner">PRESCRIPTIONS</h4>
        </div>
        <div className="delivery-card">
          {/* {  const sortDetails=details.sort((a,b)=>a.submitted_time > b.submitted_time ? 1:-1);
    setSDetails(sortDetails);
    console.log(sdetails);} */}
          {
          
          details.sort((a,b)=>a.submitted_time > b.submitted_time ? 1:-1)
            .filter((data) => {
              return data.priority === "high";
            })
            .map((item) => {
              // returnAddress(item.user_id);
              console.log(address);
              return (
                <DeliveryCard
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
          {details.sort((a,b)=>a.submitted_time > b.submitted_time ? 1:-1)
            .filter((data) => {
              return data.priority === "low";
            })
            .map((item) => {
              // returnAddress(item.user_id);
              console.log(address);
              return (
                <DeliveryCard
                  doctor_id={item.doctor_id}
                  doctor_name={item.doctor_name}
                  patient_name={item.patient_name}
                  submitted_time={item.submitted_time}
                  priority={item.priority}
                  prescription={item.prescription}
                  _id={item._id}
                  user_id={item.user_id}
                  // address={address}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
