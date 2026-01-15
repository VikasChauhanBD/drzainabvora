import React, { useEffect, useRef, useState } from "react";
import "./Biography.css";

export default function Biography() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate which story is active based on scroll position
      const scrollPosition = -sectionTop;
      const storyHeight = sectionHeight / 3;

      if (scrollPosition < 0) {
        setActiveIndex(0);
      } else if (scrollPosition < storyHeight) {
        setActiveIndex(0);
      } else if (scrollPosition < storyHeight * 2) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }

      // Desktop: Apply transformations to images based on scroll
      if (window.innerWidth >= 1024) {
        const images = section.querySelectorAll(".biography-image-wrapper");
        const progress = Math.max(
          0,
          Math.min(1, scrollPosition / (sectionHeight - windowHeight))
        );

        images.forEach((img, index) => {
          if (index === 0) {
            // First image (top layer) - rotated 8deg
            const fadeStart = 0.33;
            const fadeEnd = 0.66;
            const fadeProgress = Math.max(
              0,
              Math.min(1, (progress - fadeStart) / (fadeEnd - fadeStart))
            );

            if (progress < fadeStart) {
              img.style.opacity = "1";
              img.style.transform = `rotate(8deg)`;
            } else {
              img.style.opacity = `${1 - fadeProgress}`;
              img.style.transform = `translate(${-fadeProgress * 50}%, ${
                fadeProgress * 50
              }%) rotate(${8 - fadeProgress * 58}deg)`;
            }
          } else if (index === 1) {
            // Second image (middle layer) - rotated -5deg
            const fadeStart = 0.66;
            const fadeProgress = Math.max(
              0,
              Math.min(1, (progress - fadeStart) / (1 - fadeStart))
            );

            if (progress < 0.33) {
              img.style.opacity = "1";
              img.style.transform = `rotate(-5deg)`;
            } else if (progress < fadeStart) {
              img.style.opacity = "1";
              img.style.transform = `rotate(-5deg)`;
            } else {
              img.style.opacity = `${1 - fadeProgress}`;
              img.style.transform = `translate(${-fadeProgress * 50}%, ${
                fadeProgress * 50
              }%) rotate(${-5 - fadeProgress * 45}deg)`;
            }
          } else if (index === 2) {
            // Third image (bottom layer) - rotated 20deg, always visible
            img.style.opacity = "1";
            img.style.transform = `rotate(20deg)`;
          }
        });
      }

      // Mobile: Detect which image is in view
      if (window.innerWidth < 1024) {
        const mobileItems = section.querySelectorAll(".biography-mobile-item");
        mobileItems.forEach((item, index) => {
          const itemTop = item.getBoundingClientRect().top;
          const itemHeight = item.offsetHeight;

          if (itemTop < windowHeight / 2 && itemTop > -itemHeight / 2) {
            setMobileActiveIndex(index);
          }
        });
      }
    };

    // Initial call to set up images
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stories = [
    {
      title: "MBBS - AIIMS New Delhi",
      description:
        "Completed MBBS from the All India Institute of Medical Sciences (AIIMS), New Delhi, one of India's most prestigious medical institutions.<br/> Honored with the Outstanding Student Award, reflecting her academic brilliance and consistent performance.",
      image:
        "https://cdn.dribbble.com/userupload/46300983/file/9709a61fbd3b6d5c29711279ad0324d6.jpeg",
      mobileImage:
        "https://cdn.dribbble.com/userupload/46307618/file/5a4777d31a0215bb72915156007004fc.jpeg",
    },
    {
      title: "2015 - A Year to Remember",
      description:
        "The year 2015 marked a turning point in Dr. Zainab Vora's career: <br/> <b>All India Rank 1 - NIMHANS (March 2015)</b> <br/> <b>All India Rank 1 - AIIMS PG (May 2015)</b><br/> These results placed her among the top medical minds in the country and made Rajkot proud on the national stage.",

      image:
        "https://cdn.dribbble.com/userupload/46300984/file/87e1697456a0a62da45ba7bbc7fedbee.jpeg",
      mobileImage:
        "https://cdn.dribbble.com/userupload/46307617/file/89a0c5cbc29d9e86ea19234c7004936c.jpeg",
    },
    {
      title: "A Trusted Mentor Today",
      description:
        "Known as the 'BTR Queen', Dr. Zainab Vora today is more than a radiology educator. She is a mentor, guide, and source of strength for countless NEET PG and INI-CET aspirants, helping them transform anxiety into confidence and dreams into achievable goals.",
      image:
        "https://cdn.dribbble.com/userupload/46307615/file/910b6345c9dc4a51b5bc1d50c2fa308e.jpg",
      mobileImage:
        "https://cdn.dribbble.com/userupload/46307615/file/910b6345c9dc4a51b5bc1d50c2fa308e.jpg",
    },
  ];

  return (
    <section className="biography-section" ref={sectionRef}>
      <div className="biography-section-heading">
        <h1>
          Professional Biography – Highlighting her qualifications,
          achievements, and medical expertise.
        </h1>
      </div>
      <div className="biography-container">
        {/* Desktop Layout */}
        <div className="biography-desktop">
          <div className="biography-images-container">
            <div className="biography-images-sticky">
              {/* First image - top layer (Stories Unveiled) */}
              <div
                className="biography-image-wrapper biography-image-first"
                data-index="0"
              >
                <img src={stories[0].image} alt={stories[0].title} />
              </div>
              {/* Second image - middle layer (Celebrating Life Together) */}
              <div
                className="biography-image-wrapper biography-image-second"
                data-index="1"
              >
                <img src={stories[1].image} alt={stories[1].title} />
              </div>
              {/* Third image - bottom layer (The Art of Giving) */}
              <div
                className="biography-image-wrapper biography-image-third"
                data-index="2"
              >
                <img src={stories[2].image} alt={stories[2].title} />
              </div>
            </div>
          </div>

          <div className="biography-content">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`biography-content-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <h3>{story.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: story.description }} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="biography-mobile">
          {[...stories].map((story, index) => (
            <div key={index} className="biography-mobile-item">
              <div className="biography-mobile-content">
                <h3>{story.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: story.description }} />
              </div>
              <div className="biography-mobile-image">
                <img src={story.mobileImage} alt={story.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
