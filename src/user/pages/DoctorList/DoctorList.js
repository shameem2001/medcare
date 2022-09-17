import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apis from "../../../apis";
import HospitalListCard from '../../components/DoctorList/HospitalListCard';
import DoctorListCard from "../../components/DoctorList/DoctorListCard";
import './DoctorList.scss';

<<<<<<< HEAD
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
  }
];

=======
>>>>>>> origin/pharmacy-final
export default function DoctorList() {
  const props = useLocation().state;

  let [location, setLocation] = useState(props.location);
  let [criteria, setCriteria] = useState(props.criteria);
  let [searchField, setSearchField] = useState(props.searchField);

  console.log(location, criteria, searchField);


<<<<<<< HEAD
  let [doctors, setDoctors] = useState(doctors_list);

=======
  let [doctors, setDoctors] = useState([]);

  //search start.
>>>>>>> origin/pharmacy-final
  let fetchData = async () => {
    let results;
    console.log(results);
    await apis
      .get("doctor")
      .then((data) => {
        criteria !== "Hospital"
          ? (results = data.data.filter((item) => {
              return item.district === location && criteria === "Speciality"
                ? item.department.toLowerCase().includes(searchField.toLowerCase())
                : item.name.toLowerCase().includes(searchField.toLowerCase());
            }))
          : (results = data.data.filter((item) => {
              return item.district === location && item.hospital.toLowerCase().includes(searchField.toLowerCase());
            }));
        
      })
      .catch((error) => {
        console.log(error);
      });
    if (results != null) {
      setDoctors(results);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
<<<<<<< HEAD

=======
// search end.
>>>>>>> origin/pharmacy-final
  return (
    <div className="parent">
      <div className="container">
        <div className="container shadow-sm doctor-list-search-card">
          <div className="search-boxes">
            <label>Enter District</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              {location === "Kannur" ? (
                <option selected value="Kannur">
                  Kannur
                </option>
              ) : (
                <option value="Kannur">Kannur</option>
              )}
              {location === "Kozhikode" ? (
                <option selected value="Kozhikode">
                  Kozhikode
                </option>
              ) : (
                <option value="Kozhikode">Kozhikode</option>
              )}
              {location === "Wayanad" ? (
                <option selected value="Wayanad">
                  Wayanad
                </option>
              ) : (
                <option value="Wayanad">Wayanad</option>
              )}
            </select>
          </div>

          <div className="search-boxes">
            <label>Enter Category</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setCriteria(e.target.value);
              }}
            >
              {criteria === "Speciality" ? (
                <option selected value="Speciality">
                  Speciality
                </option>
              ) : (
                <option value="Speciality">Speciality</option>
              )}
              {criteria === "Doctor" ? (
                <option selected value="Doctor">
                  Doctor
                </option>
              ) : (
                <option value="Doctor">Doctor</option>
              )}
              {criteria === "Hospital" ? (
                <option selected value="Hospital">
                  Hospital
                </option>
              ) : (
                <option value="Hospital">Hospital</option>
              )}
            </select>
          </div>

          <div className="search-boxes">
            <label className="form-label label">Enter {criteria}</label>
            <input
              className="form-control"
              type="text"
              placeholder={searchField}
              onChange={(e) => {
                setSearchField(e.target.value);
              }}
            />
          </div>

          <button className="btn btn-large search-button" onClick={fetchData}>
            Search
          </button>
        </div>

        <div className="container shadow doctor-list-card-container">
          <div className="container cont1">
            <h6 className="cont1-h6">{location} / Doctors</h6>
          </div>

          <div className="container cont2">
            <div className="filter">
              <h5 className="filter-h5">11 Doctor(s)</h5>
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
            <div className="doctor-card-sheet">
              {doctors.map((doctor) => {
                return (
                  <DoctorListCard
                    id={doctor._id}
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
