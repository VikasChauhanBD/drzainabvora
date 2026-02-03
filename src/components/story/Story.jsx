import React, { useRef } from "react";
import "./Story.css";

const Story = () => {
  const slideRef = useRef(null);

  const handleNext = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".story-item");
    slide.appendChild(items[0]);
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".story-item");
    slide.prepend(items[items.length - 1]);
  };

  const slides = [
    {
      src: "https://cdn.dribbble.com/userupload/46295951/file/0d7ff40fa53d1488fb23e4608470ce49.jpg",
      alt: "Reunion Felicitation Ceremony INICET Nov 2025 Toppers with Dr. Zainab Vora",
    },
    {
      src: "https://cdn.dribbble.com/userupload/46294781/file/932361710626bb0d3701a45ca1258889.jpg",
      alt: "NEET PG 2025 Review",
    },
    {
      src: "https://cdn.dribbble.com/userupload/46295962/file/3f356f62229b14733e4bee0c87aef9c2.webp",
      alt: "Reunion Felicitation Ceremony INICET Nov 2025 Toppers with Dr. Zainab Vora",
    },
    {
      src: "https://cdn.dribbble.com/userupload/46295928/file/1304e421fb879feb83e6c0ff616ba640.jpg",
      alt: "INICET Nov 2025 Topper with Dr. Zainab Vora",
    },
  ];

  return (
    <div className="story-container">
      <div className="story-header">
        <h2>Sharing her Values, Inspirations, and Teaching Approach.</h2>
      </div>

      <div className="story-card">
        <div className="story-slide" ref={slideRef}>
          {slides.map((item, index) => (
            <div key={index} className="story-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="story-button">
          <button
            className="prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            ◁
          </button>
          <button className="next" onClick={handleNext} aria-label="Next slide">
            ▷
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
