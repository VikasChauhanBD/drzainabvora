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
          src="https://cdn.dribbble.com/userupload/47317427/file/80627c008c4a04f65aa2c7d1c4b6fd45.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
