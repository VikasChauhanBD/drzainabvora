import React from "react";
import AboutHeader from "../components/aboutHeader/AboutHeader";
import TextClip from "../components/textClip/TextClip";
import Biography from "../components/biography/Biography";
import Story from "../components/story/Story";

function AboutUsPage() {
  return (
    <div>
      <AboutHeader />
      <TextClip />
      <Biography />
      <Story />
    </div>
  );
}

export default AboutUsPage;
