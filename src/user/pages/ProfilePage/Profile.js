import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apis from "../../../apis";
import AppointmentCard from "../../components/Profile/AppointmentCard";
import DependantCard from "../../components/Profile/DependantCard";
import PrescriptionCard from "../../components/Profile/PrescriptionCard";
import "./Profile.scss";
import img from "../../../assets/profile.jpg";
import * as filestack from "filestack-js";

export default function Profile() {
  const location = useLocation();
  const { user_id } = location.state;

  let [userData, setUserData] = useState({
    name: "John Doe",
    gender: "Male",
    email: "johnDoe",
    dob: "20201-09-23",
    age: 22,
    phoneNumber: "245676543",
  });

  // image upload
  const FILESTACK_APIKEY = "AR9a0fhrDRleWdYYiy68qz";
  let [file_data, setFile_data] = useState({});
  let [img_up, setImg] = useState("");
  const client = filestack.init(FILESTACK_APIKEY);

  const fileSelectedHandler = (filedata) => {
    console.log(filedata);
    setFile_data(filedata);
  };
  const fileUploadHandler = async () => {
    console.log("Upload");
    if(file_data !== {}){
      await client.upload(file_data).then(async (data) => {
        await apis
          .put(`user/${user_id}`, {
            img: data.url,
          })
          .then((data2) => {
            setImg(data.url);
            console.log(data);
          })
          .catch((error) => console.log(error));
      });
    }
  }

  const fetchUserData = async () => {
    let results;
    await apis
      .get(`user/${user_id}`)
      .then((data) => {
        console.log(data.data);
        results = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if (results !== null) {
      setUserData(results);
    }
  };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img_up]);

  return (
    <div className="profile">
      <div
        className="modal fade modal-profile-img"
        id="profileModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <input
              type="file"
              onChange={(e) => {
                fileSelectedHandler(e.target.files[0]);
              }}
            />
            <button className="btn" data-bs-dismiss="modal" onClick={fileUploadHandler}>
              Upload
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div className="profile-div-left">
        <div className="container shadow profile-card1">
          <div className="profile-card1-grid">
            {userData.img === undefined ? (
              <img
                src={img}
                alt="34"
                className="profile-card1-circle-avatar"
                data-bs-toggle="modal"
                data-bs-target="#profileModal"
              />
            ) : (
              <img
                src={userData.img}
                alt="34"
                className="profile-card1-circle-avatar"
              />
            )}
            <div className="profile-card1-top-right">
              <h3 className="profile-card1-name">{userData.name}</h3>
              <h6 className="profile-card1-dob">
                <span className="profile-card1-dob-helper">
                  Date of Birth:{" "}
                </span>
                {userData.dob}
              </h6>
              <h6 className="profile-card1-gender">
                <span className="profile-card1-gender-helper">Gender: </span>
                {userData.gender}
              </h6>
              <button className="btn profile-card1-edit-button">
                edit profile
              </button>
            </div>
          </div>
          <hr />
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">age: </span>
            {userData.age} yrs
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">occupation: </span>
            Software Engineer
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">email: </span>
            {userData.email}
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">
              mobile number:{" "}
            </span>
            +91 {userData.phoneNumber}
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">address: </span>
            {userData.address}
          </h6>
          <h6 className="profile-card1-details">
            <span className="profile-card1-details-helper">blood group: </span>
            O+ve
          </h6>
        </div>
        <div className="container shadow dependents-card">
          <h5>Registered Dependants</h5>
          <hr className="dependants-card-hr" />
          <DependantCard />
          <button className="btn dependents-card-btn">Add Dependant</button>
        </div>
      </div>
      <div className="profile-div-right">
        <div className="container shadow profile-tabbar-container">
          <ul
            className="nav nav-pills mb-3 profile-tabbar"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active profile-tabbar-tab"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link profile-tabbar-tab"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Appointments
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link profile-tabbar-tab"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                History
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div
            className="tab-content profile-tabbar-contents-container"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade show active profile-tabbar-content-all-tab"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="container shadow profile-tabbar-content-all-tab-overview-container">
                <h5>Overview</h5>
                <hr />
                <ul>
                  <li>Patient has eczema and asthma.</li>
                  <li>
                    Allergic to dust, red meat, cocoa, meat with exoskeletons.
                  </li>
                  <li>
                    Allergic reactions often seen as asthma or itchiness in B/L
                    orbit and legs.
                  </li>
                  <li>No other serious medical conditions.</li>
                </ul>
              </div>
              <div className="container shadow profile-tabbar-content-all-tab-appointments-container">
                <h5>Latest Appointment</h5>
                <hr />
                <AppointmentCard />
              </div>
              <div className="container shadow profile-tabbar-content-all-tab-history-container">
                <h5>History</h5>
                <hr />
                <div
                  id="accordion"
                  className="profile-tabbar-content-all-tab-history-accordion"
                >
                  <PrescriptionCard no={"1"} />
                  <PrescriptionCard no={"2"} />
                  <PrescriptionCard no={"3"} />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="container shadow profile-tabbar-content-all-tab-appointments-container">
                <h5 className="profile-tabbar-content-appointments-tab-container-h5">
                  Appointments
                </h5>
                <hr />
                <div className="profile-tabbar-content-appointments-tab-container">
                  <AppointmentCard />
                  <AppointmentCard />
                  <AppointmentCard />
                  <AppointmentCard />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="container shadow profile-tabbar-content-all-tab-history-container">
                <h5>History</h5>
                <hr />
                <div
                  id="accordion"
                  className="profile-tabbar-content-all-tab-history-accordion"
                >
                  <PrescriptionCard no={"1"} />
                  <PrescriptionCard no={"2"} />
                  <PrescriptionCard no={"3"} />
                  <PrescriptionCard no={"4"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
