import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FaArrowRightLong } from "react-icons/fa6";

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
      <section className="py-10 relative bg-black text-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className=" rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="about Us image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className=" text-lg text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font- font-manrope leading-normal text-start ">
                    ABOUT US
                  </h2>
                  <h2 className=" text-4xl font-bold font-manrope leading-normal text-start ">
                    Built Relationships with 12,500+ Happy Clients!
                  </h2>
                  <p className=" text-base font-normal leading-relaxed lg:text-start ">
                    Trusted by more than 12,500 satisfied clients, we
                    consistently deliver proven results through timely execution
                    and exceptional service.
                  </p>
                </div>
                <div className="w-full lg:justify-center justify-center items-center sm:gap-10 gap-5 inline-flex ">
                  <div className="flex-col justify-start items-start inline-flex ">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal">
                      33+
                    </h3>
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-center items-start inline-flex">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal">
                      125+
                    </h4>
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-center items-start inline-flex text-center">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal text-center">
                      52+
                    </h4>
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
                <div className="w-full lg:justify-center justify-center items-center sm:gap-10 gap-5 inline-flex text-center">
                  <div className="flex-col justify-start items-start inline-flex text-center">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal text-center">
                      33+
                    </h3>
                    <h6 className="text-white text-base font-normal leading-relaxed text-center">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  text-4xl font-bold font-manrope leading-normal">
                      125+
                    </h4>
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-28">
          <h6 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-sm font-medium font-manrope leading-normal text-center ">
            WORK-LIFE
          </h6>
          <h1 className="text-4xl text-center">Life at Daksh Infosoft</h1>
          <h5 className="text-lg text-light text-center">
            We believe in creating more than just a workplace.
          </h5>
        </div>

        <div className="glide-03 relative w-full py-10">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                  className="m-auto max-h-full w-full max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg"
                  className="m-auto max-h-full w-full max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg"
                  className="m-auto max-h-full w-full max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg"
                  className="m-auto max-h-full w-full max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-04.jpg"
                  className="m-auto max-h-full w-full max-w-full"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8 mb-10">
          <button className="flex gap-3 p-3 border-2 font-bold rounded-3 items-center">
            Explore More{" "}
            <span className="text-white">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
