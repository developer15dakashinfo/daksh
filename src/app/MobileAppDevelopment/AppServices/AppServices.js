import React from "react";

const HomeSection3 = () => {
  const features = [
    {
      img: "https://softcand.com/wp-content/uploads/2023/10/202010302221341239_Mobil-Uygulama-Gelistirme.jpg",
      title: "Custom Android App Development",
      description:
        "We create tailored Android applications designed to meet your unique business requirements. Our expert developers build scalable, secure, and high-performance apps that enhance user engagement and streamline operations. Whether you need a startup MVP or a full-fledged enterprise app, we ensure seamless functionality, intuitive UI.",
    },
    {
      img: "https://5.imimg.com/data5/ZK/OP/UR/SELLER-102169556/mobile-app-development-500x500.png",
      title: "Native & Hybrid App Development",
      description:
        "Leverage the power of native Android development with Kotlin/Java for high-performance apps or build cross-platform solutions with Flutter and React Native. We create seamless, efficient, and feature-rich applications that work flawlessly across multiple devices.",
    },
    {
      img: "https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2024/03/13192837/14-best-free-and-open-source-mobile-app-development-software-1.jpg",
      title: "Enterprise App Solutions",
      description:
        "Transform your business operations with powerful enterprise Android applications. We develop secure, scalable, and feature-rich solutions tailored for businesses, enabling automation, real-time data access, and seamless collaboration. Our enterprise apps are designed to improve workflow efficiency, boost productivity.",
    },
    {
      img: "https://4.imimg.com/data4/VT/PT/GLADMIN-11200939/47-500x500.jpg",
      title: "UI/UX Design for Android Apps",
      description:
        "Deliver visually stunning and user-friendly Android applications with our expert UI/UX design services. We focus on intuitive navigation, seamless user interactions, and engaging aesthetics to create designs that enhance user retention and satisfaction. From wireframes to interactive prototypes.",
    },
    {
      img: "https://5.imimg.com/data5/AY/CV/GLADMIN-29173287/mobile-app-development-services-500x500.png",
      title: "Android App Testing & QA",
      description:
        "Ensure flawless app performance with rigorous testing and quality assurance. Our QA team conducts functional, usability, and security testing to identify and resolve bugs before deployment. We optimize your app for different devices, screen sizes, and operating systems.",
    },
    {
      img: "https://4.imimg.com/data4/JG/RL/MY-18827513/mobile-app-development-500x500.png",
      title: "Google Play Store Deployment",
      description:
        "Seamlessly launch your Android app on the Google Play Store with our deployment expertise. We ensure compliance with Google’s policies, optimize app store listings, and implement ASO strategies to boost visibility. From managing app submissions to handling updates and approvals.",
    },
  ];

  return (

    <div>
  <div className="mx-auto max-w-full px-5 py-16 md:px-10 md:py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div className="mx-auto w-full max-w-3xl text-center">
      <h2 className="text-4xl font-extrabold text-black dark:text-white md:text-5xl">
        Android App Development Services
      </h2>
      <div className="mx-auto mb-8 mt-4 max-w-8xl md:mb-12 lg:mb-16">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Innovative, Scalable & High-Performance Android Solutions Build
          cutting-edge Android applications tailored to your business needs,
          ensuring seamless performance, intuitive UI/UX, and future-ready
          scalability.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12 lg:px-28 md:px-20 sm:px-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative mb-8 flex flex-col rounded-2xl border border-blue-300 bg-white p-8 shadow-lg dark:border-gray-600 dark:bg-gray-800 lg:mb-4 transition-transform duration-500 ease-in-out transform hover:-translate-y-3"
        >
          
          <div className="absolute -top-8 left-40 flex h-20 w-20 items-center justify-center rounded-full border border-blue-400 shadow-md dark:border-gray-500 dark:bg-gray-700 lg:right-8 overflow-hidden">
            <img
              src={feature.img}
              alt="img"
              className="h-full w-full rounded-full transition-transform duration-700 ease-in-out group-hover:rotate-180"
            />
          </div>

          
          <p className="mb-4 mt-8 text-xl font-semibold text-gray-800 dark:text-white">
            {feature.title}
          </p>
          <p className="text-gray-500 dark:text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default HomeSection3;
