import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Dr. Zainab Vora: Medical PG Exam Preparation Platform</title>

        <meta
          name="description"
          content="Dr. Zainab Vora’s platform offers medical PG exam preparation with clear concepts, smart revision methods & focused guidance for FMGE, NEET PG and & INICET."
        />
      </Helmet>

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
