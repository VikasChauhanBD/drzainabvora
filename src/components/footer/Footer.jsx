import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/ZV-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img src={Logo} alt="website logo" />
          </div>
          {/* <p className="footer-description">
            Empowering medical professionals with innovative online programs and
            comprehensive learning solutions for career excellence.
          </p> */}
          <div className="footer-social">
            <NavLink
              to="#"
              target="_blank"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/drzainabvora"
              target="_blank"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to="#"
              target="_blank"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </NavLink>
            <NavLink
              to="#"
              target="_blank"
              className="social-icon"
              aria-label="YouTube"
            >
              <FaYoutube />
            </NavLink>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About ZV</NavLink>
            </li>
            <li>
              <NavLink to="/students">Students</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Programs for NEET/INI CET</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/online-btr">Online BTR</NavLink>
            </li>
            <li>
              <NavLink to="/offline-btr">Offline BTR</NavLink>
            </li>
            <li>
              <NavLink to="/bootcamp">Bootcamp</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Program for PG Residents</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/conceptual-radiology">Conceptual Radiology</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <MdEmail className="contact-icon" />
              <span>info@example.com</span>
            </li>
            <li>
              <MdPhone className="contact-icon" />
              <span>+91 123 456 7890</span>
            </li>
            <li>
              <MdLocationOn className="contact-icon" />
              <span>Greater Noida, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 Dr. Zainab Vora, All rights reserved. | Designed & Managed
          By:{" "}
          <NavLink to="https://believersdestination.com/">
            Believers Destination Pvt Ltd
          </NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
