import React, { useRef } from "react";
import "./Story.css";
import Image1 from "../../assets/images/story-images.JPG";
import Image2 from "../../assets/images/neet-pg-bootcamp.webp";

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
    "https://cdn.dribbble.com/userupload/46169258/file/97c56a4b41db5861157595a39f7520af.jpg",
    "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766822097/4737c1ede28e550da6a5f9702c81cfd3_bhgqk2.jpg",
    Image1,
    Image2,
  ];

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
