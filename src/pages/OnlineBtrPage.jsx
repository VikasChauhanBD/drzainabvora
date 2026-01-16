import React from "react";
import { Helmet } from "react-helmet";
import OnlineBTR from "../components/onlineBTR/OnlineBTR";
import BtrWorkBook from "../components/btrWorkBook/BtrWorkBook";
import OnlineBtrFeedback from "../components/onlineBtrFeedback/OnlineBtrFeedback";
OnlineBtrFeedback;

function OnlineBtrPage() {
  return (
    <div>
      <Helmet>
        <title>Online BTR - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Online BTR by Dr. Zainab Vora offers exam-oriented learning approach with crisp concepts, smart revision tools & expert guidance for medical students."
        />
      </Helmet>

      <OnlineBTR />
      <BtrWorkBook />
      <OnlineBtrFeedback />
    </div>
  );
}

export default OnlineBtrPage;
