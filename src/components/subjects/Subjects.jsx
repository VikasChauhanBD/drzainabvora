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
          Complete preparation for NEET PG and INICET with comprehensive
          coverage of every subject you need to master.
        </p>
        <div className="subjects-list">
          <NavLink>
            <BiCheckCircle /> Anatomy
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Physiology
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Biochemistry
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Pathology
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Pharmacology
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Microbiology
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Forensic Medicine
          </NavLink>
          <NavLink>
            <BiCheckCircle /> ENT
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Ophthalmology
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Community Medicine
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Medicine
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Surgery
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Obstetrics
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Gynecology
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Pediatrics
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Orthopedics
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Radiology
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Psychiatry
          </NavLink>
          <NavLink>
            <BiCheckCircle /> Dermatology
          </NavLink>
        </div>

        <NavLink to="/online-btr" className="subjects-btn">
          Start Your BTR Journey
        </NavLink>
      </div>
    </div>
  );
}

export default Subjects;
