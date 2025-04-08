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
      <div className=" xl:py-20 lg:py-20 md:py-20 py-10  w-full flex justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-7xl lg:shadow-lg rounded-lg lg:px-2 xl:px-2 md:px-2 px-8">
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

          <div className="py-8  lg:px-16 max-w-xl lg:max-w-7xl lg:w-2/3 rounded-t-none lg:rounded-lg">
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
        <div className=" mb-10 max-w-6xl text-center">
          <h3 className="mx-auto mb-8 capitalize text-2xl md:text-5xl font-bold text-blue-950">
            {title} Services
          </h3>
          <p className="xl:text-xl lg:text-xl md:text-xl text-lg text-black mx-auto max-w-5xl">{content}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-y-6 gap-8 my-10 px-4 lg:px-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative bg-white dark:bg-blue-900 shadow-md rounded-xl p-6  hover:ring hover:ring-blue-900 transform duration-500 hover:scale-105 hover:shadow-xl w-full"
    >
      {/* Icon Bubble */}
      <div className="bg-blue-900 flex justify-center items-center w-20 h-20 md:w-24 md:h-24 rounded-full absolute -top-10 left-1/2 -translate-x-1/2 border-4 border-slate-200 dark:border-slate-800">
        <span className="text-2xl md:text-3xl lg:text-4xl text-white">
          {service.icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center mt-4">
        <h2 className="text-lg md:text-xl font-bold text-blue-900 dark:text-white capitalize mt-4 mb-2">
          {service.title}
        </h2>
        <p className="text-sm md:text-base dark:text-slate-200 text-gray-700">
          {service.description}
        </p>
        <a
          className="mt-4 border-2 border-blue-900 dark:border-white px-5 py-2 text-sm md:text-base capitalize font-semibold text-blue-900 dark:text-white rounded-md hover:bg-blue-900 hover:text-white transition"
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
