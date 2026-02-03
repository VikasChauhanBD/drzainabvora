import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const heroImages = [
    "https://cdn.dribbble.com/userupload/46111694/file/20b7938841258aa0636802dde8b915d2.png",
    "https://cdn.dribbble.com/userupload/46111695/file/05931a6957b75963092ac31654b56934.png",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <div className="upper-header">
        <h2>
          A renowned and respected educator, mentoring thousands of medical
          students across India through BTR for FMGE, NEET PG & INICET.
        </h2>
      </div>

      <div className="lower-header">
        <div className="header-main">
          <div className="header-content">
            <h4>Here comes</h4>
            <h2>Dr. Zainab Vora</h2>
            <h3>
              MD Radiology ( AIIMS Delhi ), National NEET PG Mentor, and the
              mastermind behind BTR.
            </h3>
            <p>
              An AIIMS New Delhi alumnus and AIR 1 in INI-CET, Dr. Zainab Vora
              is more than an educator - she is a pillar of hope for PG
              aspirants across India. With compassion and clarity, she has
              transformed countless journeys through the BTR course - turning
              confusion into confidence and dreams into reality which is why she
              known as the “BTR Queen,” To her students, she is not just a
              mentor but a belief that says, "Your story can still change."
            </p>

            <h6>“Kahani tumhaari hai. Ho sake toh kamaal likhna.”</h6>

            <NavLink to="/about">Know More</NavLink>
          </div>

          <div className="header-image">
            {heroImages.map((img, index) => (
              <img
                src={img}
                alt="Dr. Zainab Vora"
                className={`hero-img ${index === currentImage ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
