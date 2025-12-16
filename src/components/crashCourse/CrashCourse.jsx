import React, { useEffect } from "react";
import "./CrashCourse.css";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Banner from "../../assets/images/crash-course-banner.webp";
import Image1 from "../../assets/images/crash-course-image1.jpg";
import Image2 from "../../assets/images/crash-course-image2.jpg";

function CrashCourse() {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [text] = useTypewriter({
    words: ["“Kahani tumhaari hai, Ho sake toh kamaal likhna.”"],
    loop: {},
  });

  return (
    <div className="crash-course-container">
      <div className="crash-course-banner">
        <img src={Banner} alt="" />
      </div>

      <div className="crash-course-header">
        <h1>BTR Offline: Revise Smart. Recall Fast. Rank Better</h1>
        <p>
          <b>BTR Offline</b> is a focused, face-to-face crash revision program
          designed for NEET PG aspirants who want clarity, confidence, and quick
          recall before the exam. Built strictly around{" "}
          <b>PYQs and high-yield facts,</b> BTR helps you revise all 19 subjects
          in a structured, no-nonsense manner.
          <br />
          This is not theory overload — it’s about{" "}
          <b>what to remember, how to apply, and what not to miss.</b>
        </p>
        <h6 className="crash-course-typeWriter">
          {text}
          <Cursor />
        </h6>

        {/* <NavLink
          to="https://dashboard.cerebellumacademy.com/plans"
          target="_blank"
        >
          Know More
        </NavLink> */}
      </div>

      <div className="crash-course-high">
        <div className="crash-course-high-content">
          <h1>What You’ll Learn:</h1>
          <ul>
            <li>
              <b>19 Subjects Crash Course</b> - Complete rapid revision
            </li>
            <li>
              <b>PYQ-Based Approach</b> - Focus only on what actually gets asked
            </li>
            <li>
              <b>High-Yield NEET PG Topics</b>
            </li>
            <li>
              <b>BTR Core Facts</b> like{" "}
              <b> IPC / Milestones/ Staging/ Scores​</b>
            </li>
            <li>
              <b>Medicine High-Yield Topics</b> like{" "}
              <b>ABG/ ECG / Fluid analysis / Stroke localization</b>
            </li>
            <li>
              <b>Must-Know Images</b> from all subjects
            </li>
            <li>
              <b>Face-to-Face Live Sessions</b> with direct interaction
            </li>
            <li>
              <b>Printed BTR Booklet</b> provided for revision support
            </li>
          </ul>
        </div>

        <div className="crash-course-high-image">
          <img src={Image1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CrashCourse;
