import React from "react";
import { Helmet } from "react-helmet";
import Bootcamp from "../components/bootcamp/Bootcamp";
import VidyaJeevan from "../components/vidyaJeevan/VidyaJeevan";
import BootcampFeedback from "../components/bootcampFeedback/BootcampFeedback";

function BootcampPage() {
  return (
    <div>
      <Helmet>
        <title>Bootcamp - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Bootcamp by Dr. Zainab Vora is an intensive high yield program designed for rapid revision, concept clarity and confident performance in medical exams."
        />
      </Helmet>

      <Bootcamp />
      <VidyaJeevan />
      <BootcampFeedback />
    </div>
  );
}

export default BootcampPage;
