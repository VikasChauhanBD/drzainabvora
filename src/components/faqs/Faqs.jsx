import React, { useState } from "react";
import "./Faqs.css";

const faqs = [
  {
    id: 1,
    question: "FAQ's coming soon",
    answer: `FAQ's coming soon.`,
  },
];

// const faqs = [
//   {
//     id: 1,
//     question: "What is changing?",
//     answer: `Dr. Zainab Vora will be launching her independent academic app on <strong>2nd April 2026</strong>. This is a structured academic transition.
// <ul>
// <li>Academic sessions of Radiology and BTR will continue at Cerebellum App till <strong>March 31, 2026</strong>.</li>
// <li>Subscription of BTR (for both BTR as well as mission students) will continue at new platform from <strong>April 2, 2026</strong>.</li>
// <li>There will be <strong>no abrupt changes</strong>.</li>
// <li>All scheduled classes and topics will be completed as planned.</li>
// </ul>`,
//   },
//   {
//     id: 2,
//     question: "Is Dr. Zainab Vora leaving Cerebellum immediately?",
//     answer: `No. Both Radiology and BTR teaching commitments at Cerebellum will continue as scheduled till <strong>March 31, 2026</strong>. There is no sudden stoppage of classes.`,
//   },
//   {
//     id: 3,
//     question: "Why is this transition happening?",
//     answer: `This is a growth-driven decision. Dr. Zainab Vora is launching her own platform to:
// <ul>
// <li>Expand academic flexibility.</li>
// <li>Experiment with new teaching approaches.</li>
// </ul>`,
//   },
//   {
//     id: 4,
//     question:
//       "What happens to students who purchased the independent BTR program?",
//     answer: `BTR is a one-year structured program. All students who have purchased or will purchase BTR subscription from Cerebellum App till <strong>31st March 2026</strong>:
// <ul>
// <li>Will receive access to the existing BTR content on Cerebellum App till the duration of their subscription.</li>
// <li>Will get access to new BTR videos till the duration of their subscription on Dr. Zainab's new App.</li>
// <li>Will also receive access to Cerebellum's new ultra revision program till the duration of their subscription.</li>
// <li>There is no reduction in duration.</li>
// <li>There is no loss of access.</li>
// </ul>`,
//   },
//   {
//     id: 5,
//     question:
//       "What happens to Mission students who received BTR as part of their subscription?",
//     answer: `All students who have already subscribed to or will subscribe to mission programs (FMGE or NEET/INICET) till <strong>March 31, 2027</strong>:
// <ul>
// <li>Will receive access to all content including mission videos, main videos, quick revision videos, Q bank, flashcards and existing BTR videos till the duration of their subscription on Cerebellum App.</li>
// <li>Will get access to Cerebellum's new ultra revision program till the duration of their subscription.</li>
// <li>Will also get access to new BTR videos on Dr. Zainab's new App till <strong>March 31, 2027</strong> or the last date of their subscription, whichever is earlier.</li>
// </ul>`,
//   },
//   {
//     id: 6,
//     question: "Do I need to pay anything extra for this transition?",
//     answer: `All BTR online and Mission <strong>ACTIVE</strong> subscribers:
// <ul>
// <li>Do not need to pay any additional fee till course validity.</li>
// <li>Do not need to repurchase the course till course validity.</li>
// </ul>`,
//   },
//   {
//     id: 7,
//     question: "Do I need to take any action right now?",
//     answer: `No. You should continue studying normally on Cerebellum App. Transition instructions will be shared in advance.`,
//   },
//   {
//     id: 8,
//     question: "What about BTR Hardcopy Notes?",
//     answer: `Hardcopy notes already provided with BTR package are <strong>sufficient for studying with BTR 2.0 videos.</strong> If students want to follow the <strong>new version of BTR videos</strong>, they may:
// <ul>
// <li>Continue using existing notes and add extra information in these, or</li>
// <li>Purchase updated notes separately.</li>
// </ul>`,
//   },
//   {
//     id: 9,
//     question:
//       "Can a student purchase BTR notes from Cerebellum Academy App now also?",
//     answer: `Yes, BTR 2.0 notes can be purchased from the Cerebellum App until <strong>31st March 2026</strong> and new Notes from New App by Dr. Zainab Vora, shall be available from <strong>02nd April 2026</strong>. </br>However:
// <ul>
// <li>These notes are aligned with BTR 2.0 videos.</li>
// <li>Students planning to follow the new BTR version should wait and purchase notes from the new platform after April.</li>
// </ul>`,
//   },
//   {
//     id: 10,
//     question:
//       "Should students delay purchasing courses due to this transition?",
//     answer: `No. All academic schedules continue as planned. Mission programs remain unaffected. <strong>Preparation should not pause</strong> because of platform transitions.`,
//   },
//   {
//     id: 11,
//     question:
//       "Should students purchase the Mission subscription before March 31, 2026?",
//     answer: `Yes, students are advised to purchase the <strong>Mission subscription before 31 March 2026</strong> if they want <strong>BTR included within the Mission plan.</strong><br/><br/>If a student purchases the Mission subscription <strong>on or before 31 March 2026</strong>, they will receive <strong>BTR access as part of the Mission subscription</strong> according to the applicable terms.<br/><br/>However, if the Mission subscription is purchased <strong>after 31 March 2026, BTR will no longer be included</strong> in the Mission plan. In that case, students who want BTR will need to <strong>purchase the BTR subscription separately from Dr. Zainab Vora's new App.</strong>`,
//   },
//   {
//     id: 12,
//     question: "Should new students wait until April to buy BTR Online?",
//     answer: `Not necessary. Students can start BTR Online in Cerebellum App now, then transition to the new platform — or wait for the new App to launch on <strong>2nd April</strong>. Both options are acceptable.`,
//   },
//   {
//     id: 13,
//     question:
//       "Can I purchase BTR videos from Cerebellum App after 31st March 2026?",
//     answer: `No. After <strong>31st March 2026</strong>, BTR will be available only in the <strong>New App by Dr. Zainab Vora</strong>.`,
//   },
//   {
//     id: 14,
//     question:
//       "Will I get BTR access if I subscribe to mission programs after March 31, 2026?",
//     answer: `No. BTR access as a part of mission subscription will be available only till <strong>March 31, 2026</strong>. After this period, mission program will not include BTR access.`,
//   },
//   {
//     id: 15,
//     question: "What should students focus on right now?",
//     answer: `Preparation. All academic commitments are intact. There is no loss of access. There is no disruption of schedule.`,
//   },
//   {
//     id: 16,
//     question: "What changes will happen at Cerebellum after 31st March 2026?",
//     answer: `Post March 31, 2026, Cerebellum will launch:
// <ul>
// <li>A new <strong>Ultra High Revision Program</strong>
//   <ul>
//     <li>Structured high-yield format</li>
//     <li>Designed with all 19 faculties</li>
//     <li>Available for all active Mission and BTR subscribers till subscription validity</li>
//   </ul>
// </li>
// <li>A new Radiology faculty will be introduced.</li>
// </ul>
// All other academic systems remain unchanged.`,
//   },
//   {
//     id: 17,
//     question: "Will Cerebellum's Ultra Revision Program be similar to BTR?",
//     answer: `Cerebellum's Ultra Revision Program will be a structured, high-yield revision system designed within the Cerebellum ecosystem. It will be available to active Mission and BTR subscribers as per their subscription duration. More details will be shared separately.`,
//   },
//   {
//     id: 18,
//     question: "When will the Ultra Revision Program be launched?",
//     answer: `Details regarding launch timelines will be shared separately. It will be available to eligible students within their active subscription duration.`,
//   },
//   {
//     id: 19,
//     question: "Will FMGE or NEET PG 2026 preparation be affected?",
//     answer: `No.
// <ul>
// <li>All academic commitments till NEET PG 2026 will be completed.</li>
// <li>Classes will continue as scheduled.</li>
// <li>There will be no interruption in preparation.</li>
// </ul>`,
//   },
//   {
//     id: 20,
//     question: "What is the transition timeline?",
//     answer: `<ul>
// <li><strong>Till 31st March 2026:</strong> BTR online continues on Cerebellum App.</li>
// <li><strong>2nd April 2026:</strong> Independent app launches.</li>
// <li><strong>From April 2, 2026:</strong> Remaining validity of BTR online shifts to new app.</li>
// </ul>`,
//   },
//   {
//     id: 21,
//     question: "What will be the procedure of transition to the new App?",
//     answer: `Cerebellum mission and BTR subscribers need to give consent for sending necessary details to new platform for subscription. Option of this consent will be provided within the cerebellum academy App. before <strong>20th March 2026</strong>. The students then need to download the new App of Dr Zainab whenever it will be launched and login using these credentials. The subscription will then be automatically activated.`,
//   },
//   {
//     id: 22,
//     question:
//       "Will there be any gap in access during migration from Cerebellum App to the new App?",
//     answer: `No. The transition of access will be structured. There will be no interruption in preparation.`,
//   },
//   {
//     id: 23,
//     question:
//       "Will my progress data (watch history, bookmarks etc.) transfer to the new App?",
//     answer: `No. Progress tracking systems are platform-specific. Progress data cannot be transferred to the newer App. However, <strong>access to academic content remains unaffected</strong>.`,
//   },
//   {
//     id: 24,
//     question: "Will live sessions continue after April 2 on Cerebellum App?",
//     answer: `No. Recorded videos of Radiology and BTR will be available on Cerebellum App till the duration of your subscription. Scheduled live sessions of Radiology as well as BTR till <strong>March 31, 2026</strong> will be conducted at Cerebellum App. Live sessions of <strong>Dr. Zainab after March 31, 2026 will be conducted on the new App.</strong>`,
//   },
//   {
//     id: 25,
//     question:
//       "If I am a long-term Mission subscriber (3–6 years), will I still get structured revision support after March 31, 2027?",
//     answer: `Yes. Cerebellum's Ultra Revision Program will continue to support active subscribers for the <strong>entire duration of their subscription</strong>.`,
//   },
//   {
//     id: 26,
//     question:
//       "Will the syllabus or teaching approach change because of this transition?",
//     answer: `No. Ongoing academic plans remain unchanged. The transition is <strong>structural, not curricular</strong>.`,
//   },
//   {
//     id: 27,
//     question: "Will there be a separate login required for the new App?",
//     answer: `Yes. Students eligible for BTR access on the new platform will receive instructions regarding login and activation process closer to the transition date.`,
//   },
//   {
//     id: 28,
//     question: "Who should I contact for issues during transition?",
//     answer: `You can connect on our New Helpline No: <strong>7428581909</strong><br/>or send a WhatsApp by clicking on the link: <a href="https://wa.aisensy.com/+919266682739" target="_blank" rel="noopener noreferrer">wa.aisensy.com/+919266682739</a><br/><br/>We are ready to assist you.`,
//   },
//   {
//     id: 29,
//     question: "Who is this transition applicable to?",
//     answer: `The transition applies to:
// <ul>
// <li>Active BTR online subscribers and those who subscribe anytime till <strong>31st March 2026</strong>.</li>
// <li>Active Mission subscribers and those who subscribe anytime till <strong>31st March 2026</strong>.</li>
// </ul>
// Cerebellum's other courses / plans and systems remain unaffected.`,
//   },
// ];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item ${open ? "faq-item-open" : ""}`}
      style={{ "--i": index }}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-item-header">
        <span className="faq-item-number">
          {String(faq.id).padStart(2, "0")}
        </span>
        <h3 className="faq-item-question">{faq.question}</h3>
        <span className="faq-item-icon">{open ? "−" : "+"}</span>
      </div>
      <div className="faq-item-body">
        <div
          className="faq-item-answer"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
      </div>
    </div>
  );
}

function Faqs() {
  return (
    <div className="faq-container">
      <div className="faq-left">
        <div className="faq-label">Got Questions?</div>
        <h1 className="faq-heading">
          Frequently <br />
          <span className="faq-heading-accent">Asked</span> <br />
          Questions
        </h1>
        <p className="faq-subtext">
          Everything you need to know about the platform transition — answered
          clearly and concisely.
        </p>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </div>

      <div className="faq-right">
        <img
          src="https://cdn.dribbble.com/userupload/46965067/file/4eac2c634cd31e54ba7a0ed866f969ab.png"
          alt="BTR and NEET PG Bootcamp FAQ's by Dr. Zainab Vora"
        />
      </div>
    </div>
  );
}

export default Faqs;
