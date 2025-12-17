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

      // Calculate how much of the timeline is visible
      const startOffset = windowHeight * 0.8; // Start filling when timeline is 80% down the screen
      const endOffset = windowHeight * 0.2; // Complete when timeline top is 20% from top

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
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      year: "2008",
      title: "Bachelor of Medicine",
      institution: "Harvard Medical School",
      description:
        "Graduated with honors, specializing in Internal Medicine. Awarded the Dean's Excellence Award for outstanding academic performance.",
      type: "education",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    },
    {
      year: "2010",
      title: "Junior Resident",
      institution: "Massachusetts General Hospital",
      description:
        "Completed residency program in Internal Medicine, gaining extensive clinical experience in patient care and diagnosis.",
      type: "experience",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    },
    {
      year: "2012",
      title: "First Research Publication",
      institution: "Journal of Internal Medicine",
      description:
        "Published groundbreaking research on diabetes management in elderly patients, cited over 200 times.",
      type: "achievement",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    },
    {
      year: "2014",
      title: "Assistant Professor",
      institution: "Johns Hopkins University",
      description:
        "Joined the faculty as Assistant Professor of Medicine, teaching medical students and residents.",
      type: "experience",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    },
    {
      year: "2016",
      title: "Outstanding Educator Award",
      institution: "Johns Hopkins University",
      description:
        "Recognized for exceptional teaching methods and student mentorship. Developed innovative curriculum for clinical skills training.",
      type: "achievement",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
    },
    {
      year: "2018",
      title: "Associate Professor",
      institution: "Stanford Medical School",
      description:
        "Promoted to Associate Professor, leading the Internal Medicine teaching program and supervising research fellows.",
      type: "experience",
      image:
        "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=400&h=300&fit=crop",
    },
    {
      year: "2020",
      title: "Department Chair",
      institution: "Stanford Medical School",
      description:
        "Appointed as Chair of Internal Medicine Department, overseeing academic programs and research initiatives.",
      type: "experience",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
    },
    {
      year: "2022",
      title: "National Medical Excellence Award",
      institution: "American Medical Association",
      description:
        "Received prestigious national award for contributions to medical education and advancing clinical practices.",
      type: "achievement",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    },
    {
      year: "2024",
      title: "Professor & Research Director",
      institution: "Stanford Medical School",
      description:
        "Currently serving as Professor of Medicine and Director of Clinical Research, mentoring the next generation of medical professionals.",
      type: "experience",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "education":
        return "🎓";
      case "experience":
        return "💼";
      case "achievement":
        return "🏆";
      default:
        return "📌";
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case "education":
        return "Education";
      case "experience":
        return "Professional Experience";
      case "achievement":
        return "Achievement";
      default:
        return "Milestone";
    }
  };

  return (
    <section className="career-timeline-section">
      <div className="timeline-container">
        <div className="timeline-header">
          <h2>Career Timeline</h2>
          <p>
            - A chronological display of her milestones, accomplishments, and
            professional growth.
          </p>
        </div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line-bg"></div>
          <div
            className="timeline-line-fill"
            ref={timelineLineRef}
            style={{ height: `${scrollProgress}%` }}
          ></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
                selectedYear === item.year ? "active" : ""
              }`}
              onClick={() =>
                setSelectedYear(selectedYear === item.year ? null : item.year)
              }
            >
              <div className="timeline-content">
                <div className="timeline-image">
                  <img src={item.image} alt={item.title} />
                  <div className="timeline-type-badge">
                    <span className="type-icon">{getTypeIcon(item.type)}</span>
                  </div>
                </div>

                <div className="timeline-details">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-type">{getTypeLabel(item.type)}</div>
                  <h3>{item.title}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>

              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
