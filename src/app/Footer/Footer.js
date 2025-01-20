"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

  const words = ["Fast", "Smart", "Diligent", "Focused"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMovingDown, setIsMovingDown] = useState(true);

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
    }, 2000);

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
      <footer className="bg-black py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            

<div className="flex justify-center items-center py-5">
      <div className="text-center relative">
        <div className="flex flex-row gap-10">
          
          <div className="flex flex-col relative">
            <div
              className="absolute transition-all duration-800 transform text-6xl font-bold text-white"
              style={{
                top: `${currentIndex * 60}px`, 
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
                  className={`text-6xl font-bold transition-all duration-800 ${
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

           <div className="grid grid-cols-4 border border-white">
           <div className="px-4 my-4">
              <h2 className="inline-block text-[14px] font-semibold text-white pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                Useful Links
              </h2>
              <ul className="leading-7 text-[14px]">
                {renderLinks(usefulLinks)}
              </ul>
            </div>

          
              <div className="px-4 my-4">
                <h2 className="inline-block text-[14px] font-semibold text-white pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                  Web Development
                </h2>
                <ul className="leading-7 text-[14px]">
                  {renderLinks(webDevelopmentLinks)}
                </ul>
              </div>

              <div className="px-4 my-3">
                <h2 className="inline-block text-[14px] font-semibold text-white pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                  Digital Marketing
                </h2>
                <ul className="leading-7 text-[14px]">
                  {renderLinks(digitalMarketing)}
                </ul>
              </div>
          

         
              <div className="px-4 my-4">
                <h2 className="inline-block text-[14px] font-semibold text-white pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                  App Development
                </h2>
                <ul className="leading-7 text-[14px]">
                  {renderLinks(appDevelopmentLinks)}
                </ul>
              </div>

              <div className="px-4 my-4">
                <h2 className="inline-block text-[14px] font-semibold text-white pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                  Mobile Marketing
                </h2>
                <ul className="leading-7 text-[14px]">
                  {renderLinks(mobileMarketing)}
                </ul>
              </div>
          

            <div className="px-4 my-4 ">
              <h2 className="inline-block text-[14px] font-semibold text-white pb-1 mb-2 relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-sky-400 before:to-emerald-600 before:rounded-md">
                Connect With Us
              </h2>
              <address>
                <p className="text-[14px]">
                  <span className="font-bold text-white">Office: </span>
                  G-2, G.S. Apartment, Near Sunshine Honda Showroom, Jaipur,
                  Rajasthan.
                </p>
                <p className="text-[14px]">
                  <span className="font-bold text-white">Call Us: </span>
                  +91-9983388855, +91-9214292142, +91-9610106106, +91-7377371234
                </p>
                <p className="text-[14px]">
                  <span className="font-bold text-white">Email Us: </span>
                  info@dakshinfo.com, support@dakshinfo.com
                </p>
                <p className="text-[14px]">
                  <span className="font-bold text-white">Kolkata Office: </span>
                  76, 69, Diamond Harbour Rd, Barisha Behala-Kolkata, West
                  Bengal 700008
                </p>
              </address>
            </div>
           </div>
          </div>
        </div>
        <div className="px-8">
          <hr className=" h-[1px] text-gray-500  " />
          <p className="text-[14px] text-center pt-3">
            © 2025 Daksh Infosoft Pvt. Ltd. | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
