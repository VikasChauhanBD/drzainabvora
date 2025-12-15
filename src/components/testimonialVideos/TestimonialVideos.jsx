import React, { useRef, useState } from "react";
import "./TestimonialVideos.css";
import { useEffect } from "react";

const reelsData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44958099/file/a74f3823fb43309a2123a636993e3c41.jpg",
    url: "https://www.youtube.com/embed/hcj9zDQgl6E",
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44958123/file/7d350e03433b4d604459e6f8fe008a2f.jpg",
    url: "https://www.youtube.com/embed/KlF1tYn7og4",
  },
  {
    id: 3,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44900629/file/97500427b27ca6a3f1a6fb93ffe38494.jpg",
    url: "https://www.youtube.com/embed/byd53DDwNcI",
  },
  {
    id: 4,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44900633/file/17e9fee612b3fbdb73407fe60f743fef.jpg",
    url: "https://www.youtube.com/embed/9oaHK5JQomc",
  },
  {
    id: 5,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44900641/file/81591d6d3c3f8d4cb14408cd744caa27.jpg",
    url: "https://www.youtube.com/embed/i7E_5LK7g50",
  },
  {
    id: 6,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44900640/file/e07d1f0756b2a0c4ba57264d0d3ee0e5.jpg",
    url: "https://www.youtube.com/embed/DYhwYaAL3n0",
  },
  {
    id: 7,
    thumbnail:
      "https://cdn.dribbble.com/userupload/45288452/file/48d5e654a08e106a49f5361be55f67ea.jpg",
    url: "https://www.youtube.com/embed/75FqG7uNCjA",
  },
  {
    id: 8,
    thumbnail:
      "https://cdn.dribbble.com/userupload/45288468/file/70b01a47f7be2fa2639fa8e09f35f9ea.jpg",
    url: "https://www.youtube.com/embed/8sAYfL1ZjHc",
  },
];

function TestimonialVideos() {
  const scrollRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".tv-card");
      if (!card) return;

      const cardWidth = card.offsetWidth + 20; // add gap
      const { scrollLeft } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;

      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="tv-main-container">
      <h1>Testimonial Videos</h1>
      <div className="tv-wrapper">
        <button className="tv-btn left" onClick={() => scroll("left")}>
          ❮
        </button>

        <div className="tv-cards" ref={scrollRef}>
          {reelsData
            .slice()
            .reverse()
            .map((reel) => (
              <div
                key={reel.id}
                className="tv-card"
                onClick={() =>
                  setActiveVideo(activeVideo === reel.id ? null : reel.id)
                }
              >
                {activeVideo === reel.id ? (
                  <iframe
                    src={`${reel.url}?autoplay=1`}
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                    title={`Reel ${reel.id}`}
                  ></iframe>
                ) : (
                  <>
                    <img src={reel.thumbnail} alt="Reel Thumbnail" />
                    <div className="tv-play-icon">▶</div>
                  </>
                )}
              </div>
            ))}
        </div>

        <button className="tv-btn right" onClick={() => scroll("right")}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default TestimonialVideos;
