import React from "react";
import { FaFileCode, FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";
import { BsRocketTakeoff } from "react-icons/bs";

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
        li4: "Avoid costly mistakes with our Technology Consulting, ensuring long-term success.",
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
        li4: "Avoid costly mistakes with our Technology Consulting, ensuring long-term success.",
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
        li4: "Avoid costly mistakes with our Technology Consulting, ensuring long-term success.",
      },
    },
  ];

  return (
    <div className="w-full bg-white pb-20">
  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <h1 className="text-blue-400 font-medium text-lg text-center">
      SOLUTIONS FOR ALL
    </h1>
    <h1 className="text-4xl font-bold text-center mt-3 text-black">
      Leading the Industry with Excellence
    </h1>
    <p className="text-lg text-center mt-4 text-black">
      dakshInfo Soft craft transformative software solutions to empower businesses of all sizes. We equip you with the tools to streamline operations, achieve results, and propel growth.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10  sm:px-8 lg:px-40">
    {cardsData2.map((card, index) => (
      <div
        key={index}
        className="relative h-full overflow-hidden border border-gray-500 rounded-lg hover:shadow-lg transition duration-300"
      >
        <div className="p-6 sm:p-8 lg:p-8">
          <div className="flex items-center gap-4">
            <div className="text-3xl text-blue-400">{card.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-black">{card.title}</h3>
          </div>

          <p className="text-sm sm:text-base font-medium text-black py-5">{card.description}</p>

          {card.lists && (
            <ul className="text-gray-600 list-none pb-5 m-0">
              {Object.values(card.lists).map((listItem, listIndex) => (
                <li
                  key={listIndex}
                  className="flex items-center gap-2 text-[13px] sm:text-sm text-gray-500 py-1 text-justify"
                >
                  <IoIosArrowForward className="text-blue-400 text-xl" />
                  {listItem}
                </li>
              ))}
            </ul>
          )}

          <div className="bottom-4 font-bold flex items-center gap-2 text-black py-2">
            Explore more <FaArrowCircleRight />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default SolutionForAllSection;
