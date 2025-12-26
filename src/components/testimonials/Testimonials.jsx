import React, { useState } from "react";
import "./Testimonials.css";
import { testimonials } from "../../assets/data/testimonialsData";

const Testimonials = () => {
  const [isPausedCol1, setIsPausedCol1] = useState(false);
  const [isPausedCol2, setIsPausedCol2] = useState(false);
  const [isPausedCol3, setIsPausedCol3] = useState(false);

  return (
    <div className="testimonials-section">
      <h2>Students Feedback</h2>

      <div className="testimonials-container">
        <div className="testimonials-column column-1">
          <div
            className={`testimonials-track track-up ${
              isPausedCol1 ? "paused" : ""
            }`}
            onMouseEnter={() => setIsPausedCol1(true)}
            onMouseLeave={() => setIsPausedCol1(false)}
          >
            {[...testimonials[0], ...testimonials[0]].map(
              (testimonial, index) => (
                <div key={index} className="testimonials-card">
                  <p className="testimonials-text">{testimonial.feedback}</p>
                  <div className="testimonials-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonials-author-image"
                    />
                    <div className="testimonials-author-info">
                      <h4 className="testimonials-author-name">
                        {testimonial.name}
                      </h4>
                      {/* <p className="testimonials-author-handle">
                        {testimonial.handle}
                      </p> */}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="testimonials-column column-2">
          <div
            className={`testimonials-track track-down ${
              isPausedCol2 ? "paused" : ""
            }`}
            onMouseEnter={() => setIsPausedCol2(true)}
            onMouseLeave={() => setIsPausedCol2(false)}
          >
            {[...testimonials[1], ...testimonials[1]].map(
              (testimonial, index) => (
                <div key={index} className="testimonials-card">
                  <p className="testimonials-text">{testimonial.feedback}</p>
                  <div className="testimonials-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonials-author-image"
                    />
                    <div className="testimonials-author-info">
                      <h4 className="testimonials-author-name">
                        {testimonial.name}
                      </h4>
                      {/* <p className="testimonials-author-handle">
                        {testimonial.handle}
                      </p> */}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="testimonials-column column-3">
          <div
            className={`testimonials-track track-up ${
              isPausedCol3 ? "paused" : ""
            }`}
            onMouseEnter={() => setIsPausedCol3(true)}
            onMouseLeave={() => setIsPausedCol3(false)}
          >
            {[...testimonials[2], ...testimonials[2]].map(
              (testimonial, index) => (
                <div key={index} className="testimonials-card">
                  <p className="testimonials-text">{testimonial.feedback}</p>
                  <div className="testimonials-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonials-author-image"
                    />
                    <div className="testimonials-author-info">
                      <h4 className="testimonials-author-name">
                        {testimonial.name}
                      </h4>
                      {/* <p className="testimonials-author-handle">
                        {testimonial.handle}
                      </p> */}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="fog-overlay fog-top"></div>
        <div className="fog-overlay fog-bottom"></div>
      </div>
    </div>
  );
};

export default Testimonials;
