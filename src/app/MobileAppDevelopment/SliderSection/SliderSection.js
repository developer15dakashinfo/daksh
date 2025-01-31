"use client";
import React from "react";
import Slider from "react-infinite-logo-slider";

const SliderSectionHome7 = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-slate-100">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
          <h2 className="text-gray-800 lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
            Elevate Your Experience with Modern Elegance
          </h2>
          <p className="text-gray-800 mt-6 text-base leading-relaxed">
            Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
            officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
            tempor ut reprehenderit.
          </p>
          <button
            type="button"
            className="bg-transparent border-2 border-gray-800 mt-12 transition-all text-gray-800 font-bold text-sm rounded-md px-6 py-2.5"
          >
            Get Started
          </button>
        </div>
        <div className="lg:h-[480px] flex items-center">
          <img
            src="https://readymadeui.com/team-image.webp"
            className="w-full h-full object-cover"
            alt="Dining Experience"
          />
        </div>
      </div>
      <div className="py-20">
        <div>
          <h2 className="text-3xl font-bold text-center sm:text-5xl">
            Our Partners
          </h2>
        </div>
        <br />
        <Slider
          width="250px"
          duration={8}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          <Slider.Slide>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2023/05/web3auth-logo.svg"
              alt="any"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2024/08/boba-new.png.webp"
              alt="any2"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2022/12/logotype.bfb3381.png"
              alt="any3"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <div>
              <img
                src="https://www.antiersolutions.com/wp-content/uploads/2023/05/zeeve.png"
                alt="any3"
                className="w-36"
              />
            </div>
          </Slider.Slide>
        </Slider>
        <br />
        <Slider
          width="250px"
          duration={20}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          <Slider.Slide>
            <div>
              <img
                src="https://www.antiersolutions.com/wp-content/uploads/2023/05/zeeve.png"
                alt="any3"
                className="w-36"
              />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2023/05/web3auth-logo.svg"
              alt="any"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2024/08/boba-new.png.webp"
              alt="any2"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2022/12/logotype.bfb3381.png"
              alt="any3"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2024/10/hashlock_logo.svg"
              alt="any3"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2024/04/Clip01.svg"
              alt="any3"
              className="w-36"
            />
          </Slider.Slide>
        </Slider>
      </div>


    </>
  );
};

export default SliderSectionHome7;
