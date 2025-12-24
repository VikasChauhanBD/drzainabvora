import React, { useState } from "react";
import "./VideoHero.css";

function VideoHero() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="video-hero-section">
      <div className="video-background">
        {isLoading && (
          <div className="video-loading">
            <div className="spinner"></div>
            <p className="loading-text">Loading...</p>
          </div>
        )}
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766139895/Dr._Zainab_Vora_Website_v9zucd.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766139895/Dr._Zainab_Vora_Website_v9zucd.webm"
            type="video/webm"
          />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Simplifying the journey so every story
          <br />
          has a chance to become
          <br />
          <span>extraordinary</span>
        </h1>
      </div>
    </section>
  );
}

export default VideoHero;
