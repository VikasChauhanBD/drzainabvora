import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./TestimonialVideos.css";

const patientsEnglishData = [
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071076/reel-cover-16_m7acey.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071089/reel-video-16_trqgrb.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071086/reel-cover-1_fccp8r.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071089/reel-video-1_ceyh23.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071086/reel-cover-2_ewjsgi.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071089/reel-video-2_dqnuox.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071086/reel-cover-3_ko58vl.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071086/reel-video-3_ynm0nq.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071086/reel-cover-4_dbqlwv.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071088/reel-video-4_diyqea.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071084/reel-cover-5_ka9rv3.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071084/reel-video-5_rq1bgu.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071083/reel-cover-6_qdgoyi.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071082/reel-video-6_s0bkev.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071080/reel-cover-7_fqtsgg.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071084/reel-video-7_tzad1z.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071079/reel-cover-8_zjbk1j.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071079/reel-video-8_a6xrew.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071076/reel-cover-9_nxz0n1.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071078/reel-video-9_f0gxxe.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071076/reel-cover-10_vadv4x.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071083/reel-video-10_avxzhe.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071082/reel-cover-11_hm7lb4.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071085/reel-video-11_wmu6wi.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071081/reel-cover-12_r0nlg5.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071080/reel-video-12_vp2pfa.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071079/reel-cover-13_ixoncb.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071080/reel-video-13_mvquh4.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071080/reel-cover-14_z6axqg.png",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071081/reel-video-14_syq6sy.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1767071077/reel-cover-15_pirthr.jpg",
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1767071078/reel-video-15_ut6n6n.mp4",
  },
];

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
        <h1>Video Testimonials</h1>
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
          {patientsEnglishData.map((data, index) => (
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
