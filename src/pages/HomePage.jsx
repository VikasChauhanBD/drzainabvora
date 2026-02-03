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
import SchemaMarkup from "../components/schemaMarkup/SchemaMarkup";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Dr. Zainab Vora | NEET PG, FMGE & INICET Exam Preparation Platform
        </title>

        <meta
          name="description"
          content="NEET PG, FMGE & INI CET exam preparation by Dr. Zainab Vora focuses on conceptual clarity, smart strategies, and high-yield learning for real exam success."
        />
      </Helmet>

      <SchemaMarkup />

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
