import React, { useState, useEffect } from "react";
import "./WhyBtrHeader.css";
import Image1 from "../../assets/images/why-btr-header-1.JPG";
import Image2 from "../../assets/images/why-btr-header-2.JPG";

const WhyBtrHeader = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [Image1, Image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="why-btr-header">
        {/* Background Images */}
        <div className="why-btr-header-background-images">
          {images.map((image, index) => (
            <div
              key={index}
              className={`why-btr-header-background-image ${
                currentImage === index ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="why-btr-header-overlay"></div>

        {/* Content */}
        <div className="why-btr-header-content">
          <div className="why-btr-header-text">
            <h1>What makes BTR unique?</h1>
            <p>
              BTR by Dr. Zainab is not just another notes book. It actually
              feels like someone finally sat down, suffered through all the
              confusion we go through, and then distilled the entire syllabus
              into something that won't fry your brain.
            </p>
            <span>
              I've studied under her, so let me give you the real deal
            </span>
          </div>
        </div>
      </section>

      <section className="what-is-btr">
        <h1 className="what-is-btr-ques">What is BTR</h1>
        <p className="what-is-btr-ans">
          This is a Dummy Text :- Dr. Zainab Vora is a renowned radiologist and
          passionate educator, an alumna of AIIMS New Delhi with Rank 1 at AIIMS
          (May 2015) and NIMHANS (March 2015). She has completed her MBBS, MD
          (Radiology), DNB, and served as a Senior Resident at AIIMS. Known for
          her expertise in CT, MRI, ultrasound, Doppler, and interventional
          radiology, she is a leading faculty at Vidya Jeevan, guiding students
          for FMGE, NEET PG, and INICET with clarity and precision.
        </p>
      </section>
    </div>
  );
};

export default WhyBtrHeader;
