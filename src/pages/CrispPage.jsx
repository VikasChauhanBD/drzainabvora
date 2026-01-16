import React from "react";
import { Helmet } from "react-helmet";
import CrispHeader from "../components/crispHeader/CrispHeader";
import CrispEdition from "../components/crispEdition/CrispEdition";

function CrispPage() {
  return (
    <div>
      <Helmet>
        <title>CRISP - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="CRISP by Dr. Zainab Vora is concise approach to grab the concepts with smart explanations, helping students to revise faster with exams orientation."
        />
      </Helmet>

      <CrispHeader />
      <CrispEdition />
    </div>
  );
}

export default CrispPage;
