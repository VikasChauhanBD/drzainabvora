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
          src="https://res.cloudinary.com/dc7y7ypmm/video/upload/v1765794423/intro-video_rh90eh.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
