import React from "react";
import VideoHero from "../components/videoHero/VideoHero";
import Header from "../components/header/Header";
import BTR from "../components/btr/BTR";
import Subjects from "../components/subjects/Subjects";
import TopDestinations from "../components/topDestinations/TopDestinations";
import Adventures from "../components/adventures/Adventures";
import WhatBTR from "../components/whatBTR/WhatBTR";

function HomePage() {
  return (
    <>
      <VideoHero />
      <Header />
      <BTR />
      <WhatBTR />
      <Subjects />
      {/* <TopDestinations /> */}
      {/* <Adventures /> */}
    </>
  );
}

export default HomePage;
