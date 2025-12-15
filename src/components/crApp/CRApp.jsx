import React, { useEffect, useState } from "react";
import "./CRApp.css";
import { NavLink } from "react-router-dom";
import MockUpImage from "../../assets/images/cr-mockup.webp";
import PlayStore from "../../assets/images/playstore.webp";
import AppStore from "../../assets/images/appstore.webp";

function CRApp() {
  return (
    <div className="crapp-container">
      <div className="crapp-main">
        <div className="crapp-image">
          <img src={MockUpImage} alt="Hero" />
        </div>

        <div className="crapp-content">
          <h1>
            Get Unlimited Access With <br />
            Our Premium Membership
          </h1>
          <ul>
            <li>Clinical Radiology</li>
            <li>Medical physics and recent advances</li>
            <li>Ultrasound demonstration videos</li>
            <li>Radiology workstation</li>
            <li>Exam-Preparation</li>
            <li>Exam-Preparation</li>
          </ul>

          <div className="crapp-stores">
            <NavLink to="https://play.google.com/store/apps/details?id=com.conceptual.orthopedics&hl=en_IN&gl=US">
              <img src={PlayStore} alt="" />
            </NavLink>
            <NavLink to="https://apps.apple.com/in/app/econceptual-ms-md-dnb-ss-exam/id1533947249">
              <img src={AppStore} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRApp;
