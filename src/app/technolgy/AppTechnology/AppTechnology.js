"use client";
import React from "react";
import { BiMobileAlt } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";
import { MdOutlineHeadphones } from "react-icons/md";
import { BiSolidComponent } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { RiCodeBoxLine } from "react-icons/ri";
import { GrDocumentPerformance } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import Slider from "react-infinite-logo-slider";
import TechnologyServices from "./TechnologyServices/TechnologyServices";
import FrameWorkSection from "./FrameWork/FrameWork";
import WhyChooesSection from "./WhyChooes/WhyChooes";
import TechnologyWeUseSection from "./TechnologyWeUse/TechnologyWeUse";
import FAQ from "@/app/websiteDesign/FAQ/FAQ";


const AndroidAppServices = ({ title, content }) => {
  return (
    <>
      {/* first div */}

      <div
        class="  pt-12 sm:pt-16 relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.prismic.io/turing/652ec8bafbd9a45bcec81a77_Android_app_e29f427ffa.webp?auto=format,compress')`,
        }}
      >
        <div class="">
          <section className="">
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative text-white pt-28 px-10 lg:px-40 gap-20 flex flex-col lg:flex-row justify-between items-center">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-blue-800 text-lg font-semibold">Technology</h3>
                <h1 className="text-5xl font-bold">
                {title} Development Services
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-black to-gray-700 p-2 rounded-full text-white">
                      <BiMobileAlt className="text-2xl" />
                    </span>

                    <span className="text-lg">Dynamic Mobile Applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                      <MdOutlineHeadphones className="text-2xl" />
                    </span>
                    <span className="text-lg">
                      Long-term Support & Maintenance
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                      <BiArrowToRight className="text-2xl" />
                    </span>
                    <span className="text-lg">
                      Expertise in Kotlin and Java
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                      <BiSolidComponent className="text-2xl" />
                    </span>
                    <span className="text-lg">
                      Component-Based Architecture
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                      <FiSettings className="text-2xl" />
                    </span>
                    <span className="text-lg">
                      Upgrade & Migration Services
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                      <RiCodeBoxLine className="text-2xl" />
                    </span>
                    <span className="text-lg">Custom Widgets and Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                      <GrDocumentPerformance className="text-2xl" />
                    </span>
                    <span className="text-lg">Performance Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                      <BiTask className="text-2xl" />
                    </span>
                    <span className="text-lg">User Experience (UX) Design</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/4 mt-20 lg:mt-0">
                <div className="bg-gray-100 p-8 rounded-xl">
                  <h2 className="text-blue-800 text-xl font-semibold text-center">
                    Book Free Consultation
                  </h2>
                  <p className="text-gray-900 text-sm text-center">
                    Fill Out The Form And Our Experts Will Contact You Within
                    24hrs.
                  </p>
                  <form className="space-y-4 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        className="p-3 w-full bg-gray-200 text-white rounded-md"
                      />
                      <input
                        type="email"
                        placeholder="Email*"
                        className="p-3 w-full bg-gray-200 text-white rounded-md"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Phone Number*"
                        className="p-3 w-full bg-gray-200 text-white rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="p-3 w-full bg-gray-200 text-white rounded-md"
                      />
                    </div>
                    <textarea
                      placeholder="Your Requirement*"
                      className="p-3 w-full bg-gray-200 text-white rounded-md h-28"
                    ></textarea>
                    <button className="w-full bg-blue-800 py-3 text-white font-semibold rounded-md hover:bg-blue-600">
                      Submit Your Requirement!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* second div */}
        <div class="mt-20 ">
          <div class="relative">
            <div class="absolute inset-0 h-1/2 "></div>
            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="mx-auto max-w-7xl">
                <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div class="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                    <dt class="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      Data Sources, including APIs and databases
                    </dt>
                    <dd class="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                      <span>30</span>+
                    </dd>
                  </div>
                  <div class="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt class="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      Analytic Tools and Machine Learning Models
                    </dt>
                    <dd class="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                      <span>100</span>+
                    </dd>
                  </div>
                  <div class="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                    <dt class="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      Real-time Data Streams and Dashboards
                    </dt>
                    <dd class="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                      <span>10</span>+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
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
      <TechnologyServices />
      <FrameWorkSection />
      <WhyChooesSection/>
      <TechnologyWeUseSection/>
      <FAQ/>
    </>
  );
};

export default AndroidAppServices;
