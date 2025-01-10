"use client"; // Ensure this is a client component
import { useEffect, useState } from "react";
import Home2 from "./Home/Home2";
import Home3 from "./Home/Home3";
import Home4 from "./Home/Home4";
import ContactUs from "./Home/ContactUs";
import Footer from "./Home/Footer/Footer";
import Image from "next/image";
import D from "./assets/d.svg";
import A from "./assets/A.svg";
import K from "./assets/k.svg";
import S from "./assets/s.svg";
import H from "./assets/h.svg";
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

  const images = [
   D,A,K,S,H
  ];

  return (
    <>
      <div
        className="relative h-[200vh] w-full"
        style={{ background: "white" }} // Gradient background
      >
        {/* Background Images */}
        <div
          className="fixed top-52 left-1/2 transform -translate-x-1/2 z-[-50] flex -space-x-6"
          
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Background image ${index + 1}`}
              className="w-[20rem] h-[20rem] object-cover rounded-xl "
              style={{
                transform: `translateX(${index < 1 ? -scrollY / 1.2 : scrollY / 1.2}px)
                            translateX(${index < 2 ? -scrollY / 2.2 : scrollY / 2.2}px)
                            translateX(${index < 3 ? -scrollY / 3.2 : scrollY / 3.2}px)
                            translateX(${index < 4 ? -scrollY / 4.2 : scrollY / 4.2}px)
                            translateX(${index < 5 ? -scrollY / 5.2 : scrollY / 5.2}px)`,
                opacity: Math.max(1 - scrollY / 900, 0),
                transition: "transform 0.5s ease-out, opacity 0.5s ease-out", // Smooth animation
              }}
         
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative mt-[100vh] ">
          <Home2 />
        </div>
        {/* <Home3 />
        <Home4 /> */}
        {/* <ContactUs /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
