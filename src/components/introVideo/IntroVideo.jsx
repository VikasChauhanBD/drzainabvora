import React from "react";
import "./IntroVideo.css";

function IntroVideo({ onEnd }) {
  return (
    <div className="intro-video-container">
      <video
        className="intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onEnd}
      >
        <source
          src="https://res.cloudinary.com/dyih24tl8/video/upload/v1774000407/intro-video_rh90eh_znemoh.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
