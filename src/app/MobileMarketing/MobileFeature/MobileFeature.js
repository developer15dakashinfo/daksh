import React from "react";

const MobileFeatureSection = () => {
  return (
    <div>
      <div className="text-white bg-blue-950 flex flex-col md:flex-row items-center py-5 mx-5 shadow-lg border my-14 rounded-lg max-w-8xl">
        <div className="w-full md:w-8/12 flex justify-center md:justify-end py-5">
          <div className="space-y-3 md:pl-28 lg:28 px-5">
            <h3 className="text-2xl font-bold text-start">DID YOU KNOW!</h3>
            <p className="text-xl font-light mt-4 text-start">
              According to the App Industry Report 2022, Web 3 gaming accounts
              for almost half of the overall blockchain activity, with daily
              unique active wallets of 1.15 million and a transaction count of
              7.4 billion.
            </p>
          </div>
        </div>

        <div className="w-[80%] h-[4px] bg-blue-600 my-4 md:hidden"></div>
        <div className="hidden md:block w-[5px] bg-blue-600 h-48 mx-6"></div>

        <div className="w-full md:w-3/12 px-8 md:px-0 lg:px-0 h-auto py-5 font-nunito text-center md:text-left">
          <img
            className="w-72 object-cover rounded-lg h-44"
            src="https://www.antiersolutions.com/wp-content/uploads/2023/04/Mask-Group-68586.png.webp"
            alt="Lightbulb"
          />
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <section id="new-features" class="py-8 bg-white sm:py-10 lg:py-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Features{" "}
            </h2>
            <p class="mt-4 text-lg leading-7 text-gray-600 sm:mt-8">
            Mobile marketing enables businesses to send personalized messages based on user behavior and preferences, enhancing engagement.With location-based targeting, companies can send offers and promotions to users when they are near a specific store or area.
            </p>
          </div>
          <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Advanced Analytics
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Track and analyze your data with powerful analytics tools. Gain
                valuable insights for better decision-making.
              </p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Fast Integration
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Seamlessly integrate with your existing tools and systems for a
                smooth workflow experience.
              </p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <i class="fa-solid fa-shield text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Security First
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Ensure the safety of your data with top-notch security features.
                Your privacy is our priority.
              </p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <i class="fa-solid fa-cloud text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Cloud Integration
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Access your data from anywhere with seamless cloud integration.
                Work without boundaries.
              </p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <i class="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Task Management
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Organize your workflow with efficient task management features.
                Stay on top of your projects effortlessly.
              </p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <i class="fa-solid fa-bolt text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Performance Metrics
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Monitor and measure your performance with comprehensive metrics.
                Optimize your processes for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default MobileFeatureSection;
