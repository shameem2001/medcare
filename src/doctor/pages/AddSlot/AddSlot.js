import React, {useState} from 'react';
import './AddSlot.scss';
import { useNavigate } from "react-router-dom";
import { CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import green from "@mui/material/colors/green";
import apis from "../../../apis";

const theme = createTheme({
  palette: {
    primary: { light: green[300], main: "#5F9EA0", dark: green[700] },
  },
});

export default function AddSlot() {
  const navigate = useNavigate();
  const doctor_id = localStorage.getItem("doctor_id");

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [leave, setLeave] = useState("");
  const [workHrsStart, setWorkHrsStart] = useState("");
  const [workHrsEnd, setWorkHrsEnd] = useState("");
  const [breakStart, setBreakStart] = useState("");
  const [breakEnd, setBreakEnd] = useState("");
  const [duration, setDuration] = useState("");

  let formatTime = (timeG)=> {
    let [hours, minutes] = timeG.split(":");
    let hoursI = parseInt(hours);
    let minutesI = parseInt(minutes, 10);
    minutesI = parseFloat((minutesI / 60).toFixed(2));
    let newTimeG = hoursI + minutesI;
    return newTimeG;
  }

  let formatTimeToString = (timeS)=> {
    let flag = "AM";
    let [hours, minutes] = timeS.toString().split(".");
    console.log(parseInt(hours) > 12);
    if (parseInt(hours) > 12) {
      flag = "PM";
      hours = (parseInt(hours) - 12).toString();
    } else if (parseInt(hours) === 0) {
      hours = "12";
    } else if (parseInt(hours) === 12) {
      flag = "PM";
    }

      if (minutes === undefined) {
        minutes = "00";
      } else {
        minutes = (parseInt(minutes) * 6).toString();
      }
    const time_formatted = hours + ":" + minutes + " " + flag;
    return time_formatted;
  }

  let addSlot = async ()=>{

    let formattedDateP = JSON.stringify(selectedDate).split("T")[0].slice(1);
    console.log(formattedDateP);

    if(leave === "yes"){
      console.log("leave, update doctor");
      await apis
        .put(`doctor/${doctor_id}`, {
          $push: {
            bookings: {
              date: formattedDateP,
              isLeave: leave,
            },
          },
        })
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
    }
    else{
      let startTime = formatTime(workHrsStart);
      let breakStartTime = formatTime(breakStart);
      let breakEndTime = formatTime(breakEnd);
      let endTime = formatTime(workHrsEnd);
      let interval = parseInt(duration) / 60;
      let morning = [];
      while (startTime < breakStartTime) {
        morning.push(startTime);
        startTime = startTime + interval;
      }
      console.log(morning);

      let afternoon = [];
      while (breakEndTime < endTime) {
        afternoon.push(breakEndTime);
        breakEndTime = breakEndTime + interval;
      }
      console.log(afternoon);

      const morning_slots = morning.map((item)=>{
        return formatTimeToString(item);
      });

      const afternoon_slots = afternoon.map((item)=>{
        return formatTimeToString(item);
      });

      const slots_for_day = morning_slots.concat(afternoon_slots);
      console.log(slots_for_day);

      await apis
        .put(`doctor/${doctor_id}`, {
          $push: {
            bookings: {
              date: formattedDateP,
              isLeave: leave,
              slots: slots_for_day,
            },
          },
        })
        .then((data) => console.log(data))
        .catch((e) => console.log(e));

    }
  }

  const handleDateChange = (date) => {
    console.log(JSON.stringify(date).includes("2022-09-12"));
    setSelectedDate(date);
  };

  return (
    <div className="container add-slot-page">
      <div className="container shadow add-slot-page-left">
        <div>
          <label>Will you be conducting consultation on this day: </label>
          <div style={{ display: "inline" }}>
            <label>yes </label>
            <input
              type="radio"
              name="leave"
              value="yes"
              onChange={(e) => {
                setLeave(e.target.value);
              }}
            />
            <label>no </label>
            <input
              type="radio"
              name="leave"
              value="no"
              onChange={(e) => {
                setLeave(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label>if no? enter working hours</label>
          <input
            type="time"
            onChange={(e) => {
              setWorkHrsStart(e.target.value);
            }}
          />
          <label>to</label>
          <input
            type="time"
            onChange={(e) => {
              setWorkHrsEnd(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Enter break time: </label>
          <input
            type="time"
            onChange={(e) => {
              setBreakStart(e.target.value);
            }}
          />
          <label>to</label>
          <input
            type="time"
            onChange={(e) => {
              setBreakEnd(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Enter time taken for each patient: </label>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setDuration(e.target.value);
            }}
          />
          <label> minutes</label>
        </div>
        <button className='btn btn-dark' onClick={addSlot}>ADD</button>
      </div>
      <div className="datePickerPatient ">
        <div className="mb-4 mt-4">
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div
                className="container shadow calendar-ui"
                style={{ overflow: "hidden" }}
              >
                <CalendarPicker
                  date={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
