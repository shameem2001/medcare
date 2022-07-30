import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Stepper, Typography } from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Chips from "./Chips";

var cardStyle = {
  display: "block",
  width: "42vw",
  transitionDuration: "0.3s",
  height: "7vw",
  color: "cadetblue",
  backgroundColor: "whitesmoke",
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

export default function Dcard({ name, speciality, updateStep}) {
  const [timeShow, setTimeshow] = useState(timeSelect);
  const [displayTime, setDisplayTime] = useState(false);
  let i = 0;
  const [step, setStep] = useState(i);

  let toggleDisplayTime = () => {
    setDisplayTime(true);
    console.log(displayTime);
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

            console.log(times);
            
    return (
      <div className="mt-2 mb-7">
        <Stack direction="row" spacing={1}>
          {
            times.map((item3) => {
              console.log(item3);
              return <Chip label={item3} />
            })}
        </Stack>
      </div>
    );
  };

  return (
    <div className="mt-3">
      <Card elevation={3} style={cardStyle}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "grey", width: 70, height: 70 }}
              aria-label="recipe"
              src="https://photos.google.com/photo/AF1QipOkR_g6EUpxW_T4t2dj1BLt8g9GjoN9YXpirmRT"
              alt="I"
            />
          }
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
