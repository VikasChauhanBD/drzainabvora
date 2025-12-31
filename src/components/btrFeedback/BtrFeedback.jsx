import React, { useState } from "react";
import "./BtrFeedback.css";
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
import DrIfrahAnsari from "../../assets/studentsImages/dr-ifrah-ansari.jpg";
import DrVinootKalasappagol from "../../assets/studentsImages/dr-vinoot-kalasappagol.jpg";
import DrAvneeshMadan from "../../assets/studentsImages/dr-avneesh-madan.jpg";
import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";

import AvatarMale from "../../assets/studentsImages/avatar-male.png";
import AvatarFemale from "../../assets/studentsImages/avatar-female.png";

const BtrFeedback = () => {
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
        "Dr. Zainab Vora Ma’am has been a saviour in this NEET PG journey.",
      name: "Dr. Arunima Laha",
      image: AvatarFemale,
    },
    {
      feedback:
        "Loved every bit of BTR Super helpful and enough for preparation",
      name: "Dr. Arshiya Garg",
      image: DrArshiyaGarg,
    },
    {
      feedback:
        "I was a BTR subscriber for a year. It changed my whole approach to studying and MCQ solving. So grateful for what Dr. Zainab Vora ma’am is doing for us students. My rank went from 25k in NEET 2024 to 431 in NEET 2025.",
      name: "Dr. Prakruti Bhat",
      image: DrPrakrutiBhat,
    },
    {
      feedback:
        "A huge credit goes to BTR! It is like a boost to get a top rank when you have a strong base topped up with pyqs and custom modules",
      name: "Dr. Shravya",
      image: DrShravya,
    },
    {
      feedback:
        "Best concise notes of BTR and Dr. Zainab Vora Ma’am Constant guidance throughout this journey is the best thing to study with. She is like a senior who knows more than you know about yourself. She is a mentor,guide, my constant inspiration.",
      name: "Dr. Tanisha Gupta",
      image: DrTanishaGupta,
    },
    {
      feedback:
        "This rank wouldn’t have been possible without BTR and Dr. Zainab Vora Ma’am. Dr. Zainab Vora Ma’am has a unique way of explaining concepts — she seamlessly connects topics across subjects, making learning truly integrated BTR transforms the way you approach questions. The problem-solving techniques it teaches are unmatched by any other platform.",
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
        "I studied for NEET pg right after my internship got over, just for 3 months and honeslty without BTR and Dr. Zainab Vora ma'am, nothing would have been possible ",
      name: "Dr. Aparna Warrier ",
      image: DrAparnaWarrier,
    },
    {
      feedback:
        "I would reccommend BTR to anyone starting their pg prep because I could not have done this without ma'am",
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
        "I owe my success to the one and only Dr. Zainab Vora ma'am. This was my first attempt and with the little time i had , i had to choose my resource wisely to get max output. All of this was possible because of BTR which i gave my heart n soul to master as Dr. Zainab Vora Ma'am always said. Her teaching, her advices is something i followed religiously. She is the biggest blessing for neet pg aspirants like us. Thankyou so much Ma'am. ",
      name: "Dr. Devanshi Pundeer ",
      image: DrDevanshiPundeer,
    },
    {
      feedback:
        "BTR was a game changer for me. Dr. Zainab Vora ma'am is a true inspiration. Please give me a chance to thanks her .",
      name: "Dr. Garima Sharma",
      image: DrGarimaSharma,
    },
    {
      feedback:
        "BTR offline bootcamp helps me a lot...hope to do more better in upcoming neetpg 2026",
      name: "Dr. Dwaipayan Guhathakurta ",
      image: AvatarMale,
    },
    {
      feedback:
        "I went there for BTR BOOTCAMP (55days) It's not like other coaching institutes, its place were you want to go everyday which wakes you up early A positive and perfect environment which keeps us motivated Thankyou so Dr. Zainab Vora ma'am the best teacher, seniors I've ever met Also soo good management members Thankyou so much",
      name: "Dr. Nihit A",
      image: AvatarMale,
    },
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
    {
      feedback:
        "It was an amazing experience attending 4 day offline BTR there Felt like home for 4 days Nothing can beat the way ma'am and team both are doing efforts for us Vidya jeevan specially The most Ideal environment for preparation Spacious,peaceful and motivational place for sure.",
      name: "Dr. Darp Patel",
      image: AvatarMale,
    },
    {
      feedback:
        "Everything is Outstanding!!but please arrange Offline btr in 4 days so that we don't zone out and can learn everything from Dr. Zainab Vora Ma'am, Vidya Jevan is 200/10 in everything, management, team, environment, everything.",
      name: "Dr. Aayush Gupta",
      image: AvatarMale,
    },
    {
      feedback:
        "BTR works like a magic for me .My rank was 97k in 2024 . without BTR I can never achieve this.In march 2025 I lost my Mother and I was shattered but somehow I managed to attend offline BTR in kolkata at April and continue to follow dr. zainab vora ma'am only. Whichever improvement I made it's just because of my mother's blessings and BTR .",
      name: "Dr. Ballavi Das",
      image: AvatarFemale,
    },
    {
      feedback:
        "The best decision of my NEET PG prep was attending the offline BTR session in May 2024, right after the INI exam. It was a game-changer! I'm in awe of dr. zainab vora mam's exceptional teaching skills - she's truly a wizard . She instills confidence and make you believe in yourself like nobody does . She is the best senior anyone can have .",
      name: "Dr. Arshita Arora",
      image: AvatarFemale,
    },
    {
      feedback:
        "Thank you dr. zainab vora ma'am, secured air 105 this ini. Had 1.2k in may ini and 5k in neet. I didn't study after neet. It was just the 4 days offline btr which helped me revise. In between sometimes I gave btr tests & listened to your discussion live. That was all. ",
      name: "Dr. Srushti Rameshwar Rakhade",
      image: AvatarFemale,
    },
    {
      feedback:
        "BTR tnds kept me accountable, 4 day offline btr helped me revise and concise the subjects i had already studied ",
      name: "Dr. Sana Zubia Siddiqui",
      image: AvatarFemale,
    },
    {
      feedback:
        "BTR offline bootcamp helps me a lot...hope to do more better in upcoming neetpg 2026",
      name: "Dr. Dwaipayan Guhathakurta ",
      image: AvatarMale,
    },
    {
      feedback:
        "I hadn’t studied much after NEET as I was preparing for admission, but the 4-day offline BTR helped me revise the entire syllabus once again. Along with a few BTR tests and live discussions, that was all I did. Zainab ma’am made me believe that even a not-so-motivated post-NEET student who doesn’t want to give up still has a chance. Revising all subjects in just 4 days felt impossible on my own, but she made it happen. What sets BTR apart is not just the concise content, but the structured plan and constant hand-holding through live sessions till the ashirwaad class, ensuring we stay on track. Thank you, ma’am, for creating BTR and making preparation easier ❤️",
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
        "I recently attended the 4-day BTR course at Vidya Jeewan, and it was truly an incredible experience. From the exceptional quality of teaching to the delicious food, every aspect was thoughtfully curated. The cleanliness, the welcoming environment, and the overall attention to detail were absolutely impeccable. The atmosphere is filled with such positive energy—it's genuinely uplifting. I appreciated how the entire team went above and beyond to make everyone feel comfortable and supported throughout the journey. I honestly can't think of a single thing to criticize. Thank you Dr. Zainab Vora Ma'am.",
      name: "Dr. Shruti Rawat",
      image: DrShrutiRawat,
    },
  ];

  return (
    <div className="btr-feedback-section">
      <h2 className="btr-feedback-title">BTR Feedback</h2>

      <div className="btr-feedback-container">
        <div className="btr-feedback-row">
          <div
            className={`btr-feedback-track ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="btr-feedback-card">
                <p className="btr-feedback-text">{testimonial.feedback}</p>
                <div className="btr-feedback-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="btr-feedback-author-image"
                  />
                  <div className="btr-feedback-author-info">
                    <h4 className="btr-feedback-author-name">
                      {testimonial.name}
                    </h4>
                    <p className="btr-feedback-author-handle">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="btr-feedback-fog-overlay btr-feedback-fog-left"></div>
        <div className="btr-feedback-fog-overlay btr-feedback-fog-right"></div>
      </div>

      <div className="btr-feedback-btn">
        <a href="/students">See More</a>
      </div>
    </div>
  );
};

export default BtrFeedback;
