import React, { useEffect, useState } from "react";
import "./CRHeader.css";
import { NavLink } from "react-router-dom";
import HeroImage from "../../assets/images/Dr-Zainab-Vohra-cr.webp";

function CRHeader() {
  return (
    <div className="crheader-container">
      <div className="crheader-main">
        <div className="crheader-content">
          <h1>Learn the skills of tomorrow</h1>
          <p>
            <b>Conceptual Radiology</b> is built to transform radiology
            education for residents and practicing radiologists. Our aim is to
            develop strong clinical thinking, exam readiness, and reporting
            confidence through structured teaching, expert faculty, and
            practical learning. From residency to real-world practice, we help
            you grow into a confident radiologist.
          </p>

          <NavLink to="https://conceptualradiology.com/">Know More</NavLink>
        </div>

        <div className="crheader-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default CRHeader;
