import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";
import { BsRocketTakeoff } from "react-icons/bs";
import SlidingButton from "@/app/SlidingButton/SlidingButton";

const SolutionForAllSection = () => {
  const cardsData2 = [
    {
      title: "Startup Launchpad",
      description:
        "Conquer the challenges of rapid scaling, budget constraints, and market validation with our expertise.",
      icon: <BsRocketTakeoff />,
      lists: {
        li1: "Get to market fast and cost-effectively with our MVP and SaaS development services.",
        li2: "Align technology with business goals with our CTO-as-a-service offering.",
        li3: "Make informed choices using our Data Analytics and DevOps services.",
        
      },
    },
    {
      title: "Enterprise Evolution",
      description:
        "Building custom software solutions to streamline processes and drive innovation within your business.",
      icon: <RiBuilding2Fill />,
      lists: {
        li1: "Get to market fast and cost-effectively with our MVP and SaaS development services.",
        li2: "Align technology with business goals with our CTO-as-a-service offering.",
        li3: "Make informed choices using our Data Analytics and DevOps services.",
        
      },
    },
    {
      title: "Agency Acceleration",
      description:
        "Creating cutting-edge websites and web applications that enhance user experience and drive engagement.",
      icon: <IoCodeSlash />,
      lists: {
        li1: "Get to market fast and cost-effectively with our MVP and SaaS development services.",
        li2: "Align technology with business goals with our CTO-as-a-service offering.",
        li3: "Make informed choices using our Data Analytics and DevOps services.",
       
      },
    },
  ];

  return (
    <div className="max-w-[1800px] mx-auto ">
    <div className="w-full bg-white pb-20">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600 font-medium text-lg text-center">
          SOLUTIONS FOR ALL
        </h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-3 text-black">
          Leading the Industry with Excellence
        </h1>
        <p className="text-base sm:text-lg text-center mt-4 text-black">
          DakshInfo Soft crafts transformative software solutions to empower
          businesses of all sizes. We equip you with the tools to streamline
          operations, achieve results, and propel growth.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-8 lg:px-40">
        {cardsData2.map((card, index) => (
          <div
            key={index}
            className="relative h-auto sm:h-full overflow-hidden border border-gray-300 rounded-lg hover:shadow-lg transition duration-300"
          >
            <div className="px-6 sm:px-8 lg:px-10 py-10 sm:py-8 lg:py-10">
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl text-blue-500">
                  {card.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-black">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base font-medium text-black py-3 sm:py-5">
                {card.description}
              </p>

              {card.lists && (
                <ul className="text-gray-600 list-none pb-4 sm:pb-5 m-0">
                  {Object.values(card.lists).map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="flex items-center gap-2 text-[12px] sm:text-sm text-gray-500 py-1 text-justify"
                    >
                      <IoIosArrowForward className="text-blue-500 text-lg sm:text-xl" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex justify-center ">
                <SlidingButton
                  text="Explore More"
                  bgColor="bg-black"
                  textcolor="text-white"
                  arrowBgColor="bg-black"
                  arrowTextColor="text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SolutionForAllSection;
