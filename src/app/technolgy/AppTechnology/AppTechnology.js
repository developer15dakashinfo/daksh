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
      className="lg:pt-20 xl:pt-20 md:pt-20 sm:pt-20 pt-10   relative bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.prismic.io/turing/652ec8bafbd9a45bcec81a77_Android_app_e29f427ffa.webp?auto=format,compress')`,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative text-white py-16 px-6 md:px-12 lg:px-40 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-blue-800 text-lg font-semibold">Technology</h3>
            <h1 className="lg:text-5xl md:text-5xl xl:text-5xl text-3xl font-bold">
              <span className="text-white">{title}</span> 
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              {[
                { icon: <BiMobileAlt />, text: "Dynamic Mobile Applications" },
                { icon: <MdOutlineHeadphones />, text: "Long-term Support & Maintenance" },
                { icon: <BiArrowToRight />, text: "Expertise in Kotlin and Java" },
                { icon: <BiSolidComponent />, text: "Component-Based Architecture" },
                { icon: <FiSettings />, text: "Upgrade & Migration Services" },
                { icon: <RiCodeBoxLine />, text: "Custom Widgets and Services" },
                { icon: <GrDocumentPerformance />, text: "Performance Optimization" },
                { icon: <BiTask />, text: "User Experience (UX) Design" },
              ].map(({ icon, text }, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white text-2xl">
                    {icon}
                  </span>
                  <span className="xl:text-lg lg:text-lg md:text-lg text-[15px]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/4 w-full">
            <div className="bg-gray-100 p-8 rounded-xl">
              <h2 className="text-blue-800 text-xl font-semibold text-center">
                Book Free Consultation
              </h2>
              <p className="text-gray-900 text-sm text-center">
                Fill Out The Form And Our Experts Will Contact You Within 24hrs.
              </p>
              <form className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="p-3 w-full bg-gray-200 text-gray-900 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="p-3 w-full bg-gray-200 text-gray-900 rounded-md"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Phone Number*"
                    className="p-3 w-full bg-gray-200 text-gray-900 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="p-3 w-full bg-gray-200 text-gray-900 rounded-md"
                  />
                </div>
                <textarea
                  placeholder="Your Requirement*"
                  className="p-3 w-full bg-gray-200 text-gray-900 rounded-md h-28"
                ></textarea>
                <button className="w-full bg-blue-800 py-3 text-white font-semibold rounded-md hover:bg-blue-600 transition">
                  Submit Your Requirement!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute left-0 right-0 xl:top-[750px] lg:top-[980px] md:block -translate-y-1/2 z-50">
        <div className="relative">
          <div className="absolute inset-0 h-1/2"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <dl className="rounded-lg bg-white shadow-lg grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
                {[
                  { value: "30+", text: "Data Sources, including APIs and databases" },
                  { value: "100+", text: "Analytic Tools and Machine Learning Models" },
                  { value: "10+", text: "Real-time Data Streams and Dashboards" },
                ].map(({ value, text }, index) => (
                  <div key={index} className="flex flex-col border border-gray-200 lg:p-6 xl:p-6 p-4  text-center">
                    <dd className="xl:text-5xl lg:text-5xl md:text-4xl font-bold tracking-tight text-blue-800">
                      {value}
                    </dd>
                    <dt className="mt-2 xl:text-lg lg:text:lg md:text-[14px] text-[10px] font-normal text-gray-500">{text}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* third div */}
      <div className="pt-40 mt-10 pb-20 bg-white">
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
      <WhyChooesSection />
      <TechnologyWeUseSection />
      <FAQ />
    </>
  );
};

export default AndroidAppServices;
