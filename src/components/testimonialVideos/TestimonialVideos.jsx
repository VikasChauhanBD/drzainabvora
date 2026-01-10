import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./TestimonialVideos.css";
import { testimonialVideosData } from "../../assets/data/testimonialVideosData";

function TestimonialVideos() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlayVideo = (index) => {
    // Only allow playing if this is the active slide
    if (index !== activeIndex) return;

    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    // Play the selected video
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  const handleVideoPause = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    }
  };

  const handleVideoPlay = (index) => {
    // Pause all other videos when one starts playing
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index && !video.paused) {
        video.pause();
      }
    });
    setPlayingIndex(index);
  };

  return (
    <div className="tv-swiper-container">
      <div className="tv-swiper-content">
        <h1>The Student Voices Gallery</h1>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
          onSlideChange={(swiper) => {
            // Pause all videos when sliding
            videoRefs.current.forEach((video) => {
              if (video) {
                video.pause();
              }
            });
            setPlayingIndex(null);
            setActiveIndex(swiper.realIndex);
          }}
        >
          {testimonialVideosData.map((data, index) => (
            <SwiperSlide
              className={`tv-swiper-slide ${
                playingIndex === index ? "playing" : ""
              }`}
              key={index}
            >
              {data.type === "video" ? (
                <div className="tv-video-wrapper">
                  {/* Thumbnail image */}
                  <img
                    src={data.image}
                    alt={`Video ${index + 1} thumbnail`}
                    className="tv-thumbnail"
                  />

                  {/* Actual video */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={data.url}
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    className={playingIndex === index ? "playing" : ""}
                    onPlay={() => handleVideoPlay(index)}
                    onPause={() => handleVideoPause(index)}
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Play button overlay - only visible on active slide */}
                  <div
                    className={`tv-play-button-overlay ${
                      playingIndex === index ? "hidden" : ""
                    }`}
                    onClick={() => handlePlayVideo(index)}
                  >
                    <div className="tv-play-icon">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="#27187e"
                        stroke="#27187e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <img src={data.url} alt={`Slide ${index + 1}`} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="tv-prev-button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className="tv-next-button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          &#10095;
        </button>

        <div className="tv-follow-btn">
          <NavLink to="https://www.instagram.com/drzainabvora" target="_blank">
            See More on Instagram
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TestimonialVideos;
