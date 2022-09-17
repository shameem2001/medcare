import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
import "./Dashboard.scss";

export default function Dashboard() {
  const navigate = useNavigate();
  const admin_id = localStorage.getItem("admin_id");

  const [doctDetails, setDoctdetails] = useState([]);

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
        results = data.data.filter((doc) => {
          return doc.admin_id === admin_id;
        });
      })
      .catch((error) => {
        console.log(error);
      });

    if (results !== null) {
      setDoctdetails(results);
      console.log(results);
    }
  };

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


  useEffect(() => {
    getDoctList();
    getPharmList();
  }, [doctDetails.length]);


    const [pharmDetails, setPharmdetails] = useState([]);

    const removePharmacy = async (pharmId) => {
      await apis
        .delete(`pharmacy/${pharmId}`)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));

      getPharmList();
    };

    const getPharmList = async () => {
      console.log("hi from getPharmlist");
      let results;
      await apis
        .get("pharmacy")
        .then((data) => {
          results = data.data.filter((pharm) => {
            return pharm.admin_id === admin_id;
          });
        })
        .catch((error) => {
          console.log(error);
        });

      if (results.length === 0 || results !== null) {
        console.log(results);
        setPharmdetails(results);
        console.log(results);
      }
    };

  let newRow1 = (e) => {
    return (
      <tr>
        <td>{e.hospital_name}</td>
        <td>{e.district}</td>
        <td>{e.email}</td>
        <td>{e.phoneNumber}</td>
        <th>
          <button
            className="btn actionbutton"
            onClick={() => {
              removePharmacy(e._id);
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
        <div className="leftpart">
          <div className="container shadow divtable">
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
          <button
            className="btn add-button"
            onClick={() => {
              navigate("/admin/add-doctor");
            }}
          >
            ADD DOCTOR
          </button>
        </div>
        <div className="rightpart">
          <div className="container shadow divtable">
            <table className="table">
              <thead>
                <tr>
                  <th>Hospital Name</th>
                  <th>District</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pharmDetails.map((item) => {
                  return newRow1(item);
                })}
              </tbody>
            </table>
          </div>
          <div className="bottompart">
            <button
              className="btn add-button"
              onClick={() => {
                navigate("/admin/add-pharmacy");
              }}
            >
              ADD PHARMACY
            </button>
          </div>
      </div>
    </div>
  );
}
