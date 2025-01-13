// "use client";

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
//       const scaleFactor = 0.8 + index * 0.1; 

//       gsap.to(panel, {
//         scaleX: scaleFactor, 
//         duration: 0.5,
//         scrollTrigger: {
//           trigger: panel,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1.5,
//           pin: true,
//           markers: false,
//           pinSpacing: false,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             const scale = 1 - 0.1 * progress;

//             gsap.to(panel, { scaleX: scale, duration: 0.1 });
//           },
          
//         },
//       });
//     });

//   }, []);

//   return (
//     <div className=" bg-black py-10 ">
      

//       <div className="px-16 mt-20">
//       <section className="panel flex items-center justify-center h-96 bg-black py-10 mb-10 ">
//         <div className="text-center px-52 py-20">
//           <h1 className="text-5xl text-white font-extrabold pb-5">
//             WELCOME TO DAKSH INFOSOFT
//           </h1>
//           <p className="text-white pb-">
//             Amongst best software companies, our offshore software development
//             services are geared to deliver results that you expect from an
//             Indian IT outsourcing company.
//           </p>
//         </div>
//       </section>

//         <section className="panel bg-yellow-200 flex items-center justify-center h-[600px] rounded-3xl mb-10 ">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
//             <div className="flex justify-center items-center">
//               <Image
//                 src={img1}
//                 alt="img1"
//                 className="w-[90%] md:w-[80%] h-auto rounded-lg"
//               />
//             </div>

//             <div className="flex flex-col justify-center pr-20">
//               <h2 className="text-3xl font-extrabold mb-4">
//                 TELL YOUR DREAMS WE MAKE IT REAL
//               </h2>
//               <p className="mb-4">
//                 Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
//                 which states that the company is entitled to be a Private
//                 Limited Company with a handful of industry professionals, having
//                 in-depth experience of technology and organizational
//                 development, on the premise of providing cutting-edge
//                 communication solutions to the global business community. Today,
//                 Daksh Infosoft Pvt. Ltd. has turned into a renowned integrated
//                 Infotech service provider offering cost-effective and quality
//                 solutions in Web Design, Web Development, eCommerce Website
//                 Development, Mobile App Development, Graphic Design Services,
//                 Digital Marketing, Bulk SMS, Voice Call, IVR Call Services, SEO
//                 Services, SMO Services, and PPC Services.
//               </p>
//               <ul className="list-disc list-inside space-y-2">
//                 <li className="font-semibold">Web Design & Development</li>
//                 <li className="font-semibold">Mobile App Development</li>
//                 <li className="font-semibold">Graphic Design Services</li>
//                 <li className="font-semibold">SEO and Digital Marketing</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <section className="panel bg-teal-400 flex items-center justify-center h-[600px] rounded-3xl mb-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
//             <div className="flex flex-col justify-center pl-20">
//               <h2 className="text-3xl font-extrabold mb-4">Sell more shows</h2>
//               <p className="mb-4">
//                 Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
//                 which states that the company is entitled to be a Private
//                 Limited Company with a handful of industry professionals, having
//                 in-depth experience of technology and organizational
//                 development, on the premise of providing cutting-edge
//                 communication solutions to the global business community. Today,
//                 Daksh Infosoft Pvt. Ltd. has turned into a renowned integrated
//                 Infotech service provider offering cost-effective and quality
//                 solutions in Web Design, Web Development, eCommerce Website
//                 Development, Mobile App Development, Graphic Design Services,
//                 Digital Marketing, Bulk SMS, Voice Call, IVR Call Services, SEO
//                 Services, SMO Services, and PPC Services.
//               </p>
//               <ul className="list-disc list-inside space-y-2">
//                 <li className="font-semibold">Web Design & Development</li>
//                 <li className="font-semibold">Mobile App Development</li>
//                 <li className="font-semibold">Graphic Design Services</li>
//                 <li className="font-semibold">SEO and Digital Marketing</li>
//               </ul>
//             </div>
//             <div className="flex justify-center items-center">
//               <Image
//                 src={img1}
//                 className="w-[90%] md:w-[80%] h-auto rounded-lg"
//                 alt="img2"
//               />
//             </div>
//           </div>
//         </section>

//         <section className="panel bg-blue-400 flex items-center justify-center h-[600px] rounded-3xl mb-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
//             <div className="flex justify-center items-center">
//               <Image
//                 src={img1}
//                 className="w-[90%] md:w-[80%] h-auto rounded-lg"
//                 alt="img3"
//               />
//             </div>

//             <div className="flex flex-col justify-center pr-20">
//               <h2 className="text-3xl font-extrabold mb-4">Work faster</h2>
//               <p className="mb-4">
//                 We provide you with the Best Solutions. Creative, modern &
//                 simple Design Cutting Edge Services & Features Designing, Web
//                 Development, software development, Web application development
//                 and mobile application development. We deal to provide a highly
//                 scalable conceptual and functional solutions to the companies
//                 around the world.
//               </p>
//               <ul className="list-disc list-inside space-y-2">
//                 <li className="font-semibold">Web Design & Development</li>
//                 <li className="font-semibold">Mobile App Development</li>
//                 <li className="font-semibold">Graphic Design Services</li>
//                 <li className="font-semibold">SEO and Digital Marketing</li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home3;

// import React from 'react';
// import img1 from "../assets/Home3/image1.png";

// const StackingCards = () => {
//   return (
//     <div className="bg-black text-white text-center font-sans">

//       <header className="h-60 grid place-items-center">
//         <div>
//         <h1 className="text-5xl text-white font-extrabold pb-5">
//              WELCOME TO DAKSH INFOSOFT           </h1>
//            <p className="text-white pb-">
//              Amongst best software companies, our offshore software development
//             services are geared to deliver results that you expect from an
//             Indian IT outsourcing company.
//           </p>
//         </div>
//       </header>

//       <main className="w-[90%] mx-auto relative">
//         <ul
//           id="cards"
//           className="grid grid-cols-1 gap-4 relative pb-[calc(var(--numcards)*em)]"
//         >
//           {Array.from({ length: 4 }).map((_, index) => (
//             <li
//               key={index}
//               className="sticky top-0"
//               style={{ paddingTop: `${index + 1}em` }}
//             >
//               <div className="shadow-xl bg-white text-[#0A0507] rounded-lg overflow-hidden grid grid-cols-2">
//                 <div className="p-6">
//                   <h2 className="text-4xl font-light">Card {index + 1}</h2>
//                   <p className="mt-4 text-base leading-relaxed">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   </p>
//                   <a
//                     href="#top"
//                     className="inline-block mt-4 bg-[#BC5724] text-white px-4 py-2 rounded-md"
//                   >
//                     Read more
//                   </a>
//                 </div>
//                 <figure className="overflow-hidden">
//                   <img
//                     src={`https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-${(index % 3) + 1}.jpg`}
//                     alt="Card"
//                     className="w-full h-full object-cover"
//                   />
//                 </figure>

//                        <section className="panel bg-yellow-200 flex items-center justify-center h-[600px] rounded-3xl mb-10 ">
//            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
//             <div className="flex justify-center items-center">
//               <Image
//                 src={img1}
//                 alt="img1"
//                 className="w-[90%] md:w-[80%] h-auto rounded-lg"
//               />
//             </div>

//             <div className="flex flex-col justify-center pr-20">
//               <h2 className="text-3xl font-extrabold mb-4">
//                 TELL YOUR DREAMS WE MAKE IT REAL
//               </h2>
//               <p className="mb-4">
//                 Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
//                 which states that the company is entitled to be a Private
//                 Limited Company with a handful of industry professionals, having
//                 in-depth experience of technology and organizational
//                 development, on the premise of providing cutting-edge
//                 communication solutions to the global business community. Today,
//                 Daksh Infosoft Pvt. Ltd. has turned into a renowned integrated
//                 Infotech service provider offering cost-effective and quality
//                 solutions in Web Design, Web Development, eCommerce Website
//                 Development, Mobile App Development, Graphic Design Services,
//                 Digital Marketing, Bulk SMS, Voice Call, IVR Call Services, SEO
//                 Services, SMO Services, and PPC Services.
//               </p>
//               <ul className="list-disc list-inside space-y-2">
//                 <li className="font-semibold">Web Design & Development</li>
//                 <li className="font-semibold">Mobile App Development</li>
//                 <li className="font-semibold">Graphic Design Services</li>
//                 <li className="font-semibold">SEO and Digital Marketing</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <section className="panel bg-teal-400 flex items-center justify-center h-[600px] rounded-3xl mb-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
//             <div className="flex flex-col justify-center pl-20">
//               <h2 className="text-3xl font-extrabold mb-4">Sell more shows</h2>
//               <p className="mb-4">
//                 Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act
//                 which states that the company is entitled to be a Private
//                 Limited Company with a handful of industry professionals, having
//                 in-depth experience of technology and organizational
//                 development, on the premise of providing cutting-edge
//                 communication solutions to the global business community. Today,
//                 Daksh Infosoft Pvt. Ltd. has turned into a renowned integrated
//                 Infotech service provider offering cost-effective and quality
//                 solutions in Web Design, Web Development, eCommerce Website
//                 Development, Mobile App Development, Graphic Design Services,
//                 Digital Marketing, Bulk SMS, Voice Call, IVR Call Services, SEO
//                 Services, SMO Services, and PPC Services.
//               </p>
//               <ul className="list-disc list-inside space-y-2">
//                 <li className="font-semibold">Web Design & Development</li>
//                 <li className="font-semibold">Mobile App Development</li>
//                 <li className="font-semibold">Graphic Design Services</li>
//                 <li className="font-semibold">SEO and Digital Marketing</li>
//               </ul>
//             </div>
//             <div className="flex justify-center items-center">
//               <Image
//                 src={img1}
//                 className="w-[90%] md:w-[80%] h-auto rounded-lg"
//                 alt="img2"
//               />
//             </div>
//           </div>
//         </section>

//         <section className="panel bg-blue-400 flex items-center justify-center h-[600px] rounded-3xl mb-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
//             <div className="flex justify-center items-center">
//               <Image
//                 src={img1}
//                 className="w-[90%] md:w-[80%] h-auto rounded-lg"
//                 alt="img3"
//               />
//             </div>

//             <div className="flex flex-col justify-center pr-20">
//               <h2 className="text-3xl font-extrabold mb-4">Work faster</h2>
//               <p className="mb-4">
//                 We provide you with the Best Solutions. Creative, modern &
//                 simple Design Cutting Edge Services & Features Designing, Web
//                 Development, software development, Web application development
//                 and mobile application development. We deal to provide a highly
//                 scalable conceptual and functional solutions to the companies
//                 around the world.
//               </p>
//               <ul className="list-disc list-inside space-y-2">
//                 <li className="font-semibold">Web Design & Development</li>
//                 <li className="font-semibold">Mobile App Development</li>
//                 <li className="font-semibold">Graphic Design Services</li>
//                 <li className="font-semibold">SEO and Digital Marketing</li>
//               </ul>
//             </div>
//           </div>
//         </section>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// };

// export default StackingCards;

// import React from 'react';

// const StackingCards = () => {
//   const cardsData = [
//     {
//       title: "Empower Your Business",
//       text: "Transform your business with innovative solutions tailored for success.",
//       image: "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
//     },
//     {
//       title: "Grow With Us",
//       text: "Achieve new heights in digital transformation with our expert services.",
//       image: "https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK",
//     },
//     {
//       title: "Creative Solutions",
//       text: "Experience cutting-edge design and development with a focus on quality.",
//       image: "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
//     },
//     {
//       title: "Future-Ready Technology",
//       text: "Stay ahead of the curve with advanced, scalable tech solutions.",
//       image: "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
//     },
//   ];

//   return (
//     <div className="bg-black text-white text-center font-sans">
//       <header className="h-60 grid place-items-center">
//         <div>
//           <h1 className="text-5xl text-white font-extrabold pb-5">
//             WELCOME TO DAKSH INFOSOFT
//           </h1>
//           <p className="text-white">
//             Amongst best software companies, our offshore software development
//             services are geared to deliver results that you expect from an
//             Indian IT outsourcing company.
//           </p>
//         </div>
//       </header>

//       <main className="w-[90%] mx-auto relative">
//         <ul
//           id="cards"
//           className="grid grid-cols-1 gap-4 relative pb-[calc(var(--numcards)*em)]"
//         >
//           {cardsData.map((card, index) => (
//             <li
//               key={index}
//               className="sticky top-0"
//               style={{ paddingTop: `${index + 1}em` }}
//             >
//               <div className="shadow-xl bg-white text-[#865468] rounded-lg overflow-hidden grid grid-cols-2">
//                 <div className="p-6">
//                   <h2 className="text-4xl font-light">{card.title}</h2>
//                   <p className="mt-4 text-base leading-relaxed">{card.text}</p>
//                   <a
//                     href="#top"
//                     className="inline-block mt-4 bg-[#BC5724] text-white px-4 py-2 rounded-md"
//                   >
//                     Read more
//                   </a>
//                 </div>
//                 <figure className="overflow-hidden">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </figure>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// };

// export default StackingCards;


const StackingCards = () => {
  const cardsData = [
    {
      title: "Empower Your Business",
      text: "Transform your business with innovative solutions tailored for success.",
      image: "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#ffec89", 
    },
    {
      title: "Grow With Us",
      text: "Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act which states that the company is entitled to be a Private Limited Company with a handfull of industry professionals, having in- depth experience of technology and organizational development, on the premise of providing cutting edge communication solutions to global business community.",
      image: "https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK",
      backgroundColor: "#46a0fa", 
    },
    {
      title: "Creative Solutions",
      text: "We provide you with the Best Solutions. Creative, modern & simple Design Cutting Edge Services & Features Designing, Web Development, software development, Web application development and mobile application development. We deal to provide a highly scalable conceptual and funtional solutions to the companies around the world.",
      image: "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#23d2a0", 
    },
    {
      title: "Future-Ready Technology",
      text: " Daksh Infosoft Pvt. Ltd. has turned up into a renowed integrated Infotech service provider offering you with a cost- effective and quality solutions in Web Design, Web Development, eCommerce Website Development, Mobile App Development, Graphic Design Services, Digital Marketing, Bulk SMS, Voice Call, IVR Call Services, SEO Services, SMO Services, PPC Services.",
      image: "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#b387ff", 
    },
  ];

  return (
    <div className="bg-black text-white text-center font-sans">
      <header className="h-60 grid place-items-center">
        <div>
          <h1 className="text-5xl text-white font-extrabold pb-5">
            WELCOME TO DAKSH INFOSOFT
          </h1>
          <p className="text-white">
            Amongst best software companies, our offshore software development
            services are geared to deliver results that you expect from an
            Indian IT outsourcing company.
          </p>
        </div>
      </header>

      <main className="w-[90%] mx-auto relative pb-10">
        <ul
          id="cards"
          className="grid grid-cols-1 gap-4 relative pb-[calc(var(--numcards)*em)]"
        >
          {cardsData.map((card, index) => (
            <li
              key={index}
              className="sticky top-0"
              style={{ paddingTop: `${index + 2}em`,
             }}
              
            >
              <div
                className="shadow-xl text-[#0A0507] rounded-lg overflow-hidden grid grid-cols-2"
                style={{ backgroundColor: card.backgroundColor }}
              >
                <div className="py-10 px-14">
                  <h2 className="text-4xl font-extrabold py-8">{card.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-left">{card.text}</p>
                  <a
                    href="#top"
                    className="inline-block mt-4 bg-white text-black px-4 py-2 rounded-md"
                  >
                    Read more
                  </a>
                </div>
                <div className="p-28">
                <figure className="overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover"
                  />
                </figure>
                </div>
                
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>


  );
};

export default StackingCards;



