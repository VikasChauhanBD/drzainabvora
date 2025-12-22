import React from "react";
import "./Feedback.css";

const Feedback = () => {
  const testimonials = [
    {
      text: "WebVeda is changing the way people look at their personal lives and careers. It's incredible to see a platform that prioritizes meaningful learning experiences like WebVeda does.",
      name: "Vaibhav Sisinty",
      handle: "@vaibhavsisinty",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vaibhav",
    },
    {
      text: "Most of what I do is a skill that I developed through practice, not education. So it was wonderful to contribute to a platform like WebVeda that truly values real-world skills.",
      name: "Raj Shamani",
      handle: "@rajshamani",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
    },
    {
      text: "WebVeda is designed to set you up to succeed in the real world. The platform bridges the gap between traditional education and practical skills.",
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      text: "I believe content creation is entrepreneurship 3.0 and WebVeda will teach you just how to conquer this arena. With the guidance of WebVeda and some hard work on your part, you can truly transform your life.",
      name: "Manish Pandey",
      handle: "@join2manish",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manish",
    },
    {
      text: "WebVeda will teach you what traditional education won't: how to look beyond the mainstream and build something meaningful for yourself.",
      name: "Anabelle Colaco",
      handle: "@anabellecolaco",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anabelle",
    },
    {
      text: "As a business owner I know how important practical skills are. WebVeda focuses on what really matters in today's world.",
      name: "Michael Chen",
      handle: "@michaelchen",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      text: "Ankur teaches with clarity, honesty, and transparency. I am sure that their students will learn significantly, grow, and become excellent individuals.",
      name: "Neeraj Arora",
      handle: "@neerajaroraofficial",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neeraj",
    },
    {
      text: "I am a dancer, teacher, creator, and supporter of WebVeda! The courses on WebVeda have the potential to transform your life. All you have to do is take the first step.",
      name: "Radhika Warikoo",
      handle: "@a.dancers.tale",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Radhika",
    },
    {
      text: "As a full-time content creator, I know the value of learning from experienced professionals. WebVeda provides exactly that.",
      name: "David Martinez",
      handle: "@davidmartinez",
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
