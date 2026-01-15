import React, { useEffect, useState } from "react";
import "./CRHeader.css";
import { NavLink } from "react-router-dom";

function CRHeader() {
  return (
    <div className="crheader-container">
      <div className="crheader-banner">
        <img
          src="https://cdn.dribbble.com/userupload/46394023/file/1e47d594a1e372a3603fdca99d825bef.jpg"
          alt="CR Banner"
        />
      </div>

      <div className="crheader-content">
        <h1>Learn the skills of tomorrow</h1>
        <p>
          <b>Conceptual Radiology</b> is built to transform radiology education
          for residents and practicing radiologists. Our aim is to develop
          strong clinical thinking, exam readiness, and reporting confidence
          through structured teaching, expert faculty, and practical learning.
          From residency to real-world practice, we help you grow into a
          confident radiologist.
        </p>

        <NavLink to="https://conceptualradiology.com/" target="_blank">
          Know More
        </NavLink>
      </div>
    </div>
  );
}

export default CRHeader;
