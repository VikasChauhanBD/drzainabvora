import React from "react";
import "./BTRUnique.css";

const BTRUnique = () => {
  return (
    <div className="btr-unique-container">
      {/* Animated Background Elements */}
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>
      <div className="bg-gradient-orb orb-3"></div>

      {/* Main Content */}
      <section className="content-section">
        <div className="section-header">
          <div className="header-accent"></div>
          <h2 className="section-title">
            What makes BTR unique
            <span className="title-highlight">
              {" "}
              (from someone who actually used it)
            </span>
          </h2>
          <div className="header-accent"></div>
        </div>

        {/* Feature 1 */}
        <div className="feature-card">
          <div className="feature-number-wrapper">
            <div className="feature-number">1</div>
            <div className="number-glow"></div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">
              She simplifies stuff that everyone else overcomplicates
            </h3>
            <p className="feature-text">
              You know those topics where you read the textbook five times and
              still feel dumb?
            </p>
            <p className="feature-highlight">
              <span className="highlight-icon">💡</span>
              With Dr. Zainab it's like — "Oh, this was actually simple?? Why
              did I waste 3 days on it?"
            </p>
            <p className="feature-text">
              Her flowcharts and summaries hit different.
            </p>
            <p className="feature-emphasis">Super crisp, super exam-oriented</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="feature-number-wrapper">
            <div className="feature-number">2</div>
            <div className="number-glow"></div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">
              BTR is literally life-saving during revision
            </h3>
            <p className="feature-text">
              Like honestly, when exams are close and your brain is giving
              "system shutting down" vibes — BTR is the only thing you can look
              at without crying.
            </p>
            <p className="feature-text">
              Instead of 300 pages of theory, she gives:
            </p>
            <ul className="feature-list">
              <li>Tables</li>
              <li>Mnemonics</li>
              <li>Visual cues</li>
              <li>Quick-revise points</li>
            </ul>
            <p className="feature-emphasis">
              It's high-yield in the actual sense.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="feature-number-wrapper">
            <div className="feature-number">3</div>
            <div className="number-glow"></div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">
              Dr. Zainab teaches like she knows your pain
            </h3>
            <p className="feature-text">One thing you'll notice:</p>
            <p className="feature-text">
              She's not the "distance wali faculty" who just dumps content.
            </p>
            <p className="feature-text">
              She talks to you like a senior would:
            </p>
            <ul className="feature-list">
              <li>Understands the burnout</li>
              <li>Tells you how to study smarter</li>
              <li>Calls out your excuses but in a comforting way</li>
              <li>Boosts confidence when you're convinced you'll fail</li>
            </ul>
            <p className="feature-emphasis">
              Honestly, that emotional support is rare in med-prep.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <div className="feature-number-wrapper">
            <div className="feature-number">4</div>
            <div className="number-glow"></div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">
              Her vibe makes you actually WANT to study
            </h3>
            <p className="feature-text">
              Her sessions feel like someone is studying with you, not at you.
            </p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">✨</span>
                You won't zone out.
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🧠</span>
                You won't feel stupid.
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🤝</span>
                You won't feel alone.
              </div>
            </div>
            <p className="feature-emphasis">
              That alone is half the battle in exam prep.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="feature-card">
          <div className="feature-number-wrapper">
            <div className="feature-number">5</div>
            <div className="number-glow"></div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">BTR tells you what NOT to study</h3>
            <p className="feature-text">
              Trust me, this is more important than what to study.
            </p>
            <p className="feature-text">
              There's so much random low-yield stuff that textbooks keep
              dumping.
            </p>
            <p className="feature-highlight">
              <span className="highlight-icon">✂️</span>
              Zainab ma'am just cuts it off: "Ye sab exam mein nahi aayega.
              Next."
            </p>
            <p className="feature-emphasis">Time saved = marks gained.</p>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="note-section">
        <div className="note-background-pattern"></div>
        <div className="note-card">
          <h3 className="note-title">BTR is not your main textbook</h3>
          <p className="note-text">
            If you're weak in concepts, or starting fresh → BTR alone won't save
            you.
          </p>
          <div className="study-formula">
            <h4>Use BTR like this:</h4>
            <div className="formula-flow">
              <span className="formula-step">Concepts</span>
              <span className="formula-arrow">→</span>
              <span className="formula-step">QBank</span>
              <span className="formula-arrow">→</span>
              <span className="formula-step">BTR revision</span>
              <span className="formula-arrow">→</span>
              <span className="formula-step">Repeat</span>
            </div>
            <p className="formula-highlight">
              That's when the magic happens. ✨
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <h3 className="testimonial-title">
            What it felt like studying with her
          </h3>
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              It's like having a senior who's cracked the exam telling you:
            </p>
            <span className="quote">
              Chill. I know what matters. Just follow this, you'll be fine.
            </span>
            <p className="testimonial-text">
              That assurance… that calmness… Honestly, it reduces half the
              stress.
            </p>
          </div>

          <div className="qualities-box">
            <p className="testimonial-text">
              When she explains, you get the feeling that:
            </p>
            <ul className="qualities-list">
              <li>She's been in your exact spot</li>
              <li>She knows the pressure</li>
              <li>She genuinely cares</li>
            </ul>
            <p className="testimonial-emphasis">
              That makes a HUGE difference when you're drowning in syllabus.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="conclusion-section">
        <div className="conclusion-background"></div>
        <div className="conclusion-content">
          <h2 className="conclusion-title">
            BTR isn't just unique because of the notes.
          </h2>
          <p className="conclusion-subtitle">
            It's unique because of the teacher behind it.
          </p>
          <div className="formula-box">
            <p className="formula">
              Her clarity + empathy + exam sense ={" "}
              <span className="formula-result"> killer combination</span>
            </p>
          </div>
          <p className="conclusion-final">
            If you use it right, it'll make your prep 10x smoother. 🚀
          </p>
        </div>
      </section>
    </div>
  );
};

export default BTRUnique;
