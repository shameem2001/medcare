import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";
import Dcard from "../../components/DoctorDetails/Dcard.js";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Hcard from "../../components/DoctorDetails/Hcard";
import CardMedia from '@mui/material/CardMedia';

var cardStyle = {
  display: "block",
  width: "80vw",
  transitionDuration: "0.3s",
  height: "9vw",
  backgroundColor: "whitesmoke",
  textAlign: "center",
};

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

export default function Appointment({ hospital, moto }) {
  const [tasks, setTasks] = useState(doctInitial);
  const [activeStep, setActiveStep] = useState(0);
  let updateStep = () => {
    setActiveStep(1);
  };

  return (
    <div className="mt-4 mb-4 appointment">
      <div className="headerCard">
      <div class="card shadow-sm"  >
  <div class="card-body">
    <h5 class="card-title">{hospital}</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">{moto}</small></p>
  </div>
  <img class="card-img-bottom" src="../../../assets/akghospital.png" alt="Card image cap"/>
</div>
      </div>
      <div className="mt-5 divider">
        <div className="dateSelect">
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
              sx={{ minWidth: 100 }}
              style={{ backgroundColor: "cadetblue" }}
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
  moto: "WE SERVE",
};
