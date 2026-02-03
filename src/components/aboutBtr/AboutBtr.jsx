import React from "react";
import "./AboutBtr.css";
import { NavLink } from "react-router-dom";

function AboutBtr() {
  return (
    <div className="about-btr-container">
      <div className="about-btr-cards">
        <div className="about-btr-image">
          <img
            src="https://cdn.dribbble.com/userupload/46394010/file/1e842c14be5b580134cd798c1aead2e5.webp"
            alt="BTR Class"
          />
        </div>
        <div className="about-btr-content">
          <h2 className="about-btr-heading">About BTR</h2>
          <p>
            BTR is the smarter way to prepare for PG Exams, created and led by
            Dr. Zainab Vora, one of India’s most trusted educators. Designed for
            NEET PG aspirants who need fast, focused, high-yield revision, BTR
            turns all 19 subjects into a clean, structured, exam-oriented plan.
            Students get Quick Revision Videos, Annotated PDF Notes (in-app),
            Classical + Annotated Workbooks (Vol I & II), and the Chhoti Copy
            for last-minute power revision, along with year-long live sessions
            and the official Telegram group for updates and doubt support. BTR
            helps you revise faster, retain better, and score higher with a
            proven revision strategy built by Dr. Zainab Vora herself.
          </p>
          <NavLink to="/btr">See why students trust BTR</NavLink>
        </div>
      </div>
    </div>
  );
}

export default AboutBtr;
