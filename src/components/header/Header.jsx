import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroImage from "../../assets/images/dr-zainab-vora.png";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  const [text] = useTypewriter({
    words: ["“Kahani tumhaari hai. Ho sake toh kamaal likhna.”"],
    loop: {},
  });

  return (
    <div className="header-container">
      <div className="upper-header">
        <h1>
          A respected radiologist, renowned educator, and mentor to thousands of
          medical students across India, guiding them in Radiology for FMGE,
          NEET PG, INICET, and MBBS training.
        </h1>
        <NavLink>Click Here</NavLink>
      </div>

      <div className="lower-header">
        <div className="header-main">
          <div className="header-content">
            <h3>Here comes</h3>
            <h1>Dr. Zainab Vora</h1>
            <h2>
              Radiologist, National NEET PG Mentor, and the mastermind behind
              BTR.
            </h2>
            <p>
              A teacher who studies with you, a doctor who understands the
              pressure you carry, and a mentor who believes that every student’s
              journey deserves clarity, strategy, and hope. From earning Rank 1
              in Radiology at AIIMS to simplifying the NEET PG and INI-CET
              preparation for lakhs of students across India, Dr. Zainab has
              built a teaching style rooted in honesty, hard work, and empathy.
              She believes that exams are won not by shortcuts, but by
              consistency, structure, and learning how to handle pressure, and
              that’s exactly what her classes deliver: clarity, confidence, and
              a sense of “you’re not alone in this”.
            </p>

            <h5>
              Welcome to her world - where complex concepts become doable, fear
              turns into strategy, and every student learns to believe,
            </h5>

            {/* <h5 className={`header-rotator ${fade ? "fade-in" : "fade-out"}`}>
              {currentText}
            </h5> */}

            <h6 className="header-typeWriter">
              {text}
              <Cursor />
            </h6>

            <NavLink to="/about">Know More</NavLink>
          </div>

          <div className="header-image">
            <img src={HeroImage} alt="Dr. Zainab Vora" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
