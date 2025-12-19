// import React from "react";
// import "./WhatBTR.css";
// import { StarIcon } from "lucide-react";

// export default function WhatBTR() {
//   return (
//     <>
//       <div className="marquee-wrapper">
//         <div className="marquee-question">
//           <span>
//             What is Buri Tarah Ratto ? <StarIcon className="star-icon" /> What
//             is Buri Tarah Ratto ? <StarIcon className="star-icon" /> What is
//             Buri Tarah Ratto ? <StarIcon className="star-icon" /> What is Buri
//             Tarah Ratto ? <StarIcon className="star-icon" /> What is Buri Tarah
//             Ratto ? <StarIcon className="star-icon" />
//           </span>
//           <span>
//             What is Buri Tarah Ratto ? <StarIcon className="star-icon" /> What
//             is Buri Tarah Ratto ? <StarIcon className="star-icon" /> What is
//             Buri Tarah Ratto ? <StarIcon className="star-icon" /> What is Buri
//             Tarah Ratto ? <StarIcon className="star-icon" /> What is Buri Tarah
//             Ratto ? <StarIcon className="star-icon" />
//           </span>
//         </div>
//       </div>

//       <div className="marquee-answer">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//           tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
//           ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//           luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
//           sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
//           ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
//           mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
//           pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
//           pulvinar dapibus leo.
//         </p>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useRef } from "react";
import "./WhatBTR.css";
import { BiBrain } from "react-icons/bi";
import { BiBoltCircle } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { BiTrophy } from "react-icons/bi";

function WhatBTR() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            if (headerRef.current) {
              headerRef.current.classList.add("animate");
            }

            // Animate cards with delay
            cardRefs.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add("animate");
                }, index * 150);
              }
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const coreData = [
    {
      id: 1,
      icon: BiBrain,
      title: "Memory Techniques",
      desp: "Proven mnemonics and memory strategies that make retention effortless",
    },
    {
      id: 2,
      icon: BiBoltCircle,
      title: "Quick Revision",
      desp: "Streamlined content designed for effective last-minute preparation",
    },
    {
      id: 3,
      icon: BiBook,
      title: "Comprehensive Coverage",
      desp: "All 19 subjects covered with exam-focused precision",
    },
    {
      id: 4,
      icon: BiTrophy,
      title: "Exam-Oriented",
      desp: "Content aligned with NEET PG and INICET patterns",
    },
  ];

  return (
    <div className="what-btr-container" ref={sectionRef}>
      <div className="what-btr-header" ref={headerRef}>
        <h3>THE BTR METHOD</h3>
        <h1>
          Belief Toh Rakho
          <br />
          The Revolutionary Approach
        </h1>
        <p>
          A complete teaching methodology that changes how you learn medicine,
          helping you master all subjects with techniques for better persistence
          and success.
        </p>
      </div>

      <div className="what-btr-cards">
        {coreData.map((data, index) => {
          const IconComponent = data.icon;
          return (
            <div key={data.id} className="what-btr-card" ref={addToCardRefs}>
              <IconComponent className="what-btr-icon" />
              <h4>{data.title}</h4>
              <p>{data.desp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhatBTR;
