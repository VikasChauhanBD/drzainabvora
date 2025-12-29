import React, { useState } from "react";
import "./BootcampFeedback.css";
import DrArushiVahie from "../../assets/studentsImages/Dr-Arushi-Vahie.png";
import DrNavya from "../../assets/studentsImages/Dr-Navya.png";
import DrRajeswariRiya from "../../assets/studentsImages/Dr-Rajeswari-Riya.png";
import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";
import DrShubhDahiya from "../../assets/studentsImages/Dr-Shubh-Dahiya.png";
import DrSnehaRani from "../../assets/studentsImages/Dr-Sneha-Rani.png";
import DrAravindKrishnan from "../../assets/studentsImages/dr-aravind-krishnan.jpg";
import DrkritikaAggarwal from "../../assets/studentsImages/dr-kritika-aggarwal.jpg";
import DrIfrahAnsari from "../../assets/studentsImages/dr-ifrah-ansari.jpg";
import DrPrakrutiBhat from "../../assets/studentsImages/dr-prakruti-bhat.jpg";
import DrArshiyaGarg from "../../assets/studentsImages/dr-arshiya-garg.jpg";
import DrShravya from "../../assets/studentsImages/dr-shravya.jpg";
import DrTanishaGupta from "../../assets/studentsImages/dr-tanisha-gupta.jpg";
import DrAkshithaThatikonda from "../../assets/studentsImages/dr-akshitha-thatikonda.jpg";
import DrVinootKalasappagol from "../../assets/studentsImages/dr-vinoot-kalasappagol.jpg";
import DrYogithaPoojari from "../../assets/studentsImages/dr-yogitha-poojari.jpg";
import DrAparnaWarrier from "../../assets/studentsImages/dr-aparna-warrier.jpg";
import DrAlphonsaMaryMathew from "../../assets/studentsImages/dr-alphonsa-mary-mathew.jpg";
import DrFaizanAftabWani from "../../assets/studentsImages/dr-faizan-aftab-wani.jpg";
import DrSakshitaPal from "../../assets/studentsImages/dr-sakshita-pal.jpg";
import DrAveekChakraborty from "../../assets/studentsImages/dr-aveek-chakraborty.jpg";
import DrAvneeshMadan from "../../assets/studentsImages/dr-avneesh-madan.jpg";
import DrDevanshiPundeer from "../../assets/studentsImages/dr-devanshi-pundeer.jpg";
import AvatarMale from "../../assets/studentsImages/avatar-male.png";
import AvatarFemale from "../../assets/studentsImages/avatar-female.png";
import { NavLink } from "react-router-dom";

const BootcampFeedback = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      text: "This rank wouldn't have been possible without BTR and Dr. Zainab Vora Ma'am. Dr. Zainab Vora Ma'am has a unique way of explaining concepts — she seamlessly connects topics across subjects, making learning truly integrated BTR transforms the way you approach questions. The problem-solving techniques it teaches are unmatched by any other platform.",
      name: "Dr. Akshitha thatikonda",
      image: DrAkshithaThatikonda,
    },
    {
      text: "Best concise notes of BTR and Dr. Zainab Vora Ma'am Constant guidance throughout this journey is the best thing to study with. She is like a senior who knows more than you know about yourself. She is a mentor,guide, my constant inspiration.",
      name: "Dr. Tanisha Gupta",
      image: DrTanishaGupta,
    },
    {
      text: "BTR and Dr. Zainab Vora ma'am has played a great role in my success journey. i am so grateful to her for being the guiding light and bringing all 19 subjects in the best crisp and condensed way.",
      name: "Dr. kritika aggarwal",
      image: DrkritikaAggarwal,
    },
    {
      text: "BTR really helped me stay consistent and built a mind map. Also Dr. Zainab Vora ma'am TnDs were really helpful.",
      name: "Dr. Aravind Krishnan",
      image: DrAravindKrishnan,
    },
    {
      text: "I was a BTR subscriber for a year. It changed my whole approach to studying and MCQ solving. So grateful for what Dr. Zainab Vora ma'am is doing for us students. My rank went from 25k in NEET 2024 to 431 in NEET 2025.",
      name: "Dr. Prakruti Bhat",
      image: DrPrakrutiBhat,
    },
    {
      text: "A huge credit goes to BTR! It is like a boost to get a top rank when you have a strong base topped up with pyqs and custom modules",
      name: "Dr. Shravya",
      image: DrShravya,
    },
    {
      text: "Loved every bit of BTR Super helpful and enough for preparation",
      name: "Dr. Arshiya Garg",
      image: DrArshiyaGarg,
    },
    {
      text: "I was an online BTR subscriber and honestly, Dr. Zainab Vohra mam's TnD was a complete game changer for me. The way she guided us, I actually learned how to master MCQ solving. And the effort she puts into her compiled modules, going that extra mile every single time—it really made a huge difference in my prep. Forever grateful 🤍",
      name: "Dr. Ifrah Ansari",
      image: DrIfrahAnsari,
    },
    {
      text: "It was great experience, I had taken BTR ONLINE , truly a great learning experience especially, Dr. Zainab Vora Ma'am She is just amazing and a great mentor truly Looking forward to meet her atleast once in my lifetime.",
      name: "Dr. Vinoot Kalasappagol",
      image: DrVinootKalasappagol,
    },
    {
      text: "I studied for NEET pg right after my internship got over, just for 3 months and honeslty without BTR and Dr. Zainab Vora ma'am, nothing would have been possible ",
      name: "Dr. Aparna Warrier ",
      image: DrAparnaWarrier,
    },
    {
      text: "Very good platform. Hat's off to Dr. Zainab Vora ma'am.",
      name: "Dr. Yogitha Poojari ",
      image: DrYogithaPoojari,
    },
    {
      text: "I would reccommend BTR to anyone starting their pg prep because I could not have done this without ma'am",
      name: "Dr. Alphonsa Mary Mathew",
      image: DrAlphonsaMaryMathew,
    },
    {
      text: "BTR is a full package and it was very helpful.",
      name: "Dr. Faizan Aftab Wani",
      image: DrFaizanAftabWani,
    },
    {
      text: "BTR is the most important and helpful source in my entire exam preparation.",
      name: "Dr. Sakshita Pal",
      image: DrSakshitaPal,
    },
    {
      text: "I am deeply indebted to Dr. Zainab Vora ma'am for BTR as well as her overall guidance.",
      name: "Dr. Aveek Chakraborty",
      image: DrAveekChakraborty,
    },
    {
      text: "I have been a BTR Online Student for 1 year. My entire preparation has been anchored in place by the 2 BTR books and Dr. Zainab Vora ma'am has been an everlasting beacon of light that has guided me through difficult times. I highly recommend following her BTR EnD Cycles and follow her plan exactly how she says.",
      name: "Dr. Avneesh Madan",
      image: DrAvneeshMadan,
    },
    {
      text: "I owe my success to the one and only Dr. Zainab Vora ma'am. This was my first attempt and with the little time i had , i had to choose my resource wisely to get max output. All of this was possible because of BTR which i gave my heart n soul to master as Dr. Zainab Vora Ma'am always said. Her teaching, her advices is something i followed religiously. She is the biggest blessing for neet pg aspirants like us. Thankyou so much Ma'am. ",
      name: "Dr. Devanshi Pundeer ",
      image: DrDevanshiPundeer,
    },
    {
      text: "This place is so well managed,they put their heart into it and you can easily see that,the effort,the dedication. Dr Zainab ma'am and the whole team are awesome,very inspired by them.",
      name: "Dr. Shubham Bansal",
      image: AvatarMale,
    },
    {
      text: "This place is a safe haven for all NEET PG aspirants. A very positive and calming experience. Being in the presence of Dr. Zainab ma'am makes this stressful phase feel so much lighter. The staff at Vidya Jeevan is the best and most accomodating, present day in and day out to help us with any issues we might face. Thank you for this beautiful experience ❤️.",
      name: "Dr. Arushi Vahie",
      image: DrArushiVahie,
    },
    {
      text: "Attended btr at vidya jeevan. The place and its vibes are great. Everyone was extremely hardworking. Zainab ma'am is great at what she does. The place feels so welcoming. The cafeteria was good too Overall, the experience was nice.",
      name: "Dr. Nishtha Koushal",
      image: AvatarFemale,
    },
    {
      text: "State of the art facility ! Amazingly built and very smoothly managed. Kudos to the team! It was a surreal experience with a different kind of positive vibe. Thanks to apurva sir,mamaji, ravi sir, ashish sir and every single member of the team who made sure that everything else was taken care of, and we just had to teach everything Zainab ma'am had planned for us. 4 day offline BTR was wholesome, fulfilling and simply amazing, and the smooth functioning of vidya jeewan definitely plays a major role here !",
      name: "Dr. Jasnoor Kaur",
      image: AvatarFemale,
    },
    {
      text: "BTR Bootcamp by Dr Zainab Ma'am✨❤️ This place has such positive vibes.The best thing about this place is that they not only teach you academics but life lessons too. I'll never forget this phase of my life where I have learnt so much from my teachers. I love the environment here and enthusiasm of the students. There is very cooperative staff and everyone here helps you too. Topiary is also amazing. Much Respect 🙏✨😇",
      name: "Dr. Shubh Dahiya",
      image: DrShubhDahiya,
    },
    {
      text: "Vidya jeevan provides a very positive environment. This place is not just a architecture buildup its actually has a vibe that motivate you to push your limits and achieve everything that you dream of. Every corner tells you something and most importantly every person here wants to see you achieve , dream, believe and think big in every aspects of life... Thank you Zainab ma'am and team for supporting us and lifting us through this journey... SABR ✨SHUKAR ✨STHIR✨",
      name: "Dr. Sandhya Boora",
      image: AvatarFemale,
    },
    {
      text: "One of the best experiences ever. The team worked really hard to make to our stay comfortable and everything was managed really well. Everyone is very motivating. Loved the teaching and support staff. Thankyou for this opportunity. Thank you Zainab ma'am and team for supporting us and lifting us through this journey... SABR ✨SHUKAR ✨STHIR✨",
      name: "Dr. Anushka Gupta",
      image: AvatarFemale,
    },
    {
      text: "It was an amazing experience attending 4 day offline BTR there Felt like home for 4 days Nothing can beat the way ma'am and team both are doing efforts for us Vidya jeevan specially The most Ideal environment for preparation Spacious,peaceful and motivational place for sure.",
      name: "Dr. Darp Patel",
      image: AvatarMale,
    },
    {
      text: "From someone who didnt know how to start the preparation, I came here with blank slate. With no first reading , no rapid revisions nothing. Fresh out of college after internship. I learned what to study and most importantly what not to study. The atmosphere here is welcoming, comforting and also competitive. You come here with empty hands and go back with so much other than the contents of BTR. Zainab maam you will always be mentioned in my every success story speech. Thank you.",
      name: "Dr. Sneha Rani",
      image: DrSnehaRani,
    },
    {
      text: "Everything is Outstanding!!but please arrange Offline btr in 6 days so that we don't zone out and can learn everything from Zainab Ma'am, Vidya Jevan is 200/10 in everything, management, team, environment, everything.",
      name: "Dr. Aayush Gupta",
      image: AvatarMale,
    },
    {
      text: "This place has the best people, the best atmosphere for studying. Dr. Zainab ma'am is so sweet and welcoming to all the students. The cafeteria is amazing, the computer rooms, everything is perfect. Also, really good food.",
      name: "Dr. Navya",
      image: DrNavya,
    },
    {
      text: "I went there for BTR BOOTCAMP (55days) It's not like other coaching institutes, its place were you want to go everyday which wakes you up early A positive and perfect environment which keeps us motivated Thankyou so Dr. Zainab ma'am the best teacher, seniors I've ever met Also soo good management members Thankyou so much",
      name: "Dr. Nihit A",
      image: AvatarMale,
    },
    {
      text: "This place holds immense amount of peace and positivity. Being under the guidance of Dr. Zainab ma'am is a pure blessing for any aspirant in their preparation journey. Not only do you get your concepts right but you also learn what consistency, hardwork, perseverance, and showing up everyday actually means . The staff is also very kind and supportive here. Those 55 days at BTR bootcamp were the best part of my preparation journey.",
      name: "Dr. Rajeswari Riya",
      image: DrRajeswariRiya,
    },
    {
      text: "I recently attended the 4-day BTR course at Vidya Jeewan, and it was truly an incredible experience. From the exceptional quality of teaching to the delicious food, every aspect was thoughtfully curated. The cleanliness, the welcoming environment, and the overall attention to detail were absolutely impeccable. The atmosphere is filled with such positive energy—it's genuinely uplifting. I appreciated how the entire team went above and beyond to make everyone feel comfortable and supported throughout the journey. I honestly can't think of a single thing to criticize. Thank you Dr. Zainab Ma'am",
      name: "Dr. Shruti Rawat",
      image: DrShrutiRawat,
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
                <p className="bootcamp-feedback-text">{testimonial.text}</p>
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
