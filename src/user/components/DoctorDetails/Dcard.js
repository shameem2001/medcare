import React, { useState } from "react";
import Card from "@mui/material/Card";
import apis from "../../../apis";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography, Avatar, Chip, Stack } from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import img from "../../../assets/elder.jpg";
const mongoose = require("mongoose");

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

  let userfetcheddata;
  let getUser = async (userId) => {
    await apis
      .get(`user/${userId}`)
      .then((data) => {
         userfetcheddata =  data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let updateUser = async (userId, appointment_id) => {
    await getUser(userId, appointment_id);
    await apis
      .put(`user/${userfetcheddata._id}`, {
        _id: mongoose.Types.ObjectId(userfetcheddata._id),
        name: userfetcheddata.name,
        img: "",
        gender: userfetcheddata.gender,
        age: userfetcheddata.age,
        dob: userfetcheddata.dob,
        email: userfetcheddata.email,
        phoneNumber: userfetcheddata.phoneNumber,
        password: userfetcheddata.password,
        prev_docs: userfetcheddata.prev_docs,
        prev_cond: userfetcheddata.prev_cond,
        address: userfetcheddata.address,
        $push: { appointments: appointment_id },
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  let addAppointment = async () => {
    let appointment_id;
    await apis
      .post("appointment", {
        user_id: mongoose.Types.ObjectId("62ead769d81d326e5183f431"),
        doctor_id: mongoose.Types.ObjectId("62eb986b17a3b1c03f675658"),
        date: "2020-02-23",
        session: "Afternoon",
        time: "12:00",
        status: "Active",
      })
      .then((data) => (appointment_id = data.data))
      .catch((error) => console.log(error));

      updateUser("62ead769d81d326e5183f431", appointment_id);
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

    return (
      <div className="mt-2 mb-7" onClick={addAppointment}>
        <Stack direction="row" spacing={1}>
          {times.map((item3) => {
            return <Chip label={item3} />;
          })}
        </Stack>
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
