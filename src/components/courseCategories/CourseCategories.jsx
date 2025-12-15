import React, { useEffect, useRef } from "react";
import "./CourseCategories.css";

import CourseImage1 from "../../assets/images/course-image1.png";
import CourseImage2 from "../../assets/images/course-image2.png";
import CourseImage3 from "../../assets/images/course-image3.png";
import CourseImage4 from "../../assets/images/course-image4.png";
import CourseImage5 from "../../assets/images/course-image5.png";

function CourseCategories() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            headerRef.current?.classList.add("animate");

            // Animate cards with stagger
            cardRefs.current.forEach((card, index) => {
              setTimeout(() => {
                card?.classList.add("animate");
              }, index * 150);
            });

            // Stop observing after first trigger (iOS fix)
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // iOS friendly
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // iOS Safari fallback (prevents invisible content)
  useEffect(() => {
    setTimeout(() => {
      headerRef.current?.classList.add("animate");
      cardRefs.current.forEach((card) => card?.classList.add("animate"));
    }, 600);
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const coreData = [
    {
      id: 1,
      image: CourseImage1,
      title: "Clinical Radiology",
      desp: "System-wise coverage of radiology sub-specialities with a focus on theory plus clinical case-based learning. Emphasis is on developing the right diagnostic approach for exams and daily reporting.",
    },
    {
      id: 2,
      image: CourseImage2,
      title: "Radiology Workstation",
      desp: "Real-time scan reading sessions for X-rays, CT, and MRI to strengthen anatomy recognition, pathology identification, and structured image interpretation.",
    },
    {
      id: 3,
      image: CourseImage3,
      title: "Exam-Preparation",
      desp: "Focused, exam-oriented content for MD, DNB, and DMRD aspirants, including spotters, case discussions, table viva approaches, and revision modules.",
    },
    {
      id: 4,
      image: CourseImage4,
      title: "Ultrasound Demonstration Videos",
      desp: "Step-by-step ultrasound scanning and interpretation videos, ideal for residents and practitioners looking to build or refine hands-on skills.",
    },
    {
      id: 5,
      image: CourseImage5,
      title: "Medical Physics & Recent Advances",
      desp: "Clear and concise coverage of radiology physics, image optimisation, radiation safety, AI in radiology, and key recent advancements—essential for exams and modern practice.",
    },
  ];

  return (
    <section className="course-container" ref={sectionRef}>
      <div className="course-header" ref={headerRef}>
        <h1>Course Categories</h1>
      </div>

      <div className="course-cards">
        {coreData.map((data) => (
          <div key={data.id} className="course-card" ref={addToCardRefs}>
            <img src={data.image} alt={data.title} />
            <h4>{data.title}</h4>
            <p>{data.desp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseCategories;
