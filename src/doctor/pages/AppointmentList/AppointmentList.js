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
<<<<<<< HEAD
=======
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
>>>>>>> origin/pharmacy-final

const theme = createTheme({
  palette: {
    primary: { light: green[300], main: "#5F9EA0", dark: green[700] },
  },
});

export default function PatientList() {
  const navigate = useNavigate();
  const doctor_id = localStorage.getItem("doctor_id");
  console.log(doctor_id);

<<<<<<< HEAD
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
=======
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  // add-slot
  const [isWorkday, setIsWorkday] = useState("yes");
>>>>>>> origin/pharmacy-final
  const [workHrsStart, setWorkHrsStart] = useState("10:00");
  const [workHrsEnd, setWorkHrsEnd] = useState("18:00");
  const [breakStart, setBreakStart] = useState("12:00");
  const [breakEnd, setBreakEnd] = useState("13:00");
  const [duration, setDuration] = useState("30");
<<<<<<< HEAD

  const handleDateChange = (date) => {
    setLeave("no");
=======
  const [fetchedSlots, setFetchedSlots] = useState([]);
  const [slotExists, setSlotExists] = useState(false);

  useState(() => {
    apis.get("slot").then((data) => {
      setFetchedSlots(data.data);
    });
  }, []);

  const handleDateChange = (date) => {
    setIsWorkday("yes");
>>>>>>> origin/pharmacy-final
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

<<<<<<< HEAD
    if (leave === "yes") {
=======
    const doesSlotExists = fetchedSlots.filter((data) => {
      return data.date === formattedDateP && data.doctor_id === doctor_id;
    });

    if (doesSlotExists.length !== 0) {
      alert("Slot exists");
    } else if (isWorkday === "no") {
>>>>>>> origin/pharmacy-final
      console.log("leave, update doctor");
      await apis
        .put(`doctor/${doctor_id}`, {
          $push: {
            bookings: {
              date: formattedDateP,
<<<<<<< HEAD
              isLeave: leave,
=======
              isLeave: isWorkday,
>>>>>>> origin/pharmacy-final
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
<<<<<<< HEAD
              doctor_id: doctor_id,
              date: formattedDateP,
              isLeave: leave,
              slots: slots_for_day,
        })
        .then((data) => console.log(data))
=======
          doctor_id: doctor_id,
          date: formattedDateP,
          isLeave: isWorkday,
          slots: slots_for_day,
        })
        .then((data) => {
          console.log(data);
          setShow(true);
        })
>>>>>>> origin/pharmacy-final
        .catch((e) => console.log(e));
    }
  };

<<<<<<< HEAD
  const [day, month, dayno, year] = selectedDate.toString().split(" ");

  let isSlotEmpty = false;
=======
  let [isSlotEmpty, setIsSlotEmpty] = useState(false);
  let [details, setDetails] = useState({});

  const fetchAppointmentData = async () => {
    let results;
    await apis
      .get("appointment")
      .then((data) => {
        if (data.data.length !== 0) {
          console.log("Here");
          results = data.data.filter((doc) => {
            const date = JSON.stringify(selectedDate).split("T")[0].slice(1);
            if(fetchedSlots.filter((data)=>{return date ===data.date && doctor_id === data.doctor_id}).length !== 0){
              setSlotExists(true);
            }
            else{
              setSlotExists(false);
            }
            console.log(date);
            return doc.doctor_id === doctor_id && doc.date === date;
          });

          if (results.length === 0) {
            setIsSlotEmpty(true);
            console.log(isSlotEmpty);
          } else {
            setDetails(results);
            setIsSlotEmpty(false);
            console.log(isSlotEmpty);
          }
        } else {
          setIsSlotEmpty(true);
          console.log(isSlotEmpty);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [usersData, setUsersData] = useState([]);

  const getUserNameAndPhone = async (id) => {
    let results;
    await apis
      .get(`user`)
      .then((data) => {
        results = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if (results !== null) {
      setUsersData(results);
    }
  };

  useEffect(() => {
    if (doctor_id !== null) {
      console.log("no prob");
      fetchAppointmentData();
      getUserNameAndPhone();
    } else {
      console.log("go to login");
      navigate("/doctor/login");
    }
  }, [selectedDate]);

  const [day, month, dayno, year] = selectedDate.toString().split(" ");
>>>>>>> origin/pharmacy-final

  return (
    <div className="patient-list-cont">
      <div className="Patientlist">
        {isSlotEmpty === true ? (
          <div className="container add-slot-page">
            <div className="container shadow add-slot-page-left">
<<<<<<< HEAD
              <h3 className="textCenter">{`${month} ${dayno}th ${year}`}</h3>
=======
              <div className="slotExist">
                <h3 className="textCenter">{`${month} ${dayno}th ${year}`}</h3>
                {slotExists === true?
                  <h6>Slots already Added</h6>:
                  null
                }
              </div>
>>>>>>> origin/pharmacy-final
              <div>
                <label>Will you be conducting consultation on this day: </label>
                <div style={{ display: "inline" }}>
                  <label>yes </label>
                  <input
                    className="addslot-radio"
                    type="radio"
                    name="leave"
                    value="yes"
<<<<<<< HEAD
                    onChange={(e) => {
                      setLeave(e.target.value);
=======
                    checked
                    onChange={(e) => {
                      setIsWorkday(e.target.value);
>>>>>>> origin/pharmacy-final
                    }}
                  />
                  <label>no </label>
                  <input
                    className="addslot-radio"
                    type="radio"
                    name="leave"
                    value="no"
<<<<<<< HEAD
                    checked
                    onChange={(e) => {
                      setLeave(e.target.value);
=======
                    onChange={(e) => {
                      setIsWorkday(e.target.value);
>>>>>>> origin/pharmacy-final
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
<<<<<<< HEAD
                  onFocus={()=>{setDuration("")}}
=======
                  onFocus={() => {
                    setDuration("");
                  }}
>>>>>>> origin/pharmacy-final
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
<<<<<<< HEAD
=======
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Slots added!</Modal.Title>
                  </Modal.Header>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
>>>>>>> origin/pharmacy-final
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
<<<<<<< HEAD
                  flag={"to-be-consulted"}
                  check={0}
                  dateP={selectedDate}
=======
                  usersData={usersData}
                  flag={"to-be-consulted"}
                  dateP={JSON.stringify(selectedDate).split("T")[0].slice(1)}
>>>>>>> origin/pharmacy-final
                />
              </div>
              <div
                className="tab-pane fade"
                id="approved-data"
                role="tabpanel"
                aria-labelledby="Approved"
              >
<<<<<<< HEAD
                <Pcard flag={"consulted"} check={0} dateP={selectedDate} />
=======
                <Pcard
                  usersData={usersData}
                  flag={"consulted"}
                  dateP={JSON.stringify(selectedDate).split("T")[0].slice(1)}
                />
>>>>>>> origin/pharmacy-final
              </div>
              <div
                className="tab-pane fade show active"
                id="all-data"
                role="tabpanel"
                aria-labelledby="All"
              >
<<<<<<< HEAD
                <Pcard flag={"All"} check={1} dateP={selectedDate} />
=======
                <Pcard
                  usersData={usersData}
                  flag={"All"}
                  dateP={JSON.stringify(selectedDate).split("T")[0].slice(1)}
                />
>>>>>>> origin/pharmacy-final
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
