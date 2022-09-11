import {React} from "react";
import {useState} from "react";
import {useEffect} from "react";
import Psubcard from './Psubcard'
import apis from "../../../apis";


let Patient = [
  {
    user_id: 1,
    name: "SHAMEEM",
    status:"to-be-consulted",
    phoneNumber:"0978657891",
    show:"All",
    date:"2022-08-02",
    time:"10.00 AM"
  },
  {
    user_id: 2,
    name: "JEEVAN",
    status:"to-be-consulted",
    phoneNumber:"012478965",
    show:"All",
    date:"2022-08-02",
    time:"11.00 AM"
  },
  {
    user_id: 3,
    name: "ANAND",
    status:"consulted",
    phoneNumber:"0876500934",
    show:"All",
    date:"2022-08-20",
    time:"12.00 AM"
  },
  {
    user_id: 4,
    name: "Joseph Renil",
    status:"consulted",
    phoneNumber:"0923099123",
    show:"All",
    date:"2022-08-02",
    time:"11.00 AM"
  },
  {
    user_id: 4,
    name: "Adwaith",
    status:"consulted",
    phoneNumber:"0923099123",
    show:"All",
    date:"2022-08-29",
    time:"05.00 PM"
  },
];
export default function Pcard({flag,check,dateP}) {
  const [details,setDetails]=useState(Patient);

    const fetchUserData = async () => {
    let results;
    await apis
      .get("appointment")
      .then((data) => {
        // console.log(data.data);
        results = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if (results !== null) {
      setDetails(results);
      console.log(results);
    }
  };

  useEffect(() => {
    // const postData =async () => {
    //   await apis.post("prescription",{
    //     user_id:"62eac78745c82de1c0ff6f31",
    //     doctor_id:"62efe3e72d916a9451598d70",
    //     title:"21-10-2022",
    //     observation:"heavy depression",
    //     prescription:"pmol,dolo,cocaine"
    //   })

    //   .then((res)=>{console.log(res)})
    //   .catch((e)=>console.log(e))
    // }
    fetchUserData();
    // postData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <div>
      <div className='card Patientcard shadow mb-4' >
       {check? details.filter((item1)=>{ return JSON.stringify(dateP).includes(item1.date) }).map((item)=>{ return( <Psubcard id={item.user_id} name={item.name} status={item.status} phoneNumber={item.phoneNumber} date={item.date} time={item.time}/>)}) :
        details.filter((item1)=>{return item1.status===flag && JSON.stringify(dateP).includes(item1.date)}).map((item)=>{
          return (<Psubcard id={item.user_id} name={item.name} status={item.status} phoneNumber={item.phoneNumber} date={item.date} time={item.time}/>)
        })
       }
      </div>
      
    </div>
  )
}
