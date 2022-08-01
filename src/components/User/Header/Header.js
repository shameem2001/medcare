import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className="shadow-sm navbar-new">
      <div className="navbar-left">
        <h5>
          MED<span>CARE</span>
        </h5>
      </div>
      <div className="navbar-right">
        <Link className="navbar-right-link" to="/">
          <a>HOME</a>
        </Link>
        <Link className="navbar-right-link" to="/login">
          <a>LOGIN/REGISTER</a>
        </Link>
        <Link className="navbar-right-link" to="/profile">
          <a>PROFILE</a>
        </Link>
        <Link className="navbar-right-link last" to="/doctor-list">
          <a>SUPPORT</a>
        </Link>
      </div>
    </div>
  );
}
