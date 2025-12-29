import React, { useRef } from "react";
import "./Story.css";
import Image1 from "../../assets/images/crash-course-image1.jpg";
import Image2 from "../../assets/images/crash-course-image2.jpg";
import Image3 from "../../assets/images/neet-pg-bootcamp.webp";
import Image4 from "../../assets/images/online-btr-inage.png";

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
  const slides = [Image1, Image2, Image3, Image4];

  return (
    <div className="story-container">
      <div className="story-header">
        <h1>Sharing her Values, Inspirations, and Teaching Approach.</h1>
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
