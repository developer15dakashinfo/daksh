"use client";
import React from "react";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { PiListStarFill } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdVpnLock } from "react-icons/md";
import { FaLaptopMedical } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";

const services = [
  {
    icon: <BsFillFileEarmarkBarGraphFill className="text-black text-4xl" />, 
    title: "Clear Communication", 
    description: "We believe in total transparency. You'll get regular updates on your project's progress, and your feedback is always welcome. Plus, you'll always own all the code and creative elements we create for you."
  },
  {
    icon: <PiListStarFill className="text-black text-4xl" />, 
    title: "On-Time Delivery", 
    description: "We use cutting-edge project management tools and agile development practices to keep your project on track. This means you'll get a high-quality delivery exactly when you expect it."
  },
  {
    icon: <AiOutlineSolution className="text-black text-4xl" />, 
    title: "Solutions Built for Your Needs", 
    description: "Whether you need a custom-built solution or strategic optimization of an existing one, we prioritize your unique goals. We'll ensure your development perfectly aligns with your digital strategy."
  },
  {
    icon: <FaPeopleRoof className="text-black text-4xl" />, 
    title: "Direct Collaboration", 
    description: "Consider our team an extension of yours! You'll have direct access to the talented developers and designers working on your project during agreed-upon hours, ensuring smooth collaboration."
  },
  {
    icon: <MdVpnLock className="text-black text-4xl" />, 
    title: "Elevated User Experience", 
    description: "Our creative and skilled UI/UX designers and developers leverage the latest technologies to deliver user-friendly, scalable, and secure development that drives results and meets your evolving business needs."
  },
  {
    icon: <FaLaptopMedical className="text-black text-4xl" />, 
    title: "Flexible Engagement Models", 
    description: "We understand that your needs can change. That's why we offer flexible engagement options. Choose the model that works best for you now, and switch seamlessly if your needs evolve. We're committed to building a long-term, reliable partnership with you."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center xl:max-w-5xl">
          <h1 className="text-xl text-blue-300 py-2">UNMATCHED SERVICES</h1>
          <h2 className="lg:text-5xl text-3xl md:text-5xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            The Advantages of Working with Daksh InfoSoft for Development
          </h2>
          <p className="mb-4">
            We don't just build websites – we craft solutions that transform your business. Here's what sets us apart:
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-gray-100 shadow-md rounded-xl h-full">
                <div className="p-9">
                  {service.icon}
                  <h3 className="mt-2 text-xl font-bold text-gray-900 sm:mt-6">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;


