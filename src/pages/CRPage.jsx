import React from "react";
import CRHeader from "../components/crHeader/CRHeader";
import CourseCategories from "../components/courseCategories/CourseCategories";
import CRApp from "../components/crApp/CRApp";
import CRBooks from "../components/crBooks/CRBooks";
import CRPlans from "../components/crPlans/CRPlans";

function CRPage() {
  return (
    <div>
      <CRHeader />
      <CourseCategories />
      <CRApp />
      <CRBooks />
      <CRPlans />
    </div>
  );
}

export default CRPage;
