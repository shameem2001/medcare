import React, { useState,useEffect } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import apis from "../../../apis";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {   Card,IconButton, Typography, Chip, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import BasicDatePicker from "../../components/DoctorDetails/BasicDatePicker";
import "./DocDetailsWindow.scss";
const mongoose = require("mongoose");

var cardStyle = {
  display: "flex",
  borderRadius: "10px",
  width: "300px",
  transitionDuration: "0.3s",
  height: "7vw",
  color: "cadetblue",
  backgroundColor: "white",
};

const timeSelect = [
  {
    timeToken: ["4.00 am", "12.00 am", "1.00 am", "10.00 am"],
  },
];

export default function DocDetailsWindow() {

  // Doctor data fetch start
  
  const navigate = useNavigate();
  const location = useLocation().state;
  const doctor_id = location.doctor_id;


  let [doctorData, setDoctorData] = useState({
    name: "Dr.Feroz BK",
    hospital: "Sreechand Hospital",
    department: "Consulting Physician",
    experience: 3,
    district: "Kannur",
    email: "ferozbk@gmail.com",
  });

  useEffect(() => {
    getDoctorDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDoctorDetails = async () => {
    let results;
    await apis.get(`doctor/${doctor_id}`).then((data) => {
      results = data.data;
    });

    if (results !== null) {
      console.log(results);
      setDoctorData(results);
    }
  };
  
// Doctor data fetch end

// const [tasks, setTasks] = useState(doctorData);
const [activeStep, setActiveStep] = useState(0);
let updateStep = () => {
  setActiveStep(1);
};


//Update appointment start

const [timeShow, setTimeshow] = useState(timeSelect);
const [displayTime, setDisplayTime] = useState(false);
let i = 0;
const [step, setStep] = useState(i);
/*
  // let userfetcheddata;
  // let getUser = async (userId) => {
  //   await apis
  //     .get(`user/${userId}`)
  //     .then((data) => {
  //        userfetcheddata =  data.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  let updateUser = async (userId, appointment_id) => {
    //await getUser(userId);
    await apis
      .put(`user/${userId}`, {
        $push: { appointments: appointment_id },
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  // let doctorfetchdata;
  // let getDoctor = async (doctor_id) => {
  //   await apis
  //     .get(`doctor/${doctor_id}`)
  //     .then((data) => {
  //       doctorfetchdata = data.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  let updateDoctor = async (doctor_id, appointment_id) => {
    //await getDoctor(doctor_id);
    await apis
      .put(`doctor/${doctor_id}`, {
        $push: { appointments: appointment_id },
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  let addAppointment = async () => {
    let appointment_id;
    await apis
      .post("appointment", {
        user_id: mongoose.Types.ObjectId("62eac78745c82de1c0ff6f31"),
        doctor_id: mongoose.Types.ObjectId("62eb986b17a3b1c03f675658"),
        date: "2020-02-23",
        session: "Afternoon",
        time: "12:00",
        status: "Active",
      })
      .then((data) => (appointment_id = data.data))
      .catch((error) => console.log(error));

    updateUser("62eac78745c82de1c0ff6f31", appointment_id);
    updateDoctor("62eb986b17a3b1c03f675658", appointment_id);
  };

//Update appointment end
*/

// Basic date picker

  let toggleDisplayTime = () => {
    setDisplayTime(true);
  };

  let timeComponent = () => {
    let times = timeShow
      .map((item2) => {
        return item2.timeToken;
      })[0];

    return (
      <div className="mt-4 mb-7 " /*onClick={addAppointment}*/>
        <Stack direction="row" spacing={3}>
          {times.map((item3) => {
            return <Chip label={item3} />;
          })}
        </Stack>
      </div>
    );
  };

  

  return (
    <div className="Main-Background">
      <div className="Wrapper">
        <div className="Wrapper-in-top">
          <div className="Doctor-details">
            <div className="Doctor-details-left">
              <div className="Doctor-photo"></div>
            </div>
            <div className="Doctor-details-right">
              <div className="Doctor-data-title">
                <h3 className="Doctor-data">Doctor Details</h3>
              </div>
              <div className="Doctor-data-main">
                <div className="Doctor-data-right">
                  <ul className="Docdata">
                    <li className="Docdata-elements">
                      <span className="leftside">Name : </span>{doctorData.name}
                    </li>
                    <li className="Docdata-elements">
                      <span className="leftside">Hospital Name : </span>
                      {doctorData.hospital}
                    </li>
                    <li className="Docdata-elements">
                      <span className="leftside">Speciality : </span> {doctorData.department}
                    </li>
                    <li className="Docdata-elements">
                      <span className="leftside">E-mail : </span>{doctorData.email}
                    </li>
                  </ul>
                </div>
                <div className="Doctor-data-right2">
                  <ul className="Docdata2">
                    <li className="Docdata-elements2">
                      <span className="leftside2">Location : </span>{doctorData.district}
                    </li>
                    <li className="Docdata-elements2">
                      <span className="leftside2">Experience : </span>{doctorData.experience}
                    </li>
                    <li className="Docdata-elements2">
                      <span className="leftside2">Registration Number : </span>
                      167b54
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="stepcontact">
            <div className="stepper">
              <div>
                <div className="bookingStatus">
                  <p>BOOKING PROGRESS</p>
                </div>
                <Stepper activeStep={activeStep} orientation="vertical">
                  <Step>
                    <StepLabel> Choose Date</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel> Confirm Appointment</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel> login</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel> Booking Confirmed</StepLabel>
                  </Step>
                </Stepper>
              </div>
            </div>
          </div>
        </div>
        <div className="Booking-slots">
          <div className="Booking-slots-left">
            <div className="mt-0 ">
              <div
                elevation={3}
                style={cardStyle}
                className="container shadow-sm"
              >
                <CardHeader
                
                  action={
                    <IconButton>
                      <BasicDatePicker
                        toggleDisplayTime={toggleDisplayTime}
                        updateStep={updateStep}
                      />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography align="right"></Typography>
                </CardContent>
              </div>
              <div>{displayTime ? timeComponent() : null}</div>
            </div>
          </div>
          <div className="Booking-slots-right">
          <div className="mt-5 contactcard">
            <Card
              sx={{ width: 300 }}
              style={{ backgroundColor: "white", borderRadius:"4px" }}
              elevation={1}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  REQUIRE ASSISTANCE ...?
                </Typography>
                <Typography variant="h5" component="div">
                  CONTACT BELOW
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  +123456789
                </Typography>
                <Typography variant="body2">
                  mail id:{" "}
                  <a href="mailto:jeevanshaji144@gmail.com">
                    samplemail@gmail.com
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
