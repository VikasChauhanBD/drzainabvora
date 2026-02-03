import React, { useEffect, useState } from "react";
import "./CRApp.css";
import { NavLink } from "react-router-dom";
import PlayStore from "../../assets/images/playstore.webp";
import AppStore from "../../assets/images/appstore.webp";

function CRApp() {
  return (
    <div className="crapp-container">
      <div className="crapp-main">
        <div className="crapp-image">
          <img
            src="https://cdn.dribbble.com/userupload/46394027/file/25cf029e9e83338c6a3542fe90a503a7.webp"
            alt="cr-mockup"
          />
        </div>

        <div className="crapp-content">
          <h2>
            Get Unlimited Access With <br />
            Our Premium Membership
          </h2>
          <ul>
            <li>Clinical Radiology</li>
            <li>Medical physics and recent advances</li>
            <li>Ultrasound demonstration videos</li>
            <li>Radiology workstation</li>
            <li>Exam-Preparation</li>
            <li>Exam-Preparation</li>
          </ul>

          <div className="crapp-stores">
            <NavLink
              to="https://play.google.com/store/apps/details?id=com.conceptual.orthopedics&hl=en_IN&gl=US"
              target="_blank"
            >
              <img src={PlayStore} alt="" />
            </NavLink>
            <NavLink
              to="https://apps.apple.com/in/app/econceptual-ms-md-dnb-ss-exam/id1533947249"
              target="_blank"
            >
              <img src={AppStore} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRApp;
