import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import HeroImage from "../../assets/images/dr-zainab-vora.png";

function Header() {
  const textList = [
    "Motivational Speaker",
    "Bestselling Author of Medical PG Books",
    "Medical Teacher",
    "BTR Founder",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % textList.length);
        setFade(true);
      }, 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentText = textList[index];

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
            <h3>Meet The Mentor</h3>
            <h1>Dr. Zainab Vora</h1>
            <h2>MBBS, MD (Radiology), DNB</h2>
            <p>
              Dr. Zainab Vora is a renowned radiologist whose passion for
              teaching has shaped the journeys of thousands of aspiring medical
              professionals. An alumna of AIIMS New Delhi, she scored Rank 1 at
              AIIMS in May 2015 and Rank 1 at NIMHANS in March 2015. She
              completed her MBBS and MD in Radiology, earned her DNB, and
              refined her expertise as a Senior Resident in Radiodiagnosis at
              AIIMS.
            </p>

            <h5 className={`header-rotator ${fade ? "fade-in" : "fade-out"}`}>
              {currentText}
            </h5>

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
