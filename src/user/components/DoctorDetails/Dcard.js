import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography, Avatar, Chip, Stack } from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import img from "../../../assets/elder.jpg";

var cardStyle = {
  display: "block",
  width: "42vw",
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

  let toggleDisplayTime = () => {
    setDisplayTime(true);
  };

  let timeComponent = () => {
    console.log("Hi");
    let times = timeShow
      .filter((item1) => {
        return item1.nameD === name;
      })
      .map((item2) => {
        return item2.timeToken;
      })[0];

    return (
      <div className="mt-2 mb-7">
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
      <Card elevation={3} style={cardStyle}>
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
      </Card>
      <div>{displayTime ? timeComponent() : null}</div>
    </div>
  );
}
