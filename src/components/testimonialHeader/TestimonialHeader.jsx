import React, { useState, useEffect } from "react";
import "./TestimonialHeader.css";

const TestimonialHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleProfiles, setVisibleProfiles] = useState([]);

  // Testimonial data for slider
  const testimonials = [
    {
      quote:
        "The course was a growth machine and a complete eye-opener for us. Have never learnt such fundamentals before.",
      author: "Jash & Devarsh Gotawala",
      course: "Enrolled in How To YouTube",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=500&fit=crop",
    },
    {
      quote:
        "This course transformed my understanding of content creation. The insights were invaluable.",
      author: "Sarah Johnson",
      course: "Enrolled in Content Mastery",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      quote: "Best investment I've made in my career. The strategies work!",
      author: "Mike Chen",
      course: "Enrolled in Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
  ];

  // Rotating text quotes
  const rotatingTexts = [
    {
      text: "Will make you question all that you've been doing till now.",
      author: "Riya Baria",
    },
    {
      text: "Completely transformed my approach to creating content.",
      author: "Alex Kumar",
    },
    {
      text: "The best course I've ever taken. Highly recommend!",
      author: "Maria Garcia",
    },
  ];

  // Profile images for top box - fixed positions
  const profileImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  ];

  // Fixed positions for avatars
  const avatarPositions = [
    { top: "15%", left: "15%" },
    { top: "20%", left: "50%" },
    { top: "10%", left: "75%" },
    { top: "45%", left: "10%" },
    { top: "50%", left: "40%" },
    { top: "45%", left: "80%" },
    { top: "75%", left: "20%" },
    { top: "70%", left: "60%" },
    { top: "80%", left: "85%" },
    { top: "35%", left: "65%" },
  ];

  // Certificate images
  const certificateImages = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
  ];

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

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

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

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">
        From Our Students
        <br />
        Across <span className="highlight">12 Courses</span>
      </h2>

      <div className="testimonial-grid">
        {/* Left Box - Slider */}
        <div className="testimonial-card slider-card">
          <div className="impressions-badge">
            <h3>1M</h3>
            <p>Monthly Impressions</p>
          </div>

          <div className="testimonial-content">
            <p className="quote">"{testimonials[currentSlide].quote}"</p>
            <p className="author">{testimonials[currentSlide].author}</p>
            <p className="course">{testimonials[currentSlide].course}</p>
          </div>

          <div className="testimonial-image">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].author}
            />
          </div>

          <div className="slider-controls">
            <button onClick={prevSlide} className="slider-btn">
              ‹
            </button>
            <button onClick={nextSlide} className="slider-btn">
              ›
            </button>
          </div>
        </div>

        {/* Right Side Container */}
        <div className="right-container">
          {/* Top Right Box - Student Count with Changing Images at Fixed Positions */}
          <div className="testimonial-card students-card">
            <div className="floating-images">
              {visibleProfiles.map((profileIdx, index) => (
                <img
                  key={index}
                  src={profileImages[profileIdx]}
                  alt={`Student ${index + 1}`}
                  className="floating-avatar"
                  style={{
                    top: avatarPositions[index].top,
                    left: avatarPositions[index].left,
                  }}
                />
              ))}
            </div>
            <h2 className="student-count">467,546</h2>
            <p className="student-text">students and counting!</p>
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            {/* Bottom Left Box - Rotating Text */}
            <div className="testimonial-card quote-card">
              <div className="rotating-text">
                <p className="rotating-quote">
                  {rotatingTexts[currentTextIndex].text}
                </p>
                <p className="rotating-author">
                  {rotatingTexts[currentTextIndex].author}
                </p>
              </div>
            </div>

            {/* Bottom Right Box - Rotating Certificate Images */}
            <div className="testimonial-card certificate-card">
              <img
                src={certificateImages[currentImageIndex]}
                alt="Certificate"
                className="certificate-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHeader;
