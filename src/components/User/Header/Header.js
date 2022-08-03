import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className="shadow-sm navbar-new">
      <div className="navbar-left">
        <Link className="navbar-link" to="/">
          <h5>
            MED<span>CARE</span>
          </h5>
        </Link>
      </div>
      <div className="navbar-right">
        <Link className="navbar-right-link" to="/">
          <a href="d">Home</a>
        </Link>
        <Link className="navbar-right-link" to="/profile">
          <a href="dh">Profile</a>
        </Link>
        <Link className="navbar-right-link" to="/">
          <a href="#contact">Support</a>
        </Link>
        <Link className="navbar-right-link last" to="/login">
          <a href="d">Login</a>
        </Link>
      </div>
    </div>
  );
}
