import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FaArrowRightLong } from "react-icons/fa6";
import SlidingButton from "@/app/SlidingButton/SlidingButton";

export default function HomeAbout() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3000,
      animationDuration: 900,
      gap: 10,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <>

<div className="max-w-[1600px] mx-auto ">
      <section className="py-10 bg-black text-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
            {/* Images Grid */}
            <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-6 justify-center items-center lg:order-first order-last">
              <div className="pt-6 sm:pt-16 md:pt-20 lg:pt-24 flex justify-center">
                <img
                  className="rounded-xl object-cover w-[90%] sm:w-[70%] md:w-[70%] lg:w-[90%] xl:w-auto max-w-xs sm:max-w-sm h-auto"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about us"
                />
              </div>
              <div className="flex justify-center sm:justify-end">
                <img
                  className="rounded-xl object-cover w-[90%] sm:w-[70%] md:w-[70%] lg:w-[90%] xl:w-auto max-w-xs sm:max-w-sm h-auto"
                  src="https://pagedone.io/asset/uploads/1717741215.png"
                  alt="about us"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full flex flex-col justify-center items-center lg:items-start gap-6 sm:gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-md sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 font-manrope">
                  ABOUT US
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-manrope">
                  Built Relationships with 12,500+ Happy Clients!
                </h2>
                <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                  Trusted by more than 12,500 satisfied clients, we consistently
                  deliver proven results through timely execution and
                  exceptional service.
                </p>
              </div>

              {/* Statistics */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10 text-center">
                {[
                  { number: "33+", label: "Years of Experience" },
                  { number: "125+", label: "Successful Projects" },
                  { number: "52+", label: "Happy Clients" },
                  { number: "33+", label: "Years of Experience" },
                  { number: "125+", label: "Successful Projects" },
                  { number: "52+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
                      {stat.number}
                    </h3>
                    <h6 className="text-white text-sm sm:text-base font-normal">
                      {stat.label}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work Life Section */}
        <div className="mt-16 md:mt-20 text-center px-4">
          <h6 className="text-md sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 font-medium font-manrope">
            WORK-LIFE
          </h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            Life at Daksh Infosoft
          </h1>
          <h5 className="text-sm sm:text-lg text-gray-300">
            We believe in creating more than just a workplace.
          </h5>
        </div>

        {/* Carousel Section */}
        <div className="glide-03 relative w-full py-10">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-nowrap flex-no-wrap flex w-full overflow-hidden">
              {[
                "https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg",
                "https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg",
                "https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg",
                "https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg",
                "https://Tailwindmix.b-cdn.net/carousel/carousel-image-04.jpg",
              ].map((src, index) => (
                <li key={index} className="w-full">
                  <img
                    src={src}
                    className="m-auto w-full max-h-64 sm:max-h-72 md:max-h-80 lg:max-h-96 object-cover rounded-lg"
                    alt={`carousel-${index}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-8 mb-10">
          <SlidingButton
            text="Explore More"
            bgColor="bg-white"
            textcolor="text-black"
          />
        </div>
      </section>
      </div>
    </>
  );
}
