import React from "react";
import VideoHero from "../components/videoHero/VideoHero";
import Header from "../components/header/Header";
import BTR from "../components/btr/BTR";
import Subjects from "../components/subjects/Subjects";
import TopDestinations from "../components/topDestinations/TopDestinations";
import Adventures from "../components/adventures/Adventures";
import WhatBTR from "../components/whatBTR/WhatBTR";
import Schedule from "../components/schedule/Schedule";
import Feedback from "../components/feedback/Feedback";

function HomePage() {
  return (
    <>
      <VideoHero />
      <Header />
      <BTR />
      <WhatBTR />
      <Subjects />
      {/* <Adventures /> */}
      <Schedule />
      {/* <TopDestinations /> */}
      <Feedback />
    </>
  );
}

export default HomePage;
