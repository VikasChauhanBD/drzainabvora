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

  const slides = [
    {
      name: "Sharing her Values",
      tagLine:
        "Personal Story & Philosophy – Sharing her Values, Inspirations, and Teaching Approach.",
      img: Image1,
    },
    {
      name: "Inspirations",
      tagLine:
        "Personal Story & Philosophy – Sharing her Values, Inspirations, and Teaching Approach.",
      img: Image2,
    },
    {
      name: "Teaching Approach",
      tagLine:
        "Personal Story & Philosophy – Sharing her Values, Inspirations, and Teaching Approach.",
      img: Image3,
    },
    {
      name: "Sharing her Values",
      tagLine:
        "Personal Story & Philosophy – Sharing her Values, Inspirations, and Teaching Approach.",
      img: Image4,
    },
  ];

  return (
    <div className="story-container">
      <div className="story-header">
        <h1>
          Personal Story & Philosophy – Sharing her Values, Inspirations, and
          Teaching Approach.
        </h1>
        {/* <p>
          India is a land of unmatched beauty and profound history. Dive into
          our hand-picked collection of the nation's most-visited and culturally
          significant locations. From the iconic architectural wonders and
          bustling metropolitan hubs to the tranquil Himalayan retreats, explore
          in-depth guides, historical context, and essential visitor details for
          every must-see place.
        </p> */}
      </div>

      <div className="story-card">
        <div className="story-slide" ref={slideRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="story-item"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="story-content">
                <div className="story-name">{slide.name}</div>
                <div className="story-des">{slide.tagLine}</div>
                {/* <a
                  className="story-seeMore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>See More</button>
                </a> */}
              </div>
            </div>
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
