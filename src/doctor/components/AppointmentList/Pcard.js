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
}
