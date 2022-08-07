import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  let [location, setlocation] = useState("Kannur");
  let [searchField, setsearchField] = useState("");

  let searchData = () => {
    navigate("/doctor-list", {state:{location: location, searchField: searchField}});
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
                  <input
                    id="search"
                    type="text"
                    placeholder="Clinic/Hospital/Speciality"
                    name="hospital"
                    onChange={(e) => {
                      setsearchField(e.target.value);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        searchData();
                        //navigate("/doctor-list");
                      }
                    }}
                  />
                </div>
                <div
                  className="banner-container-search-bar-3"
                  onClick={searchData}
                >
                  <button class="btn-search" type="button">
                    <i class="fa fa-search" aria-hidden="true"></i>
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
