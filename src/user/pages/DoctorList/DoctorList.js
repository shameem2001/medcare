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
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 8,
    doctors: 4,
  },
  {
    id: 2,
    img: "dg.png",
    name: "Mims Hospital, Chala",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 4,
    doctors: 4,
  },
  {
    id: 3,
    img: "dg.png",
    name: "BHMS, Chala",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 2,
    doctors: 84,
  },
  {
    id: 4,
    img: "dg.png",
    name: "Dhanalakshmi Hospital, Thana",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 21,
    doctors: 47,
  },
  {
    id: 5,
    img: "dg.png",
    name: "Speciality Hospital, Thana",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 112,
    doctors: 38,
  },
  {
    id: 6,
    img: "dg.png",
    name: "HNC Hospital, Mattannur",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam.",
    departments: 56,
    doctors: 28,
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
    name: "Ashraf",
    department: "Dermatology",
    experience: 3,
    hospital: "Koyili Hospital",
  },
  {
    id: 3,
    img: "profile.png",
    name: "Sreejith",
    department: "Dermatology",
    experience: 3,
    hospital: "Dhanalakshmi Hospital",
  },
  {
    id: 4,
    img: "profile.png",
    name: "Hansiraj",
    department: "Dermatology",
    experience: 3,
    hospital: "Speciality Hospital",
  },
  {
    id: 5,
    img: "profile.png",
    name: "Razak",
    department: "Dermatology",
    experience: 3,
    hospital: "AKG Hospital",
  },
  {
    id: 6,
    img: "profile.png",
    name: "Majeed",
    department: "Dermatology",
    experience: 3,
    hospital: "Smile Clinic",
  },
];

export default function DoctorList() {
  return (
    <div className="parent">
      <div className="container">
        <div className="container shadow-sm doctor-list-search-card">
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
            {hospitals_list.map((hospital) => {
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
            })}
            {/* <div className="doctor-card-sheet">
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
            })} */
            /* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
