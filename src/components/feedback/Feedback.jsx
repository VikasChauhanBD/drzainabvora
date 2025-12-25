import React, { useState } from "react";
import "./Feedback.css";
import DrArushiVahie from "../../assets/studentsImages/Dr-Arushi-Vahie.png";
import DrNavya from "../../assets/studentsImages/Dr-Navya.png";
import DrRajeswariRiya from "../../assets/studentsImages/Dr-Rajeswari-Riya.png";
import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";
import DrShubhDahiya from "../../assets/studentsImages/Dr-Shubh-Dahiya.png";
import DrSnehaRani from "../../assets/studentsImages/Dr-Sneha-Rani.png";
import AvatarMale from "../../assets/studentsImages/avatar-male.png";
import AvatarFemale from "../../assets/studentsImages/avatar-female.png";

const Feedback = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  const testimonials = [
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
      text: "Vidya jeevan provides a very positive environment . This place is not just a architecture buildup its actually has a vibe that motivate you to push your limits and achieve everything that you dream of. Every corner tells you something and most importantly every person here wants to see you achieve , dream, believe and think big in every aspects of life... Thank you Zainab ma'am and team for supporting us and lifting us through this journey... SABR ✨SHUKAR ✨STHIR✨",
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

  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5);

  return (
    <div className="feedback-section">
      <h2 className="feedback-title">Students Feedback</h2>

      <div className="feedback-container">
        <div className="feedback-row">
          <div
            className={`feedback-track feedback-track-left ${
              isPausedRow1 ? "paused" : ""
            }`}
            onMouseEnter={() => setIsPausedRow1(true)}
            onMouseLeave={() => setIsPausedRow1(false)}
          >
            {[...row1, ...row1].map((testimonial, index) => (
              <div key={index} className="feedback-card">
                <p className="feedback-text">{testimonial.text}</p>
                <div className="feedback-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="feedback-author-image"
                  />
                  <div className="feedback-author-info">
                    <h4 className="feedback-author-name">{testimonial.name}</h4>
                    <p className="feedback-author-handle">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="feedback-row">
          <div
            className={`feedback-track feedback-track-right ${
              isPausedRow2 ? "paused" : ""
            }`}
            onMouseEnter={() => setIsPausedRow2(true)}
            onMouseLeave={() => setIsPausedRow2(false)}
          >
            {[...row2, ...row2].map((testimonial, index) => (
              <div key={index} className="feedback-card">
                <p className="feedback-text">{testimonial.text}</p>
                <div className="feedback-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="feedback-author-image"
                  />
                  <div className="feedback-author-info">
                    <h4 className="feedback-author-name">{testimonial.name}</h4>
                    <p className="feedback-author-handle">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="feedback-fog-overlay feedback-fog-left"></div>
        <div className="feedback-fog-overlay feedback-fog-right"></div>
      </div>

      <div className="feedback-btn">
        <a href="/students">See More</a>
      </div>
    </div>
  );
};

export default Feedback;
