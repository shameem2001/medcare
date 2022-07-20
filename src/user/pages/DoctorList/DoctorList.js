import React from "react";
import { Link } from "react-router-dom";
import HospitalListCard from '../../components/DoctorList/HospitalListCard';
import DoctorListCard from "../../components/DoctorList/DoctorListCard";
import './DoctorList.scss';

let hospitals_list = [
  {
    id: 1,
    img: "dg.png",
    name: "Aster Medcity, Cheranellur",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 12,
    doctors: 34
  },
  {
    id: 2,
    img: "dg.png",
    name: "Aster Medcity, Cheranellur",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 12,
    doctors: 34
  },
  {
    id: 3,
    img: "dg.png",
    name: "Aster Medcity, Cheranellur",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 12,
    doctors: 34
  },
  {
    id: 4,
    img: "dg.png",
    name: "Aster Medcity, Cheranellur",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 12,
    doctors: 34
  },
  {
    id: 5,
    img: "dg.png",
    name: "Aster Medcity, Cheranellur",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 12,
    doctors: 34
  },
  {
    id: 6,
    img: "dg.png",
    name: "Aster Medcity, Cheranellur",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 12,
    doctors: 34
  },
];

let doctors_list = [
  {
    id: 1,
    img: "profile.png",
    name: "Feroz BK",
    department: "Dermatology",
    experience: 3,
    hospital: "Sreechand Hospital",
  },
  {
    id: 2,
    img: "profile.png",
    name: "Feroz BK",
    department: "Dermatology",
    experience: 3,
    hospital: "Sreechand Hospital",
  },
  {
    id: 3,
    img: "profile.png",
    name: "Feroz BK",
    department: "Dermatology",
    experience: 3,
    hospital: "Sreechand Hospital",
  },
  {
    id: 4,
    img: "profile.png",
    name: "Feroz BK",
    department: "Dermatology",
    experience: 3,
    hospital: "Sreechand Hospital",
  },
  {
    id: 5,
    img: "profile.png",
    name: "Feroz BK",
    department: "Dermatology",
    experience: 3,
    hospital: "Sreechand Hospital",
  },
  {
    id: 6,
    img: "profile.png",
    name: "Feroz BK",
    department: "Dermatology",
    experience: 3,
    hospital: "Sreechand Hospital",
  },
];

export default function DoctorList() {
  return (
    <div className="parent">
      <div className="container">
        <Link to="/" className="link">
          <div />
          <div className="back-to-home">
            <i className="fa-solid fa-angle-left back-icon"></i>
            <h6 className="home-url">Back to Home</h6>
          </div>
        </Link>
        <div className="container shadow doctor-list-search-card">
          <div className="search-boxes">
            <label>Enter District</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Kannur</option>
              <option value="1">Kannur</option>
              <option value="2">Kozhikode</option>
              <option value="3">Wayanad</option>
            </select>
          </div>

          <div className="search-boxes">
            <label>Enter City</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Kannur Town</option>
              <option value="1">Taliparamba</option>
              <option value="2">Payyannur</option>
              <option value="3">Thalassery</option>
            </select>
          </div>

          <div className="search-boxes">
            <label className="form-label label">Doctors|clinic|Specialty</label>
            <input
              className="form-control"
              type="text"
              placeholder="Doctors|clinic|Specialty"
            />
          </div>

          <button className="btn btn-large search-button">Search</button>
        </div>

        <div className="container shadow doctor-list-card-container">
          <div className="container cont1">
            <h6 className="cont1-h6">Kannur / Hospitals | Clinics</h6>
          </div>

          <div className="container cont2">
            <div className="filter">
              <h5 className="filter-h5">11 Hospital(s) | Clinic(s)</h5>
              <div className="vl" />
              <h5>Filter By: </h5>
              <div class="chip">All</div>
              <div class="chip">Clinics</div>
              <div class="chip">Hospitals</div>
            </div>
            <div className="sort-by">
              <h6 className="sort-by-h6">Sort By:</h6>
              <select className="form-select sort-by-select">
                <option selected>Rating</option>
                <option value="1">Rating</option>
                <option value="2">Distance</option>
                <option value="3">Price</option>
              </select>
            </div>
          </div>
          <div class="container cont3">
            {/* {hospitals_list.map((hospital) => {
              return (
                <HospitalListCard
                  id={hospital.id}
                  img={hospital.img}
                  name={hospital.name}
                  address={hospital.address}
                  departments={hospital.departments}
                  doctors={hospital.doctors}
                />
              );
            })} */}
            <div className="doctor-card-sheet">
              {doctors_list.map((doctor) => {
              return (
                <DoctorListCard
                  id={doctor.id}
                  img={doctor.img}
                  name={doctor.name}
                  department={doctor.department}
                  experience={doctor.experience}
                  hospital={doctor.hospital}
                />
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
