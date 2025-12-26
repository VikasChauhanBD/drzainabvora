import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./TestimonialVideos.css";

const patientsEnglishData = [
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771077/SaveClip.App_AQN0Mv0kiTf0f_eVKHcpr1NbXEj1HRRSRqDp0FUrHsGBitrs9TsMb_kv1O-EggVWGE6-mOKJx2-wJO0sIoaBbSS3Orw6oWaW6wcyAHo_ctzcwh.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771075/SaveClip.App_AQNXi0NupvkY-lUHuJNwoqg3WEbkdAfkFwAKNupR4huLXgYADY6T-_h4Mam2EPBaz-rS_OIf8FYCDLJctDljxns0hEbhv3Dk9qRaWMg_yebn9o.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771074/SaveClip.App_AQOrfqgNyh9A4jmw6oxT3TpUpiHeVvxKwh2O4FOhVJWIF2M9sStiWsHpd3adIahBtUb1R5CXQpjxM-9bPeqxP5NY8K76ONv_x90SJJg_dajjyb.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771075/SaveClip.App_AQPaTjOU-9cSh1Fgsvio6rAFb_5-7FNEZMjKvbogAxMQYIRXV1EpmLefTpVp_hytfg9nCDNoSSk5cl8_VqJGE1R2AFhrB45-2r7gWBE_updmad.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771074/SaveClip.App_AQOZv_vzQ8wMlkiczbxhf6-Zuw_px4lJ0MT8rznl6PsRy3DXIQG15B0H1qjslWVFszy4QyylTlIU74JgaZPTU2pF115G3cQSTXItqpc_kipref.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771070/SaveClip.App_AQO8ITZmSAB15vWrBPZ3NN4kMpNKeNXRHSFn-yOkXzwnc5w9dhepV3BtnlUnmrHlRtfxhFvSPexgWwCBEVLzNohYyNzKA_9qJeTyApk_fmjl7q.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771070/SaveClip.App_AQMS73z8sMz6lWOW9q3P3w9h5h5-3EZCq-Smuqhhe2A8xJFC2vvkuc7BcqhwUUDVIIbB29ru1xtFEg6nKdSV5mkUsC1-j5MtXTX0yXE_ldw9ar.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771070/SaveClip.App_AQN9NAIsfP1zpzRexdM3jcu8UdghseOag1Yr4__O6uzpR_HSxbB3XysYmVuAxsE8DDgd_hfPGI0qHZ4AqdF1Jz1yt78SEOKb_cIwe_g_rm6noo.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771070/SaveClip.App_AQNxSH9ttvnJBFbghDJj6mMGHNif3fEE-4fI7GsZW3Zvqvpz4XwULL0eRI_Z8i4aH_diDKfBgCfb4JFUfbtUEe3xUKZPz_FOZq0YLxY_pscvav.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771071/SaveClip.App_AQNrsqTIj4SbpV3ywu3a6_GSxgntS3cxLExOS6LGhQnRLSXKMI1yXxVGgAUQFSo-t1m9ISfavXSmFbhFl5KjE6Pi5gkMGEfQZn4uZHc_odorpp.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771072/SaveClip.App_AQOSXWHfwvOaHn8yoPqeSpr_O1Cenub-4K1-_NhGpNrnqB2XBZoNB-MFBQ2OLkIwCZ6gBAK5lYxZTOxNMXqZLNmv_ciywkf.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771072/SaveClip.App_AQORrMa8tN5NtIDzuiCT6SmLdC5kqQFnNYEdjwgKgXdLJ8YBBWsNzGNTiERkVh6eHFkzTEzsc26IPFJqUh65M1a4XFVy1-IpVFVMIhA_opne93.mp4",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/dc7y7ypmm/video/upload/v1766771075/SaveClip.App_AQPbQeQ5vP6lCEYyMgL0chUgDddza9PYhehoUrqE3HxqSQ1dU4UTHv66xwmaagT92OmK95kZJK0Wz0gwTV5WZtmAwyZNl-u3oM_dZKw_fiwj0p.mp4",
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
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {patientsEnglishData.map((data, index) => (
            <SwiperSlide className="tv-swiper-slide" key={index}>
              {data.type === "video" ? (
                <video
                  src={data.url}
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={data.url} alt={`Slide ${index + 1}`} />
              )}
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
