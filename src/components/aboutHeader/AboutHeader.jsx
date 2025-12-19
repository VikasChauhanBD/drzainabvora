import React, { useState } from "react";
import "./AboutHeader.css";

const AboutHeader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="about-header">
      {/* Background Video */}
      <div className="about-header-video-wrapper">
        {isLoading && (
          <div className="about-video-loading">
            <div className="about-spinner"></div>
            <p className="about-loading-text">Loading...</p>
          </div>
        )}
        <video
          className="about-header-background-video"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/dc7y7ypmm/video/upload/q_auto,f_auto/home-video_qywvfx.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/dc7y7ypmm/video/upload/q_auto,f_auto/home-video_qywvfx.webm"
            type="video/webm"
          />
        </video>
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
            pressure you carry, and a mentor who believes that every student's
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
