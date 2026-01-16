import React from "react";
import { Helmet } from "react-helmet";
import TestimonialHeader from "../components/testimonialHeader/TestimonialHeader";
import Testimonials from "../components/testimonials/Testimonials";
import TestimonialVideos from "../components/testimonialVideos/TestimonialVideos";

function StudentsPage() {
  return (
    <div>
      <Helmet>
        <title>Students Feedback - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Students feedback for Dr. Zainab Vora apart from consistent results, highlights her concept driven inclusive approach of teaching & supportive guidance."
        />
      </Helmet>

      <TestimonialHeader />
      <Testimonials />
      <TestimonialVideos />
    </div>
  );
}

export default StudentsPage;
