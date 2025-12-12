import React from "react";
import "./Subjects.css";
import Shape1 from "../../assets/images/shape-1.png";
import Shape2 from "../../assets/images/shape-2.png";

function Subjects() {
  return (
    <div className="subjects-container">
      <div className="subjects-image-1">
        <img src={Shape1} alt="" />
      </div>

      <div className="subjects-card">All 19 Subjects</div>

      <div className="subjects-image-2">
        <img src={Shape2} alt="" />
      </div>
    </div>
  );
}

export default Subjects;
