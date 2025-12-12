import React from "react";
import "./IntroVideo.css";
import Intro from "../../assets/intro-video.mp4";

function IntroVideo({ onEnd }) {
  return (
    <div className="intro-video-container">
      <video className="intro-video" autoPlay muted onEnded={onEnd}>
        <source src={Intro} type="video/mp4" />
      </video>
    </div>
  );
}

export default IntroVideo;
