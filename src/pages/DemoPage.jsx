import React from "react";
import VideoHero from "../components/videoHero/VideoHero";
import AppShowcase from "../components/appShowcase/AppShowcase";
import Header from "../components/header/Header";
import AboutBtr from "../components/aboutBtr/AboutBtr";
import Subjects from "../components/subjects/Subjects";
import WhatBTR from "../components/whatBTR/WhatBTR";
import Schedule from "../components/schedule/Schedule";
import Feedback from "../components/feedback/Feedback";
import InstagramFeed from "../components/instagramFeed/InstagramFeed";

function DemoPage() {
  return (
    <div>
      <VideoHero />
      <AppShowcase />
      <Header />
      <AboutBtr />
      <WhatBTR />
      <Subjects />
      <Schedule />
      <Feedback />
      <InstagramFeed />
    </div>
  );
}

export default DemoPage;
