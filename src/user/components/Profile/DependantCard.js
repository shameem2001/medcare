import React from 'react'

export default function DependantCard({ name, rel }) {
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
          <i className="fa-solid fa-trash-can dependant-list-card-right-icons fa-lg"></i>
        </div>
      </div>
      <hr className="dependants-list-card-hr" />
    </div>
  );
}
