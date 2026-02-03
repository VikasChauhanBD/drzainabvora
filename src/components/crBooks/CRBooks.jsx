import React, { useEffect, useState } from "react";
import "./CRBooks.css";
import { NavLink } from "react-router-dom";

function CRBooks() {
  return (
    <div className="crbooks-container">
      <div className="crbooks-content">
        <h2>
          Conceptual Radiology Books – A Complete Learning Path from Basics to
          Exam Excellence
        </h2>
        <p>
          The Conceptual Radiology book series is thoughtfully designed to meet
          the real needs of radiology residents and practicing radiologists.
          Each book focuses on clarity, clinical relevance, and exam
          orientation, helping learners build strong fundamentals, improve
          reporting confidence, and perform better in MD/DNB exams. Together,
          these books create a structured, step-by-step learning ecosystem that
          bridges theory, cases, anatomy, and exam preparation.
        </p>

        <NavLink to="/conceptual-radiology-books">Know More</NavLink>
      </div>
    </div>
  );
}

export default CRBooks;
