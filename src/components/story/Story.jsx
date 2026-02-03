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

  // Array of images only
  const slides = [
    "https://cdn.dribbble.com/userupload/46295951/file/0d7ff40fa53d1488fb23e4608470ce49.jpg",
    "https://cdn.dribbble.com/userupload/46294781/file/932361710626bb0d3701a45ca1258889.jpg",
    "https://cdn.dribbble.com/userupload/46295962/file/3f356f62229b14733e4bee0c87aef9c2.webp",
    "https://cdn.dribbble.com/userupload/46295928/file/1304e421fb879feb83e6c0ff616ba640.jpg",
  ];

  return (
    <div className="story-container">
      <div className="story-header">
        <h2>Sharing her Values, Inspirations, and Teaching Approach.</h2>
      </div>
      <div className="story-card">
        <div className="story-slide" ref={slideRef}>
          {slides.map((image, index) => (
            <div
              key={index}
              className="story-item"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="story-button">
          <button className="prev" onClick={handlePrev}>
            ◁
          </button>
          <button className="next" onClick={handleNext}>
            ▷
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
