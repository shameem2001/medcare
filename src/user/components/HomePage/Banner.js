import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  let [location, setlocation] = useState("Kannur");
  let [criteria, setcriteria] = useState("Speciality");
  let [searchField, setsearchField] = useState("");

  let searchData = () => {
    navigate("/doctor-list", {state:{location: location, criteria: criteria, searchField: searchField}});
  }
  
  return (
    <div className="banner-bg">
      <div className="banner">
        <div className="banner-container">
          <h3>We Care About You</h3>
          <div className="banner-container-text-container">
            <div className="container shadow-sm banner-container-text">
              <h2>MANY PROBLEMS , ONE SOLUTION</h2>
            </div>
          </div>
          <div className="banner-container-search-bar-container">
            <form>
              <div className="banner-container-search-bar">
                <div className="banner-container-search-bar-1">
                  <i className="fa-solid fa-location-dot fa-lg loc-icon"></i>
                  {/* <div className="detect">
                    Detect
                    <i class="fas fa-location fa-lg"></i>
                  </div> */}
                  <select
                    onChange={(e) => {
                      setlocation(e.target.value);
                    }}
                  >
                    <option value="Kannur">Kannur</option>
                    <option value="Kasargod">Kasargod</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Wayanad">Wayanad</option>
                  </select>
                </div>
                <div className="banner-container-search-bar-2">
                  <i className="fa-solid fa-chevron-down down-arrow-icon"></i>
                  <select
                    onChange={(e) => {
                      setcriteria(e.target.value);
                    }}
                  >
                    <option value="Speciality">Speciality</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Hospital">Hospital</option>
                  </select>
                </div>
                <div className="banner-container-search-bar-3">
                  <input
                    id="search"
                    type="text"
                    placeholder={`Enter ${criteria}`}
                    name="hospital"
                    onChange={(e) => {
                      setsearchField(e.target.value);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        searchData();
                      }
                    }}
                  />
                </div>
                <div
                  className="banner-container-search-bar-4"
                  onClick={searchData}
                >
                  <button className="btn-search" type="button">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
