import React from "react";
import "./BTR.css";
import { NavLink } from "react-router-dom";
import BtrImage from "../../assets/images/btr-image.webp";

function BTR() {
  return (
    <div className="btr-container">
      <div className="btr-cards">
        <div className="btr-image">
          <img src={BtrImage} alt="" />
        </div>
        <div className="btr-content">
          <h1 className="btr-heading">About BTR</h1>
          <h2>A faculty who teached with Clarity, Precision and Purpose.</h2>
          <p>
            Dr. Zainab Vora is a renowned radiologist and passionate educator,
            an alumna of AIIMS New Delhi with Rank 1 at AIIMS (May 2015) and
            NIMHANS (March 2015). She has completed her MBBS, MD (Radiology),
            DNB, and served as a Senior Resident at AIIMS. Known for her
            expertise in CT, MRI, ultrasound, Doppler, and interventional
            radiology, she is a leading faculty at Vidya Jeevan, guiding
            students for FMGE, NEET PG, and INICET with clarity and precision.
          </p>
          <NavLink to="/btr"> See why students trust BTR</NavLink>
        </div>
      </div>
    </div>
  );
}

export default BTR;
