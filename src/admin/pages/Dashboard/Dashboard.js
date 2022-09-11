import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apis from "../../../apis";
import "./Dashboard.scss";

export default function Dashboard() {
  const [doctDetails, setDoctdetails] = useState([
    {
      name: "Jeevan",
      department: "Physician",
      email: "sample@gmail.com",
      phoneNumber: "0987654312",
    },
  ]);

  const removeDoctor = async (doctorId) => {
    await apis
      .delete(`doctor/${doctorId}`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    
    getDoctList();
  };

  const getDoctList = async () => {
    console.log("hi from getdoctlist");
    let results;
    await apis
      .get("doctor")
      .then((data) => {
        results = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if (results !== null) {
      setDoctdetails(results);
      console.log(results);
    }
  };

  useEffect(() => {
    getDoctList();
  }, [doctDetails.length]);

  let newRow = (e) => {
    return (
      <tr>
        <td>{e.name}</td>
        <td>{e.department}</td>
        <td>{e.email}</td>
        <td>{e.phoneNumber}</td>
        <th>
          <button
            className="btn actionbutton"
            onClick={() => {
              removeDoctor(e._id);
            }}
          >
            Remove
          </button>
        </th>
      </tr>
    );
  };
  return (
    <div className="fullpage">
      <div className="mainpart">
        <div className="rightpart">
          <div className="divtable">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {doctDetails.map((item) => {
                  return newRow(item);
                })}
              </tbody>
            </table>
          </div>
          <div className="bottompart">
            <button className="btn leftbutton">
              <Link className="link" to="/admin/add-doctor">
                ADD DOCTOR
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
