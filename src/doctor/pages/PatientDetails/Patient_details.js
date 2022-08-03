import React from 'react'
import './Patient_details.scss'
import PrescribtionCard from '../../components/PatientDetails/Prescribtion_card';
import {Link} from 'react-router-dom';


export default function Patient_details() {
    return (
        <div className="Background">
          <div className="Doctorside-profile">
            <div className=" general-profile">
              <div className="container shadow patient-biodata">
                <div className="patient-biodata-title">
                  <h3 className="Patient-Details">Patient Details</h3>
                </div>
                <div className="patient-biodata-main">
                  <div className="patient-pic"></div>
                  <div className="patient-biodata-right">
                    <ul className="biodata">
                      <li className="biodata-elements">
                        <span className="leftside">Name :</span> Jeevan Shaji VV
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside">D.O.B : </span>24/05/2001
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside">Gender :</span> Male
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside">Age :</span> 21
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside">Contact :</span> 8138082680
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside">E-mail </span>: jshajiv@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="Medical-history">
                <div className="container shadow Medical-history-title">
                  <span className="title">History</span>
                </div>
                <div className="container shadow Medical-history-details">
                  <div className="Conditions">
                    <h4 className="textedit-out">
                      <span className="textedit">Conditions</span>
                    </h4>
                    <ul className="History">
                      <li className="History-elements">Conjunctivitis</li>
                      <li className="History-elements">Migrane and Sinusitis</li>
                      <li className="History-elements">
                        Reccuring episodes of rage
                      </li>
                    </ul>
                  </div>
                  <div className="Medications">
                    <h4 className="textedit-out">
                      <span className="textedit">Medications</span>
                    </h4>
                    <ul className="History">
                      <li className="History-elements">Chloramphenicol</li>
                      <li className="History-elements">acetaminophen</li>
                      <li className="History-elements">Prozac</li>
                    </ul>
                  </div>
                  <div className="Past-issues">
                    <h4 className="textedit-out">
                      <span className="textedit">Past illnesses</span>
                    </h4>
                    <ul className="History">
                      <li className="History-elements">Lower back pain</li>
                      <li className="History-elements">Mild Depression</li>
                      <li className="History-elements">Dust allergies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="Bottom-panel">
    
              {/* Previous meetings start  */}
              <div className=" Previous-meetings">
                <div className="Basic-data-patient">
                  <div className="Basic-data-patient-left">
                  <ul className="basicdata-pat">
                      <li className="biodata-elements">
                        <span className="leftside-basic">Height      :</span> 184cm
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside-basic">Weight      : </span>75kg
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside-basic">Blood group :</span> O+ve
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside-basic">HB count    :</span> 14.8 g/dL
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside-basic">Sugar level :</span> 108 mg/dL
                      </li>
                      <li className="biodata-elements">
                        <span className="leftside-basic">Pressure    :</span> 115/75 mmHg
                      </li>
                    </ul>
                  </div>
                  <div className="Basic-data-patient-right">
                  <ul className="basicdata-pat">
                      <span className="right">Allergies</span>
                      <li className="biodata-elements">
                        <span className="rightside-basic">Dust      :</span> Mild
                      </li>
                      <li className="biodata-elements">
                        <span className="rightside-basic">Pollen     : </span>--
                      </li>
                      <li className="biodata-elements">
                        <span className="rightside-basic">Food :</span> Kiwi,Peanuts
                      </li>
                      <li className="biodata-elements">
                        <span className="rightside-basic">Skin :</span> --
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="Complex-data-patient"></div> */}
              </div>
              {/* Previous meetings end */}
    
              {/* Observation class start */}
              <div className="container shadow Observation">
                <div className=" profile-tabbar-container">
                  <ul
                    className="nav nav-pills mb-3 profile-tabbar"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        className="nav-link active profile-tabbar-tab"
                        id="add-prescribtion"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-add"
                        type="radio"
                        role="tab"
                        aria-controls="pills-add"
                        aria-selected="true"
                      >
                        Add Prescribtion
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link profile-tabbar-tab"
                        id="old-prescribtion"
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
                      aria-labelledby="add-prescribtion"
                    >
                      <div className=" profile-tabbar-content-all-tab-newpres-container">
                        <form id="xyz">
                          <div className="fields">
                            <label className="labels">Title</label>
                            <textarea
                              id="textarea-doctor1"
                              name="textarea-doctor"
                              rows="1.5"
                              cols="50"
                            ></textarea>{" "}
                          </div>
                          <div className="fields">
                            <label className="labels">Observations</label>
                            <textarea
                              id="textarea-doctor2"
                              name="textarea-doctor"
                              rows="3"
                              cols="50"
                            ></textarea>{" "}
                          </div>
                          <div className="fields">
                            <label className="labels">Prescribtions</label>
                            <textarea
                              id="textarea-doctor3"
                              name="textarea-doctor"
                              rows="3"
                              cols="50"
                            ></textarea>
                          </div>
                          <button
                              className="submit-button"
                              type="submit"
                              form="xyz"
                              value="submit"
                            >
                              <Link className="patient-detail-submit-link" to='/doctor/'>Submit</Link>
                            </button>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade  profile-tabbar-content-all-tab"
                      id="pills-pre"
                      role="tab"
                      aria-labelledby="old-prescribtion"
                    >
                      <div className=" profile-tabbar-content-all-tab-history-container">
                        <div
                          id="accordion"
                          className="profile-tabbar-content-all-tab-history-accordion"
                        >
                          <PrescribtionCard no={"1"} />
                          <PrescribtionCard no={"2"} />
                          <PrescribtionCard no={"3"} />
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
        </div>
      );
}
