import React from "react";
import { Helmet } from "react-helmet";
import AboutHeader from "../components/aboutHeader/AboutHeader";
import TextClip from "../components/textClip/TextClip";
import Biography from "../components/biography/Biography";
import Story from "../components/story/Story";
import CareerTimeline from "../components/careerTimeline/CareerTimeline";

function AboutUsPage() {
  return (
    <div>
      <Helmet>
        <title>About Us - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Dr. Zainab Vora is source of inspiration for NEET PG & INI-CET aspirants. She knows the stress, confusion & pressure faced by students."
        />
      </Helmet>

      <AboutHeader />
      <TextClip />
      <Biography />
      <Story />
      <CareerTimeline />
    </div>
  );
}

export default AboutUsPage;
