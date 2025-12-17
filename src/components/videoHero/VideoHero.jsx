import React from "react";
import "./VideoHero.css";

function VideoHero() {
  return (
    <section className="video-hero-section">
      <div className="video-background">
        <iframe
          className="background-video"
          src="https://www.youtube.com/embed/Yldw_BLvQfo?autoplay=1&mute=1&loop=1&playlist=Yldw_BLvQfo&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
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
