import { React, useEffect, useState } from "react";
import { PureComponent } from "react";
import ReactDOM from 'react-dom';
import apis from "../../../apis";
import "./Patient_details.scss";
import PrescribtionCard from "../../components/PatientDetails/Prescribtion_card";
import { useLocation, useNavigate } from "react-router-dom";
import imga from "../../../assets/profile.jpg";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';


export default function Patient_details() {
  const navigate = useNavigate();
  const location = useLocation().state;
  let user_id = location.user_id;
  let appointment_id = location.appointment_id;
  let date = location.date;
  const doctor_id = localStorage.getItem("doctor_id");

  const updateAppointmentStatus = async () => {
    await apis
      .put(`appointment/${appointment_id}`, {
        status: "Inactive",
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };


let [userData, setUserData] = useState({});

  const getPatientDetails = async () => {
    console.log(user_id);
    let results;
    await apis
      .get(`user/${user_id}`)
      .then((data) => {
        console.log(data.data);
        results = data.data;
      })
      .catch((e) => console.log(e));

    if (results !== null) {
      console.log(results);
      setUserData(results);
    }
  };

  let [condition, setCondition] = useState("");
  let [observation, setobservation] = useState("");
  let [prescription, setprescribtion] = useState("");
  let [pressure, setPressure] = useState("");
  let [temp, setTemp] = useState("");
  let [oxyg, setOxyg] = useState("");
  let [sugar, setSugar] = useState("");


const styles = StyleSheet.create({
	page: {
		flexDirection: 'colomn',
	},
	section: {
		fontSize:40,
    paddingLeft:250,
    paddingTop: 20,
    paddingBottom: 20
    
	},
  section1: {
    fontSize:20,
    paddingLeft:10,
    paddingBottom: 10
  },
  section2: {
      padding:30
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

const MyDocument = (
	<Document>
		<Page  style={styles.page}>
			<View  style={styles.section}>
				<Text>Insights</Text>
			</View>
      
			<View  style={styles.section1}>
				<Text>Name : {userData.name}</Text>
			</View>

      <View  style={styles.section1}>
				<Text>Number : {userData.phoneNumber}</Text>
			</View>

      <View  style={styles.section1}>
				<Text>Email : {userData.email}</Text>
			</View>

      <View  style={styles.section2}>
			</View>

      <View  style={styles.section1}>
				<Text>Blood Pressure : {pressure} </Text>
			</View>

      <View  style={styles.section1}>
				<Text>Body Temperature : {temp} </Text>
			</View>

      <View  style={styles.section1}>
				<Text>Blood oxygen level : {oxyg} </Text>
			</View>

      <View  style={styles.section1}>
				<Text>Blood sugar level : {sugar} </Text>
			</View>

      <View  style={styles.section1}>
				<Text>Observation : {observation} </Text>
			</View>

      <View  style={styles.section1}>
				<Text>prescription : {prescription} </Text>
			</View>

		</Page>
	</Document>
);



 

  const postData = async () => {
    await apis
      .post("prescription", {
        user_id: user_id,
        doctor_id: doctor_id,
        date: date,
        blood_pressure: pressure,
        body_temperature: temp,
        blood_oxygen: oxyg,
        blood_sugar: sugar,
        observation: observation,
        prescription: prescription,
      })

      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
    updateAppointmentStatus();

    navigate("/doctor/");
  };

  const printpdf = async () => {
    if(observation ==="") {
      console.log("no value entered")
    }
    else {
      ReactDOM.render(
        <PDFViewer className="pdfpage">{MyDocument}</PDFViewer>,
        document.getElementById('root'),
      );

    }
  }

  

  // let presC = [
  //   {
  //     user_id: "62eac78745c82de1c0ff6f31",
  //     doctor_id: "62efe3e72d916a9451598d70",
  //     title: "21-10-2022",
  //     observation: "heavy depression",
  //     prescription: "pmol,dolo,cocaine",
  //   },
  // ];

  const [details, setDetails] = useState([]);

  const fetchPrescription = async () => {
    let results;
    await apis
      .get("prescription")
      .then((data) => {
        results = data.data.filter((item) => {
          return item.user_id === user_id;
        });
      })
      .catch((error) => {
        console.log(error);
      });

    if (results !== null) {
      setDetails(results);
    }
  };

  useEffect(() => {
    getPatientDetails();
    fetchPrescription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const addPrescription = async () => {
  //   console.log(user_id);
  //   await apis
  //     .put(`user/${user_id}`, {
  //       $push: {
  //         history: {
  //           doctor_name: "Ayyappan",
  //           hospital_name: "Mims",
  //           condition: "Stomachache",
  //           consultation_date: "2022-12-12",
  //           consultation_day: "Sunday",
  //           doctors_notes: ["Slightly anemic", "needs ors"],
  //           body_condition: {
  //             blood_pressure: "175",
  //             body_temperature: "97.5",
  //             blood_oxygen: "97",
  //             blood_sugar: "120",
  //           },
  //           medicine_prescription: [
  //             {
  //               medicine_name: "Dolo",
  //               dosage: "1-1-1",
  //               duration: "5",
  //             },
  //           ],
  //         },
  //       },
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  //     console.log("change the status of appointment to be finished");
  //   navigate("/doctor/patient-details");
  // };

  return (
    <div className="patient-details-page">
      <div className="patient-details-page-left">
        <div className="container shadow patient-biodata">
          <div className="patient-biodata-title">
            <h3 className="Patient-Details">Patient Details</h3>
          </div>
          <div className="patient-biodata-main">
            {userData.img !== null ? (
              <img className="patient-pic" src={userData.img} alt="" />
            ) : (
              <img className="patient-pic" src={imga} alt="" />
            )}
            <div className="patient-biodata-right">
              <ul className="biodata">
                <li className="biodata-elements">
                  <span className="leftside">Name :</span> {userData.name}
                </li>
                <li className="biodata-elements">
                  <span className="leftside">D.O.B : </span>
                  {userData.dob}
                </li>
                <li className="biodata-elements">
                  <span className="leftside">Gender :</span> {userData.gender}
                </li>
                <li className="biodata-elements">
                  <span className="leftside">Age :</span> {userData.age}
                </li>
                <li className="biodata-elements">
                  <span className="leftside">Contact :</span>{" "}
                  {userData.phoneNumber}
                </li>
                <li style={{ fontSize: "14px" }} className="biodata-elements">
                  <span style={{ fontSize: "16px" }} className="leftside">
                    E-mail{" "}
                  </span>
                  :{userData.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container Medical-history">
          <div className="container shadow Medical-history-cont">
            <h4>Basic Data</h4>
            <ul className="History">
              <li className="History-elements">
                <span>Height:</span> 176cm
              </li>
              <li className="History-elements">
                <span>Weight:</span> 64kg
              </li>
              <li className="History-elements">
                <span>Blood Group:</span> O+ve
              </li>
              <li className="History-elements">
                <span>Allergies:</span> Dust, Meat
              </li>
            </ul>
          </div>
          <div className="container shadow Medical-history-cont">
            <h4>Past illnesses</h4>
            <ul className="History">
              <li className="History-elements">Lower back pain</li>
              <li className="History-elements">Mild Depression</li>
              <li className="History-elements">Dust allergies</li>
            </ul>
          </div>
          <div className="container shadow Medical-history-cont">
            <h4>Conditions</h4>
            <ul className="History">
              <li className="History-elements">Conjunctivitis</li>
              <li className="History-elements">Migrane and Sinusitis</li>
              <li className="History-elements">Reccuring episodes of rage</li>
            </ul>
          </div>
          <div className="container shadow Medical-history-cont">
            <h4>Medications</h4>
            <ul className="History">
              <li className="History-elements">Chloramphenicol</li>
              <li className="History-elements">acetaminophen</li>
              <li className="History-elements">Prozac</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="patient-details-page-right">
        <div className="container shadow Medical-history-title">
          <span className="title">History</span>
        </div>
        {/* Previous meetings start  */}
        <div className="container shadow history-page-right">
          <div className="profile-tabbar-container">
            <ul
              className="nav nav-pills mb-3 profile-tabbar"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  className="nav-link active profile-tabbar-tab"
                  id="add-prescription"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-add"
                  type="radio"
                  role="tab"
                  aria-controls="pills-add"
                  aria-selected="true"
                >
                  Add Prescription
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link profile-tabbar-tab"
                  id="old-prescription"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-pre"
                  type="radio"
                  role="tab"
                  aria-controls="pills-pre"
                  aria-selected="false"
                >
                  Old Prescribtions
                </button>
              </li>
            </ul>
            <div
              className="tab-content profile-tabbar-contents-container"
              id="pills-tabContent"
            >
              <div
                className="tab-pane fade show active profile-tabbar-content-all-tab"
                id="pills-add"
                role="tab"
                aria-labelledby="add-prescription"
              >
                <div className=" profile-tabbar-content-all-tab-newpres-container">
                  <div className="fields">
                    <label style={{ marginTop: "5px" }} className="labels">
                      Body Condition
                    </label>
                    <div className="body-condition-pt-dt">
                      <div>
                        <label className="body-condition-pt-dt-label">
                          Blood Pressure:
                        </label>
                        <input
                          className="body-condition-pt-dt-input"
                          type="text"
                          onChange={(e) => {
                            setPressure(e.target.value);
                          }}
                        />
                        <label> mmHg</label>
                      </div>
                      <div>
                        <label className="body-condition-pt-dt-label">
                          Body Temperature:
                        </label>
                        <input
                          className="body-condition-pt-dt-input"
                          type="text"
                          onChange={(e) => {
                            setTemp(e.target.value);
                          }}
                        />
                        <label> degress</label>
                      </div>
                      <div>
                        <label className="body-condition-pt-dt-label">
                          {" "}
                          Blood Oxygen Level:
                        </label>
                        <input
                          className="body-condition-pt-dt-input"
                          type="text"
                          onChange={(e) => {
                            setOxyg(e.target.value);
                          }}
                        />
                        <label> %</label>
                      </div>
                      <div>
                        <label className="body-condition-pt-dt-label">
                          Blood Sugar Level:
                        </label>
                        <input
                          className="body-condition-pt-dt-input"
                          type="text"
                          onChange={(e) => {
                            setSugar(e.target.value);
                          }}
                        />
                        <label> mg/dL</label>
                      </div>
                    </div>
                  </div>
                  <div className="fields">
                    <label
                      style={{ marginTop: "5px", marginBottom: "5px" }}
                      className="labels"
                    >
                      Observations
                    </label>
                    <textarea
                      id="textarea-doctor2"
                      name="textarea-doctor"
                      rows="3"
                      cols="50"
                      onChange={(e) =>{ 
                        setobservation(e.target.value)}
                        }
                    ></textarea>{" "}
                  </div>
                  <div className="fields">
                    <label
                      style={{ marginTop: "5px", marginBottom: "5px" }}
                      className="labels"
                    >
                      Prescriptions
                    </label>
                    <textarea
                      id="textarea-doctor3"
                      name="textarea-doctor"
                      rows="3"
                      cols="50"
                      onChange={(e) => setprescribtion(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    style={{ marginTop: "5px", borderRadius: "12px" }}
                    className="submit-button"
                    onClick={()=>{
                      postData();
                    }}
                  >
                    Submit
                  </button>
                  <button
                    style={{ marginTop: "5px", borderRadius: "12px" }}
                    className="submit-button"
                    onClick={()=>{
                      printpdf();
                    }}
                  >
                    Print 
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade  profile-tabbar-content-all-tab"
                id="pills-pre"
                role="tab"
                aria-labelledby="old-prescription"
              >
                <div className=" profile-tabbar-content-all-tab-history-container">
                  <div
                    id="accordion"
                    className="profile-tabbar-content-all-tab-history-accordion"
                  >
                    {details.map((item) => {
                      return (
                        <PrescribtionCard
                          _id={item._id}
                          use_id={item.user_id}
                          doc_id={item.doctor_id}
                          date={item.date}
                          blood_pressure={item.blood_pressure}
                          body_temperature={item.body_temperature}
                          blood_oxygen={item.blood_oxygen}
                          blood_sugar={item.blood_oxygen}
                          observation={item.observation}
                          prescription={item.prescription}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* Observation class end */}
      </div>
    </div>
  );
}
