import React, {useState} from 'react';
import './AddSlot.scss';
import { useNavigate } from "react-router-dom";
import { CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import green from "@mui/material/colors/green";

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

  const handleDateChange = (date) => {
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
              console.log(e.target.value, typeof e.target.value);
            }}
          />
          <label>to</label>
          <input
            type="time"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Enter break time: </label>
          <input
            type="time"
            onChange={(e) => {
              console.log(e.target.value, typeof e.target.value);
            }}
          />
          <label>to</label>
          <input
            type="time"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Enter time taken for each patient: </label>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <label> minutes</label>
        </div>
        <button className='btn btn-dark'>ADD</button>
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
