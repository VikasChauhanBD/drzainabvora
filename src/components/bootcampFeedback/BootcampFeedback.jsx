import React, { useState } from "react";
import "./BootcampFeedback.css";
import DrSnehaRani from "../../assets/studentsImages/Dr-Sneha-Rani.png";
import DrAravindKrishnan from "../../assets/studentsImages/dr-aravind-krishnan.jpg";
import DrkritikaAggarwal from "../../assets/studentsImages/dr-kritika-aggarwal.jpg";
import DrPrakrutiBhat from "../../assets/studentsImages/dr-prakruti-bhat.jpg";
import DrArshiyaGarg from "../../assets/studentsImages/dr-arshiya-garg.jpg";
import DrShravya from "../../assets/studentsImages/dr-shravya.jpg";
import DrTanishaGupta from "../../assets/studentsImages/dr-tanisha-gupta.jpg";
import DrAkshithaThatikonda from "../../assets/studentsImages/dr-akshitha-thatikonda.jpg";
import DrYogithaPoojari from "../../assets/studentsImages/dr-yogitha-poojari.jpg";
import DrAparnaWarrier from "../../assets/studentsImages/dr-aparna-warrier.jpg";
import DrAlphonsaMaryMathew from "../../assets/studentsImages/dr-alphonsa-mary-mathew.jpg";
import DrFaizanAftabWani from "../../assets/studentsImages/dr-faizan-aftab-wani.jpg";
import DrSakshitaPal from "../../assets/studentsImages/dr-sakshita-pal.jpg";
import DrAveekChakraborty from "../../assets/studentsImages/dr-aveek-chakraborty.jpg";
import DrDevanshiPundeer from "../../assets/studentsImages/dr-devanshi-pundeer.jpg";
import DrGarimaSharma from "../../assets/studentsImages/dr-garima-sharma.jpg";

import AvatarMale from "../../assets/studentsImages/avatar-male.png";
import AvatarFemale from "../../assets/studentsImages/avatar-female.png";
import { NavLink } from "react-router-dom";

const BootcampFeedback = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      feedback:
        "From someone who didnt know how to start the preparation, I came here with blank slate. With no first reading , no rapid revisions nothing. Fresh out of college after internship. I learned what to study and most importantly what not to study. The atmosphere here is welcoming, comforting and also competitive. You come here with empty hands and go back with so much other than the contents of BTR. Dr. Zainab Vora ma'am you will always be mentioned in my every success story speech. Thank you.",
      name: "Dr. Sneha Rani",
      image: DrSnehaRani,
    },
    {
      feedback:
        "BTR and Dr. Zainab Vora ma'am has played a great role in my success journey. i am so grateful to her for being the guiding light and bringing all 19 subjects in the best crisp and condensed way.",
      name: "Dr. kritika aggarwal",
      image: DrkritikaAggarwal,
    },
    {
      feedback:
        "BTR really helped me stay consistent and built a mind map. Also Dr. Zainab Vora ma'am TnDs were really helpful.",
      name: "Dr. Aravind Krishnan",
      image: DrAravindKrishnan,
    },
    {
      feedback:
        "Dr. Zainab Vora ma'am has been a saviour in this NEET PG journey.",
      name: "Dr. Arunima Laha",
      image: AvatarFemale,
    },
    {
      feedback:
        "Loved every bit of BTR Super helpful and enough for preparation.",
      name: "Dr. Arshiya Garg",
      image: DrArshiyaGarg,
    },
    {
      feedback:
        "I was a BTR subscriber for a year. It changed my whole approach to studying and MCQ solving. So grateful for what Dr. Zainab Vora ma'am is doing for us students. My rank went from 25k in NEET 2024 to 431 in NEET 2025.",
      name: "Dr. Prakruti Bhat",
      image: DrPrakrutiBhat,
    },
    {
      feedback:
        "A huge credit goes to BTR! It is like a boost to get a top rank when you have a strong base topped up with pyqs and custom modules.",
      name: "Dr. Shravya",
      image: DrShravya,
    },
    {
      feedback:
        "Best concise notes of BTR and Dr. Zainab Vora ma'am Constant guidance throughout this journey is the best thing to study with. She is like a senior who knows more than you know about yourself. She is a mentor,guide, my constant inspiration.",
      name: "Dr. Tanisha Gupta",
      image: DrTanishaGupta,
    },
    {
      feedback:
        "This rank wouldn't have been possible without BTR and Dr. Zainab Vora ma'am. Dr. Zainab Vora ma'am has a unique way of explaining concepts — she seamlessly connects topics across subjects, making learning truly integrated BTR transforms the way you approach questions. The problem-solving techniques it teaches are unmatched by any other platform.",
      name: "Dr. Akshitha thatikonda",
      image: DrAkshithaThatikonda,
    },
    {
      feedback: "Very good platform. Hat's off to Dr. Zainab Vora ma'am.",
      name: "Dr. Yogitha Poojari ",
      image: DrYogithaPoojari,
    },
    {
      feedback:
        "I studied for NEET pg right after my internship got over, just for 3 months and honeslty without BTR and Dr. Zainab Vora ma'am, nothing would have been possible.",
      name: "Dr. Aparna Warrier ",
      image: DrAparnaWarrier,
    },
    {
      feedback:
        "I would reccommend BTR to anyone starting their pg prep because I could not have done this without ma'am.",
      name: "Dr. Alphonsa Mary Mathew",
      image: DrAlphonsaMaryMathew,
    },
    {
      feedback: "BTR is a full package and it was very helpful.",
      name: "Dr. Faizan Aftab Wani",
      image: DrFaizanAftabWani,
    },
    {
      feedback:
        "BTR is the most important and helpful source in my entire exam preparation.",
      name: "Dr. Sakshita Pal",
      image: DrSakshitaPal,
    },
    {
      feedback:
        "I am deeply indebted to Dr. Zainab Vora ma'am for BTR as well as her overall guidance.",
      name: "Dr. Aveek Chakraborty",
      image: DrAveekChakraborty,
    },
    {
      feedback:
        "I owe my success to the one and only Dr. Zainab Vora ma'am. This was my first attempt and with the little time i had , i had to choose my resource wisely to get max output. All of this was possible because of BTR which i gave my heart n soul to master as Dr. Zainab Vora ma'am always said. Her teaching, her advices is something i followed religiously. She is the biggest blessing for neet pg aspirants like us. Thankyou so much ma'am.",
      name: "Dr. Devanshi Pundeer ",
      image: DrDevanshiPundeer,
    },
    {
      feedback:
        "BTR was a game changer for me. Dr. Zainab Vora ma'am is a true inspiration. Please give me a chance to thanks her.",
      name: "Dr. Garima Sharma",
      image: DrGarimaSharma,
    },
    {
      feedback:
        "BTR offline bootcamp helps me a lot...hope to do more better in upcoming neetpg 2026.",
      name: "Dr. Dwaipayan Guhathakurta ",
      image: AvatarMale,
    },
    {
      feedback:
        "I went there for BTR BOOTCAMP (55days) It's not like other coaching institutes, its place were you want to go everyday which wakes you up early A positive and perfect environment which keeps us motivated Thankyou so Dr. Zainab Vora ma'am the best teacher, seniors I've ever met Also soo good management members Thankyou so much.",
      name: "Dr. Nihit A",
      image: AvatarMale,
    },
  ];

  return (
    <div className="bootcamp-feedback-section">
      <h2 className="bootcamp-feedback-title">NEET PG Bootcamp Feedback</h2>

      <div className="bootcamp-feedback-container">
        <div className="bootcamp-feedback-row">
          <div
            className={`bootcamp-feedback-track ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="bootcamp-feedback-card">
                <p className="bootcamp-feedback-text">{testimonial.feedback}</p>
                <div className="bootcamp-feedback-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="bootcamp-feedback-author-image"
                  />
                  <div className="bootcamp-feedback-author-info">
                    <h4 className="bootcamp-feedback-author-name">
                      {testimonial.name}
                    </h4>
                    <p className="bootcamp-feedback-author-handle">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bootcamp-feedback-fog-overlay bootcamp-feedback-fog-left"></div>
        <div className="bootcamp-feedback-fog-overlay bootcamp-feedback-fog-right"></div>
      </div>

      <div className="bootcamp-feedback-btn">
        <NavLink to="/students">See More</NavLink>
      </div>
    </div>
  );
};

export default BootcampFeedback;
