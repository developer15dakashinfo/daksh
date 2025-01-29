"use client";

import React, { useEffect, useState } from "react";
import { TbBrandWindowsFilled } from "react-icons/tb";
import "./Footer.scss";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { motion } from "motion/react";

const Footer = () => {
  const words = ["Fast", "Smart", "Diligent", "Focused"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMovingDown, setIsMovingDown] = useState(true);

  const boxStyle = {
    width: 20,
    height: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (isMovingDown) {
          if (prevIndex + 1 === words.length) {
            setIsMovingDown(false);
            return prevIndex - 1;
          }
          return prevIndex + 1;
        } else {
          if (prevIndex === 0) {
            setIsMovingDown(true);
            return prevIndex + 1;
          }
          return prevIndex - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isMovingDown, words.length]);

  const usefulLinks = [
    "About Us",
    "Blogs",
    "Careers",
    "Contact Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Refund Policy",
  ];
  const webDevelopmentLinks = [
    "E-Commerce Website Design",
    "WordPress Development Services",
    "Graphic Design Services",
  ];

  const digitalMarketing = [
    "Digital Marketing",
    "SEO Service",
    "SMO Service",
    "Email Marketing",
  ];

  const mobileMarketing = ["Voice Call", "IVR", "Short/Long Code"];
  const appDevelopmentLinks = [
    "Android App Development",
    "Hybrid App Development",
    "iOS App Development",
  ];

  const renderLinks = (links) =>
    links.map((link, index) => (
      <li key={index} className="group relative">
        <a href="#" className="relative inline-block">
          {link}
          <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-white scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"></span>
        </a>
      </li>
    ));

  return (
    <>
      <footer className="bg-[#0a0a0a] py-4 text-gray-400">
        <div className="container mx-auto my-14 flex items-start gap-28">
          <div className="flex justify-center items-center w-4/12">
            <div className="text-start relative pt-14">
              <div className="flex flex-row gap-24">
                <div className="flex flex-col relative">
                  <div
                    className="absolute transition-all duration-800 transform text-[65px] font-[700] text-white"
                    style={{
                      top: `${currentIndex * 70}px`,
                    }}
                  >
                    Be
                  </div>
                </div>

                <div className="flex flex-col items-start mt-3">
                  {words.map((word, index) => {
                    const colors = [
                      "text-purple-400",
                      "text-red-400",
                      "text-blue-400",
                      "text-green-400",
                      "text-yellow-400",
                    ];

                    const colorClass = colors[index % colors.length];

                    return (
                      <span
                        key={index}
                        className={`text-[65px] font-[700] transition-all duration-800 leading-[72px] ${
                          index === currentIndex ? colorClass : "text-gray-500"
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className=" w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <div className="px-4">
              <h2 className="inline-block text-[16px] font-[500] text-gray-300 pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                Useful Links
              </h2>
              <ul className="leading-7 text-[16px] text-gray-500">
                {renderLinks(usefulLinks)}
              </ul>
            </div>

            <div className="px-4">
              <h2 className="inline-block text-[16px] font-[500] text-gray-300 pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                Web Development
              </h2>
              <ul className="leading-7 text-[16px] text-gray-500">
                {renderLinks(webDevelopmentLinks)}
              </ul>
            </div>

            <div className="px-4">
              <h2 className="inline-block text-[16px] font-[500] text-gray-300 pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                Digital Marketing
              </h2>
              <ul className="leading-7 text-[16px] text-gray-500">
                {renderLinks(digitalMarketing)}
              </ul>
            </div>

            <div className="px-4">
              <h2 className="inline-block text-[16px] font-[500] text-gray-300 pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                App Development
              </h2>
              <ul className="leading-7 text-[16px] text-gray-500">
                {renderLinks(appDevelopmentLinks)}
              </ul>
            </div>

            <div className="px-4">
              <h2 className="inline-block text-[16px] font-[500] text-gray-300 pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                Mobile Marketing
              </h2>
              <ul className="leading-7 text-[16px] text-gray-500">
                {renderLinks(mobileMarketing)}
              </ul>
            </div>

            <div className="px-4 lg:col-span-2">
              <h2 className="inline-block text-[16px] font-[500]  text-gray-300 pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                Connect With Us
              </h2>
              <address className=" leading-relaxed">
                <p className="text-[16px] text-gray-500">
                  <span className="font-bold text-gray-300">Office: </span>
                  G-2, G.S. Apartment, Near Sunshine Honda Showroom, Jaipur,
                  Rajasthan.
                </p>
                <p className="text-[16px] text-gray-500">
                  <span className="font-bold text-gray-300">Call Us: </span>
                  +91-9983388855, +91-9214292142, +91-9610106106, +91-7377371234
                </p>
                <p className="text-[16px] text-gray-500">
                  <span className="font-bold text-gray-300">Email Us: </span>
                  info@dakshinfo.com, support@dakshinfo.com
                </p>
                <p className="text-[16px] text-gray-500">
                  <span className="font-bold text-gray-300">
                    Kolkata Office:{" "}
                  </span>
                  76, 69, Diamond Harbour Rd, Barisha Behala-Kolkata, West
                  Bengal 700008
                </p>
              </address>
              <div className="flex space-x-2">
                <div className="flex space-x-2 mt-4 justify-center">
                  <a
                    href="#"
                    className="relative inline-block rounded-full p-1 group"
                  >
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                      <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                        <FaTwitter className="text-xl text-white" />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="relative inline-block rounded-full p-1 group"
                  >
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                      <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                        <FaFacebookF className="text-xl text-white" />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="relative inline-block rounded-full p-1 group"
                  >
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                      <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                        <FaSkype className="text-xl text-white" />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="relative inline-block rounded-full p-1 group"
                  >
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                      <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                        <LuInstagram className="text-xl text-white" />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="relative inline-block rounded-full p-1 group"
                  >
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                      <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                        <FaLinkedinIn className="text-xl text-white" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 ">
          <hr className="h-[1px] bg-gray-500 border-0" />

          <div className="grid grid-cols-12 gap-4 items-center bg-black text-white">
            <div className="col-span-2 flex justify-start">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="mx-auto my-6 flex items-center justify-center"
              >
                <TbBrandWindowsFilled className="text-gray-500" />
              </motion.div>
            </div>

            <div className="col-span-8">
              <p className="text-[14px] text-center text-gray-500">
                © 2025 Daksh Infosoft Pvt. Ltd. | All Rights Reserved
              </p>
            </div>

            <div className="col-span-2" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
