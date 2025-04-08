"use client";
import SlidingButton from "@/app/SlidingButton/SlidingButton";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const ContactSectionname = () => {
  const iconColors = [
    "bg-blue-500",
    "bg-blue-700",
    "bg-sky-500",
    "bg-gradient-to-tr from-yellow-400 via-orange-500 via-pink-500 to-violet-600",
    "bg-blue-600",
  ];

  return (
    <>
    <div className="max-w-[1800px]  mx-auto ">
      <div
        className="relative w-full min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-6 lg:px-12 py-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww')",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
          {/* Contact Information */}
          <div className="text-white text-center md:text-left">
            <h4 className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent text-lg md:text-xl">
              LOREM IPSUM
            </h4>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
              Get in touch.
            </h1>
            <div className="mt-6 space-y-4 text-sm md:text-base">
              <p>Phone: +1 800 755 60 20</p>
              <p>Email: [email protected]</p>
              <p>254 Walt Whitman Road Brooklyn, NY 11219</p>
            </div>

          {/* Social Icons */}
<div className="flex flex-wrap justify-center sm:justify-center md:justify-start gap-4 mt-6">
  {[FaTwitter, FaFacebookF, FaSkype, LuInstagram, FaLinkedinIn].map(
    (Icon, idx) => (
      <a key={idx} href="#" className="rounded-full">
        <div
          className={`p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full ${iconColors[idx]} hover:scale-105 transition-transform`}
        >
          <Icon className="text-base sm:text-lg md:text-xl lg:text-2xl text-white" />
        </div>
      </a>
    )
  )}
</div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <form className="space-y-3 md:space-y-3">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
              />
              <input
                type="Phone No.*"
                placeholder="Phone No"
                className="w-full p-3 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
              />
              <select className="w-full p-3 md:p-4 border bg-white border-gray-300 rounded-lg text-xlfocus:outline-none focus:ring-1 focus:ring-blue-900 text-gray-400">
                <option value="" disabled selected className="text-gray-400 ">
                  Select Services
                </option>
                <hr></hr>
                <option value="general" className="text-black">
                  Web Development
                </option>
                <hr></hr>
                <option value="support" className="text-black">
                  Mobile App Development
                </option>
                <hr></hr>
                <option value="feedback" className="text-black">
                  Digital Marketing
                </option>
                <hr></hr>
                <option value="feedback" className="text-black">
                  Mobile Marketing
                </option>
              </select>

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 md:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-900"
              ></textarea>

              <div className="flex justify-center mt-8 mb-10">
                <SlidingButton
                  text="Contact Us"
                  bgColor="bg-black"
                  textcolor="text-white"
                  arrowBgColor="bg-black"
                  arrowTextColor="text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactSectionname;
