import React from "react";
import {Link} from 'react-router-dom';

export default function Banner() {
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
                  <input
                    id="search"
                    type="text"
                    placeholder="Location"
                    name="location"
                  />
                </div>
                <div className="banner-container-search-bar-2">
                  <input
                    id="search"
                    type="text"
                    placeholder="Clinic/Hospital/Speciality"
                    name="hospital"
                  />
                </div>
                <div className="banner-container-search-bar-3">
                  <Link to='/doctor-list'>
                    <button class="btn-search" type="button">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
