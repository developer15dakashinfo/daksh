import Button from "@/app/Button/Button";
import ReadMoreButton from "@/app/readmore/ReadMoreButton";
import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const StackingCards = () => {
  const cardsData = [
    {
      title: "WELCOME TO DAKSH INFOSOFT",
      text: "Amongst best software companies, our offshore software development services are geared to deliver results that you expect from an Indian IT outsourcing company.",

      backgroundColor: "#fffff",
    },
    {
      title: "SELL MORE SHOWs",
      text: "Get a grip on your operations and workflows. Managing your agency becomes painless.",
      descreption:
        "Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act which states that the company is entitled to be a Private Limited Company with a handfull of industry professionals, having in-depth experience of technology and organizational development.",
      list1: "Plan and manage tasks",
      list2: "Keep track of finances",
      list3: "Generate statistics and reports",
      t1: "Diogo Chiapani",
      t2: "Marketing Manager at Criative Music",
      image:
        "https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK",
      backgroundColor: "#ffec89",
    },
    {
      title: "CREATIVE SOLUTIONS",
      text: "Transform how your agency prepares for shows and tours. Makes the hard work of organization easy.",
      descreption:
        "We provide you with the Best Solutions. Creative, modern & simple Design Cutting Edge Services & Features Designing, Web Development, software development, Web application development and mobile application development.",
      list1: "Data-driven decisions",
      list2: "More booking requests",
      list3: "Sales tracking & automations",
      t1: "Eddy Kruse",
      t2: "Booking Agent at Tote Sonne",
      image:
        "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#46a0fa",
    },
    {
      title: "FUTURE READY TECHNOLOGY",
      text: "Book more shows. In less time, with less effort. Turn opportunities into profit.",
      descreption:
        " Daksh Infosoft Pvt. Ltd. has turned up into a renowned integrated Infotech service provider offering you cost-effective and quality solutions in Web Design, Web Development, eCommerce Website Development, and more.",
      list1: "Streamlined logistics and advancing",
      list2: "Frictionless teamwork",
      list3: "Efficient eSigning",
      t1: "Laura Bobera",
      t2: "Project Manager at All Artists Agency",
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
                  height: index === 0 ? "100vh" : "600px",
                }}
              >
                {index === 0 ? (
                  <div className="pt-64 px-14 text-center items-center">
                    <h1 className="text-6xl text-white font-extrabold pb-5">
                      {card.title}
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

                      <div className=" flex-col w-8/12 px-10">
                        <div className=" grid grid-cols-2 gap-10 border-black">
                          <h2 className="text-5xl font-extrabold text-start">
                            {card.title}
                          </h2>
                          <p className="text-lg leading-relaxed text-left">
                            {card.text}
                          </p>
                        </div>
                        <hr className="border-t-1 border-black my-12"/>
                        <div className="grid grid-cols-2 gap-10 ">
                          <h2 className="text-[15px] font-medium text-start">
                            {card.descreption}
                          </h2>
                          <div>
                            <ul className=" list-none">
                              <li>
                                <div className=" flex items-center gap-2">
                                <FaCircleCheck />
                                <p className=" text-[19px] font-semibold leading-relaxed text-left">
                                  {card.list1}
                                </p>
                                </div>
                              </li>
                              <li>
                              <div className=" flex items-center gap-2">
                              <FaCircleCheck />
                                <p className=" text-[19px] font-semibold leading-relaxed text-left">
                                  {card.list2}
                                </p>
                                </div>
                              </li>
                              <li>
                              <div className=" flex items-center gap-2">
                              <FaCircleCheck />
                                <p className=" text-[19px] font-semibold leading-relaxed text-left">
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
                            <Button text="Explore More"  href="/learn-more" />

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
