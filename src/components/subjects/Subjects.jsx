import React from "react";
import "./Subjects.css";
import { NavLink } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";

function Subjects() {
  return (
    <div className="subjects-container">
      <div className="subjects-card">
        <h1>All 19 Subjects Under One Roof</h1>
        <p>
          Complere preparations for NEET PG, FMGE, and INICET with comprehensive
          coverage of every subject you need to master.
        </p>
        <div className="subjects-list">
          <span>
            <BiCheckCircle /> Pharmacology
          </span>
          <span>
            <BiCheckCircle /> PSM
          </span>
          <span>
            <BiCheckCircle /> Radiology
          </span>
          <span>
            <BiCheckCircle /> Pathology
          </span>
          <span>
            <BiCheckCircle /> Psychiatry
          </span>
          <span>
            <BiCheckCircle /> Medicine
          </span>
          <span>
            <BiCheckCircle /> Surgery
          </span>
          <span>
            <BiCheckCircle /> OBG
          </span>
          <span>
            <BiCheckCircle /> Pediatrics
          </span>
          <span>
            <BiCheckCircle /> Anatomy
          </span>
          <span>
            <BiCheckCircle /> Anesthesia
          </span>
          <span>
            <BiCheckCircle /> ENT
          </span>
          <span>
            <BiCheckCircle /> Forensic Medicine
          </span>
          <span>
            <BiCheckCircle /> Ophthalmology
          </span>
          <span>
            <BiCheckCircle /> Dermatology
          </span>
          <span>
            <BiCheckCircle /> Physiology
          </span>
          <span>
            <BiCheckCircle /> Biochemistry
          </span>
          <span>
            <BiCheckCircle /> Microbiology
          </span>
          <span>
            <BiCheckCircle /> Orthopedics
          </span>
        </div>

        <NavLink to="/online-btr" className="subjects-btn">
          Start Your BTR Journey
        </NavLink>
      </div>
    </div>
  );
}

export default Subjects;
