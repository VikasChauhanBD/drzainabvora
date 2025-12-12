import React from "react";
import "./VideoHero.css";

function VideoHero() {
  return (
    <section className="video-hero-section">
      <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source
            src="https://res.cloudinary.com/dc7y7ypmm/video/upload/v1765521580/video_xksgyt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Simplifying the Journey so Every Story has a Chance to Become
          Extraordinary.
        </h1>
      </div>
    </section>
  );
}

export default VideoHero;
