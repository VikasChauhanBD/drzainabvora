import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroImage1 from "../../assets/images/dr-zainab-vora.png";
import HeroImage2 from "../../assets/images/dr-zainab-vora2.png";
import HeroImage3 from "../../assets/images/dr-zainab-vora3.png";

function Header() {
  const heroImages = [HeroImage2, HeroImage3];
  const [currentImage, setCurrentImage] = useState(0);

  // Image rotation logic
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prev) => (prev + 1) % heroImages.length);
  //   }, 4000); // change image every 4 seconds

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // const [text] = useTypewriter({
  //   words: ["“Kahani tumhaari hai. Ho sake toh kamaal likhna.”"],
  //   loop: {},
  // });

  return (
    <div className="header-container">
      <div className="upper-header">
        <h1>
          A renowned and respected education, mentoring thousands of medical
          students across India through BTR for FMGE, NEET PG & INICET.
        </h1>
        {/* <NavLink to="/about">Click Here</NavLink> */}
      </div>

      <div className="lower-header">
        <div className="header-main">
          <div className="header-content">
            <h3>Here comes</h3>
            <h1>Dr. Zainab Vora</h1>
            <h2>
              MD Radiology ( AIIMS Delhi ), National NEET PG Mentor, and the
              mastermind behind BTR.
            </h2>
            <p>
              An AIIMS New Delhi alumnus and AIR 1 in INI-CET, Dr. Zainab Vora
              is more than an educator—she is a pillar of hope for PG aspirants
              across India. With compassion and clarity, she has transformed
              countless journeys through the BTR course—turning confusion into
              confidence and dreams into reality which is why she known as the
              “BTR Queen,” To her students, she is not just a mentor but a
              belief that says, "Your story can still change."
            </p>

            {/* <h6 className="header-typeWriter">
              {text}
              <Cursor />
            </h6> */}

            <h6>“Kahani tumhaari hai. Ho sake toh kamaal likhna.”</h6>

            <NavLink to="/about">Know More</NavLink>
          </div>

          <div className="header-image">
            {heroImages.map((img, index) => (
              // <img
              //   key={index}
              //   src={img}
              //   alt="Dr. Zainab Vora"
              //   className={`hero-img ${index === currentImage ? "active" : ""}`}
              // />
              <img
                src={img}
                alt="Hero"
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
