import React from "react";

const processSteps = [
  {
    title: "1. Reimagine",
    description: "Begin by envisioning the new look and features for your website.",
    iconPath: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
  },
  {
    title: "2. Redesign",
    description: "Collaborate with your design and development team to give your website a fresh and modern design.",
    iconPath: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
  },
  {
    title: "3. Relaunch",
    description: "After the redesign, relaunch your website and welcome your audience to the new experience.",
    iconPath: "M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
  }
];

const HomeProcess4 = () => {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-black dark:text-white md:text-5xl">
            Our Android Development Consulting Process
          </h2>
        </div>
        <div className="mx-auto mt-4 max-w-10xl md:mb-12 lg:mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our Android Development Consulting Process ensures a structured and efficient approach to building high-quality mobile applications. We focus on understanding your business needs, selecting the right technology stack, and optimizing app performance for scalability and user experience.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-20 sm:gap-8 mt-10 sm:mt-20 px-32">
        {processSteps.map((step, index) => (
          <div key={index} className="text-center px-10">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="currentColor"
                  className="text-gray-500 w-1/2 h-1/2"
                  alt="Process Icon"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath}></path>
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="font-headline text-xl font-semibold sm:text-2xl mt-6 sm:mt-10">
              {step.title}
            </h3>
            <p className="leading-relaxed mt-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProcess4;
