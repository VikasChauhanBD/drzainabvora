import React from "react";
import AboutHeader from "../components/aboutHeader/AboutHeader";
import TextClipSection from "../components/demo/TextClipSection";
import Journey from "../components/journey/Journey";
import Biography from "../components/biography/Biography";

function AboutUsPage() {
  return (
    <div>
      <AboutHeader />
      <TextClipSection />
      <Journey />
      <Biography />
    </div>
  );
}

export default AboutUsPage;
