import React, { useEffect } from "react";
import "./OfflineBTR.css";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function OfflineBTR() {
  return (
    <div className="offline-btr-container">
      <div className="offline-btr-banner">
        <img
          src="https://cdn.dribbble.com/userupload/46394015/file/86537fb81017d699d53e04a9bee72d19.jpeg"
          alt="crash-course-banner"
        />
      </div>

      <div className="offline-btr-header">
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

        <h6>“Kahani tumhaari hai, Ho sake toh kamaal likhna.”</h6>
      </div>

      <div className="offline-btr-high">
        <div className="offline-btr-high-content">
          <h2>What You’ll Learn:</h2>
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

        <div className="offline-btr-high-image">
          <img
            src="https://cdn.dribbble.com/userupload/46394037/file/779239c41dca64941a9c00383e17cfcd.webp"
            alt="offline-btr-image"
          />
        </div>
      </div>
    </div>
  );
}

export default OfflineBTR;
