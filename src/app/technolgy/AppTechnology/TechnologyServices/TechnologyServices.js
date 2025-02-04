"use client";
import React from "react";
import { SiAndroidstudio, SiFirebase } from "react-icons/si";
import { FaLaptopCode, FaRegFileCode } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { VscDiffSingle } from "react-icons/vsc";

const services = [
  {
    icon: <SiAndroidstudio className=" h-12 w-12" />,
    title: "Custom Android App Development",
    description:
      "Our team creates bespoke, dynamic mobile applications using Android that deliver optimal performance and functionality.",
  },
  {
    icon: <FaRegFileCode className="h-12 w-12" />,
    title: "API Integrations",
    description:
      "We provide comprehensive API development and integration services to ensure your Android applications communicate efficiently.",
  },
  {
    icon: <VscDiffSingle className=" h-12 w-12" />,
    title: "Android Framework Development",
    description:
      "Our expertise allows us to build scalable and maintainable applications with dynamic and responsive user interfaces.",
  },
  {
    icon: <FaLaptopCode className=" h-12 w-12" />,
    title: "Android Migration Services",
    description:
      "Upgrade and migrate your existing applications to the latest version of Android with minimal disruption.",
  },
  {
    icon: <RiSecurePaymentFill className=" h-12 w-12" />,
    title: "Payment Gateway Integration",
    description:
      "We integrate secure and reliable payment gateways, supporting Stripe, PayPal, Amazon Pay, and more.",
  },
  {
    icon: <SiFirebase className="h-12 w-12" />,
    title: "Firebase Services Integration",
    description:
      "Leverage Firebase services like real-time databases, cloud storage, authentication, and analytics.",
  },
];

const TechnologyServices = () => {
  return (
    <div className="mx-auto max-w-full px-5 py-16 md:px-10 md:py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h1 className="text-xl text-blue-900 py-2">UNMATCHED SERVICES</h1>
        <h2 className="text-3xl font-extrabold text-black dark:text-white md:text-4xl">
          End-to-end Android Development Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          With a dedicated team of experienced developers, we offer
          comprehensive solutions leveraging the latest Android technologies.
        </p>
      </div>

      <section
        id="features"
        className="container mx-auto px-4 py-10 space-y-6 mt-8"
      >
        <div className="grid justify-start items-start gap-8 sm:grid-cols-2 md:grid-cols-2 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow-lg hover:shadow-gray-300 p-8 flex flex-col items-start text-left"
            >
              <div>{service.icon}</div>
              <h3 className="font-bold mt-4 text-lg">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnologyServices;
