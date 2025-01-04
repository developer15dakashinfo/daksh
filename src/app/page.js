"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import Home2 from "./Home/Home2";
import Home3 from "./Home/Home3";
import Home4 from "./Home/Home4";
import Home5 from "./Home/Home5";
import Navbar from "./Home/Navbar";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const BannerButton = [
    { title: "Software Development", icon: ""},
    { title: "Apps Development", icon: ""},
    { title: "Web Development",  icon: ""},
    {
      title: "E-Commerce Services",
      icon: ""},
    { title: "Email Marketing",  icon: ""},
    { title: "Digital Marketing ", icon: ""},
    { title: "Mobile Marketing",  icon: ""},
    { title: "SEO",   icon: ""},
  ];

  return (
  <>
  <Navbar/>
  <div className="relative h-[200vh] w-full ">
  
    {/* Background Letters */}
    <div className="fixed top-52 left-1/2  transform -translate-x-1/2 z-[-50] flex space-x-8">
      {["Daksh","InfoSoft"].map((letter, index) => (
        <div
          key={index}
          className="text-[10rem] font-bold text-green-900 transition-transform duration-100"
          style={{
            transform: `translateX(${index < 1 ? -scrollY / 1: scrollY / 1}px)`,
             opacity: Math.max(1 - scrollY / 900, 0),
          }}
        >
          {letter}
        </div>
      ))}
    </div>

    {/* Centered Text */}
    <div
      className="fixed top-1/2 bg-gray-200  bg-white/40 mt-10   p-4 rounded-full opacity-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-800 transition-opacity duration-200"
      style={{
        opacity: Math.max(2 - scrollY / 200, 0),
        transform: `translate(-50%, calc(-50% - ${scrollY / 3}px))`,
      }}
    >
             <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 ">
            {BannerButton.map((item, index) => (
              <div
                key={index}
                className="group flex items-center justify-center border border-green-800 text-green-800 rounded-full py-[12px] px-4 sm:px-6 lg:px-8 hover:bg-white hover:scale-105 transition duration-200 ease-in-out"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg sm:text-xl group-hover:text-black">
                    {item.icon}
                  </span>
                  <span className="text-sm sm:text-base lg:text-[15px] font-medium group-hover:text-black">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
    </div>

    {/* Content */}
    <div className="relative mt-[100vh] ">
     <Home2 />
    
    </div>
     <Home3/>
     <Home4/>
     
  </div>
  </>
  );
}
