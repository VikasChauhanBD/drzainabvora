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

import DrAkshitaSarin from "../../assets/studentsImages/dr-akshita-sarin.webp";
import DrMuditGoyal from "../../assets/studentsImages/dr-mudit-goyal.webp";
import DrVidushi from "../../assets/studentsImages/dr-vidushi.webp";

const TestimonialHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleProfiles, setVisibleProfiles] = useState([]);
  const [count, setCount] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const target = 115221;
  const duration = 2000; // animation duration in ms (2 sec)

  // Testimonial data for slider
  const testimonials = [
    {
      quote:
        "What else can be described as the best memory and the best moment other than getting this picture with my dream mentor that I could cherish for years to come. She had become my everything - a teacher who makes learning and be honest understanding super easy, a friend who always believes in you, a sister who uplifts you when you feel low and a mother who gives the best life lessons and encourages you to become a good human being",
      author: "Dr. Akshita Sarin",
      image: DrAkshitaSarin,
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

  // Profile images for top box - fixed positions
  const profileImages = [
    // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    // "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    // "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    // "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    // "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    DrArushiVahie,
    DrNavya,
    DrRajeswariRiya,
    DrShrutiRawat,
    DrShubhDahiya,
    DrSnehaRani,
  ];

  // Fixed positions for avatars
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

  // Initialize visible profiles
  useEffect(() => {
    setVisibleProfiles(profileImages.map((_, idx) => idx));
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

  // Change profile images at fixed positions
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleProfiles((prev) => {
        const newProfiles = [...prev];
        const randomIndex = Math.floor(Math.random() * newProfiles.length);
        const randomImage = Math.floor(Math.random() * profileImages.length);
        newProfiles[randomIndex] = randomImage;
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
              {visibleProfiles.map((profileIdx, index) => (
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
