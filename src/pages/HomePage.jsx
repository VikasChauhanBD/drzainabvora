import React from "react";
import VideoHero from "../components/videoHero/VideoHero";
import Header from "../components/header/Header";
import AboutBtr from "../components/aboutBtr/AboutBtr";
import Subjects from "../components/subjects/Subjects";
import WhatBTR from "../components/whatBTR/WhatBTR";
import Schedule from "../components/schedule/Schedule";
import Feedback from "../components/feedback/Feedback";
import InstagramFeed from "../components/instagramFeed/InstagramFeed";

function HomePage() {
  return (
    <>
      <VideoHero />
      <Header />
      <AboutBtr />
      <WhatBTR />
      <Subjects />
      <Schedule />
      <Feedback />
      <InstagramFeed />
    </>
  );
}

export default HomePage;
