import React, { useState } from "react";
import "./OfflineBtrFeedback.css";
import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";
import AvatarMale from "../../assets/studentsImages/avatar-male.png";
import AvatarFemale from "../../assets/studentsImages/avatar-female.png";
import { NavLink } from "react-router-dom";

const OfflineBtrFeedback = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      feedback:
        "It was an amazing experience attending 4 day offline BTR there Felt like home for 4 days Nothing can beat the way ma'am and team both are doing efforts for us Vidya jeevan specially The most Ideal environment for preparation Spacious,peaceful and motivational place for sure.",
      name: "Dr. Darp Patel",
      image: AvatarMale,
    },
    {
      feedback:
        "Everything is Outstanding!!but please arrange Offline btr in 4 days so that we don't zone out and can learn everything from Dr. Zainab Vora ma'am, Vidya Jevan is 200/10 in everything, management, team, environment, everything.",
      name: "Dr. Aayush Gupta",
      image: AvatarMale,
    },
    {
      feedback:
        "BTR works like a magic for me .My rank was 97k in 2024 . without BTR I can never achieve this.In march 2025 I lost my Mother and I was shattered but somehow I managed to attend offline BTR in kolkata at April and continue to follow Dr. Zainab Vora ma'am only. Whichever improvement I made it's just because of my mother's blessings and BTR.",
      name: "Dr. Ballavi Das",
      image: AvatarFemale,
    },
    {
      feedback:
        "The best decision of my NEET PG prep was attending the offline BTR session in May 2024, right after the INI exam. It was a game-changer! I'm in awe of Dr. Zainab Vora mam's exceptional teaching skills - she's truly a wizard . She instills confidence and make you believe in yourself like nobody does . She is the best senior anyone can have.",
      name: "Dr. Arshita Arora",
      image: AvatarFemale,
    },
    {
      feedback:
        "Thank you Dr. Zainab Vora ma'am, secured air 105 this ini. Had 1.2k in may ini and 5k in neet. I didn't study after neet. It was just the 4 days offline btr which helped me revise. In between sometimes I gave btr tests & listened to your discussion live. That was all.",
      name: "Dr. Srushti Rameshwar Rakhade",
      image: AvatarFemale,
    },
    {
      feedback:
        "BTR tnds kept me accountable, 4 day offline btr helped me revise and concise the subjects i had already studied.",
      name: "Dr. Sana Zubia Siddiqui",
      image: AvatarFemale,
    },
    {
      feedback:
        "BTR offline bootcamp helps me a lot...hope to do more better in upcoming neetpg 2026.",
      name: "Dr. Dwaipayan Guhathakurta ",
      image: AvatarMale,
    },
    {
      feedback:
        "I hadn’t studied much after NEET as I was preparing for admission, but the 4-day offline BTR helped me revise the entire syllabus once again. Along with a few BTR tests and live discussions, that was all I did. Zainab ma’am made me believe that even a not-so-motivated post-NEET student who doesn’t want to give up still has a chance. Revising all subjects in just 4 days felt impossible on my own, but she made it happen. What sets BTR apart is not just the concise content, but the structured plan and constant hand-holding through live sessions till the ashirwaad class, ensuring we stay on track. Thank you, ma’am, for creating BTR and making preparation easier ❤️.",
      name: "Dr. Srushti Rameshwar Rakhade",
      image: AvatarFemale,
    },
    {
      feedback:
        "State of the art facility ! Amazingly built and very smoothly managed. Kudos to the team! It was a surreal experience with a different kind of positive vibe. 4 day offline BTR was wholesome, fulfilling and simply amazing, and the smooth functioning of vidya jeewan definitely plays a major role here !",
      name: "Dr. Jasnoor Kaur",
      image: AvatarFemale,
    },
    {
      feedback:
        "I recently attended the 4-day BTR course at Vidya Jeewan, and it was truly an incredible experience. From the exceptional quality of teaching to the delicious food, every aspect was thoughtfully curated. The cleanliness, the welcoming environment, and the overall attention to detail were absolutely impeccable. The atmosphere is filled with such positive energy—it's genuinely uplifting. I appreciated how the entire team went above and beyond to make everyone feel comfortable and supported throughout the journey. I honestly can't think of a single thing to criticize. Thank you Dr. Zainab Vora ma'am.",
      name: "Dr. Shruti Rawat",
      image: DrShrutiRawat,
    },
  ];

  return (
    <div className="offline-btr-feedback-section">
      <h2 className="offline-btr-feedback-title">Offline BTR Feedback</h2>

      <div className="offline-btr-feedback-container">
        <div className="offline-btr-feedback-row">
          <div
            className={`offline-btr-feedback-track ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="offline-btr-feedback-card">
                <p className="offline-btr-feedback-text">
                  {testimonial.feedback}
                </p>
                <div className="offline-btr-feedback-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="offline-btr-feedback-author-image"
                  />
                  <div className="offline-btr-feedback-author-info">
                    <h4 className="offline-btr-feedback-author-name">
                      {testimonial.name}
                    </h4>
                    <p className="offline-btr-feedback-author-handle">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="offline-btr-feedback-fog-overlay offline-btr-feedback-fog-left"></div>
        <div className="offline-btr-feedback-fog-overlay offline-btr-feedback-fog-right"></div>
      </div>

      <div className="offline-btr-feedback-btn">
        <NavLink to="/students">See More</NavLink>
      </div>
    </div>
  );
};

export default OfflineBtrFeedback;
