import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./Adminlogin.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import apis from "../../../apis";
import { useNavigate } from "react-router-dom";

const AdminData=[
  {
    name:"admin3",
    password:"admin3"
  }
]

function Adminlogin() {
  const navigate=useNavigate();

  const [newId, setId] = useState("");
  const [newPassw, setPassw] = useState("");
  const [adminDetails, setAdminDetails] = useState(AdminData);
  let data;
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
      let doesMatch = adminfetcheddata.filter((data)=>{
        return data.name === newId && data.password === newPassw;
        
      });
      if(doesMatch[0]!=null){
      console.log(`congratulation you are logged in as ${doesMatch[0].name}`);
      navigate("/admin/dashboard",{state:{Aname:doesMatch[0].name}});
      }
      else{
        console.log("invalid credential")
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
              // console.log(e.target.value);
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
              // console.log(e.target.value);
            }}
          />
        </div>
        <div className="row4">
          <button className="row41" onClick={submit}>
            {/* <Link className="link" to='/admin/dashboard'>LOGIN</Link> */}
            click here
          </button>
        </div>
      </div>
    </div>
  );
}
export default Adminlogin;
