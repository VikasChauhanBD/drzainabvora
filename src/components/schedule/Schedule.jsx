import React from "react";
import "./Schedule.css";

export default function Schedule() {
  // const scheduleData = [
  //   {
  //     day: "Monday",
  //     sessions: [
  //       { time: "9:00 AM - 12:00 PM", subject: "Radiology", badge: "Live" },
  //       { time: "2:00 PM - 5:00 PM", subject: "Physiology", badge: "Live" },
  //     ],
  //   },
  //   {
  //     day: "Tuesday",
  //     sessions: [
  //       { time: "9:00 AM - 12:00 PM", subject: "Biochemistry", badge: "Live" },
  //       { time: "2:00 PM - 5:00 PM", subject: "Pathology", badge: "Live" },
  //     ],
  //   },
  //   {
  //     day: "Wednesday",
  //     sessions: [
  //       { time: "9:00 AM - 12:00 PM", subject: "Pharmacology", badge: "Live" },
  //       { time: "2:00 PM - 5:00 PM", subject: "Microbiology", badge: "Live" },
  //     ],
  //   },
  //   {
  //     day: "Thursday",
  //     sessions: [
  //       { time: "9:00 AM - 12:00 PM", subject: "Medicine", badge: "Live" },
  //       { time: "2:00 PM - 5:00 PM", subject: "Surgery", badge: "Live" },
  //     ],
  //   },
  //   {
  //     day: "Friday",
  //     sessions: [
  //       {
  //         time: "9:00 AM - 12:00 PM",
  //         subject: "OBG & Pediatrics",
  //         badge: "Live",
  //       },
  //       {
  //         time: "2:00 PM - 5:00 PM",
  //         subject: "Orthopedics",
  //         badge: "Live",
  //       },
  //     ],
  //   },
  //   {
  //     day: "Saturday",
  //     sessions: [
  //       {
  //         time: "9:00 AM - 1:00 PM",
  //         subject: "Weekly Revision & MCQs",
  //         badge: "Interactive",
  //       },
  //     ],
  //   },
  // ];

  const scheduleData = [
    {
      day: "22nd Nov 2025 (Saturday)",
      sessions: [
        {
          time: "",
          subject: "Surgery-Ortho-Radio Tricky Concepts",
          badge: "Tricky Concepts",
        },
      ],
    },
    {
      day: "1st Dec 2025 (Monday)",
      sessions: [
        { time: "", subject: "Surgery-Ortho-Radio E&D", badge: "E&D" },
      ],
    },
    {
      day: "4th Dec 2025 (Thursday)",
      sessions: [
        {
          time: "",
          subject: "Biochem-FMT Tricky Concepts",
          badge: "Tricky Concepts",
        },
      ],
    },
    {
      day: "9th Dec 2025 (Tuesday)",
      sessions: [{ time: "", subject: "Biochem-FMT E&D", badge: "E&D" }],
    },
    {
      day: "13th Dec 2025 (Saturday)",
      sessions: [
        {
          time: "",
          subject: "Micro-Anat Tricky Concepts",
          badge: "Tricky Concepts",
        },
      ],
    },
    {
      day: "19th Dec 2025 (Friday)",
      sessions: [{ time: "", subject: "Micro-Anat E&D", badge: "E&D" }],
    },
    {
      day: "23rd Dec 2025 (Tuesday)",
      sessions: [
        {
          time: "",
          subject: "Psychi-ENT-Ophthal Tricky Concepts",
          badge: "Tricky Concepts",
        },
      ],
    },
    {
      day: "2nd Jan 2026 (Friday)",
      sessions: [{ time: "", subject: "Psychi-ENT-Ophthal E&D", badge: "E&D" }],
    },
    {
      day: "14th Jan 2026 (Wednesday)",
      sessions: [
        {
          time: "",
          subject: "Integrated Systems Tricky Concepts",
          badge: "Tricky Concepts",
        },
      ],
    },
    {
      day: "20th Jan 2026 (Tuesday)",
      sessions: [
        {
          time: "",
          subject: "Integrated Systems E&D (200 MCQs)",
          badge: "E&D",
        },
      ],
    },
    {
      day: "25th Jan 2026 (Sunday)",
      sessions: [
        {
          time: "",
          subject: "PSM-Derma-Anesthesia Tricky Concepts",
          badge: "Tricky Concepts",
        },
      ],
    },
    {
      day: "1st Feb 2026 (Sunday)",
      sessions: [
        { time: "", subject: "PSM-Derma-Anesthesia E&D", badge: "E&D" },
      ],
    },
    {
      day: "8th Feb 2026 (Sunday)",
      sessions: [
        {
          time: "",
          subject: "OBG-Pedia Tricky Concepts",
          badge: "Tricky Concepts",
        },
      ],
    },
    {
      day: "13th Feb 2026 (Thursday)",
      sessions: [{ time: "", subject: "OBG-Pedia E&D", badge: "E&D" }],
    },
  ];

  return (
    <div className="btr-schedule-container">
      <div className="btr-schedule-wrapper">
        {/* Header */}
        <div className="btr-schedule-header">
          <div className="btr-schedule-subtitle">CLASS SCHEDULE</div>
          <h1 className="btr-schedule-title">Your Weekly Learning Journey</h1>
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
          {scheduleData.map((day, index) => (
            <div key={index} className="btr-schedule-day">
              <div className="btr-schedule-day-content">
                {/* Day */}
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
                  <span className="btr-schedule-day-text">{day.day}</span>
                </div>

                {/* Sessions */}
                <div className="btr-sessions-grid">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="btr-session-item">
                      <div className="btr-session-time">
                        <svg
                          className="btr-session-icon-tiny"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{session.time}</span>
                      </div>
                      <div className="btr-session-subject">
                        <span className="btr-session-subject-name">
                          {session.subject}
                        </span>
                        <span
                          className={`btr-session-badge ${
                            session.badge === "Interactive"
                              ? "btr-session-badge-interactive"
                              : "btr-session-badge-live"
                          }`}
                        >
                          {session.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
