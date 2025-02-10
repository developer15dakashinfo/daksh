import React, { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const services = [
  {
    id: 1,
    icon: "🌐",
    title: "SMO Service",
    description:
      "Building modern, responsive, and high-performing websites using the latest technologies like React, Next.js, and Laravel. Ensuring a seamless user experience across all devices.",
  },
  {
    id: 2,
    icon: "🔍",
    title: "SEO Optimization",
    description:
      "Enhancing website visibility on search engines through keyword research, on-page SEO, backlink strategies, and performance optimization to drive organic traffic and improve rankings.",
  },
  {
    id: 3,
    icon: "🎨",
    title: "Email Marketing",
    description:
      "Creating visually compelling graphics, UI/UX designs, logos, and marketing materials using tools like Figma and Illustrator to establish a strong brand identity and user engagement.",
  },
  {
    id: 4,
    icon: "📈",
    title: "Digital Marketing",
    description:
      "Implementing strategic marketing campaigns, including social media marketing, pay-per-click (PPC), email marketing, and content marketing to boost brand awareness and conversions.",
  },
];

const DigitalMarketingServices = ({ title, content }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5 transition-transform duration-500 transform hover:scale-105">
            Our {title}
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-4xl">{content}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`service-card rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 
          ${
            hoveredId === service.id
              ? "scale-110 bg-blue-50 text-black"
              : "bg-white"
          }`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-left">{service.description}</p>

              <div className="hidden lg:block sm:hidden md:hidden py-4">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start py-2 sm:py-3 pl-4 pr-10 sm:pr-12 border-2 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full hover:pl-8 hover:pr-6 bg-black group"
                >
                  <span className="absolute bottom-0 left-0 w-full transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <FaCircleArrowRight className="w-5 sm:w-6 h-4 sm:h-5 text-white font-bold" />
                  </span>
                  <span className="absolute left-0 pl-2 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <FaCircleArrowRight className="w-5 sm:w-6 h-4 sm:h-5 text-black font-bold" />
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black font-semibold sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px]">
                    Read More
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section class="text-white bg-blue-950  body-font">
        <div class="flex justify-center pt-20 text-5xl font-bold">Why Us?</div>
        <p className="text-lg text-center text-gray-200 pt-4 mx-auto max-w-4xl">
          At Dakshinfosoft, we offer tailored digital marketing strategies that
          drive measurable results. Our team combines creativity, data-driven
          insights, and industry expertise to elevate your brand’s online
          presence. Partner with us for innovative solutions that help your
          business thrive in the digital world.
        </p>
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 border-2 border-[#F5DEB3] rounded-lg  hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    class="w-32 mb-3"
                  ></img>
                </div>
                <h2 class="title-font font-regular text-xl text-gray-200">
                  Latest Milling Machinery
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
            <div class="px-4 py-6 transform transition duration-500 border-2 border-[#F5DEB3] rounded-lg hover:scale-110">
  <div class="flex justify-center">
    <img
      src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
      class="w-32 mb-3"
    />
  </div>
  <h2 class="title-font font-regular text-xl text-gray-200">
    Reasonable Rates
  </h2>
</div>

            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 border-2 border-[#F5DEB3] rounded-lg  hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    class="w-32 mb-3"
                  ></img>
                </div>
                <h2 class="title-font font-regular text-xl text-gray-200">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 border-2 border-[#F5DEB3] rounded-lg  hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    class="w-32 mb-3"
                  ></img>
                </div>
                <h2 class="title-font font-regular text-xl text-gray-200">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingServices;
