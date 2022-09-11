import React, { useState, useEffect } from "react";
import "./AppointmentList.scss";
import Pcard from "../../components/AppointmentList/Pcard";
import { CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import green from "@mui/material/colors/green";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";

const theme = createTheme({
  palette: {
    primary: { light: green[300], main: "#5F9EA0", dark: green[700] },
  },
});

export default function PatientList() {
  const navigate = useNavigate();
  const doctor_id = localStorage.getItem("doctor_id");
  console.log(doctor_id);

  useEffect(() => {
    if (doctor_id !== null) {
      console.log("no prob");
    } else {
      console.log("go to login");
      navigate("/doctor/login");
    }
  }, []);

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  // add-slot
  const [leave, setLeave] = useState("no");
  const [workHrsStart, setWorkHrsStart] = useState("10:00");
  const [workHrsEnd, setWorkHrsEnd] = useState("18:00");
  const [breakStart, setBreakStart] = useState("12:00");
  const [breakEnd, setBreakEnd] = useState("13:00");
  const [duration, setDuration] = useState("30");

  const handleDateChange = (date) => {
    setLeave("no");
    setWorkHrsStart("10:00");
    setWorkHrsEnd("18:00");
    setBreakStart("12:00");
    setBreakEnd("13:00");
    setDuration("30");
    setSelectedDate(date);
  };

  let formatTime = (timeG) => {
    let [hours, minutes] = timeG.split(":");
    let hoursI = parseInt(hours);
    let minutesI = parseInt(minutes, 10);
    minutesI = parseFloat((minutesI / 60).toFixed(2));
    let newTimeG = hoursI + minutesI;
    return newTimeG;
  };

  let formatTimeToString = (timeS) => {
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
  };

  let addSlot = async () => {
    let formattedDateP = JSON.stringify(selectedDate).split("T")[0].slice(1);
    console.log(formattedDateP);

    if (leave === "yes") {
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
    } else {
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

      const morning_slots = morning.map((item) => {
        return formatTimeToString(item);
      });

      const afternoon_slots = afternoon.map((item) => {
        return formatTimeToString(item);
      });

      const slots_for_day = morning_slots.concat(afternoon_slots);
      console.log(slots_for_day);

      await apis
        .post("slot", {
              doctor_id: doctor_id,
              date: formattedDateP,
              isLeave: leave,
              slots: slots_for_day,
        })
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
    }
  };

  const [day, month, dayno, year] = selectedDate.toString().split(" ");

  let isSlotEmpty = true;

  return (
    <div className="patient-list-cont">
      <div className="Patientlist">
        {isSlotEmpty === true ? (
          <div className="container add-slot-page">
            <div className="container shadow add-slot-page-left">
              <h3 className="textCenter">{`${month} ${dayno}th ${year}`}</h3>
              <div>
                <label>Will you be conducting consultation on this day: </label>
                <div style={{ display: "inline" }}>
                  <label>yes </label>
                  <input
                    className="addslot-radio"
                    type="radio"
                    name="leave"
                    value="yes"
                    onChange={(e) => {
                      setLeave(e.target.value);
                    }}
                  />
                  <label>no </label>
                  <input
                    className="addslot-radio"
                    type="radio"
                    name="leave"
                    value="no"
                    checked
                    onChange={(e) => {
                      setLeave(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label>Enter Working hours</label>
                <input
                  className="add-slot-input"
                  type="time"
                  defaultValue={workHrsStart}
                  value={workHrsStart}
                  onChange={(e) => {
                    setWorkHrsStart(e.target.value);
                  }}
                />
                <label>to</label>
                <input
                  className="add-slot-input"
                  type="time"
                  value={workHrsEnd}
                  defaultValue={workHrsEnd}
                  onChange={(e) => {
                    setWorkHrsEnd(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Enter Break time: </label>
                <input
                  className="add-slot-input"
                  type="time"
                  value={breakStart}
                  defaultValue={breakStart}
                  onChange={(e) => {
                    setBreakStart(e.target.value);
                  }}
                />
                <label>to</label>
                <input
                  className="add-slot-input"
                  type="time"
                  value={breakEnd}
                  defaultValue={breakEnd}
                  onChange={(e) => {
                    setBreakEnd(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Enter time taken for each patient: </label>
                <input
                  className="patient-duration"
                  value={duration}
                  defaultValue={duration}
                  type="text"
                  onFocus={()=>{setDuration("")}}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setDuration(e.target.value);
                  }}
                />
                <label> minutes</label>
              </div>
              <div className="addslot-btn">
                <button className="btn" onClick={addSlot}>
                  ADD
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container shadow profile-tabbar1-container">
            <ul
              className="nav nav-pills mb-3 profile-tabbar1"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active  profile-tabbar1-tab"
                  id="All"
                  data-bs-toggle="pill"
                  data-bs-target="#all-data"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  All Status
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  profile-tabbar1-tab"
                  id="New"
                  data-bs-toggle="pill"
                  data-bs-target="#new-data"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  To Be Consulted
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link profile-tabbar1-tab"
                  id="Approved"
                  data-bs-toggle="pill"
                  data-bs-target="#approved-data"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Consulted
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade"
                id="new-data"
                role="tabpanel"
                aria-labelledby="New"
              >
                <Pcard
                  flag={"to-be-consulted"}
                  check={0}
                  dateP={selectedDate}
                />
              </div>
              <div
                className="tab-pane fade"
                id="approved-data"
                role="tabpanel"
                aria-labelledby="Approved"
              >
                <Pcard flag={"consulted"} check={0} dateP={selectedDate} />
              </div>
              <div
                className="tab-pane fade show active"
                id="all-data"
                role="tabpanel"
                aria-labelledby="All"
              >
                <Pcard flag={"All"} check={1} dateP={selectedDate} />
              </div>
            </div>
          </div>
        )}
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
    </div>
  );
}
