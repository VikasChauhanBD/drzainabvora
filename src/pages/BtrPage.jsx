import React from "react";
import { Helmet } from "react-helmet";
import BtrHeader from "../components/btrHeader/BtrHeader";
import BTRUnique from "../components/bTRUnique/BTRUnique";
import BtrFeedback from "../components/btrFeedback/BtrFeedback";

function BtrPage() {
  return (
    <div>
      <Helmet>
        <title>BTR - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="BTR by Dr. Zainab Vora offers structured revision, clear concepts, exam focused strategies & help medical aspirants to develop confidence & clarity."
        />
      </Helmet>

      <BtrHeader />
      <BTRUnique />
      <BtrFeedback />
    </div>
  );
}

export default BtrPage;
