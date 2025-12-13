import React from "react";
import "./Schedule.css";

export default function Schedule() {
  const scheduleData = [
    {
      day: "Monday",
      sessions: [
        { time: "9:00 AM - 12:00 PM", subject: "Anatomy", badge: "Live" },
        { time: "2:00 PM - 5:00 PM", subject: "Physiology", badge: "Live" },
      ],
    },
    {
      day: "Tuesday",
      sessions: [
        { time: "9:00 AM - 12:00 PM", subject: "Biochemistry", badge: "Live" },
        { time: "2:00 PM - 5:00 PM", subject: "Pathology", badge: "Live" },
      ],
    },
    {
      day: "Wednesday",
      sessions: [
        { time: "9:00 AM - 12:00 PM", subject: "Pharmacology", badge: "Live" },
        { time: "2:00 PM - 5:00 PM", subject: "Microbiology", badge: "Live" },
      ],
    },
    {
      day: "Thursday",
      sessions: [
        { time: "9:00 AM - 12:00 PM", subject: "Medicine", badge: "Live" },
        { time: "2:00 PM - 5:00 PM", subject: "Surgery", badge: "Live" },
      ],
    },
    {
      day: "Friday",
      sessions: [
        {
          time: "9:00 AM - 12:00 PM",
          subject: "OBG & Pediatrics",
          badge: "Live",
        },
        {
          time: "2:00 PM - 5:00 PM",
          subject: "Community Medicine",
          badge: "Live",
        },
      ],
    },
    {
      day: "Saturday",
      sessions: [
        {
          time: "9:00 AM - 1:00 PM",
          subject: "Weekly Revision & MCQs",
          badge: "Interactive",
        },
      ],
    },
  ];

  return (
    <div className="schedule-container">
      <div className="schedule-wrapper">
        {/* Header */}
        <div className="schedule-header">
          <div className="schedule-subtitle">CLASS SCHEDULE</div>
          <h1 className="schedule-title">Your Weekly Learning Journey</h1>
          <p className="schedule-description">
            A structured approach to mastering all subjects with live
            interactive sessions and dedicated revision time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="feature-cards">
          <div className="feature-card feature-card-orange">
            <div className="feature-icon">
              <svg
                className="icon"
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
            </div>
            <div>
              <h3 className="feature-title">Live Sessions</h3>
              <p className="feature-text">Interactive classes</p>
            </div>
          </div>

          <div className="feature-card feature-card-orange">
            <div className="feature-icon">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="feature-title">Flexible Timing</h3>
              <p className="feature-text">Recordings available</p>
            </div>
          </div>

          <div className="feature-card feature-card-orange">
            <div className="feature-icon">
              <svg
                className="icon"
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
            </div>
            <div>
              <h3 className="feature-title">Doubt Sessions</h3>
              <p className="feature-text">Personalized support</p>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="schedule-list">
          {scheduleData.map((day, index) => (
            <div key={index} className="schedule-day">
              <div className="schedule-day-content">
                {/* Day */}
                <div className="day-name">
                  <svg
                    className="icon-small"
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
                  <span className="day-text">{day.day}</span>
                </div>

                {/* Sessions */}
                <div className="sessions-grid">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="session-item">
                      <div className="session-time">
                        <svg
                          className="icon-tiny"
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
                      <div className="session-subject">
                        <span className="subject-name">{session.subject}</span>
                        <span
                          className={`badge ${
                            session.badge === "Interactive"
                              ? "badge-interactive"
                              : "badge-live"
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
