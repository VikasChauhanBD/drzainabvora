import React from "react";
import "./BTR.css";
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
          <h2>
            A Radiologist Who Teaches with Clarity, Precision, and Purpose
          </h2>
          <p>
            Dr. Zainab Vora is a renowned radiologist whose passion for teaching
            has shaped the journeys of thousands of aspiring medical
            professionals. An alumna of AIIMS New Delhi, she scored Rank 1 at
            AIIMS in May 2015 and Rank 1 at NIMHANS in March 2015. She completed
            her MBBS and MD in Radiology, earned her DNB, and refined her
            expertise as a Senior Resident in Radiodiagnosis at AIIMS.
          </p>

          <p>
            Her strong command over CT, MRI, ultrasound, Doppler, and
            interventional radiology is reflected in her clear, structured, and
            student-friendly teaching. As a leading faculty at Vidya Jeevan, she
            continues to inspire and guide learners preparing for FMGE, NEET PG,
            and INICET.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BTR;
