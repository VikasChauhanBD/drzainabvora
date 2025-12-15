import React, { useEffect, useRef } from "react";
import "./CRPlans.css";
import { NavLink } from "react-router-dom";

function CRPlans() {
  const sectionRef = useRef(null);
  const headerRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate headers
            headerRefs.current.forEach((header) => {
              header.classList.add("animate");
            });

            // Animate cards with stagger
            cardRefs.current.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const addToHeaderRefs = (el) => {
    if (el && !headerRefs.current.includes(el)) {
      headerRefs.current.push(el);
    }
  };

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const soloData = [
    { id: 1, name: "Year Plan" },
    { id: 2, name: "Year Plan" },
    { id: 3, name: "Year Plan" },
    { id: 4, name: "Year Plan" },
    { id: 5, name: "Year Plan" },
  ];

  return (
    <div className="crplans-container" ref={sectionRef}>
      <div className="crplans-header" ref={addToHeaderRefs}>
        <h1>Solo Plan</h1>
        <p>
          The Solo Plan is ideal for radiology residents who prefer focused,
          self-paced learning on Conceptual Radiology. It offers complete access
          to platform resources, allowing you to plan your preparation around
          your own schedule and learning style.
          <br />
          This plan is perfect for independent learners who want uninterrupted
          access to expert-led lectures, notes, case discussions, and
          exam-oriented content on Conceptual Radiology. Study at your own pace
          and build confidence step by step.
        </p>
      </div>

      <div className="crplans-cards">
        {soloData.map((data) => (
          <div
            key={`solo-${data.id}`}
            className="crplans-card"
            ref={addToCardRefs}
          >
            <h2>{data.id}</h2>
            <h4>{data.name}</h4>
            <NavLink to="https://app.econceptual.com/">Buy Now</NavLink>
          </div>
        ))}
      </div>

      <div className="crplans-header" ref={addToHeaderRefs}>
        <h1 style={{ marginTop: "2rem" }}> Buddy Plan</h1>
        <p>
          The Buddy Plan is designed for two radiology residents who want to
          learn together. It encourages collaboration, discussion, and mutual
          motivation while making learning more engaging and cost-effective.
          <br />
          With this plan, both residents get full access to all Conceptual
          Radiology resources. Learn together, discuss clinical cases, share
          insights, and stay consistent in your preparation—while saving on
          subscription costs.
        </p>
      </div>

      <div className="crplans-cards">
        {soloData.map((data) => (
          <div
            key={`buddy-${data.id}`}
            className="crplans-card"
            ref={addToCardRefs}
          >
            <h2>{data.id}</h2>
            <h4>{data.name}</h4>
            <NavLink to="https://app.econceptual.com/">Buy Now</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CRPlans;
