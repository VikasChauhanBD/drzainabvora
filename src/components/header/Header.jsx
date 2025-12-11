import React from "react";
import "./Header.css";
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
    words: [
      "Motivational Speaker",
      "Bestselling Author of Medical PG Books",
      "Medical Teacher",
      "BTR Founder",
    ],
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
        <button>Click Here</button>
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
            <h5 className="header-typeWriter">
              {text}
              <Cursor />
            </h5>
            <button>Know More</button>
          </div>
          <div className="header-image">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
