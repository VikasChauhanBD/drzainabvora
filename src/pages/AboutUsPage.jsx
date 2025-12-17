import React from "react";
import AboutHeader from "../components/aboutHeader/AboutHeader";
import TextClip from "../components/textClip/TextClip";
import Biography from "../components/biography/Biography";
import Story from "../components/story/Story";
import CareerTimeline from "../components/careerTimeline/CareerTimeline";

function AboutUsPage() {
  return (
    <div>
      <AboutHeader />
      <TextClip />
      <Biography />
      <Story />
      <CareerTimeline />
    </div>
  );
}

export default AboutUsPage;
