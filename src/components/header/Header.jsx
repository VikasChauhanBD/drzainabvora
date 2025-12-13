import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroImage1 from "../../assets/images/dr-zainab-vora.png";
import HeroImage2 from "../../assets/images/dr-zainab-vora2.png";
import HeroImage3 from "../../assets/images/dr-zainab-vora3.png";

function Header() {
  const heroImages = [HeroImage1, HeroImage2, HeroImage3];
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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
        <NavLink to="/about">Click Here</NavLink>
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
              in Radiology at AIIMS to simplifying exam preparation for lakhs of
              students across India.
            </p>

            <h6 className="header-typeWriter">
              {text}
              <Cursor />
            </h6>

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
