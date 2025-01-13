import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./Home6.css";

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
        <div className="bg-black text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl  text-yellow-300 tracking-loose">Get started </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Daksh</span> : The Timeless Infinity
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
                register now to showcase your talent and win exciting prizes.</p>
              <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Let's Connect</a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div>
                  <img className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
                <div>
                  <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
                <div>
                  <img className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
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
