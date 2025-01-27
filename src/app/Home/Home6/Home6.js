import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./Home6.css";
import { VerticalTabsWithIcon } from "./VerticalTabsWithIcon";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Home6 = () => {
  useEffect(() => {
    const flightPath = {
      path: [
        { x: 100, y: 0 },
        { x: 150, y: 20 },
        { x: 300, y: 50 },
        { x: 500, y: 100 },
        { x: 750, y: -200 },
        { x: 0, y: -50 },
        { x: 600, y: -20 },
        { x: window.innerWidth, y: -300 },
      ],
      curviness: 1.25,
      autoRotate: true,
    };

    const flightPath2 = {
      path: [
        { x: -600, y: -20 },
        { x: -750, y: -200 },
        { x: -200, y: -50 },
        { x: -600, y: -20 },
        { x: -900, y: 50 },
        { x: -1200, y: -100 },
        { x: -window.innerWidth - 200, y: -300 },
      ],
      curviness: 1.25,
      autoRotate: true,
    };

    // Plane 1 animation
    gsap.to(".plane-wrapper", {
      scrollTrigger: {
        trigger: ".animation",
        start: "top top",
        end: "bottom+=1000 top",
        scrub: 1,
        pin: ".animation",
      },
      motionPath: flightPath.path,
      duration: 3,
      ease: "power1.inOut",
    });

    // Plane 2 animation
    gsap.to(".plane-wrapper-2", {
      scrollTrigger: {
        trigger: ".animation-pun",
        start: "top top",
        end: "bottom+=1000 top",
        scrub: 1,
        pin: ".animation-pun",
      },
      motionPath: flightPath2.path,
      duration: 3,
      ease: "power1.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mt-40">
      
      <section className="animation">
        <div className="plane-wrapper">
          <img
            className="paper-plane"
            src="https://www.yudiz.com/codepen/paper-plane/paper.png"
            alt="paper-plane"
          />
        </div>
        <div className="content-one">
        <section>
        <div className="bg- text-white py-20">
       <div className="container mx-auto flex flex-col items-center mt-10 justify-center px-8">
       <h1 className="text-xs md:text-xl font-semibold py-2  text-yellow-300 tracking-loose">We are the Experts </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">We Go Beyond the Basics
              </h2>
       </div>
          <div className="container mx-auto flex flex-col md:flex-row items-center mb-12 md:my-10">
            
            <div className="flex flex-col w-full lg:w-2/3 justify-center text-center p-8">
             
        
             <VerticalTabsWithIcon/>
              <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 mt-4 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Let's Connect</a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap gap-10 content-center">
                <div>
                  <img className="inline-block mt-28 hidden xl:block w-60 h-80 rounded-full" src="https://www.dotsquares.com/img/service-images/expert3.jpg" /></div>
                <div>
                  <img className="inline-block mt-24 md:mt-0 p-8 md:p-0  w-60 h-96 rounded-full" src="https://www.dotsquares.com/img/service-images/expert4.jpg" /></div>
                  
                </div>
            </div>
          </div>
        </div>
      </section>
        </div>
       
      </section>
  
     
    </div>
  );
};

export default Home6;
