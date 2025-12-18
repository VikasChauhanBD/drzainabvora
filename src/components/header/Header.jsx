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
              Dr. Zainab Vora is not merely a name in medical education — she is
              a feeling, a source of strength, and a quiet reassurance for
              thousands of PG aspirants standing at the crossroads of fear and
              hope. An alumnus of AIIMS, New Delhi, and the proud achiever of
              AIR 1 in INI-CET, her journey reminds students that even the
              biggest dreams are achievable with faith, consistency, and
              courage. students across India.
              <br />
              But what makes Dr. Zainab Vora extraordinary goes far beyond ranks
              and degrees. She teaches with compassion, understanding the
              sleepless nights, the self-doubt, and the emotional exhaustion
              that every aspirant carries. In her voice, students find calm. In
              her words, they find direction. She doesn’t just teach subjects —
              she heals broken confidence and rebuilds belief.
              <br />
              Affectionately crowned the “BTR Queen,” she has changed countless
              lives through the BTR course. For many students, BTR arrived when
              they were at their lowest — confused, tired, and ready to give up.
              Under her guidance, chaos turned into clarity, fear turned into
              confidence, and dreams that once felt impossible began to feel
              within reach. Today, many of those students proudly step into
              their dream postgraduate branches, carrying her teachings in their
              hearts.
              <br />
              To her students, Dr. Zainab Vora is more than a mentor. She is
              hope on difficult days, strength during silent breakdowns, and the
              belief that whispers, “At any moment you have the power to say,
              this is not how my story ends”
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
