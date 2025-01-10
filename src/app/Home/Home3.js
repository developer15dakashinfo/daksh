"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/Home3/image1.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Home3 = () => {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");

  

    // panels.forEach((panel, index) => {
    //   const scaleFactor = 0.8 + index * 0.1; 

    //   gsap.to(panel, {
    //     duration: 0.3,
    //     scaleX: scaleFactor, 
    //     transformOrigin: "center", 
    //     scrollTrigger: {
    //       trigger: panel,
    //       start: "top center",
    //       end: "bottom center",
    //       scrub: 1.5,
    //       markers: false,
    //       trigger: panel,
    //        pinSpacing: false,
    //     },
    //   });
    // });

    panels.forEach((panel, index) => {
      const scaleFactor = 0.8 + index * 0.1; 

      gsap.to(panel, {
        scaleX: scaleFactor, 
        duration: 0.5,
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          pin: true,
          markers: false,
          pinSpacing: false,
          onUpdate: (self) => {
            const progress = self.progress;

            const scale = 1 - 0.1 * progress;

            gsap.to(panel, { scaleX: scale, duration: 0.1 });
          },
          
        },
      });
    });

  }, []);

  return (
    <div className=" bg-black py-10 ">
      

      <div className="px-16 mt-20">
      <section className="panel flex items-center justify-center h-96 bg-black py-10 mb-10 ">
        <div className="text-center px-52 py-20">
          <h1 className="text-5xl text-white font-extrabold pb-5">
            WELCOME TO DAKSH INFOSOFT
          </h1>
          <p className="text-white pb-">
            Amongst best software companies, our offshore software development
            services are geared to deliver results that you expect from an
            Indian IT outsourcing company.
          </p>
        </div>
      </section>

        <section className="panel bg-yellow-200 flex items-center justify-center h-[600px] rounded-3xl mb-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
            <div className="flex justify-center items-center">
              <Image
                src={img1}
                alt="img1"
                className="w-[90%] md:w-[80%] h-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center pr-20">
              <h2 className="text-3xl font-extrabold mb-4">
                TELL YOUR DREAMS WE MAKE IT REAL
              </h2>
              <p className="mb-4">
                Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
                which states that the company is entitled to be a Private
                Limited Company with a handful of industry professionals, having
                in-depth experience of technology and organizational
                development, on the premise of providing cutting-edge
                communication solutions to the global business community. Today,
                Daksh Infosoft Pvt. Ltd. has turned into a renowned integrated
                Infotech service provider offering cost-effective and quality
                solutions in Web Design, Web Development, eCommerce Website
                Development, Mobile App Development, Graphic Design Services,
                Digital Marketing, Bulk SMS, Voice Call, IVR Call Services, SEO
                Services, SMO Services, and PPC Services.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="font-semibold">Web Design & Development</li>
                <li className="font-semibold">Mobile App Development</li>
                <li className="font-semibold">Graphic Design Services</li>
                <li className="font-semibold">SEO and Digital Marketing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="panel bg-teal-400 flex items-center justify-center h-[600px] rounded-3xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
            <div className="flex flex-col justify-center pl-20">
              <h2 className="text-3xl font-extrabold mb-4">Sell more shows</h2>
              <p className="mb-4">
                Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
                which states that the company is entitled to be a Private
                Limited Company with a handful of industry professionals, having
                in-depth experience of technology and organizational
                development, on the premise of providing cutting-edge
                communication solutions to the global business community. Today,
                Daksh Infosoft Pvt. Ltd. has turned into a renowned integrated
                Infotech service provider offering cost-effective and quality
                solutions in Web Design, Web Development, eCommerce Website
                Development, Mobile App Development, Graphic Design Services,
                Digital Marketing, Bulk SMS, Voice Call, IVR Call Services, SEO
                Services, SMO Services, and PPC Services.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="font-semibold">Web Design & Development</li>
                <li className="font-semibold">Mobile App Development</li>
                <li className="font-semibold">Graphic Design Services</li>
                <li className="font-semibold">SEO and Digital Marketing</li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={img1}
                className="w-[90%] md:w-[80%] h-auto rounded-lg"
                alt="img2"
              />
            </div>
          </div>
        </section>

        <section className="panel bg-blue-400 flex items-center justify-center h-[600px] rounded-3xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
            <div className="flex justify-center items-center">
              <Image
                src={img1}
                className="w-[90%] md:w-[80%] h-auto rounded-lg"
                alt="img3"
              />
            </div>

            <div className="flex flex-col justify-center pr-20">
              <h2 className="text-3xl font-extrabold mb-4">Work faster</h2>
              <p className="mb-4">
                We provide you with the Best Solutions. Creative, modern &
                simple Design Cutting Edge Services & Features Designing, Web
                Development, software development, Web application development
                and mobile application development. We deal to provide a highly
                scalable conceptual and functional solutions to the companies
                around the world.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="font-semibold">Web Design & Development</li>
                <li className="font-semibold">Mobile App Development</li>
                <li className="font-semibold">Graphic Design Services</li>
                <li className="font-semibold">SEO and Digital Marketing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home3;
