import React, { useState, useEffect } from "react";
import "./TestimonialHeader.css";
import Image1 from "../../assets/images/crash-course-image2.jpg";
import Image2 from "../../assets/images/crash-course-image1.jpg";
import Image3 from "../../assets/images/neet-pg-bootcamp.webp";
import DrArushiVahie from "../../assets/studentsImages/Dr-Arushi-Vahie.png";
import DrNavya from "../../assets/studentsImages/Dr-Navya.png";
import DrRajeswariRiya from "../../assets/studentsImages/Dr-Rajeswari-Riya.png";
import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";
import DrShubhDahiya from "../../assets/studentsImages/Dr-Shubh-Dahiya.png";
import DrSnehaRani from "../../assets/studentsImages/Dr-Sneha-Rani.png";
import DrAravindKrishnan from "../../assets/studentsImages/dr-aravind-krishnan.jpg";
import DrkritikaAggarwal from "../../assets/studentsImages/dr-kritika-aggarwal.jpg";
import DrIfrahAnsari from "../../assets/studentsImages/dr-ifrah-ansari.jpg";
import DrPrakrutiBhat from "../../assets/studentsImages/dr-prakruti-bhat.jpg";
import DrArshiyaGarg from "../../assets/studentsImages/dr-arshiya-garg.jpg";
import DrShravya from "../../assets/studentsImages/dr-shravya.jpg";
import DrTanishaGupta from "../../assets/studentsImages/dr-tanisha-gupta.jpg";
import DrAkshithaThatikonda from "../../assets/studentsImages/dr-akshitha-thatikonda.jpg";
import DrVinootKalasappagol from "../../assets/studentsImages/dr-vinoot-kalasappagol.jpg";
import DrYogithaPoojari from "../../assets/studentsImages/dr-yogitha-poojari.jpg";
import DrAparnaWarrier from "../../assets/studentsImages/dr-aparna-warrier.jpg";
import DrAlphonsaMaryMathew from "../../assets/studentsImages/dr-alphonsa-mary-mathew.jpg";
import DrFaizanAftabWani from "../../assets/studentsImages/dr-faizan-aftab-wani.jpg";
import DrSakshitaPal from "../../assets/studentsImages/dr-sakshita-pal.jpg";
import DrAveekChakraborty from "../../assets/studentsImages/dr-aveek-chakraborty.jpg";
import DrAvneeshMadan from "../../assets/studentsImages/dr-avneesh-madan.jpg";
import DrDevanshiPundeer from "../../assets/studentsImages/dr-devanshi-pundeer.jpg";

import DrAkshitaSarin from "../../assets/studentsImages/dr-akshita-sarin.webp";
import DrMuditGoyal from "../../assets/studentsImages/dr-mudit-goyal.webp";
import DrVidushi from "../../assets/studentsImages/dr-vidushi.webp";

const TestimonialHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleProfiles, setVisibleProfiles] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [count, setCount] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const target = 115221;
  const duration = 2000; // animation duration in ms (2 sec)

  // Testimonial data for slider
  const testimonials = [
    {
      quote:
        "Best concise notes of BTR and Dr. Zainab Vora Ma’am Constant guidance throughout this journey is the best thing to study with. She is like a senior who knows more than you know about yourself. She is a mentor,guide, my constant inspiration.",
      author: "Dr. Tanisha Gupta",
      image: DrTanishaGupta,
    },
    {
      quote:
        "Attending the test and discussion with everyone and listening to Dr. Zainab Vora ma’am was an amazing experience for me. It helped me improve my consistency and overcome my fear of the exam.",
      author: "Dr. Mudit Goyal",
      image: DrMuditGoyal,
    },
    {
      quote:
        "It felt like magic in my life 4 days passed so amazingly that I never imagined it while entering there. Whether it was the syllabus being completed so quickly, which I would have never managed on my own, or the life lessons shared by Dr. Zainab ma’am that she inculcated in us, every moment was truly impactful.",
      author: "Dr. Vidushi",
      image: DrVidushi,
    },
    {
      quote:
        "BTR and Dr. Zainab Vora ma'am has played a great role in my success journey. I am so grateful to her for being the guiding light and bringing all 19 subjects in the best crisp and condensed way.",
      author: "Dr. kritika aggarwal",
      image: DrkritikaAggarwal,
    },
    {
      quote:
        "I was a BTR subscriber for a year. It changed my whole approach to studying and MCQ solving. So grateful for what Dr. Zainab Vora ma’am is doing for us students. My rank went from 25k in NEET 2024 to 431 in NEET 2025.",
      author: "Dr. Prakruti Bhat",
      image: DrPrakrutiBhat,
    },
    {
      quote:
        "It was great experience, I had taken BTR ONLINE , truly a great learning experience especially, Dr. Zainab Vora Ma'am She is just amazing and a great mentor truly Looking forward to meet her atleast once in my lifetime.",
      author: "Dr. Vinoot Kalasappagol",
      image: DrVinootKalasappagol,
    },
    {
      quote:
        "I studied for NEET pg right after my internship got over, just for 3 months and honeslty without BTR and Dr. Zainab Vora ma'am, nothing would have been possible ",
      author: "Dr. Aparna Warrier ",
      image: DrAparnaWarrier,
    },
  ];

  // Rotating text quotes
  const rotatingTexts = [
    {
      text: "Dr. Zainab Vora ma’am is the best.",
      author: "Dr. Niharika",
    },
    {
      text: "BTR played major role in my result improvement.",
      author: "Dr. Varsha Hegde",
    },
    {
      text: "BTR & T&ds are best to revise & perform well in exam.",
      author: "Dr. Muskan Maheswari",
    },
    {
      text: "I’m deeply grateful to Dr. Zainab Vora ma’am for her brilliant BTR sessions.",
      author: "Dr. Phalguni Wadhwa",
    },
  ];

  const profileImages = [
    DrVidushi,
    DrMuditGoyal,
    DrAkshitaSarin,
    DrAravindKrishnan,
    DrkritikaAggarwal,
    DrIfrahAnsari,
    DrPrakrutiBhat,
    DrArshiyaGarg,
    DrShravya,
    DrTanishaGupta,
    DrAkshithaThatikonda,
    DrVinootKalasappagol,
    DrYogithaPoojari,
    DrAparnaWarrier,
    DrAlphonsaMaryMathew,
    DrFaizanAftabWani,
    DrSakshitaPal,
    DrAveekChakraborty,
    DrAvneeshMadan,
    DrDevanshiPundeer,
    DrArushiVahie,
    DrNavya,
    DrRajeswariRiya,
    DrShrutiRawat,
    DrShubhDahiya,
    DrSnehaRani,
  ];

  const avatarPositions = [
    { top: "5%", left: "5%" },
    { top: "15%", left: "25%" },
    { top: "5%", left: "60%" },
    { top: "10%", left: "90%" },
    { top: "50%", left: "15%" },
    { top: "45%", left: "90%" },
    { top: "70%", left: "5%" },
    { top: "75%", left: "30%" },
    { top: "75%", left: "75%" },
    { top: "35%", left: "70%" },
  ];

  // Certificate images
  const certificateImages = [Image1, Image2, Image3];

  // Initialize visible profiles - randomly select 10 from the pool
  useEffect(() => {
    const initialProfiles = [];
    const availableIndices = [...Array(profileImages.length).keys()];

    // Randomly select 10 unique images from the pool
    for (let i = 0; i < 10; i++) {
      const randomIdx = Math.floor(Math.random() * availableIndices.length);
      initialProfiles.push(availableIndices[randomIdx]);
      availableIndices.splice(randomIdx, 1);
    }

    setVisibleProfiles(initialProfiles);
  }, []);

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-slide testimonials every 5 seconds - PAUSES ON HOVER
  useEffect(() => {
    if (isSliderHovered) return; // Don't start interval if hovered

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isSliderHovered]);

  // Auto-rotate text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate certificate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % certificateImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Change profile images at fixed positions - ensuring no duplicates
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleProfiles((prev) => {
        const newProfiles = [...prev];

        // Pick a random position to change
        const positionToChange = Math.floor(Math.random() * newProfiles.length);

        // Find available images (not currently visible)
        const availableImages = [];
        for (let i = 0; i < profileImages.length; i++) {
          if (!newProfiles.includes(i)) {
            availableImages.push(i);
          }
        }

        // If there are available images, pick one randomly
        if (availableImages.length > 0) {
          const randomAvailableIdx = Math.floor(
            Math.random() * availableImages.length
          );
          newProfiles[positionToChange] = availableImages[randomAvailableIdx];
        }

        return newProfiles;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let start = 0;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * target),
        target
      );

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="tsm-header-section">
      <h2 className="tsm-header-title">From Our Students</h2>

      <div className="tsm-header-grid">
        {/* Left Box - Slider */}
        <div
          className="tsm-header-card tsm-header-slider-card"
          onMouseEnter={() => setIsSliderHovered(true)}
          onMouseLeave={() => setIsSliderHovered(false)}
        >
          <div className="tsm-header-content">
            <p className="tsm-header-quote">
              "{testimonials[currentSlide].quote}"
            </p>
            <p className="tsm-header-author">
              {testimonials[currentSlide].author}
            </p>
          </div>

          <div className="tsm-header-image">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].author}
            />
          </div>

          <div className="tsm-header-slider-controls">
            <button onClick={prevSlide} className="tsm-header-slider-btn">
              ‹
            </button>
            <button onClick={nextSlide} className="tsm-header-slider-btn">
              ›
            </button>
          </div>
        </div>

        {/* Right Side Container */}
        <div className="tsm-header-right-container">
          <div className="tsm-header-card tsm-header-students-card">
            <div className="tsm-header-floating-images">
              {visibleProfiles.slice(0, 10).map((profileIdx, index) => (
                <img
                  key={index}
                  src={profileImages[profileIdx]}
                  alt={`Student ${index + 1}`}
                  className="tsm-header-floating-avatar"
                  style={{
                    top: avatarPositions[index].top,
                    left: avatarPositions[index].left,
                  }}
                />
              ))}
            </div>

            <h2 className="tsm-header-student-count">
              {count.toLocaleString()}+
            </h2>

            <p className="tsm-header-student-text">students and counting!</p>
          </div>

          {/* Bottom Row */}
          <div className="tsm-header-bottom-row">
            {/* Bottom Left Box - Rotating Text */}
            <div className="tsm-header-card tsm-header-quote-card">
              <div className="tsm-header-rotating-text">
                <p className="tsm-header-rotating-quote">
                  {rotatingTexts[currentTextIndex].text}
                </p>
                <p className="tsm-header-rotating-author">
                  {rotatingTexts[currentTextIndex].author}
                </p>
              </div>
            </div>

            {/* Bottom Right Box - Rotating Certificate Images */}
            <div className="tsm-header-card tsm-header-certificate-card">
              <img
                src={certificateImages[currentImageIndex]}
                alt="Certificate"
                className="tsm-header-certificate-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHeader;
