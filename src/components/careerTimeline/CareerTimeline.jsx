import React, { useState, useEffect, useRef } from "react";
import "./CareerTimeline.css";

const CareerTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const timelineLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !timelineLineRef.current) return;

      const timelineElement = timelineRef.current;
      const timelineLineElement = timelineLineRef.current;

      const timelineRect = timelineElement.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;

      const startOffset = windowHeight * 0.8;
      const endOffset = windowHeight * 0.2;

      let progress = 0;

      if (timelineTop < startOffset) {
        const scrolled = startOffset - timelineTop;
        const totalScrollDistance = timelineHeight + startOffset - endOffset;
        progress = (scrolled / totalScrollDistance) * 100;
        progress = Math.min(Math.max(progress, 0), 100);
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      title: "Roots & Early Recognition",
      description:
        "Born and raised in Rajkot, Dr. Zainab Vora brought pride to her hometown through her academic achievements. From the very beginning of her medical journey, she stood out as a dedicated and focused student with a passion for excellence.",
    },
    {
      title: "MBBS - AIIMS New Delhi",
      description:
        "Completed MBBS from the All India Institute of Medical Sciences (AIIMS), New Delhi, one of India's most prestigious medical institutions.<br/> Honored with the Outstanding Student Award, reflecting her academic brilliance and consistent performance.",
    },
    {
      title: "2015 - A Year to Remember",
      description:
        "The year 2015 marked a turning point in Dr. Zainab Vora's career: <br/> <b>All India Rank 1 - NIMHANS (March 2015)</b> <br/> <b>All India Rank 1 - AIIMS PG (May 2015)</b><br/> These results placed her among the top medical minds in the country and made Rajkot proud on the national stage.",
    },
    {
      title: "Journey as a PG Aspirant",
      description:
        "As a postgraduate aspirant, Dr. Zainab Vora's preparation was defined by discipline, conceptual clarity, and smart strategy. Her dedication resulted in securing AIR 1 in both AIIMS PG and NIMHANS in the same year-a rare and remarkable achievement that continues to inspire PG aspirants across India.",
    },
    {
      title: "MD Radiology & Senior Residency at AIIMS, New Delhi",
      description:
        "She completed her MD in Radiology with a Gold Medal and received the prestigious Dr. Shyam Sharma Gold Medal. She then pursued her Senior Residency at AIIMS, New Delhi, gaining advanced clinical expertise and evolving from a PG aspirant into a dedicated educator.",
    },
    {
      title: "The Beginning of Her Educator Journey",
      description:
        "Dr. Zainab Vora's journey as an educator was shaped by her own experiences as a PG aspirant. Understanding the stress, confusion, and pressure students face, she developed a structured, concept-based teaching approach focused on high-yield topics, smart revision techniques, and exam-oriented understanding.",
    },
    {
      title: "Teaching During the Lockdown - Unacademy Phase",
      description:
        "During the COVID-19 lockdown, she began teaching on Unacademy, reaching students across the country through online platforms. Despite long study hours and packed schedules, her commitment to students remained unwavering.<br/> One of the most memorable initiatives from this phase was 'Midnight Express' - a unique late-night teaching series where she taught students from 12 AM to 1 AM, even after studying and working throughout the day. This initiative became a symbol of her dedication, discipline, and deep concern for student success.",
    },
    {
      title: "A Trusted Mentor Today",
      description:
        "Known as the 'BTR Queen', Dr. Zainab Vora today is more than a radiology educator. She is a mentor, guide, and source of strength for countless NEET PG and INI-CET aspirants, helping them transform anxiety into confidence and dreams into achievable goals.",
    },
  ];

  const getTypeIcon = (type) => {
    return "📌";
  };

  const getTypeLabel = (type) => {
    return "Milestone";
  };

  return (
    <section className="career-timeline-section">
      <div className="career-timeline-container">
        <div className="career-timeline-header">
          <h2>Dr. Zainab Vora - Career Timeline</h2>
          <p>
            A journey of excellence, dedication, and inspiring countless medical
            aspirants
          </p>
        </div>

        <div className="career-timeline-main" ref={timelineRef}>
          <div className="career-timeline-line-bg"></div>
          <div
            className="career-timeline-line-fill"
            ref={timelineLineRef}
            style={{ height: `${scrollProgress}%` }}
          ></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`career-timeline-item ${
                index % 2 === 0 ? "left" : "right"
              } ${selectedYear === item.title ? "active" : ""}`}
              onClick={() =>
                setSelectedYear(selectedYear === item.title ? null : item.title)
              }
            >
              <div className="career-timeline-content">
                <div className="career-timeline-details">
                  <h3>{item.title}</h3>
                  <p
                    className="career-timeline-description"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>

              <div className="career-timeline-marker">
                <div className="career-timeline-marker-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
