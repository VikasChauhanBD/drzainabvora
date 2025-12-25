import React from "react";
import "./Feedback.css";

const Feedback = () => {
  const testimonials = [
    {
      text: "This place is so well managed,they put their heart into it and you can easily see that,the effort,the dedication. Dr Zainab ma'am and the whole team are awesome,very inspired by them.",
      name: "Dr. Shubham Bansal",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vaibhav",
    },
    {
      text: "This place is a safe haven for all NEET PG aspirants. A very positive and calming experience. Being in the presence of Dr. Zainab ma'am makes this stressful phase feel so much lighter. The staff at Vidya Jeevan is the best and most accomodating, present day in and day out to help us with any issues we might face. Thank you for this beautiful experience ❤️.",
      name: "Dr. Arushi Vahie",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
    },
    {
      text: "Attended btr at vidya jeevan. The place and its vibes are great. Everyone was extremely hardworking. Zainab ma'am is great at what she does. The place feels so welcoming. The cafeteria was good too Overall, the experience was nice.",
      name: "Dr. Nishtha Koushal",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      text: "State of the art facility ! Amazingly built and very smoothly managed. Kudos to the team! It was a surreal experience with a different kind of positive vibe. Thanks to apurva sir,mamaji, ravi sir, ashish sir and every single member of the team who made sure that everything else was taken care of, and we just had to teach everything Zainab ma'am had planned for us. 4 day offline BTR was wholesome, fulfilling and simply amazing, and the smooth functioning of vidya jeewan definitely plays a major role here !",
      name: "Dr. Jasnoor Kaur",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manish",
    },
    {
      text: "BTR Bootcamp by Dr Zainab Ma'am✨❤️ This place has such positive vibes.The best thing about this place is that they not only teach you academics but life lessons too. I'll never forget this phase of my life where I have learnt so much from my teachers. I love the environment here and enthusiasm of the students. There is very cooperative staff and everyone here helps you too. Topiary is also amazing. Much Respect 🙏✨😇",
      name: "Dr. Shubh Dahiya",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anabelle",
    },
    {
      text: "Vidya jeevan provides a very positive environment . This place is not just a architecture buildup its actually has a vibe that motivate you to push your limits and achieve everything that you dream of. Every corner tells you something and most importantly every person here wants to see you achieve , dream, believe and think big in every aspects of life... Thank you Zainab ma'am and team for supporting us and lifting us through this journey... SABR ✨SHUKAR ✨STHIR✨",
      name: "Dr. Sandhya Boora",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      text: "Ankur teaches with clarity, honesty, and transparency. I am sure that their students will learn significantly, grow, and become excellent individuals.",
      name: "Neeraj Arora",
      handle: "@neerajaroraofficial",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neeraj",
    },
    {
      text: "One of the best experiences ever. The team worked really hard to make to our stay comfortable and everything was managed really well. Everyone is very motivating. Loved the teaching and support staff. Thankyou for this opportunity. Thank you Zainab ma'am and team for supporting us and lifting us through this journey... SABR ✨SHUKAR ✨STHIR✨",
      name: "Dr. Anushka Gupta",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Radhika",
    },
    {
      text: "It was an amazing experience attending 4 day offline BTR there Felt like home for 4 days Nothing can beat the way ma’am and team both are doing efforts for us Vidya jeevan specially The most Ideal environment for preparation Spacious,peaceful and motivational place for sure.",
      name: "Dr. Darp Patel",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  ];

  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5);

  return (
    <>
      <div className="feedback-section">
        <h2 className="feedback-title">Students Feedback</h2>

        <div className="feedback-container">
          <div className="feedback-row">
            <div className="feedback-track feedback-track-left">
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
                      <h4 className="feedback-author-name">
                        {testimonial.name}
                      </h4>
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
            <div className="feedback-track feedback-track-right">
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
                      <h4 className="feedback-author-name">
                        {testimonial.name}
                      </h4>
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
    </>
  );
};

export default Feedback;
