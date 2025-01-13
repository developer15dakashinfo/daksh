"use client"; // Ensure this is a client component
import { useEffect, useState } from "react";
import Home2 from "./Home/Home2/Home2";
import Home3 from "./Home/Home3/Home3";
import Home4 from "./Home/Home4/Home4";

import Footer from "./Footer/Footer";
import Image from "next/image";
import D from "./assets/d-word.svg";
import A from "./assets/A-word.svg";
import K from "./assets/k-word.svg";
import S from "./assets/s-word.svg";
import H from "./assets/h-word.svg";

import Navbar from "./Navbar/Navbar";
import Home5 from "./Home/Home5/Home5";
import Home6 from "./Home/Home6/Home6";
import { Home1 } from "./Home/Home1/Home1";
import Logo from "./logo/logo";

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
   <Navbar/>
   
      <div
        className="relative h-[200vh] w-full"
        style={{ background: "black" }} // Gradient background
      >
        {/* Background Images */}
        {/* <div
          className="fixed top-52 left-1/2 transform -translate-x-1/2 z-[-50] flex -space-x-6"
          
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Background image ${index + 1}`}
              className="w-[10rem] h-[10rem] object-cover "
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
        </div> */}
<Home1/>
      
    
          <Home2 />
       
        <Home3/>
        {/* <Home4/> */}
        <Home5/>
        <Home6/>
   
        <Footer/>
      </div>
   
    

  </>
  );
}
