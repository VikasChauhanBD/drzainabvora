import React from "react";
import "./AboutHeader.css";

const AboutHeader = () => {
  return (
    <section className="about-header">
      {/* Background Video */}
      <div className="about-header-video-wrapper">
        <iframe
          className="about-header-background-video"
          src="https://www.youtube.com/embed/VVuGLeCiu-w?autoplay=1&mute=1&loop=1&playlist=VVuGLeCiu-w&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="About Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="about-header-overlay"></div>

      {/* Content */}
      <div className="about-header-content">
        <div className="about-header-text">
          <h2>about us.</h2>
          <h1>
            ELEVATING
            <br />
            BHARAT ONE CONTENT
            <br />
            AT A TIME.
          </h1>
        </div>

        <div className="about-header-description">
          <p>
            A teacher who studies with you, a doctor who understands the
            pressure you carry, and a mentor who believes that every student’s
            journey deserves clarity, strategy, and hope. From earning Rank 1 in
            Radiology at AIIMS to simplifying exam preparation for lakhs of
            students across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
