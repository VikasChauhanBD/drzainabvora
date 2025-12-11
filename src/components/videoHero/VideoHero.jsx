import React from "react";
import "./VideoHero.css";
import DemoVideo from "../../assets/images/video.mp4";

function VideoHero() {
  return (
    <section className="video-hero-section">
      <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={DemoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Create a Business
          <br />
          and Life You <span className="highlight">Love</span>
        </h1>
      </div>
    </section>
  );
}

export default VideoHero;
