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
            src="https://res.cloudinary.com/dc7y7ypmm/video/upload/q_auto,f_auto/home-video_qywvfx.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/dc7y7ypmm/video/upload/q_auto,f_auto/home-video_qywvfx.webm"
            type="video/webm"
          />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Simplifying the Journey so Every Story has a Chance to Become
          Extraordinary!
        </h1>
      </div>
    </section>
  );
}

export default VideoHero;
