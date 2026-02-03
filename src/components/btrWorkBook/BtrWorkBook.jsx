import React from "react";
import "./BtrWorkBook.css";
import { NavLink } from "react-router-dom";

function BtrWorkBook() {
  return (
    <div className="workbook-container">
      <h2>BTR Workbooks – Your Revision Companions</h2>
      <div className="workbook-cards">
        <div className="workbook-card">
          <h3>BTR Unannotated Workbook</h3>
          <p>
            A flexible workbook designed for self-made notes and active
            revision. Ideal for NEET PG, INI-CET, and FMGE aspirants who want to
            write, customise, and revise high-yield points in their own way
            during the final phase.
          </p>
          <NavLink
            to="https://www.cerebellumacademy.com/btr-unannotated-workbook/"
            target="_blank"
          >
            Check BTR Unannotated Workbook
          </NavLink>
        </div>

        <div className="workbook-card">
          <h3>BTR Annotated Workbook</h3>
          <p>
            A time-saving, pre-annotated version was created based on student
            feedback. Helps reduce annotation effort and allows faster revision,
            while perfectly complementing the unannotated workbook for effective
            last-minute preparation.
          </p>
          <NavLink
            to="https://www.cerebellumacademy.com/btr-annotated-workbook/"
            target="_blank"
          >
            Check BTR Annotated Workbook
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BtrWorkBook;
