import React from "react";

const processSteps = [
  {
    title: "1. Planning & Requirement Analysis",
    description: [
      "Identify the project's feasibility, scope, and requirements.",
      "Conducts feasibility studies (technical, operational, financial).",
      "Defines project objectives, target users, and functional specifications.",
      
    ],
    iconPath: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
  },
  {
    title: "2. System Design",
    description: ["High-Level Design (HLD): Defines system architecture, modules, and data flow.",
      "Low-Level Design (LLD): Details of each module, database schema, and UI design.",
      "Tools used: UML diagrams, wireframes, flowcharts. ",
      
    ],
    iconPath: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
  },
  {
    title: "3. Development (Coding & Implementation)",
    description: ["Developers write code using programming languages like Java, Python, C++, or JavaScript.",
      "Follows coding standards and best practices for maintainability.",
      "Uses version control systems (Git, GitHub, GitLab) for collaboration.",
      
    ],
    iconPath: "M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
  },
 
  {
    title: "4. Testing & Quality Assurance",
    description: [
      "Identify the project's feasibility, scope, and requirements.",
      "Involves discussions with stakeholders to understand business needs.",
      "Conducts feasibility studies (technical, operational, financial).",
     
      
    ],
    iconPath: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
  },
  {
    title: "5. Deployment & Implementation",
    description: ["High-Level Design (HLD): Defines system architecture, modules, and data flow.",
      "Low-Level Design (LLD): Details of each module, database schema, and UI design.",
      "Tools used: UML diagrams, wireframes, flowcharts. ",
      
    ],
    iconPath: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
  },
  {
    title: "6. Maintenance & Support",
    description: ["Developers write code using programming languages like Java, Python, C++, or JavaScript.",
      "Follows coding standards and best practices for maintainability.",
      "Uses version control systems (Git, GitHub, GitLab) for collaboration.",
     
    ],
    iconPath: "M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
  }
];

const HomeProcess4 = () => {
  return (
    <div className="py-14">
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

      <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 mt-10 sm:mt-20 px-32">
        {processSteps.map((step, index) => (
          <div key={index} className="text-center px-5 group border-r border-b border-gray-300 hover:border-blue-800">

            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-24 lg:h-24 mx-auto left-2">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-3">
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
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-600 rounded-full"></div>
            </div>
            <h3 className="font-headline text-lg font-semibold sm:text-sm mt-3 sm:mt-5">
              {step.title}
            </h3>
            <div className="leading-relaxed mt-4 text-gray-600 dark:text-gray-300 pb-3">
              {Array.isArray(step.description) ? (
                <ul className="text-left inline-block">
                  {step.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>🔹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className=" text-[14px]">{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProcess4;
