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
       {check? details.filter((item1)=>{ return JSON.stringify(dateP).includes(item1.date) }).map((item)=>{ return(<Psubcard name={item.name} status={item.status} phoneNumber={item.phoneNumber} date={item.date} time={item.time}/>)}) :
        details.filter((item1)=>{return item1.status===flag && JSON.stringify(dateP).includes(item1.date)}).map((item)=>{
          return (<Psubcard name={item.name} status={item.status} phoneNumber={item.phoneNumber} date={item.date} time={item.time}/>)
        })
       }
      </div>
    </div>
  )
}
