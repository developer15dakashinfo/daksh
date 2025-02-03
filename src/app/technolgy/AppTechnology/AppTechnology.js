import React from "react";
import { BiMobileAlt } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";
import { MdOutlineHeadphones } from "react-icons/md";

const AndroidAppServices = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.prismic.io/turing/652ec8bafbd9a45bcec81a77_Android_app_e29f427ffa.webp?auto=format,compress')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative text-white py-40 px-10 lg:px-40 gap-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-blue-800 text-lg font-semibold">Technology</h3>
          <h1 className="text-5xl font-bold">
            Android App Development Services
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
                <MdOutlineHeadphones  className="text-2xl" />
              </span>
              <span className="text-lg">Long-term Support & Maintenance</span>
            </div>
            <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                <BiArrowToRight className="text-2xl" />
              </span>
              <span className="text-lg">Expertise in Kotlin and Java</span>
            </div>
            <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                <BiMobileAlt className="text-2xl" />
              </span>
              <span className="text-lg">Component-Based Architecture</span>
            </div>
            <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                <BiMobileAlt className="text-2xl" />
              </span>
              <span className="text-lg">Upgrade & Migration Services</span>
            </div>
            <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                <BiMobileAlt className="text-2xl" />
              </span>
              <span className="text-lg">Custom Widgets and Services</span>
            </div>
            <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                <BiMobileAlt className="text-2xl" />
              </span>
              <span className="text-lg">Performance Optimization</span>
            </div>
            <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 p-2 rounded-full text-white">
                <BiMobileAlt className="text-2xl" />
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
              Fill Out The Form And Our Experts Will Contact You Within 24hrs.
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
  );
};

export default AndroidAppServices;
