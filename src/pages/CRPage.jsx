import React from "react";
import { Helmet } from "react-helmet";
import CRHeader from "../components/crHeader/CRHeader";
import CourseCategories from "../components/courseCategories/CourseCategories";
import CRApp from "../components/crApp/CRApp";
import CRBooks from "../components/crBooks/CRBooks";
import CRPlans from "../components/crPlans/CRPlans";

function CRPage() {
  return (
    <div>
      <Helmet>
        <title>Conceptual Radiology - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Join Conceptual Radiology, a learning platform, where the residents and practitioners of radiology have a chance to enhance their knowledge & skills. "
        />
      </Helmet>

      <CRHeader />
      <CourseCategories />
      <CRApp />
      <CRBooks />
      <CRPlans />
    </div>
  );
}

export default CRPage;
