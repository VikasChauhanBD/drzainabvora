import React from "react";
import "./CrispEdition.css";
import { NavLink } from "react-router-dom";
import Edition1 from "../../assets/images/crisp-1.webp";
import Edition2 from "../../assets/images/crisp-2.webp";

function CrispEdition() {
  return (
    <div className="crisp-edition-container">
      <div className="crisp-edition-high">
        <h1>Highlights:</h1>
        <h3>
          <b>Focused Offline Crash Course</b> designed exclusively for radiology
          residents preparing for <b>MD, DNB, and other Radiology exams</b>
        </h3>

        <ul>
          <li>
            <b>High-Yield, Exam-Oriented Content</b> covering all must-know
            topics in a structured and time-efficient manner
          </li>
          <li>
            <b>Learn from Legendary Faculty</b> with insights on what truly
            matters for exams and real-world reporting
          </li>
          <li>
            <b>Hands-On & Practical Training</b> through OSCE simulations, table
            viva preparation, spot quizzes, and live case discussions
          </li>
          <li>
            <b>Real Exam Experience</b> with model exams and case-based sessions
            that closely mirror actual exam patterns
          </li>
          <li>
            <b>Interactive Learning Environment</b> encouraging questions,
            discussions, and active participation
          </li>
          <li>
            <b>Confidence-Boosting Revision</b> that simplifies complex concepts
            and strengthens image interpretation skills
          </li>
        </ul>
      </div>

      <div className="crisp-edition-cards">
        <h1>
          CRISP helps you revise smart, think clearly, and walk into your exams
          fully prepared and confident.
        </h1>
        <div className="crisp-edition-card">
          <div className="crisp-edition-card-image">
            <img src={Edition1} alt="" />
          </div>
          <h3>
            CRISP 2024 (1<sup>st</sup> Edition)
          </h3>
          <h4>
            7<sup>th</sup> to 8<sup>th</sup> December, 2024
          </h4>
          <NavLink
            to="https://conceptualradiology.com/conceptual-radiology-imaging-skills-program/"
            target="_blank"
          >
            Check Details
          </NavLink>
        </div>

        <div className="crisp-edition-card">
          <div className="crisp-edition-card-image">
            <img src={Edition2} alt="" />
          </div>
          <h3>
            CRISP 2025 (2<sup>nd</sup> Edition)
          </h3>
          <h4>
            22<sup>nd</sup> to 24<sup>th</sup> August, 2025
          </h4>

          <NavLink
            to="https://conceptualradiology.com/conceptual-radiology-imaging-skills-program-2/"
            target="_blank"
          >
            Check Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CrispEdition;
