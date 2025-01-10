import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Home6.css";

const Home6 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of texts corresponding to each slide
  const slideTexts = [
    "Web Design & Development Services",
    "Digital Marketing Agency",
    "Other Marketing Services",
    "Finally, text for Slide",
  ];

  return (
    <div className="flex items-center justify-around h-screen px-8" style={{ background: "rgb(123, 148, 128)" }}>
      {/* Left Side: Dynamic Text */}
      <div className="w-1/2">
        {slideTexts.map((text, index) => (
          <span
            key={index}
            className={`text-6xl font-bold bg-blur text-white transition-opacity duration-500 ${
              activeSlide === index
                ? "opacity-100 blur-none"
                : "opacity-0 blur-md"
            }`}
          >
            {text}
          
          </span>
        ))}
        
      </div>

      {/* Right Side: Swiper Slider */}
      <div className="w-1/2 h-[700px] relative">
        <Swiper
          className="multiple-slide-carousel"
          loop={true}
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000, // Adjust the delay between slides (in ms)
            disableOnInteraction: false, // Keep autoplay running after interactions
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          modules={[Navigation, Autoplay]}
        >
          {slideTexts.map((_, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-white border  rounded-2xl h-[700px] flex justify-center items-center transition-all duration-500 ${
                  activeSlide === index
                    ? "scale-100 blur-none z-10"
                    : "scale-90 opacity-50 blur-md z-0"
                }`}
              >
                <span className="text-2xl font-semibold text-white">
                  Slide {index + 1}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute flex justify-center items-center m-auto left-0 right-0 w-fit -bottom-10">
          <button
            id="slider-button-left"
            className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-white !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-white !-translate-x-16"
          ></button>
          <button
            id="slider-button-right"
            className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-white !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-white !translate-x-16"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Home6;
