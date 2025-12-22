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
          <h1>About Dr. Zainab Vora</h1>
        </div>

        <div className="about-header-description">
          <p>
            A Journey Defined by Discipline, Compassion, and an Unshakeable
            Commitment to Students.
            <br /> <br />
            Dr. Zainab Vora’s journey has been shaped by consistency, intent,
            and showing up every single day when the stakes were high and the
            pressure was real. What sets her apart is not just what she teaches,
            but how closely she understands the mental and emotional weight of
            medical preparation.
            <br />
            Her work is driven by one clear intent: to make difficult journeys
            feel navigable, and to stand beside students until clarity replaces
            chaos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
