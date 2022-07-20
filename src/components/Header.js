import React from 'react'
import {Link} from 'react-router-dom';
import '../app.scss';

export default function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <h1>
            <a className="navbar-brand" href="#page-top">
              <span className="navbar-brand1">MED</span>
              <span className="navbar-brand2">CARE</span>
              {/* <img src="assets/img/navbar-logo.svg" alt="..." className="img-fluid"/> */}
            </a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#df">
                  Login/Register
                </a>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="no_un">
                  <a className="nav-link" href="#about">
                    Profile
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
