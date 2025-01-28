import Button from "@/app/Button/Button";
import ReadMoreButton from "@/app/readmore/ReadMoreButton";
import SlidingButton from "@/app/SlidingButton/SlidingButton";
import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const StackingCards = () => {
  const cardsData = [
    {
      title: "WELCOME TO DAKSH INFOSOFT",
      title2:"SERVICES WE PROVIDE",
      text: "Our offshore IT consulting services along with the AI-powered core helps top companies stay competitive, win new markets and increase shareholder value. Choose from a wide range of custom software development services.",

      backgroundColor: "#fffff",
    },
    {
      title: "App Development",
      text: "App development is the process of creating software applications that run on mobile devices or the web. Technologies involved: Flutter, React Native, Kotlin, Swift, and more.",
      descreption:
        "Daksh Infosoft Pvt. Ltd. is a leading software development company, incorporated under the Companies Act. With a team of experienced industry professionals, we specialize in delivering cutting-edge app development solutions. Our expertise ensures seamless functionality, intuitive user experience, and robust performance for every app we create.",
      list1: "Cross-Platform Development",
      list2: "AI and ML Integration",
      list3: "Cloud Computing",
      list4: "Enhanced UI/UX",
      t1: "App Development",
      t2: "Define the app's purpose and features.",
      image:
        "https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg",
      backgroundColor: "#ffec89",
    },
    {
      title: "Website Development",
      text: "Website development involves building, designing, and maintaining websites to ensure optimal functionality, user experience, and performance.Technologies involved: React, Next.js, Tailwind CSS, Laravel, and MongoDB.",
      descreption:
        "Daksh Infosoft Pvt. Ltd. is a top-tier software development company, established under the Companies Act. With a team of skilled professionals, we specialize in providing innovative website development solutions. Our expertise ensures that every website we build offers exceptional functionality, an intuitive user experience, and outstanding performance, helping businesses establish a strong online presence.",
      list1: "Expertise in building modern, responsive websites with React and Next.js.",
      list2: "Proficiency in designing visually appealing interfaces using Figma and Illustrator.",
      list3: "Experience with the MERN stack to create full-stack applications.",
      t1: "Website Development",
      t2: "Use AI for chatbots, content personalization, and analytics.",
      image:
        "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
      backgroundColor: "#46a0fa",
    },
    
    {
      title: "Digital Marketing ",
      text: "Website development involves building, designing, and maintaining websites to ensure optimal functionality, user experience, and performance.Technologies involved: React, Next.js, Tailwind CSS, Laravel, and MongoDB.",
      descreption:
        "Daksh Infosoft Pvt. Ltd. is a top-tier software development company, established under the Companies Act. With a team of skilled professionals, we specialize in providing innovative website development solutions. Our expertise ensures that every website we build offers exceptional functionality, an intuitive user experience, and outstanding performance, helping businesses establish a strong online presence.",
      list1: "Expertise in building modern, responsive websites with React and Next.js.",
      list2: "Proficiency in designing visually appealing interfaces using Figma and Illustrator.",
      list3: "Experience with the MERN stack to create full-stack applications.",
      t1: "Website Development",
      t2: "Use AI for chatbots, content personalization, and analytics.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0H0pu3u9ARLWgmPpLTjK_3Rf5OJZSYy4ezA&s",
      backgroundColor: "#23d2a0",
    },
    
    {
      title: "Official Whatsapp API",
      text: "Website development involves building, designing, and maintaining websites to ensure optimal functionality, user experience, and performance.Technologies involved: React, Next.js, Tailwind CSS, Laravel, and MongoDB.",
      descreption:
        "Daksh Infosoft Pvt. Ltd. is a top-tier software development company, established under the Companies Act. With a team of skilled professionals, we specialize in providing innovative website development solutions. Our expertise ensures that every website we build offers exceptional functionality, an intuitive user experience, and outstanding performance, helping businesses establish a strong online presence.",
      list1: "Expertise in building modern, responsive websites with React and Next.js.",
      list2: "Proficiency in designing visually appealing interfaces using Figma and Illustrator.",
      list3: "Experience with the MERN stack to create full-stack applications.",
      t1: "Website Development",
      t2: "Use AI for chatbots, content personalization, and analytics.",
      image:
        "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#b387ff",
    },
    
    {
      title: "Interactive Voice Response (IVR)",
      text: "Website development involves building, designing, and maintaining websites to ensure optimal functionality, user experience, and performance.Technologies involved: React, Next.js, Tailwind CSS, Laravel, and MongoDB.",
      descreption:
        "Daksh Infosoft Pvt. Ltd. is a top-tier software development company, established under the Companies Act. With a team of skilled professionals, we specialize in providing innovative website development solutions. Our expertise ensures that every website we build offers exceptional functionality, an intuitive user experience, and outstanding performance, helping businesses establish a strong online presence.",
      list1: "Expertise in building modern, responsive websites with React and Next.js.",
      list2: "Proficiency in designing visually appealing interfaces using Figma and Illustrator.",
      list3: "Experience with the MERN stack to create full-stack applications.",
      t1: "Website Development",
      t2: "Use AI for chatbots, content personalization, and analytics.",
      image:
        "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#F5F5DC",
    },
    
    {
      title: "Rich Communication Services (RCS)",
      text: "Website development involves building, designing, and maintaining websites to ensure optimal functionality, user experience, and performance.Technologies involved: React, Next.js, Tailwind CSS, Laravel, and MongoDB.",
      descreption:
        "Daksh Infosoft Pvt. Ltd. is a top-tier software development company, established under the Companies Act. With a team of skilled professionals, we specialize in providing innovative website development solutions. Our expertise ensures that every website we build offers exceptional functionality, an intuitive user experience, and outstanding performance, helping businesses establish a strong online presence.",
      list1: "Expertise in building modern, responsive websites with React and Next.js.",
      list2: "Proficiency in designing visually appealing interfaces using Figma and Illustrator.",
      list3: "Experience with the MERN stack to create full-stack applications.",
      t1: "Website Development",
      t2: "Use AI for chatbots, content personalization, and analytics.",
      image:
        "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#99ccc6",
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
      <main className="w-[95%] mx-auto  pb-20 relative">
        <ul className="relative">
          {cardsData.map((card, index) => (
            <li
              key={index}
              data-index={index}
              className={`card sticky top-3 transition-transform duration-1000 ease-in-out transform ${
                visibleCard === index
                  ? "translate-y-0 scale-100"
                  : `translate-y-[${index * 60}px] z-${60 - index} scale-90`
              }`}
              style={{
                paddingTop: `${index + 2}em`,
              }}
            >
              <div
                className="shadow-xl text-[#0A0507] rounded-3xl overflow-hidden  "
                style={{
                  backgroundColor: card.backgroundColor,
                  height: index === 0 ? "300px" : "620px",
                }}
              >
                {index === 0 ? (
                  <div className="pt-20 px-14 text-center items-center">
                    {/* <h1 className="text-6xl text-white font-extrabold pb-5">
                      {card.title}
                    </h1> */}
                    <h1 className="text-7xl text-white font-extrabold py-5">
                      {card.title2}
                    </h1>
                    <p className="text-white">{card.text}</p>
                  </div>
                ) : (
                  <>
                    <div className="py-20 px-20 flex w-full gap-10">
                      <div className="w-4/12 px-5">
                        <figure className="overflow-hidden rounded-lg">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="object-cover h-96 w-full"
                          />
                        </figure>
                      </div>

                      <div className=" flex-col w-8/12 px-5">
                        <div className=" grid grid-cols-2 gap-10 border-black">
                          <h2 className="text-5xl font-extrabold text-start">
                            {card.title}
                          </h2>
                          <p className="text-lg leading-relaxed text-left">
                            {card.text}
                          </p>
                        </div>
                        <hr className="border-t-1 border-black my-8"/>
                        <div className="grid grid-cols-2 gap-10 ">
                          <h2 className="text-[15px] font-medium text-start">
                            {card.descreption}
                          </h2>
                          <div>
                            <ul className=" list-none">
                              <li>
                                <div className=" flex items-center gap-2">
                                <FaCircleCheck />
                                <p className=" text-[16px] font-semibold leading-relaxed text-left">
                                  {card.list1}
                                </p>
                                </div>
                              </li>
                              <li>
                              <div className=" flex items-center gap-2">
                              <FaCircleCheck />
                                <p className=" text-[16px] font-semibold leading-relaxed text-left">
                                  {card.list2}
                                </p>
                                </div>
                              </li>
                              <li>
                              <div className=" flex items-center gap-2">
                              <FaCircleCheck />
                                <p className=" text-[16px] font-semibold leading-relaxed text-left">
                                  {card.list3}
                                </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10 py-12">
                          <div className="flex gap-3">
                          <div>
                          <figure className="overflow-hidden rounded-full">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="object-cover h-10 w-10"
                          />
                        </figure>
                          </div>
                            <div>
                            <h2 className="text-[14px] font-extrabold text-start">
                              {card.t1}
                            </h2>
                            <p className="text-[14px] leading-relaxed text-left">
                              {card.t2}
                            </p>
                            </div>
                          </div>
                          <div>
                            {/* <a
                              href="#top"
                              className="inline-block bg-white text-black px-4 py-2 rounded-md"
                            >
                              Explore more
                            </a> */}
                             <SlidingButton text="Read More" bgColor="bg-black" textcolor="text-white"/>
                             

                          </div>
                        </div>
                      </div>
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
