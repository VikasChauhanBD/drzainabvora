import React, { useEffect, useRef, useState } from "react";
import "./Journey.css";

export default function Journey() {
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
        const images = section.querySelectorAll(".journey-image-wrapper");
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
        const mobileItems = section.querySelectorAll(".journey-mobile-item");
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
      title: "Stories Unveiled",
      subhead: "Capture the essence of family celebration.",
      description: "Share the moments that weave your family tale.",
      image:
        "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-3.webp",
      mobileImage:
        "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-3.webp",
    },
    {
      title: "Celebrating Life Together",
      subhead: "Embrace the significance of shared joy.",
      description: "In every celebration, find the heartwarming stories.",
      image:
        "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-2.webp",
      mobileImage:
        "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-2.webp",
    },
    {
      title: "The Art of Giving",
      subhead: "Explore the stories within each present.",
      description: "Every gift is a chapter in your family's narrative.",
      image:
        "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-1.webp",
      mobileImage:
        "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-1.webp",
    },
  ];

  return (
    <section className="journey-section" ref={sectionRef}>
      <div className="journey-section-heading">
        <h2>
          This section is for detailed content showcasing Dr. Zainab Maam's
          journey. This section will be structured with a clean and engaging
          layout, featuring:
        </h2>
      </div>
      <div className="journey-container">
        {/* Desktop Layout */}
        <div className="journey-desktop">
          <div className="journey-images-container">
            <div className="journey-images-sticky">
              {/* First image - top layer (Stories Unveiled) */}
              <div
                className="journey-image-wrapper journey-image-first"
                data-index="0"
              >
                <img src={stories[0].image} alt={stories[0].title} />
              </div>
              {/* Second image - middle layer (Celebrating Life Together) */}
              <div
                className="journey-image-wrapper journey-image-second"
                data-index="1"
              >
                <img src={stories[1].image} alt={stories[1].title} />
              </div>
              {/* Third image - bottom layer (The Art of Giving) */}
              <div
                className="journey-image-wrapper journey-image-third"
                data-index="2"
              >
                <img src={stories[2].image} alt={stories[2].title} />
              </div>
            </div>
          </div>

          <div className="journey-content">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`journey-content-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <h3>{story.title}</h3>
                <div className="journey-subhead">{story.subhead}</div>
                <p>{story.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="journey-mobile">
          {[...stories].reverse().map((story, index) => (
            <div key={index} className="journey-mobile-item">
              <div className="journey-mobile-content">
                <h3>{story.title}</h3>
                <div className="journey-mobile-subhead">{story.subhead}</div>
                <p>{story.description}</p>
              </div>
              <div className="journey-mobile-image">
                <img src={story.mobileImage} alt={story.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
