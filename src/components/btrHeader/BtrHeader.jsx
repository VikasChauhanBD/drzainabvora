import React, { useState, useEffect } from "react";
import "./BtrHeader.css";

const BtrHeader = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://cdn.dribbble.com/userupload/46355808/file/f2274fc9ca13235e117b03ebf82f2320.jpg",
      alt: "BTR Subscriber Students with Dr. Zainab Vora",
    },
    {
      src: "https://cdn.dribbble.com/userupload/46295962/file/3f356f62229b14733e4bee0c87aef9c2.webp",
      alt: "BTR Subscriber Students with Dr. Zainab Vora",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <section className="btr-header">
        {/* Background Images */}
        <div className="btr-header-background-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`btr-header-background-image ${
                currentImage === index ? "active" : ""
              }`}
              loading="lazy"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="btr-header-overlay"></div>

        {/* Content */}
        <div className="btr-header-content">
          <div className="btr-header-text">
            <h1>What makes BTR unique?</h1>
            <p>
              "BTR by Dr. Zainab is not just another notes book. It actually
              feels like someone finally sat down, suffered through all the
              confusion we go through, and then distilled the entire syllabus
              into something that won't fry your brain."
            </p>
          </div>
        </div>
      </section>

      <section className="what-is-btr">
        <h2 className="what-is-btr-ques">What is BTR</h2>
        <p className="what-is-btr-ans">
          BTR is a high-yield rapid revision course designed to help students
          revise the most important, exam-oriented concepts just before the
          exam. The focus is to divide the content into concepts which can be
          understood with the lectures and facts which can be remembered using
          tricks. It gives a feeling of content that can be revised multiple
          times before the exam, which becomes the game-changer.
        </p>
      </section>
    </div>
  );
};

export default BtrHeader;
