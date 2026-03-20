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
          src="https://ik.imagekit.io/qqt7duc6p/intro-video_rh90eh.mp4?tr=orig&updatedAt=1773472406668"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default IntroVideo;
