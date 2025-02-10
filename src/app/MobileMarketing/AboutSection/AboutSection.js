import React from "react";

const services = [
  {
    title: "Bulk SMS",
    description:
      "Reach your audience effectively through targeted mobile campaigns, SMS marketing, in-app advertisements, and push notifications. Boost engagement and drive conversions with mobile-first strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    title: "RCS",
    description:
      "Reach your audience effectively through targeted mobile campaigns, SMS marketing, in-app advertisements, and push notifications. Boost engagement and drive conversions with mobile-first strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
  },
  {
    title: "Official Whatsaap API",
    description:
      "Reach your audience effectively through targeted mobile campaigns, SMS marketing, in-app advertisements, and push notifications. Boost engagement and drive conversions with mobile-first strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "Voice Call",
    description:
      "Reach your audience effectively through targeted mobile campaigns, SMS marketing, in-app advertisements, and push notifications. Boost engagement and drive conversions with mobile-first strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
  },
];

const MobileAboutSection = ({ title, content }) => {
  return (
    <div>
      <div className="px-2 py-20 w-full flex justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-7xl lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
            {" "}
            <div
              className="lg:scale-110 h-80 bg-cover bg-center lg:h-full rounded-b-none lg:rounded-lg"
              style={{
                backgroundImage:
                  "url('https://www.contentgrip.com/content/images/2024/03/Upgrading-your-mobile-marketing-this-2024.png')",
              }}
            ></div>
          </div>

          <div className="py-12 px-6 lg:px-16 max-w-xl lg:max-w-7xl lg:w-2/3 rounded-t-none lg:rounded-lg">
            <h2 className="text-3xl text-gray-800 font-bold">
              Promoting Sustainable Lifestyle{" "}
              <span className="text-indigo-600">Choices</span>
            </h2>
            <p className="mt-4 text-gray-600">
              The "Eco-Tracker" project aims to create a web-based platform that
              encourages individuals to adopt sustainable lifestyle choices and
              actively contribute to environmental conservation. The platform
              will provide users with personalized tracking, education, and
              engagement features to empower them to make eco-friendly decisions
              in various aspects of their lives.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded inline-block"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-6 py-10 bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center">
        <div className="mt-10 mb-20 max-w-6xl text-center">
          <h3 className="mx-auto mb-8 capitalize text-2xl md:text-5xl font-bold text-blue-950">
            {title} Services
          </h3>
          <p className="text-xl text-black mx-auto max-w-5xl">{content}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-3 xl:grid-cols-4 my-10 mx-auto w-fit justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group xl:w-72 lg:w-64 md:w-64 sm:w-64 w-72 h-96 bg-white dark:bg-blue-900 shadow-md rounded-lg m-4 hover:ring hover:ring-blue-900 transform duration-500 hover:scale-105 hover:shadow-xl relative"
            >
              <div className="bg-blue-900 flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto left-0 right-0 -top-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white group-hover:text-blue-900 transform duration-300">
                  {service.icon}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center absolute inset-0 p-4 text-center">
                <h2 className="text-xl capitalize font-bold text-blue-900 mt-10 mb-4">
                  {service.title}
                </h2>
                <p className="text-base dark:text-white">
                  {service.description}
                </p>
                <a
                  className="flex mt-5 border-2 bottom-0 border-blue-900 dark:border-slate-800 p-2 px-6 capitalize font-semibold text-blue-900 rounded-md group-hover:bg-blue-900 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
                  href="#"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAboutSection;
