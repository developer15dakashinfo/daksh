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
  const iconColors = [
    "bg-blue-500",
    "bg-blue-700",
    "bg-sky-500",
    "bg-gradient-to-tr from-yellow-400 via-orange-500 via-pink-500 to-violet-600",
    "bg-blue-600",
  ];

  const boxStyle = {
    width: 20,
    height: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

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

  const digitalMarketing = [
    "Digital Marketing",
    "SEO Service",
    "SMO Service",
    "Email Marketing",
    "PCC Services",
    "Social Media Marketing",
  ];

  const mobileMarketing = [
    "Bulk SMS",
    "IVR",
    "RCS",
    "Official Whatsapp API",
    "Voice Call",
    "Calling Agent",
  ];
  const appDevelopmentLinks = [
    "Android App Development",
    "Hybrid App Development",
    "iOS App Development",
  ];
  const webDevelopmentLinks = ["Website Designing", "Website Development"];

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
      <div className="max-w-[1600px]  mx-auto ">
        <footer className="bg-[#0a0a0a] py-4 text-gray-400">
          <div className="container mx-auto px-6 py-14 flex flex-col lg:flex-row gap-20">
            <div className="text-start relative pt-14">
              <div className="flex flex-row gap-20 sm:gap-20 md:gap-24 lg:gap-24 xl:gap-28">
                <div className="flex flex-col relative">
                  <div
                    className="absolute transition-all duration-800 transform text-5xl sm:text-5xl md:text-6xl lg:text-[65px] xl:text-[64px] font-bold text-white"
                    style={{
                      top: `${
                        currentIndex *
                        (windowWidth < 640 ? 75 : windowWidth < 1024 ? 40 : 78)
                      }px`,
                    }}
                  >
                    Be
                  </div>
                </div>

                <div className="flex flex-col items-start">
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
                        className={`text-6xl sm:text-6xl md:text-6xl lg:text-[65px] xl:text-[65px] font-bold transition-all duration-800 sm:mb-3 mb-2 md:mb-4 lg:mb-3 xl:mb-3 ${
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

            <div className="lg:w-8/12 md:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:pl-5 lg:pl-5">
              {[
                { title: "Useful Links", links: usefulLinks },
               
                { title: "Digital Marketing", links: digitalMarketing },
                { title: "App Development", links: appDevelopmentLinks },
                { title: "Web Development", links: webDevelopmentLinks },
                { title: "Mobile Marketing", links: mobileMarketing },
              ].map((section, idx) => (
                <div key={idx} className="px-4 lg:px-0 xl:px-0">
                  <h2 className="text-lg sm:text-[16px] font-semibold text-gray-300 relative pb-1 mb-2 inline-block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:block">
                    {section.title}
                  </h2>

                  <ul className="text-gray-400 text-sm leading-6">
                    {renderLinks(section.links)}
                  </ul>
                </div>
              ))}

              <div className="px-4 lg:col-span-3 md:col-span-3 sm:col-span-2">
                <h2 className="text-lg font-semibold text-gray-300 relative pb-1 mb-2 inline-block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:block">
                  Connect With Us
                </h2>
                <address className="text-gray-400 text-sm leading-6 space-y-2">
                  <p>
                    <span className="font-bold text-gray-300">Office:</span>{" "}
                    G-2, G.S. Apartment, Near Sunshine Honda Showroom, Jaipur,
                    Rajasthan.
                  </p>
                  <p>
                    <span className="font-bold text-gray-300">Call Us:</span>{" "}
                    +91-9983388855, +91-9214292142, +91-9610106106,
                    +91-7377371234
                  </p>
                  <p>
                    <span className="font-bold text-gray-300">Email Us:</span>{" "}
                    info@dakshinfo.com, support@dakshinfo.com
                  </p>
                  <p>
                    <span className="font-bold text-gray-300">
                      Kolkata Office:
                    </span>{" "}
                    76, 69, Diamond Harbour Rd, Barisha Behala-Kolkata, West
                    Bengal 700008
                  </p>
                </address>

                <div className="flex justify-center lg:justify-start mt-4 space-x-3">
                  {[
                    FaTwitter,
                    FaFacebookF,
                    FaSkype,
                    LuInstagram,
                    FaLinkedinIn,
                  ].map((Icon, idx) => (
                    <a key={idx} href="#" className="p-1 rounded-full">
                      <div className={`p-3 rounded-full ${iconColors[idx]}`}>
                        <Icon className="text-xl text-white" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-8">
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
      </div>
    </>
  );
};

export default Footer;
