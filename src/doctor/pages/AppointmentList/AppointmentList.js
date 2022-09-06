import React from "react";
import "./AppointmentList.scss";
import Pcard from "../../components/AppointmentList/Pcard";
import { CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import green from "@mui/material/colors/green";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: { light: green[300], main: "#5F9EA0", dark: green[700] },
  },
});

export default function PatientList() {
  const navigate = useNavigate();
  const doctor_id = localStorage.getItem("doctor_id");
  console.log(doctor_id);

  useEffect(()=>{
    if (doctor_id !== null) {
      console.log("no prob");
    } else {
      console.log("go to login");
      navigate("/doctor/login");
    }
  }, []);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  return (
    <div className="patient-list-cont">
      <div className="Patientlist">
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
              <Pcard flag={"to-be-consulted"} check={0} dateP={selectedDate} />
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
