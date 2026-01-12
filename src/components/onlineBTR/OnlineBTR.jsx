import React from "react";
import "./OnlineBTR.css";
import { NavLink } from "react-router-dom";
import Banner from "../../assets/images/online-btr-banner.jpg";
import Image from "../../assets/images/online-btr-inage.webp";

function OnlineBTR() {
  return (
    <div className="online-btr-container">
      <div className="online-btr-banner">
        <img src={Banner} alt="" />
      </div>

      <div className="online-btr-header">
        <h1>One Course. One Faculty. All 19 Subjects</h1>
        <p>
          <b>
            BTR Online is a one-of-its-kind 19-subject complete revision
            program,{" "}
          </b>
          designed specifically for the final phase of medical entrance exam
          preparation. It focuses on <b>high-yield, exam-relevant concepts</b>{" "}
          instead of overwhelming students with excess content. With a proven
          track record and consistent results, BTR Online has emerged as one of
          the <b>most successful revision plans</b> for{" "}
          <b>NEET PG, INI-CET, and FMGE aspirants.</b>
          <br />
          The program is built to help students revise smarter, faster, and with
          clarity.
        </p>
        <NavLink
          to="https://dashboard.cerebellumacademy.com/plans"
          target="_blank"
        >
          Book Your Plan Online
        </NavLink>
      </div>

      <div className="online-btr-high">
        <div className="online-btr-high-image">
          <img src={Image} alt="Hero" />
        </div>

        <div className="online-btr-high-content">
          <h1>Highlights:</h1>
          <ul>
            <li>
              Complete 19-subject crash revision covering all major exam areas
            </li>
            <li>Focus on high-yield points based on PYQs</li>
            <li>Quick revision recorded videos for all 19 subjects</li>
            <li>
              Test-discussion videos: Curated MCQs which are highly conceptual
              and application based followed by discussion with an aim to teach
              students how to think like a topper and teaching the art of
              solving mcqs has been the game-changer according to most students
            </li>
            <li>
              Pathology, Pharmacology, Physiology, Medicine Have been covered as
              Integrated systems to give a holistic conceptual basis to the most
              important subjects for PG entrances
            </li>
            <li>
              <b>In-app annotated PDFs</b> available as revision notes
            </li>
            <li>
              <b>FREE hardcopy BTR booklet/workbook</b> for note-making and
              last-minute revision
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OnlineBTR;
