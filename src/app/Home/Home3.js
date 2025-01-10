"use client";

// import { useState, useEffect } from "react";
// function Home3() {
//   return (
//     <>

//       <section className="flex flex-col lg:h-svh justify-center items-center overflow-scroll-auto">
//       <div className=" text-center font-bold text-4xl">HOW WE FORMULATE SUCCESSFUL STRATEGIES</div>
//         <div className="flex flex-wrap mx-auto md:flex-nowrap  border-t pt-12">
//           <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
//             <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" style={{backgroundImage: 'url("https://www.yankodesign.com/images/design_news/2019/07/desk-setups-that-maximize-productivity-part-2/Desk-Setup_12.jpg")'}}>
//               <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
//                 <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
//                   <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one. </p>
//                 </div>
//               </div>
//             </article>
//           </div>
//           <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
//             <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" style={{backgroundImage: 'url("https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg")'}}>
//               <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
//                 <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
//                   <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two. </p>
//                 </div>
//               </div>
//             </article>
//           </div>
//           <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
//             <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" style={{backgroundImage: 'url("https://i.pinimg.com/564x/33/d6/54/33d654e8058fdf69e160dcbd2235cdac.jpg")'}}>
//               <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
//                 <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
//                   <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three. </p>
//                 </div>
//               </div>
//             </article>
//           </div>
//           <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
//             <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" style={{backgroundImage: 'url("https://i.pinimg.com/564x/39/b8/01/39b801afe355e623bcb3928b1c1b046d.jpg")'}}>
//               <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
//                 <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
//                   <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four. </p>
//                 </div>
//               </div>
//             </article>
//           </div>

//         </div> {/* Starts links to tutorial */}

//       </section>

//     </>
//   );
// }
// export default Home3;

// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import img1 from "../assets/Home3/image1.png";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const Home3 = () => {
//   useEffect(() => {
//     const panels = document.querySelectorAll(".panel");

//     panels.forEach((panel, index) => {
//       ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//         markers: false,
//       });
//     });
//   }, []);

//   return (
//     <div className="px-14 py-20">
//       <section className="panel flex items-center justify-center h-60">
//         <div className="text-center px-48">
//           <h1 className="text-5xl font-extrabold pb-5">WELCOME TO DAKSH INFOSOFT</h1>
//           <p>
//             Amongst best software companies, our offshore software development
//             services are geared to deliver results that you expect from an
//             Indian IT outsourcing company.
//           </p>
//         </div>
//       </section>

//       <section className="panel bg-yellow-200 flex items-center justify-center h-[600px] rounded-3xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
//           <div className="flex justify-center items-center">
//             <Image
//               src={img1}
//               className="w-[90%] md:w-[80%] h-auto rounded-lg"
//             />
//           </div>

//           <div className="flex flex-col justify-center pr-20">
//             <h2 className="text-3xl font-extrabold mb-4">
//               TELL YOUR DREAMS WE MAKE IT REAL
//             </h2>
//             <p className="mb-4">
//               Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
//               which states that the company is entitled to be a Private Limited
//               Company with a handful of industry professionals, having in-depth
//               experience of technology and organizational development, on the
//               premise of providing cutting-edge communication solutions to the
//               global business community. Today, Daksh Infosoft Pvt. Ltd. has
//               turned into a renowned integrated Infotech service provider
//               offering cost-effective and quality solutions in Web Design, Web
//               Development, eCommerce Website Development, Mobile App
//               Development, Graphic Design Services, Digital Marketing, Bulk SMS,
//               Voice Call, IVR Call Services, SEO Services, SMO Services, and PPC
//               Services.
//             </p>
//             <ul className="list-disc list-inside space-y-2">
//               <li className="font-semibold">Web Design & Development</li>
//               <li className="font-semibold">Mobile App Development</li>
//               <li className="font-semibold">Graphic Design Services</li>
//               <li className="font-semibold">SEO and Digital Marketing</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="panel bg-teal-400 flex items-center justify-center h-[600px] rounded-3xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">

//           <div className="flex flex-col justify-center pl-20">
//             <h2 className="text-3xl font-extrabold mb-4">
//             Sell more shows
//             </h2>
//             <p className="mb-4">
//               Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
//               which states that the company is entitled to be a Private Limited
//               Company with a handful of industry professionals, having in-depth
//               experience of technology and organizational development, on the
//               premise of providing cutting-edge communication solutions to the
//               global business community. Today, Daksh Infosoft Pvt. Ltd. has
//               turned into a renowned integrated Infotech service provider
//               offering cost-effective and quality solutions in Web Design, Web
//               Development, eCommerce Website Development, Mobile App
//               Development, Graphic Design Services, Digital Marketing, Bulk SMS,
//               Voice Call, IVR Call Services, SEO Services, SMO Services, and PPC
//               Services.
//             </p>
//             <ul className="list-disc list-inside space-y-2">
//               <li className="font-semibold">Web Design & Development</li>
//               <li className="font-semibold">Mobile App Development</li>
//               <li className="font-semibold">Graphic Design Services</li>
//               <li className="font-semibold">SEO and Digital Marketing</li>
//             </ul>
//           </div>
//           <div className="flex justify-center items-center">
//             <Image
//               src={img1}
//               className="w-[90%] md:w-[80%] h-auto rounded-lg"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="panel bg-blue-400 flex items-center justify-center h-[600px] rounded-3xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
//           <div className="flex justify-center items-center">
//             <Image
//               src={img1}
//               className="w-[90%] md:w-[80%] h-auto rounded-lg"
//             />
//           </div>

//           <div className="flex flex-col justify-center pr-20">
//             <h2 className="text-3xl font-extrabold mb-4">
//             Work faster
//             </h2>
//             <p className="mb-4">
//             We provide you with the Best Solutions. Creative, modern & simple Design Cutting Edge Services & Features Designing, Web Development, software development, Web application development and mobile application development. We deal to provide a highly scalable conceptual and funtional solutions to the companies around the world.
//             </p>
//             <ul className="list-disc list-inside space-y-2">
//               <li className="font-semibold">Web Design & Development</li>
//               <li className="font-semibold">Mobile App Development</li>
//               <li className="font-semibold">Graphic Design Services</li>
//               <li className="font-semibold">SEO and Digital Marketing</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home3;


import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/Home3/image1.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Home3 = () => {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel, index) => {
      gsap.to(panel, {
         
        duration: 0.3,
        scrollTrigger: {
          trigger: panel,
          start: "top 10%",
          end: "bottom top",
          scrub: 1.5,
          pin: true,
          markers: false,
          pinSpacing: false,
          
        },
      });
    });
  }, []);

  return (
    <div className="px-14  py-20">
      <section className="panel flex items-center justify-center h-60 bg-white ">
        <div className="text-center px-48">
          <h1 className="text-5xl font-extrabold pb-5">
            WELCOME TO DAKSH INFOSOFT
          </h1>
          <p>
            Amongst best software companies, our offshore software development
            services are geared to deliver results that you expect from an
            Indian IT outsourcing company.
          </p>
        </div>
      </section>

      <section className="panel bg-yellow-200 flex items-center justify-center h-[600px] rounded-3xl relative">
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
              which states that the company is entitled to be a Private Limited
              Company with a handful of industry professionals, having in-depth
              experience of technology and organizational development, on the
              premise of providing cutting-edge communication solutions to the
              global business community. Today, Daksh Infosoft Pvt. Ltd. has
              turned into a renowned integrated Infotech service provider
              offering cost-effective and quality solutions in Web Design, Web
              Development, eCommerce Website Development, Mobile App
              Development, Graphic Design Services, Digital Marketing, Bulk SMS,
              Voice Call, IVR Call Services, SEO Services, SMO Services, and PPC
              Services.
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

      <section className="panel bg-teal-400 flex items-center justify-center h-[600px] rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          <div className="flex flex-col justify-center pl-20">
            <h2 className="text-3xl font-extrabold mb-4">Sell more shows</h2>
            <p className="mb-4">
              Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
              which states that the company is entitled to be a Private Limited
              Company with a handful of industry professionals, having in-depth
              experience of technology and organizational development, on the
              premise of providing cutting-edge communication solutions to the
              global business community. Today, Daksh Infosoft Pvt. Ltd. has
              turned into a renowned integrated Infotech service provider
              offering cost-effective and quality solutions in Web Design, Web
              Development, eCommerce Website Development, Mobile App
              Development, Graphic Design Services, Digital Marketing, Bulk SMS,
              Voice Call, IVR Call Services, SEO Services, SMO Services, and PPC
              Services.
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

      <section className="panel bg-blue-400 flex items-center justify-center h-[600px] rounded-3xl">
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
              We provide you with the Best Solutions. Creative, modern & simple
              Design Cutting Edge Services & Features Designing, Web
              Development, software development, Web application development and
              mobile application development. We deal to provide a highly
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
  );
};

export default Home3;

