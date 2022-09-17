<<<<<<< HEAD
import React from 'react'

export default function DependantCard() {
=======
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import apis from '../../../apis';

export default function DependantCard({ id, name, rel }) {

  const navigate = useNavigate();

  const deleteDep = async()=>{
    await apis.delete(`dependant/${id}`).then((res)=>{
      navigate("/profile", {
        state: {
          user_id: localStorage.getItem("_id")
        },
      });
    })
    .catch((e)=>{
      console.log(e);
    })
  }

>>>>>>> origin/pharmacy-final
  return (
    <div>
      <div className="dependant-list-card">
        <div className="dependant-list-card-left">
          <div className="dependant-list-card-left-circle-avatar">S</div>
          <div className="container dependant-list-card-left-details">
<<<<<<< HEAD
            <h5>Alex Kister</h5>
            <h6>Brother</h6>
=======
            <h5>{name}</h5>
            <h6>{rel}</h6>
>>>>>>> origin/pharmacy-final
          </div>
        </div>
        <div className="dependant-list-card-right">
          <i class="fa-solid fa-pen-to-square dependant-list-card-right-icons fa-lg"></i>
<<<<<<< HEAD
          <i className="fa-solid fa-trash-can dependant-list-card-right-icons fa-lg"></i>
=======
          <i className="fa-solid fa-trash-can dependant-list-card-right-icons fa-lg" onClick={deleteDep}></i>
>>>>>>> origin/pharmacy-final
        </div>
      </div>
      <hr className="dependants-list-card-hr" />
    </div>
  );
}
