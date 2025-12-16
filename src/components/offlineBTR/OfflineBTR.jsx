import React from "react";
import "./OfflineBTR.css";
import { NavLink } from "react-router-dom";
import Banner from "../../assets/images/neet-pg-bootcamp-banner.jpg";
import Image from "../../assets/images/neet-pg-bootcamp.webp";

function OfflineBTR() {
  return (
    <div className="offline-btr-container">
      <div className="offline-btr-banner">
        <img src={Banner} alt="" />
      </div>

      <div className="offline-btr-header">
        <h1>NEET PG Bootcamp 2026</h1>
        <h3>
          An Intensive, Personalised Offline Crash Course for NEET PG & INI-CET
          Aspirants
        </h3>
        <p>
          The <b>NEET PG Bootcamp</b> is a{" "}
          <b>4-month, high-intensity offline crash program</b> designed for
          students who want focused revision, expert mentorship, and real exam
          readiness under one roof. This program goes beyond routine
          classes—combining structured subject-wise revision, regular
          assessments, and close faculty guidance to help you convert hard work
          into rank.
          <br />
          With mentorship from{" "}
          <b>Dr. Zainab Vora, Dr. Ravi Sharma, and Dr. Apurv Mehra,</b> the
          Bootcamp is built for serious aspirants targeting{" "}
          <b>NEET PG & INI-CET 2026.</b>
        </p>
        <NavLink
          to="https://www.cerebellumacademy.com/neet-pg-btr-bootcamp/"
          target="_blank"
        >
          Click Here For More
        </NavLink>
      </div>

      <div className="offline-btr-high">
        <div className="offline-btr-high-image">
          <img src={Image} alt="Hero" />
        </div>

        <div className="offline-btr-high-content">
          <h1>Program Highlights:</h1>
          <ul>
            <li>
              <b>Duration:</b> 4 Months
            </li>
            <li>
              <b>Mode:</b> Intensive Personalised Offline Program
            </li>
            <li>
              <b>Target Exams:</b> NEET PG & INI-CET 2026
            </li>
          </ul>
        </div>
      </div>

      <div className="offline-btr-points">
        <h1>What You Get:</h1>
        <ul>
          <li>
            Mentorship sessions by{" "}
            <b>Dr. Zainab Vora, Dr. Ravi Sharma & Dr. Apurv Mehra</b>
          </li>
          <li>
            <b>Subject-wise revision classes</b> covering all 19 subjects
          </li>
          <li>
            <b>Subject-wise tests with detailed discussions</b>
          </li>
          <li>
            <b>Mock Grand Tests (CBT-based)</b>
          </li>
          <li>
            <b>Mini tests with explanations</b>
          </li>
          <li>
            Dedicated <b>library cubicles for self-study</b>
          </li>
          <li>
            <b>Personal desktop</b> with internet access (strictly for academic
            use)
          </li>
          <li>
            Special focus on <b>borderline students</b> needing guided
            improvement
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OfflineBTR;
