import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import apis from "../../../../apis";
import "./Add_dependant.scss";

export default function Add_dependant(props) {
  let [name, setname] = useState("");
  let [relationship, setrel] = useState("");
  const userId = localStorage.getItem("_id");

  let submit = async (e) => {
    console.log("Added");
    await apis.post("dependant", {
      user_id: userId,
      name: name,
      relationship: relationship,
    }).then(()=>{
      props.setTrigger(false);

    }).catch((e)=>{console.log(e)});
  };

  return props.trigger ? (
    <div className="container shadow popup">
      <div className="popup-inner">
        <div className="top">
          <TextField
            className="Dependant-name"
            required
            label="dependant name"
            variant="outlined"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <TextField
            className="Dependant-relationship"
            required
            label="dependant relationship"
            variant="outlined"
            onChange={(e) => {
              setrel(e.target.value);
            }}
          />
        </div>
        <div className="bottom">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <button className="btn login-button" onClick={submit}>
            ADD
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
