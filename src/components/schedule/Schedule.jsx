import React from "react";
import "./Schedule.css";

export default function Schedule() {
  const neetPgSchedule = [
    { date: "2026-01-18", subject: "Orientation" },
    { date: "2026-01-19", subject: "OBG-1" },
    { date: "2026-01-21", subject: "OBG-2" },
    { date: "2026-01-24", subject: "OBG Test-Discussion" },
    { date: "2026-01-26", subject: "PSM-1" },
    { date: "2026-01-28", subject: "PSM-2" },
    { date: "2026-01-31", subject: "PSM Test-Discussion" },
    { date: "2026-02-02", subject: "Surgery-1" },
    { date: "2026-02-04", subject: "Surgery-2" },
    { date: "2026-02-07", subject: "Surgery Test-Discussion" },
    { date: "2026-02-09", subject: "CVS" },
    { date: "2026-02-11", subject: "Hemat" },
    { date: "2026-02-14", subject: "Neuro" },
    { date: "2026-02-16", subject: "Renal + Rheumat" },
    { date: "2026-02-18", subject: "Endocrine + GI" },
    { date: "2026-02-20", subject: "Respi + General Physio" },
    { date: "2026-02-23", subject: "General Path + Pharma" },
    { date: "2026-02-25", subject: "Integrated Systems Test-1" },
    { date: "2026-02-28", subject: "Integrated Systems Test-2" },
    { date: "2026-03-02", subject: "Microbiology" },
    { date: "2026-03-06", subject: "Micro Test-Discussion" },
    { date: "2026-03-08", subject: "Anatomy" },
    { date: "2026-03-12", subject: "Anatomy Test-Discussion" },
    { date: "2026-03-14", subject: "Biochemistry" },
    { date: "2026-03-19", subject: "Biochem Test-Discussion" },
    { date: "2026-03-21", subject: "Pediatrics" },
    { date: "2026-03-25", subject: "Pediatrics Test-Discussion" },
    { date: "2026-03-27", subject: "Radiology" },
    { date: "2026-03-31", subject: "Radiology Test-Discussion" },
    { date: "2026-04-02", subject: "ENT" },
    { date: "2026-04-06", subject: "ENT Test-Discussion" },
    { date: "2026-04-08", subject: "Ophthalmology" },
    { date: "2026-04-12", subject: "Ophthalmology Test-Discussion" },
    { date: "2026-04-14", subject: "FMT" },
    { date: "2026-04-17", subject: "FMT Test-Discussion" },
    { date: "2026-04-19", subject: "Psychi" },
    { date: "2026-04-21", subject: "Derma" },
    { date: "2026-04-24", subject: "Psychi-Derma Test-Discussion" },
    { date: "2026-04-25", subject: "Anesthesia" },
    { date: "2026-04-28", subject: "Orthopedics" },
    { date: "2026-05-01", subject: "Anesthesia-Ortho Test-Discussion" },
    { date: "2026-05-07", subject: "Mock-GT-1" },
    { date: "2026-05-09", subject: "Mock-GT-2" },
    { date: "2026-05-11", subject: "INICET Mock GT" },
    { date: "2026-05-17", subject: "INICET" },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="btr-schedule-container">
      <div className="btr-schedule-wrapper">
        {/* Header */}
        <div className="btr-schedule-header">
          <h1 className="btr-schedule-title">NEET PG 2026 Bootcamp Schedule</h1>
          <p className="btr-schedule-description">
            A well-organized approach that helps you master all subjects through
            live interactive sessions and dedicated revision.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="btr-schedule-feature-cards">
          <div className="btr-schedule-feature-card">
            <svg
              className="btr-schedule-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="2.18"
                ry="2.18"
              ></rect>
              <line x1="7" y1="2" x2="7" y2="22"></line>
              <line x1="17" y1="2" x2="17" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="7" x2="7" y2="7"></line>
              <line x1="2" y1="17" x2="7" y2="17"></line>
              <line x1="17" y1="17" x2="22" y2="17"></line>
              <line x1="17" y1="7" x2="22" y2="7"></line>
            </svg>
            <h3 className="btr-schedule-feature-title">Live Sessions</h3>
          </div>

          <div className="btr-schedule-feature-card">
            <svg
              className="btr-schedule-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <h3 className="btr-schedule-feature-title">Flexible Timing</h3>
          </div>

          <div className="btr-schedule-feature-card">
            <svg
              className="btr-schedule-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h3 className="btr-schedule-feature-title">Doubt Sessions</h3>
          </div>
        </div>

        {/* Schedule */}
        <div className="btr-schedule-list">
          {neetPgSchedule.map((item, index) => (
            <div key={index} className="btr-schedule-day">
              <div className="btr-schedule-day-content">
                {/* Date */}
                <div className="btr-schedule-day-name">
                  <svg
                    className="btr-schedule-icon-small"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span className="btr-schedule-day-text">
                    {formatDate(item.date)}
                  </span>
                </div>

                {/* Subject */}
                <div className="btr-sessions-grid">
                  <div className="btr-session-item">
                    <div className="btr-session-subject">
                      <span className="btr-session-subject-name">
                        {item.subject}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
