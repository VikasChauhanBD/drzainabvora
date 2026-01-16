import React from "react";
import { Helmet } from "react-helmet";
import OfflineBTR from "../components/offlineBTR/OfflineBTR";
import VidyaJeevan from "../components/vidyaJeevan/VidyaJeevan";
import OfflineBtrFeedback from "../components/offlineBtrFeedback/OfflineBtrFeedback";

function OfflineBtrPage() {
  return (
    <div>
      <Helmet>
        <title>Offline BTR - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Offline BTR by Dr. Zainab Vora offers face to face crash revision, real time interaction & high yielding facts for NEET PG aspirant's exam readiness."
        />
      </Helmet>

      <OfflineBTR />
      <VidyaJeevan />
      <OfflineBtrFeedback />
    </div>
  );
}

export default OfflineBtrPage;
