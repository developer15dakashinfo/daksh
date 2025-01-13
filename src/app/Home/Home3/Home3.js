

// import React, { useEffect, useState } from "react";

// const StackingCards = () => {
//   const cardsData = [
//     {
//       title: "WELCOME TO DAKSH INFOSOFT",
//       text: "Amongst best software companies, our offshore software development services are geared to deliver results that you expect from an Indian IT outsourcing company.",
//       backgroundColor: "#fffff",
//     },
//     {
//       title: "Grow With Us",
//       text: "Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act which states that the company is entitled to be a Private Limited Company with a handfull of industry professionals, having in-depth experience of technology and organizational development.",
//       image:
//         "https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK",
//       backgroundColor: "#ffec89",
//     },
//     {
//       title: "Creative Solutions",
//       text: "We provide you with the Best Solutions. Creative, modern & simple Design Cutting Edge Services & Features Designing, Web Development, software development, Web application development and mobile application development.",
//       image:
//         "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
//       backgroundColor: "#46a0fa",
//     },
//     {
//       title: "Future-Ready Technology",
//       text: " Daksh Infosoft Pvt. Ltd. has turned up into a renowned integrated Infotech service provider offering you cost-effective and quality solutions in Web Design, Web Development, eCommerce Website Development, and more.",
//       image:
//         "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
//       backgroundColor: "#23d2a0",
//     },
//   ];

//   const [visibleCard, setVisibleCard] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleCard(Number(entry.target.dataset.index));
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const cardElements = document.querySelectorAll(".card");
//     cardElements.forEach((el) => observer.observe(el));

//     return () => {
//       cardElements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <div className="bg-black text-white text-center font-sans">
//       <main className="w-[90%] mx-20 my-16 pb-5 relative">
//         <ul className="grid grid-cols-1 gap-4 relative">
//           {cardsData.map((card, index) => (
//             <li
//               key={index}
//               data-index={index}
//               className={`card sticky top-0 transition-transform duration-800 ease-in-out ${
//                 visibleCard === index ? "scale-100" : "scale-95 "
//               }`}
//               style={{ paddingTop: `${index + 2}em` }}
//             >
//               <div
//                 className={`shadow-xl text-[#0A0507] rounded-lg overflow-hidden ${
//                   index === 0 ? "grid grid-cols-1" : "grid grid-cols-2"
//                 }`}
//                 style={{ backgroundColor: card.backgroundColor }}
//               >
//                 {index === 0 ? (
//                   <div className="py-10 px-14 text-center">
//                     <h1 className="text-5xl text-white font-extrabold pb-5">
//                       {card.title}
//                     </h1>
//                     <p className="text-white">{card.text}</p>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="py-10 px-14">
//                       <h2 className="text-4xl font-extrabold py-8">{card.title}</h2>
//                       <p className="mt-4 text-lg leading-relaxed text-left">
//                         {card.text}
//                       </p>
//                       <a
//                         href="#top"
//                         className="inline-block mt-4 bg-white text-black px-4 py-2 rounded-md"
//                       >
//                         Read more
//                       </a>
//                     </div>
//                     <div className="p-28">
//                       <figure className="overflow-hidden rounded-lg">
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="object-cover"
//                         />
//                       </figure>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// };

// export default StackingCards;


// import React, { useEffect, useState } from "react";

// const StackingCards = () => {
//   const cardsData = [
//     {
//       title: "WELCOME TO DAKSH INFOSOFT",
//       text: "Amongst best software companies, our offshore software development services are geared to deliver results that you expect from an Indian IT outsourcing company.",
//       backgroundColor: "#fffff",
//     },
//     {
//       title: "Grow With Us",
//       text: "Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act which states that the company is entitled to be a Private Limited Company with a handfull of industry professionals, having in-depth experience of technology and organizational development.",
//       image:
//         "https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK",
//       backgroundColor: "#ffec89",
//     },
//     {
//       title: "Creative Solutions",
//       text: "We provide you with the Best Solutions. Creative, modern & simple Design Cutting Edge Services & Features Designing, Web Development, software development, Web application development and mobile application development.",
//       image:
//         "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
//       backgroundColor: "#46a0fa",
//     },
//     {
//       title: "Future-Ready Technology",
//       text: " Daksh Infosoft Pvt. Ltd. has turned up into a renowned integrated Infotech service provider offering you cost-effective and quality solutions in Web Design, Web Development, eCommerce Website Development, and more.",
//       image:
//         "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
//       backgroundColor: "#23d2a0",
//     },
//   ];

//   const [visibleCard, setVisibleCard] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleCard(Number(entry.target.dataset.index));
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const cardElements = document.querySelectorAll(".card");
//     cardElements.forEach((el) => observer.observe(el));

//     return () => {
//       cardElements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <div className="bg-black text-white text-center font-sans">
//       <main className="w-[90%] mx-auto my-16 pb-20 relative">
//         <ul className="relative">
//           {cardsData.map((card, index) => (
//             <li
//               key={index}
//               data-index={index}
//               className={`card sticky top-3 transition-transform duration-700 ease-in-out transform ${
//                 visibleCard === index
//                   ? "translate-y-0 z-50 scale-100"
//                   : `translate-y-[${index * 60}px] z-${60 - index} scale-95`
//               }`}
              
//               style={{
//                 paddingTop: `${index + 2}em`,
                
//               }}
//             >
//               <div
//                 className={`shadow-xl text-[#0A0507] rounded-lg overflow-hidden ${
//                   index === 0 ? "grid grid-cols-1 h-60" : "grid grid-cols-2 h-[550px]"
                  
//                 }`}
//                 style={{ backgroundColor: card.backgroundColor, }}
//               >
//                 {index === 0 ? (
//                   <div className="py-10 px-14 text-center">
//                     <h1 className="text-5xl text-white font-extrabold pb-5">
//                       {card.title}
//                     </h1>
//                     <p className="text-white">{card.text}</p>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="py-10 px-14">
//                       <h2 className="text-4xl font-extrabold py-8">{card.title}</h2>
//                       <p className="mt-4 text-lg leading-relaxed text-left">
//                         {card.text}
//                       </p>
//                       <a
//                         href="#top"
//                         className="inline-block mt-4 bg-white text-black px-4 py-2 rounded-md"
//                       >
//                         Read more
//                       </a>
//                     </div>
//                     <div className="p-28">
//                       <figure className="overflow-hidden rounded-lg">
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="object-cover"
//                         />
//                       </figure>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// };

// export default StackingCards;


import React, { useEffect, useState } from "react";

const StackingCards = () => {
  const cardsData = [
    {
      title: "WELCOME TO DAKSH INFOSOFT",
      text: "Amongst best software companies, our offshore software development services are geared to deliver results that you expect from an Indian IT outsourcing company.",
      backgroundColor: "#fffff",
    },
    {
      title: "Grow With Us",
      text: "Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act which states that the company is entitled to be a Private Limited Company with a handfull of industry professionals, having in-depth experience of technology and organizational development.",
      image:
        "https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK",
      backgroundColor: "#ffec89",
    },
    {
      title: "Creative Solutions",
      text: "We provide you with the Best Solutions. Creative, modern & simple Design Cutting Edge Services & Features Designing, Web Development, software development, Web application development and mobile application development.",
      image:
        "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#46a0fa",
    },
    {
      title: "Future-Ready Technology",
      text: " Daksh Infosoft Pvt. Ltd. has turned up into a renowned integrated Infotech service provider offering you cost-effective and quality solutions in Web Design, Web Development, eCommerce Website Development, and more.",
      image:
        "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#23d2a0",
    },
  ];

  const [visibleCard, setVisibleCard] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCard(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((el) => observer.observe(el));

    return () => {
      cardElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-black text-white text-center font-sans">
      <main className="w-[88%] mx-auto my-16 pb-20 relative">
        <ul className="relative">
          {cardsData.map((card, index) => (
            <li
              key={index}
              data-index={index}
              className={`card sticky top-3 transition-transform duration-1000 ease-in-out transform ${
                visibleCard === index
                  ? "translate-y-0 z-50 scale-100"
                  : `translate-y-[${index * 60}px] z-${60 - index} scale-90`
              }`}
              style={{
                paddingTop: `${index + 2}em`,
              }}
            >
              <div
                className={`shadow-xl text-[#0A0507] rounded-lg overflow-hidden grid ${
                  index === 0 ? "grid-cols-1" : "grid-cols-2"
                }`}
                style={{
                  backgroundColor: card.backgroundColor,
                  height: index === 0 ? "400px" : "600px",

                }}
              >
                {index === 0 ? (
                  <div className="pt-20 px-14 text-center items-center">
                    <h1 className="text-6xl text-white font-extrabold pb-5">
                      {card.title}
                    </h1>
                    <p className="text-white">{card.text}</p>
                  </div>
                ) : (
                  <>
                    <div className="py-10 px-14">
                      <h2 className="text-4xl font-extrabold py-8">{card.title}</h2>
                      <p className="mt-4 text-lg leading-relaxed text-left">
                        {card.text}
                      </p>
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
                          className="object-cover h-full w-full"
                        />
                      </figure>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;
