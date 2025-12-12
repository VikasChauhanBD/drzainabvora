import React from "react";
import VideoHero from "../components/videoHero/VideoHero";
import Header from "../components/header/Header";
import BTR from "../components/btr/BTR";
import Subjects from "../components/subjects/Subjects";

function HomePage() {
  return (
    <>
      <VideoHero />
      <Header />
      <BTR />
      <Subjects />
    </>
  );
}

export default HomePage;
