import React from "react";
import Pcard from "../components/Pcard";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import { enGB } from "date-fns/locale";
const theme = createMuiTheme({
  palette: {
    primary: { light: green[300], main: green[500], dark: green[700] },
  },
});

export default function PatientList() {
  // const [value, setValue] = React.useState("2022-07-31");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <div className="Patientlist">
        <div className="container shadow profile-tabbar-container">
          <ul
            className="nav nav-pills mb-3 profile-tabbar"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                className="nav-link active  profile-tabbar-tab"
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
                className="nav-link  profile-tabbar-tab"
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
                className="nav-link profile-tabbar-tab"
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
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade"
              id="new-data"
              role="tabpanel"
              aria-labelledby="New"
            >
              <Pcard flag={"to-be-consulted"} check={0} dateP={selectedDate} />
            </div>
            <div
              class="tab-pane fade"
              id="approved-data"
              role="tabpanel"
              aria-labelledby="Approved"
            >
              <Pcard flag={"consulted"} check={0} dateP={selectedDate} />
            </div>
            <div
              class="tab-pane fade show active"
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
            <MuiThemeProvider theme={theme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enGB}>
                <div className="container shadow calendar-ui" style={{ overflow: "hidden"}}>
                  <Calendar date={selectedDate} onChange={handleDateChange}  />
                </div>
              </MuiPickersUtilsProvider>
            </MuiThemeProvider>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
