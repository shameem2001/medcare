import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import apis from '../../../apis';

export default function DependantCard({ onClicked, id, name, rel }) {

  const navigate = useNavigate();

  const deleteDep = async()=>{
    console.log(id, "clicked");
    await apis.delete(`dependant/${id}`).then((res)=>{
      onClicked(id);
    })
    .catch((e)=>{
      console.log(e);
    })
  }

  return (
    <div>
      <div className="dependant-list-card">
        <div className="dependant-list-card-left">
          <div className="dependant-list-card-left-circle-avatar">S</div>
          <div className="container dependant-list-card-left-details">
            <h5>{name}</h5>
            <h6>{rel}</h6>
          </div>
        </div>
        <div className="dependant-list-card-right">
          <i class="fa-solid fa-pen-to-square dependant-list-card-right-icons fa-lg"></i>
          <i className="fa-solid fa-trash-can dependant-list-card-right-icons fa-lg" onClick={deleteDep}></i>
        </div>
      </div>
      <hr className="dependants-list-card-hr" />
    </div>
  );
}
