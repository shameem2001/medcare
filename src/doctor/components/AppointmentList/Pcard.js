<<<<<<< HEAD
import React from 'react'
import Psubcard from './Psubcard'


let Patient = [
  {
    id: 1,
    name: "SHAMEEM",
    status:"to-be-consulted",
    phoneNumber:"0978657891",
    show:"All",
    date:"2022-08-02",
    time:"10.00 AM"
  },
  {
    id: 2,
    name: "JEEVAN",
    status:"to-be-consulted",
    phoneNumber:"012478965",
    show:"All",
    date:"2022-08-02",
    time:"11.00 AM"
  },
  {
    id: 3,
    name: "ANAND",
    status:"consulted",
    phoneNumber:"0876500934",
    show:"All",
    date:"2022-08-20",
    time:"12.00 AM"
  },
  {
    id: 4,
    name: "Joseph Renil",
    status:"consulted",
    phoneNumber:"0923099123",
    show:"All",
    date:"2022-08-02",
    time:"11.00 AM"
  },
  {
    id: 4,
    name: "Adwaith",
    status:"consulted",
    phoneNumber:"0923099123",
    show:"All",
    date:"2022-08-29",
    time:"05.00 PM"
  },
];
export default function Pcard({flag,check,dateP}) {
  const [details,setDetails]=React.useState(Patient);
  return (
    <div>
      <div className='card Patientcard shadow mb-4' >
       {check? details.filter((item1)=>{ return JSON.stringify(dateP).includes(item1.date) }).map((item)=>{ return( <Psubcard name={item.name} status={item.status} phoneNumber={item.phoneNumber} date={item.date} time={item.time}/>)}) :
        details.filter((item1)=>{return item1.status===flag && JSON.stringify(dateP).includes(item1.date)}).map((item)=>{
          return (<Psubcard name={item.name} status={item.status} phoneNumber={item.phoneNumber} date={item.date} time={item.time}/>)
        })
       }
      </div>
    </div>
  )
=======
import { React } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Psubcard from "./Psubcard";
import apis from "../../../apis";

export default function Pcard({usersData, flag, dateP }) {
  const [details, setDetails] = useState([]);
  const doctor_id = localStorage.getItem("doctor_id");

  const fetchAppointmentData = async () => {
    let results;
    await apis
      .get("appointment")
      .then((data) => {
        results = data.data.filter((doc) => {
          return doc.doctor_id === doctor_id && doc.date === dateP;
        });
      })
      .catch((error) => {
        console.log(error);
      });

    if (results !== null) {
      results.sort(function (a, b) {
        return modifyTime(a.time, a.session) - modifyTime(b.time, b.session);
      });
      setDetails(results);
    }
  };

  let modifyTime = (time, session)=>{
    let [hours, min] = time.split(":");
    let hoursNum = parseInt(hours);
    if(session === "Afternoon"){
      hoursNum += 12;
    }
    let minNum = parseFloat(min) / 60;
    return hoursNum + minNum;
  }

  useEffect(() => {
    fetchAppointmentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="card Patientcard shadow mb-4">
        {flag === "All"
          ? details.map((item) => {
              const user = usersData.filter((item2)=>{
                return item2._id === item.user_id;
              })[0];

              return (
                <Psubcard
                  user_id={item.user_id}
                  name={user.name}
                  phone={user.phoneNumber}
                  img={user.img}
                  appointment_id={item._id}
                  date={item.date}
                  time={item.time}
                  session={item.session}
                  status={item.status}
                />
              );
            })
          : flag === "to-be-consulted"
          ? details
              .filter((item1) => {
                return item1.status === "Active";
              })
              .map((item) => {
                const user = usersData.filter((item2) => {
                  return item2._id === item.user_id;
                })[0];

                return (
                  <Psubcard
                    user_id={item.user_id}
                    name={user.name}
                    phone={user.phoneNumber}
                    img={user.img}
                    appointment_id={item._id}
                    date={item.date}
                    time={item.time}
                    session={item.session}
                    status={item.status}
                  />
                );
              })
          : details
              .filter((item1) => {
                return item1.status === "Inactive";
              })
              .map((item) => {
                const user = usersData.filter((item2) => {
                  return item2._id === item.user_id;
                })[0];

                return (
                  <Psubcard
                    user_id={item.user_id}
                    name={user.name}
                    phone={user.phoneNumber}
                    img={user.img}
                    appointment_id={item._id}
                    date={item.date}
                    time={item.time}
                    session={item.session}
                    status={item.status}
                  />
                );
              })}
      </div>
    </div>
  );
>>>>>>> origin/pharmacy-final
}
