import React, { useState } from "react";
import "./Faqs.css";

const faqs = [
  {
    id: 1,
    question: "What are the class timings of NEET PG Bootcamp?",
    answer:
      "The facility will be open from 7AM to 8PM. The classes will be from 9AM and will usually go on till 3-4PM. Students are encouraged to utilise the facility for self study and revision post-class. On test days, the batch will be divided into slots and students will appear for tests in the respective slots. During the rest of the day, they should ideally study at the facility.",
  },
  {
    id: 2,
    question: "Do we get lunch from your side?",
    answer: "Facility to pre-book meals will be available.",
  },
  {
    id: 3,
    question:
      "Will we get access to Cerebellum Academy App if we register for BTR Bootcamp?",
    answer:
      "No, this is an offline class and the online access to Cerebellum Academy app is not included.",
  },
  {
    id: 4,
    question: "Do we get the PDFs?",
    answer:
      "Before class, the Unannotated PDFs will be provided. After class, the Annotated PDFs will be provided.",
  },
  {
    id: 5,
    question: "Will I get the BTR Workbook if I join NEET PG Bootcamp?",
    answer:
      "The BTR Workbook will be provided exclusively for BTR Boot Camp as a hard copy.",
  },
  {
    id: 6,
    question: "How will Computer Based Tests be conducted?",
    answer:
      "As per your enrolment number, slots will be released a day before. Then as per your slot, you can attend the test.",
  },
  {
    id: 7,
    question: "Will the test be Computer-based or Written?",
    answer: "The test will be computer-based.",
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item ${open ? "faq-item-open" : ""}`}
      style={{ "--i": index }}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-item-header">
        <span className="faq-item-number">0{faq.id}</span>
        <h3 className="faq-item-question">{faq.question}</h3>
        <span className="faq-item-icon">{open ? "−" : "+"}</span>
      </div>
      <div className="faq-item-body">
        <p className="faq-item-answer">{faq.answer}</p>
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
          Everything you need to know about the NEET PG Bootcamp — answered
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
