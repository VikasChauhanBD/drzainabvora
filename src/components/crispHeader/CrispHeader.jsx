import React from "react";
import "./CrispHeader.css";
import BannerImage from "../../assets/images/crisp-banner.jpeg";

function CrispHeader() {
  return (
    <div className="crisp-header-container">
      <div className="crisp-header-banner">
        <img src={BannerImage} alt="" />
      </div>

      <div className="crisp-header-content">
        <p>
          <b>CRISP (Conceptual Radiology Imaging Skills Program)</b> is an
          intensive offline crash course crafted specifically for radiology
          residents who want focused, high-yield preparation before exams.
          Unlike routine classes, CRISP zeroes in on <b>what truly matters</b>
          —helping you revise faster, understand better, and apply concepts with
          confidence.
        </p>
      </div>
    </div>
  );
}

export default CrispHeader;
