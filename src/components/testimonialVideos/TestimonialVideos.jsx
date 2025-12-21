import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./TestimonialVideos.css";

const patientsEnglishData = [
  {
    image:
      "https://cdn.dribbble.com/userupload/44967485/file/f3fd822dcfd489ad11d91a87f831b385.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967500/file/612b699e67f9e72411d830241e7b1fca.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967510/file/271e0310d8cdf85c65f638ba79d3e811.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967459/file/a493f1f82f6e851154956da5f3b53138.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967524/file/2b0915dddc0b2a1bbbccd04f17764e2c.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967485/file/f3fd822dcfd489ad11d91a87f831b385.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967500/file/612b699e67f9e72411d830241e7b1fca.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967510/file/271e0310d8cdf85c65f638ba79d3e811.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967459/file/a493f1f82f6e851154956da5f3b53138.jpeg",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967524/file/2b0915dddc0b2a1bbbccd04f17764e2c.jpeg",
  },
];

function TestimonialVideos() {
  const swiperRef = useRef(null);

  return (
    <div className="tv-swiper-container">
      <div className="tv-swiper-content">
        <h1>Video Testimonials</h1>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
        >
          {patientsEnglishData.map((data, index) => (
            <SwiperSlide className="tv-swiper-slide" key={index}>
              <img src={data.image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
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
      </div>
    </div>
  );
}

export default TestimonialVideos;
