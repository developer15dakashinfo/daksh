"use client";
import React, { useState } from "react";

const TechnologyWeUseSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Planning & Consultation",
      content:
        "Our journey begins with understanding your vision. Based on your vision, we collaboratively create a project roadmap with clear milestones. We’ll consult about your ideas, target audience, and desired outcomes.",
      subData: [
        {
          Subtitle: "Vision and Goals Discussion",
          para: "Initiate discussions to understand your objectives, target audience, and desired outcomes.",
        },
        {
          Subtitle: "Project Roadmap Creation",
          para: "Collaboratively create a detailed project plan with clear milestones and deadlines.",
        },
        {
          Subtitle: "Resource Allocation",
          para: "Outline the key features, functionalities, and requirements.",
        },
        {
          Subtitle: "Vision and Goals Discussion",
          para: "Allocate team roles, tools, and budgets to ensure effective project management.",
        },
      ],
    },
    {
      id: 2,
      title: "Design",
      content:
        "Our skilled designers translate your vision into a user-friendly and visually appealing solution. They focus on creating a positive user experience that keeps users engaged and coming back for more.",
      subData: [
        {
          Subtitle: "Wireframing",
          para: "Develop wireframes to outline the structure and layout.",
        },
        {
          Subtitle: "UI/UX Design",
          para: "Craft the user interface and user experience, focusing on aesthetics and functionality.",
        },
        {
          Subtitle: "Prototype Creation",
          para: "Create interactive prototypes for user feedback and refinement.",
        },
        {
          Subtitle: "Design Approval",
          para: "Present the design for your review and approval, making necessary adjustments based on feedback.",
        },
      ],
    },
    {
      id: 3,
      title: "Development",
      content:
        "Our expert developers take your design and turn it into reality. We keep you informed throughout the process with regular progress reports and milestone deliverables. This ensures you have complete transparency and control over the development phase.",
      subData: [
        {
          Subtitle: "Frontend Development",
          para: "Code the client-side interface, ensuring responsiveness and compatibility.",
        },
        {
          Subtitle: "Backend Development",
          para: "Build the server-side logic, integration, and functionalities.",
        },
        {
          Subtitle: "Regular Updates",
          para: "Provide progress reports and milestone deliverables to keep you informed.",
        },
        {
          Subtitle: "Quality Assurance",
          para: "Conduct initial testing and debugging to ensure the development functions as intended.",
        },
      ],
    },
    {
      id: 4,
      title: "Testing",
      content:
        "Before launch, our dedicated QA specialists meticulously test every aspect of your product. They identify and fix any potential issues to guarantee a smooth and flawless user experience.",
      subData: [
        {
          Subtitle: "Functionality Testing",
          para: "Test all features and functionalities to ensure they work correctly.",
        },
        {
          Subtitle: "Usability Testing",
          para: "Evaluate the user interface and user experience for ease of use and navigation.",
        },
        {
          Subtitle: "Performance Testing",
          para: "Assess the speed, load time, and responsiveness under various conditions.",
        },
        {
          Subtitle: "Security Testing",
          para: "Conduct thorough security checks to identify and fix vulnerabilities.",
        },
      ],
    },
    {
      id: 5,
      title: "Deployment",
      content:
        "Once everything is finalised, our team strategically chooses the most suitable deployment methods and services. Now, your project is live for everyone to see and interact with!",
      subData: [
        {
          Subtitle: "Hosting Selection",
          para: "Recommend and set up the most suitable services based on your needs.",
        },
        {
          Subtitle: "Final Preparations",
          para: "Perform final checks and configurations before going live.",
        },
        {
          Subtitle: "Launch Strategy",
          para: "Develop a launch plan, including marketing and promotional strategies.",
        },
        {
          Subtitle: "Go Live",
          para: "Deploy the product, ensuring everything is functional and optimised for performance.",
        },
      ],
    },
    {
      id: 6,
      title: "Maintenance",
      content:
        "Our commitment doesn't end at launch. We provide ongoing support to ensure your product stays up-to-date, secure, and bug-free.",
      subData: [
        {
          Subtitle: "Regular Updates",
          para: "Implement software and security updates regularly.",
        },
        {
          Subtitle: "Monitoring",
          para: "Continuously monitor performance and security to prevent issues.",
        },
        {
          Subtitle: "Bug Fixes",
          para: "Address any technical issues or bugs that arise post-launch.",
        },
        {
          Subtitle: "Performance Optimization",
          para: "Optimise speed and functionality based on user feedback and analytics.",
        },
      ],
    },
  ];

  return (
  

    <div className="max-w-6xl mx-auto py-20 px-5">
      <h3 className="text-blue-900 text-xl py-2 text-center uppercase">
        Other Technologies We Work On
      </h3>
      <h2 className="text-4xl font-bold text-center mb-4">
        Our Agile Android Development Process
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Companies employ android developers from us because we have a proven
        track record of delivering high-quality projects on time.
      </p>

      

      <div className="w-full overflow-x-auto border-b pb-2">
  <div className="flex gap-4 px-2 min-w-max">
    {steps.map((step) => (
      <button
        key={step.id}
        className={`whitespace-nowrap text-sm sm:text-base font-semibold py-2 px-4 transition duration-300 ${
          activeStep === step.id
            ? "border-t-4 border-blue-900 text-black"
            : "text-gray-600 hover:text-blue-900"
        }`}
        onClick={() => setActiveStep(step.id)}
      >
        {step.id}. {step.title}
      </button>
    ))}
  </div>
</div>




      <div className="bg-gray-100 p-6 mt-4 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-x-8">
          <div className="w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r-[1px] border-gray-300 p-5">
            <h3 className="text-2xl font-semibold text-blue-900">
              {steps[activeStep - 1].title}
            </h3>
            <p className="text-gray-700 mt-2">
              {steps[activeStep - 1].content}
            </p>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-4">
              {steps[activeStep - 1].subData.map((item, index) => (
                <div key={index} className="pl-4 py-2">
                  <div className="border-t-4 border-gray-300 w-28"></div>
                  <h3 className="text-lg font-semibold text-blue-900 py-2">
                    {item.Subtitle}
                  </h3>
                  <p className="text-gray-700">{item.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyWeUseSection;
