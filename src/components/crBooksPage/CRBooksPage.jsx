import React, { useEffect, useRef } from "react";
import "./CRBooksPage.css";
import { data, NavLink } from "react-router-dom";
import BookBanner from "../../assets/images/book-banner.jpeg";
import Book1 from "../../assets/images/book-1.jpeg";
import Book2 from "../../assets/images/book-2.jpeg";
import Book3 from "../../assets/images/book-3.jpeg";
import Book4 from "../../assets/images/book-4.jpeg";
import Book5 from "../../assets/images/book-5.jpeg";
import Book6 from "../../assets/images/book-6.jpeg";
import Book7 from "../../assets/images/book-7.jpeg";
import Book8 from "../../assets/images/book-8.jpeg";
import Book9 from "../../assets/images/book-9.jpeg";

const CRBooksPage = () => {
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const initializeScrollEffects = () => {
      const cardsContainer = cardsContainerRef.current;
      const cards = cardsRef.current;

      if (!cardsContainer || cards.length === 0) return;

      // Set CSS variables
      cardsContainer.style.setProperty(
        "--cards-count",
        cards.length.toString()
      );
      cardsContainer.style.setProperty(
        "--card-height",
        `${cards[0].clientHeight}px`
      );

      // Set padding and scroll observers for each card
      cards.forEach((card, index) => {
        if (!card) return;

        const offsetTop = 20 + index * 20;
        card.style.paddingTop = `${offsetTop}px`;

        // Skip the last card
        if (index === cards.length - 1) return;

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector(".card__inner");

        if (!nextCard || !cardInner) return;

        const handleScroll = () => {
          const nextCardRect = nextCard.getBoundingClientRect();
          const containerRect = cardsContainer.getBoundingClientRect();

          const cardHeight = card.clientHeight;
          const windowHeight = window.innerHeight;

          const offsetTopPx = offsetTop;
          const offsetBottom = windowHeight - cardHeight;

          const elementTop = nextCardRect.top - containerRect.top;
          const elementBottom = nextCardRect.bottom - containerRect.top;

          const start = offsetTopPx;
          const end = offsetBottom;

          let percentageY = 0;

          if (elementTop <= start) {
            percentageY = 100;
          } else if (elementBottom >= end) {
            percentageY = 0;
          } else {
            percentageY =
              ((start - elementTop) /
                (end - start - elementTop + elementBottom)) *
              100;
            percentageY = Math.max(0, Math.min(100, percentageY));
          }

          // Calculate scale and brightness values
          const scale = valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY,
          });

          const brightness = valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY,
          });

          cardInner.style.transform = `scale(${scale})`;
          cardInner.style.filter = `brightness(${brightness})`;
        };

        // Initial call
        handleScroll();

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        // Cleanup function
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleScroll);
        };
      });
    };

    // Helper function to calculate value at percentage
    const valueAtPercentage = ({ from, to, percentage }) => {
      return from + (to - from) * (percentage / 100);
    };

    // Initialize when component mounts
    const cleanupFunctions = initializeScrollEffects();

    // Cleanup on unmount
    return () => {
      if (cleanupFunctions) {
        cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
      }
    };
  }, []);

  // Add card to ref array
  const addToCardsRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  const cardData = [
    {
      id: 1,
      image: Book1,
      title: "1. Concepts in Radiology – Volume I",
      description:
        "This volume lays a strong foundation in radiology by covering all major subspecialties with a balanced mix of theory and clinical application. Written by legendary faculty, it helps residents understand imaging concepts systematically while integrating practical insights, multimedia resources, and self-assessment tools for effective learning.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-1/",
    },
    {
      id: 2,
      image: Book2,
      title: "2. Concepts in Radiology – Volume II",
      description:
        "Volume II focuses on conceptual clarity and diagnostic reasoning through concise lecture notes and case-based explanations. It is especially useful for early residents who want to develop a structured approach to image interpretation across multiple radiology subspecialties.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-2/",
    },
    {
      id: 3,
      image: Book3,
      title: "3. Concepts in Radiology – Volume III",
      description:
        "Designed to sharpen higher-level diagnostic skills, this volume connects imaging findings with pathology, surgical planning, and clinical decision-making. It blends evidence-based guidelines with expert judgment, preparing learners for real-world reporting and multidisciplinary discussions.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-3/",
    },
    {
      id: 4,
      image: Book4,
      title: "4. Concepts in Radiology – Volume IV",
      description:
        "A high-yield, focused guide covering Chest Imaging, Cardiovascular Radiology, and Uro-radiology. The content progresses from basic principles to advanced applications, making it ideal for quick revision, daily reporting reference, and exam-oriented preparation.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-4/",
    },
    {
      id: 5,
      image: Book5,
      title: "5. Concepts in Radiology – Volume V",
      description:
        "This volume integrates Women’s Imaging, Core Imaging Physics, and important advances in radiology. It simplifies complex physics concepts, explains safety protocols and guidelines clearly, and delivers exam-ready content for residents and fellows.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-5/",
    },
    {
      id: 6,
      image: Book6,
      title: "6. Radiological Anatomy: Practice Cases",
      description:
        "A practical, image-based book designed to strengthen radiological anatomy using X-ray, CT, MRI, and ultrasound cases. It enhances recognition of normal anatomy, anatomical variants, and key landmarks essential for accurate interpretation.",
      link: "https://conceptualradiology.com/radiological-anatomy-practice-cases/",
    },
    {
      id: 7,
      image: Book7,
      title: "7. Spotters Cases in Radiology",
      description:
        "A dedicated spotters book created to improve speed, accuracy, and confidence in identifying key imaging findings. Ideal for systematic revision, exam preparation, and group discussions for MD and DNB radiology residents.",
      link: "https://conceptualradiology.com/spotters-cases-in-radiology/",
    },
    {
      id: 8,
      image: Book8,
      title: "8. DNB Master Solutions Radiology – Volume I",
      description:
        "An exam-oriented resource featuring actual DNB Radiology question papers from the past six years with detailed, point-wise solutions. It helps students understand exam patterns, marking schemes, and answer-writing strategies.",
      link: "https://conceptualradiology.com/dnb-master-solution-radiology-vol-1/",
    },
    {
      id: 9,
      image: Book9,
      title: "9. DNB Master Solutions Radiology – Volume II",
      description:
        "This volume continues with more recent DNB Radiology question papers and in-depth explanations. It supports final-phase preparation by highlighting high-frequency topics and refining exam strategies with confidence.",
      link: "https://conceptualradiology.com/dnb-master-solution-radiology-vol-2/",
    },
  ];

  return (
    <div className="crbookspage-container">
      <div className="crbookspage-banner">
        <img src={BookBanner} alt="" />
      </div>

      <div className="crbookspage-price">
        <h2>
          Get your set of 9 books (Flat delivery charges of ₹2,999 are
          applicable), books prices may change at any time without prior notice.
        </h2>
        <NavLink
          className="crbookspage-price-btn"
          to="https://app.econceptual.com/books/order-7-conceptual-radiology-books/"
        >
          Book Now
        </NavLink>
      </div>

      <div className="crbookspage-cards" ref={cardsContainerRef}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="crbookspage-card"
            data-index={index}
            ref={(el) => addToCardsRef(el, index)}
          >
            <div className="crbookspage-card__inner">
              <div className="crbookspage-card__image-container">
                <img
                  className="crbookspage-card__image"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="crbookspage-card__content">
                <h1 className="crbookspage-card__title">{card.title}</h1>
                <p className="crbookspage-card__description">
                  {card.description}
                </p>
                <NavLink className="crbookspage-card__btn" to={card.link}>
                  Check Sample Pages
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="crbookspage-space-bottom" />
    </div>
  );
};

export default CRBooksPage;
