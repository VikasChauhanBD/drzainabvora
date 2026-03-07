import React from "react";
import { Helmet } from "react-helmet";
import Faqs from "../components/faqs/Faqs";

function FaqsPage() {
  return (
    <div>
      <Helmet>
        <title>FAQ's - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Refer FAQ's by Dr. Zainab Vora to get appropriate answers for your queries. We Offered multiple questions to address your concerns."
        />
      </Helmet>

      <Faqs />
    </div>
  );
}

export default FaqsPage;
