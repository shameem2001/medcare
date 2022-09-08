import React, { useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import Card from "@mui/material/Card";
import apis from "../../../apis";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Link, useNavigate } from "react-router-dom";
import {
  IconButton,
  Typography,
  Avatar,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import img from "../../../assets/elder.jpg";
const mongoose = require("mongoose");
import "./Dcard.scss";
import image from "../../../assets/booked.png";
import emailjs from "emailjs-com";

var cardStyle = {
  display: "block",
  borderRadius: "10px",
  width: "700px",
  transitionDuration: "0.3s",
  height: "7vw",
  color: "cadetblue",
  backgroundColor: "white",
};

const timeSelect = [
  {
    nameD: "SHAMEEM",
    timeToken: ["4.00 am", "12.00 am", "1.00 am", "10.00 am"],
  },
  {
    nameD: "JEEVAN",
    timeToken: ["4.00 am", "12.00 am", "1.00 am", "10.00 am"],
  },
  {
    nameD: "ANAND",
    timeToken: ["4.00 am", "12.00 am", "1.00 am", "10.00 am"],
  },
];


export default function Dcard({ name, speciality, updateStep }) {
  const [timeShow, setTimeshow] = useState(timeSelect);
  const [displayTime, setDisplayTime] = useState(false);
  let i = 0;
  const [step, setStep] = useState(i);
  const [openModel, setOpenModel] = useState(false);
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  const navigate = useNavigate();
  

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

  let toggleDisplayTime = () => {
    setDisplayTime(true);
  };

  let timeComponent = () => {
    let times = timeShow
      .filter((item1) => {
        return item1.nameD === name;
      })
      .map((item2) => {
        return item2.timeToken;
      })[0];

    let submit = async () => {
      console.log(email, password);
      let results;
      let match = false;
      await apis
        .get("user")
        .then((data) => {
          results = data.data;
        })
        .catch((error) => {
          console.log(error);
        });

      results.map((data) => {
        bcrypt.compare(password, data.password, (err, res) => {
          console.log(res);
          if (res === true && email === data.email) {
            match = true;
            localStorage.setItem("_id", data._id);
            localStorage.setItem("_mail", data.email);
            navigate("/doctor-details");
          }
        });
      });
    };

    let sendMail = () => {
      navigate("/");
    };
    return (
      <div className="mt-2 mb-7" onClick={addAppointment}>
        <Stack direction="row" spacing={1}>
          {times.map((item3) => {
            return (
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={
                  localStorage.getItem("_id") != null
                    ? "#exampleModalCenter"
                    : "#exampleModal"
                }
              >
                <Chip label={item3} />
              </button>
            );
          })}
        </Stack>

        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Booking Status
                </h5>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={sendMail}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div>
                  <div className="modalContents">
                    {" "}
                    <img
                      src={image}
                      alt="image here"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="modalContents">
                    {" "}
                    <h1>AWESOME..!</h1>
                  </div>
                </div>
                <div className="modalContents">
                  YOUR BOOKING HAS CONFIRMED
                  <br />
                  Check your email for your details
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={sendMail}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Log In
                </h5>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      password
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={submit}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-3">
      <div elevation={3} style={cardStyle} className="container shadow-sm">
        <CardHeader
          avatar={<img className="Dcard-circle-avatar" src={img} alt="I" />}
          action={
            <IconButton>
              <BasicDatePicker
                toggleDisplayTime={toggleDisplayTime}
                updateStep={updateStep}
              />
            </IconButton>
          }
          title={name}
          subheader={speciality}
        />
        <CardContent>
          <Typography align="right"></Typography>
        </CardContent>
      </div>
      <div>{displayTime ? timeComponent() : null}</div>
    </div>
  );
}
