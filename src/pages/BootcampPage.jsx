import React from "react";
import Bootcamp from "../components/bootcamp/Bootcamp";
import VidyaJeevan from "../components/vidyaJeevan/VidyaJeevan";
import BootcampFeedback from "../components/bootcampFeedback/BootcampFeedback";

function BootcampPage() {
  return (
    <div>
      <Bootcamp />
      <VidyaJeevan />
      <BootcampFeedback />
    </div>
  );
}

export default BootcampPage;
