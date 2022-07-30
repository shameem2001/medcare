import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Dcard from "../../components/DoctorDetails/Dcard.js";
import "./DoctorDetails.scss";

let doctInitial = [
  {
    id: 1,
    name: "SHAMEEM",
    specialization: "Phisician",
    hospital: "MIMS",
  },
  {
    id: 2,
    name: "JEEVAN",
    day: "7-7-2023",
    specialization: "Dermetologist",
    hospital: "AKG",
  },
  {
    id: 3,
    name: "ANAND",
    specialization: "Pediatrician",
    hospital: "AKG",
  },
  {
    id: 4,
    name: "Joseph Renil Joshy",
    specialization: "Pshychatric",
    hospital: "MIMS",
  },
];

export default function Appointment({ hospital, address, moto }) {
  const [tasks, setTasks] = useState(doctInitial);
  const [activeStep, setActiveStep] = useState(0);
  let updateStep = () => {
    setActiveStep(1);
  };

  return (
    <div className="appointment">
      <div className="divider">
        <div className="dateSelect">
          <div className="container shadow-sm headerCard">
            <div
              className="headerCard-img"
            />
            <div className="header-card-div-right">
              <h5>{hospital}</h5>
              <h6>{address}</h6>
              <h6>"{moto}"</h6>
            </div>
          </div>
          {tasks.map((item) => {
            return (
              <Dcard
                name={item.name}
                speciality={item.specialization}
                updateStep={updateStep}
              />
            );
          })}
        </div>
        <div className="stepcontact">
          <div className="stepper">
            <div>
              <div className="bookingStatus">
                <p>BOOKING PROGRESS</p>
              </div>

              <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                  <StepLabel> Select Doctor</StepLabel>
                </Step>
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
          <div className="mt-5 contactcard">
            <Card
              sx={{ width: 300 }}
              style={{ backgroundColor: "white" }}
              elevation={6}
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
                  <br />
                  <br />
                  {
                    '"I think it is possible for ordinary people to choose to be extraordinary."'
                  }
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
Appointment.defaultProps = {
  hospital: "AKG HOSPITAL",
  address: "40/1276 , A1, NH 66 Bypass, Palarivattom, Kochi -682024",
  moto: "WE SERVE",
};
