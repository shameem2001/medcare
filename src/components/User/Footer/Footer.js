import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="shadow-sm footer-page">
      <div className="footer-page-copyright">Copyright &copy; Medcare 2022</div>
      <div className="footer-page-buttons">
        <a className="btn btn-dark footer-page-button1" href="#!" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="btn btn-dark footer-page-button2" href="#!" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="btn btn-dark footer-page-button3" href="#!" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="footer-page-links">
        <a className="footer-page-link1" href="#!">
          Privacy Policy
        </a>
        <a className="footer-page-link2" href="#!">
          Terms of Use
        </a>
      </div>
    </div>
  );
}
