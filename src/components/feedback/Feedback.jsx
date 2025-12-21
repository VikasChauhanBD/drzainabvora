import React from "react";

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

  const styles = `
    .feedback-section {
      padding: 80px 20px;
      background: #f8f9fa;
      overflow: hidden;
    }

    .feedback-title {
      text-align: center;
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 60px;
      color: #27187e;
    }

    .feedback-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 1400px;
      margin: 0 auto;
      overflow: hidden;
    }

    .feedback-row {
      overflow: hidden;
      position: relative;
    }

    .feedback-track {
      display: flex;
      gap: 20px;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    .feedback-track-left {
      animation-name: slideLeft;
      animation-duration: 40s;
    }

    .feedback-track-right {
      animation-name: slideRight;
      animation-duration: 35s;
    }

    @keyframes slideLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes slideRight {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0);
      }
    }

    .feedback-card {
      background: white;
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
      border: 1px solid #e8e8e8;
      min-width: 380px;
      max-width: 380px;
      min-height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      flex-shrink: 0;
    }

    .feedback-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .feedback-text {
      color: #666;
      line-height: 1.7;
      font-size: 15px;
      margin-bottom: 24px;
    }

    .feedback-author {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-top: 20px;
      border-top: 3px solid #5b7cff;
    }

    .feedback-author-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .feedback-author-info {
      display: flex;
      flex-direction: column;
    }

    .feedback-author-name {
      color: #5b7cff;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .feedback-author-handle {
      color: #999;
      font-size: 14px;
    }

    .feedback-fog-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 150px;
      pointer-events: none;
      z-index: 10;
    }

    .feedback-fog-left {
      left: 0;
      background: linear-gradient(
        to right,
        rgba(248, 249, 250, 1) 0%,
        rgba(248, 249, 250, 0.95) 20%,
        rgba(248, 249, 250, 0.7) 50%,
        rgba(248, 249, 250, 0) 100%
      );
    }

    .feedback-fog-right {
      right: 0;
      background: linear-gradient(
        to left,
        rgba(248, 249, 250, 1) 0%,
        rgba(248, 249, 250, 0.95) 20%,
        rgba(248, 249, 250, 0.7) 50%,
        rgba(248, 249, 250, 0) 100%
      );
    }

    .feedback-btn {
      text-align: center;
      margin-top: 2.5rem;
    }

    .feedback-btn a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      padding: 8px 16px;
      color: #ff8600;
      border: 2px solid #ff8600;
      background-color: transparent;
      cursor: pointer;
      display: inline-block;
    }

    .feedback-btn a:hover {
      color: #ffffff;
      background-color: #ff8600;
    }

    @media (max-width: 1024px) {
      .feedback-title {
        font-size: 36px;
      }

      .feedback-card {
        min-width: 320px;
        max-width: 320px;
        min-height: 240px;
        padding: 24px;
      }
    }

    @media (max-width: 768px) {
      .feedback-title {
        font-size: 32px;
      }

      .feedback-card {
        min-width: 280px;
        max-width: 280px;
        min-height: 220px;
      }

      .feedback-row:nth-child(2) {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .feedback-section {
        padding: 60px 16px;
      }

      .feedback-title {
        font-size: 28px;
        margin-bottom: 40px;
      }

      .feedback-card {
        min-width: 260px;
        max-width: 260px;
        padding: 20px;
        min-height: 200px;
      }

      .feedback-text {
        font-size: 14px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
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
