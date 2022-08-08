import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import "./Adminlogin.scss";
import { Box, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Adminlogin() {
  const navigate = useNavigate();

  let [newId, setId] = useState("");
  let [newPassw, setPassw] = useState("");

  var adminfetcheddata;
  let getAdmin = async () => {
    await apis
      .get("admin")
      .then((data) => {
        adminfetcheddata = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    let doesMatch = adminfetcheddata.filter((data) => {
      return data.name === newId && data.password === newPassw;
    });

    if (doesMatch[0] != null) {
      console.log(`congratulation you are logged in as ${doesMatch[0].name}`);
      localStorage.setItem("admin_id", doesMatch[0]._id);
      localStorage.setItem("admin_name", doesMatch[0].name);
      navigate("/admin/dashboard");
    } else {
      console.log("invalid credential");
    }
  };

  const submit = () => {
    console.log(newId);
    console.log(newPassw);
    getAdmin();
  };

  return (
    <div className="adminlog">
      <div className="container shadow mainbox">
        <Box className="row1">
          <AccountCircleIcon
            className="row11"
            color="primary"
            size="larger"
            sx={{ fontSize: 80 }}
          />
          <h1 className="row12"> Admin</h1>
        </Box>
        <div className="row2">
          <TextField
            className="row21"
            label="Admin-id"
            variant="outlined"
            id="Admin_id"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div className="row3">
          <TextField
            className="row31"
            label="password"
            variant="outlined"
            type="password"
            id="passw"
            onChange={(e) => {
              setPassw(e.target.value);
            }}
          />
        </div>
        <div className="row4">
          <button className="row41" onClick={submit}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
export default Adminlogin;
