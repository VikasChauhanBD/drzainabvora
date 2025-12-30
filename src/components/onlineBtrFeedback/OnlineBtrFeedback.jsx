import React, { useState } from "react";
import "./OnlineBtrFeedback.css";
import DrIfrahAnsari from "../../assets/studentsImages/dr-ifrah-ansari.jpg";
import DrVinootKalasappagol from "../../assets/studentsImages/dr-vinoot-kalasappagol.jpg";
import DrAvneeshMadan from "../../assets/studentsImages/dr-avneesh-madan.jpg";
import AvatarMale from "../../assets/studentsImages/avatar-male.png";
import AvatarFemale from "../../assets/studentsImages/avatar-female.png";

const OnlineBtrFeedback = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      feedback:
        "I was an online BTR subscriber and honestly, Dr. Zainab Vohra mam’s TnD was a complete game changer for me. The way she guided us, I actually learned how to master MCQ solving. And the effort she puts into her compiled modules, going that extra mile every single time—it really made a huge difference in my prep. Forever grateful 🤍",
      name: "Dr. Ifrah Ansari",
      image: DrIfrahAnsari,
    },
    {
      feedback:
        "It was great experience, I had taken BTR ONLINE , truly a great learning experience especially, Dr. Zainab Vora Ma'am She is just amazing and a great mentor truly Looking forward to meet her atleast once in my lifetime.",
      name: "Dr. Vinoot Kalasappagol",
      image: DrVinootKalasappagol,
    },
    {
      feedback:
        "I have been a BTR Online Student for 1 year. My entire preparation has been anchored in place by the 2 BTR books and Dr. Zainab Vora ma'am has been an everlasting beacon of light that has guided me through difficult times. I highly recommend following her BTR EnD Cycles and follow her plan exactly how she says.",
      name: "Dr. Avneesh Madan",
      image: DrAvneeshMadan,
    },
    {
      feedback:
        "I'm an online btr subscriber and Btr helped me a lot in this journey.",
      name: "Dr. Aditya Bhujbal",
      image: AvatarMale,
    },
  ];

  return (
    <div className="online-btr-feedback-section">
      <h2 className="online-btr-feedback-title">Online BTR Feedback</h2>

      <div className="online-btr-feedback-container">
        <div className="online-btr-feedback-row">
          <div
            className={`online-btr-feedback-track ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="online-btr-feedback-card">
                <p className="online-btr-feedback-text">
                  {testimonial.feedback}
                </p>
                <div className="online-btr-feedback-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="online-btr-feedback-author-image"
                  />
                  <div className="online-btr-feedback-author-info">
                    <h4 className="online-btr-feedback-author-name">
                      {testimonial.name}
                    </h4>
                    <p className="online-btr-feedback-author-handle">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="online-btr-feedback-fog-overlay online-btr-feedback-fog-left"></div>
        <div className="online-btr-feedback-fog-overlay online-btr-feedback-fog-right"></div>
      </div>

      <div className="online-btr-feedback-btn">
        <a href="/students">See More</a>
      </div>
    </div>
  );
};

export default OnlineBtrFeedback;
