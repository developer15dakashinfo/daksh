"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";
import dakshlogo from "../assets/headerlogo.svg";
import "./Navbar.css";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setIsScrolled(currentScrollY > 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", link: "/" },
    {
      label: "Our Services",
      link: "#",
      dropdownItems: [
        {
          heading: "WEB DEVELOPMENT",
          items: [
            { label: "Web Designing ", link: "/websiteDesign/webdesigning" },
            {
              label: "Website Development",
              link: "/websiteDesign/webdevelopement",
            },
          ],
        },
        {
          heading: "MOBILE APP DEVELOPMENT",
          items: [
            {
              label: "Android App Development",
              link: "/MobileAppDevelopment/android_app_development",
            },
            {
              label: "iOS App Development",
              link: "/MobileAppDevelopment/ios_app_development",
            },
            {
              label: "Flutter App Development",
              link: "/MobileAppDevelopment/flutter_app_development",
            },
          ],
        },
        {
          heading: "DIGITAL MARKETING",
          items: [
            {
              label: "Digital Marketing",
              link: "/websiteDesign/digitalmarketing",
            },
            { label: "SEO Service", link: "/websiteDesign/seomarketing" },
            { label: "SMO Services", link: "/websiteDesign/smomarketing" },
            { label: "Email Marketing", link: "/websiteDesign/emailmarketing" },
            { label: "PCC Services", link: "/websiteDesign/ppc_services" },
            {
              label: "Social Media Marketing",
              link: "/websiteDesign/social_media_marketing",
            },
          ],
        },
        {
          heading: "MOBILE MARKETING",
          items: [
            { label: "Bulk SMS", link: "/websiteDesign/bulksms" },
            { label: "RCS", link: "/websiteDesign/rcs" },
            { label: "IVR", link: "/websiteDesign/api" },
            { label: "Official Whatsapp API", link: "/websiteDesign/api" },
            { label: "Voice Call", link: "/websiteDesign/api" },
            { label: "Calling Agent", link: "/websiteDesign/api" },
          ],
        },
      ],
    },
    {
      label: "Technologies",
      link: "#",
      dropdownItems: [
        {
          heading: "MOBILE APP DEVELOPMENT",
          items: [
            { label: "Android", link: "/technolgy/android" },
            { label: "IOS", link: "/technolgy/ios" },
            { label: "Flutter", link: "/websiteDesign/flutter" },
          ],
        },
        {
          heading: "WEB DEVELOPMENT",
          items: [
            {
              label: "React js",
              link: "/technolgy/reactjs",
            },
            { label: "Wordpress", link: "/technolgy/wordpress" },
            {
              label: "Laravel",
              link: "/technolgy/laravel",
            },
            {
              label: "Node js",
              link: "/technolgy/nodejs",
            },
            {
              label: "HTML5",
              link: "/technolgy/html5",
            },
          ],
        },
        {
          heading: "CUSTOM DEVELOPMENTS",
          items: [
            { label: "Php", link: "/technolgy/php" },
            { label: "Java", link: "/technolgy/java" },
            { label: "Figma", link: "/technolgy/figma" },
            { label: "Angular js", link: "/technolgy/angular_js" },
          ],
        },
      ],
    },
    { label: "About Us", link: "/about" },
    { label: "Career", link: "/careerSection" },
    { label: "Contact Us", link: "/contactus" },
  ];

  return (
    // <nav
    //   className={`fixed top-0 left-0 w-full z-50 py-5 px-6 md:px-20 lg:px-16 flex justify-between  items-center ${
    //     activeDropdown === 1 ? " transition duration-500" : ""
    //   } bg-black text-white shadow-md transition-transform duration-500 ${
    //     isVisible ? "translate-y-0" : "-translate-y-full"
    //   } ${
    //     isScrolled
    //       ? "my-2 mx-3 rounded-lg w-full max-w-[98.4%]"
    //       : "rounded-none"
    //   }`}
    // >
    //   <div className="text-2xl font-bold sm:h ">
    //     <a href="/" className="flex items-center">
    //       {/* <Image src={dakshlogo} alt="Logo" height={40} width={120} /> */}

    //       <img
    //         src="https://www.dakshinfo.com/images/headerlogo.svg"
    //         alt="logo"
    //         class="object-cover h-[60px]"
    //       ></img>
    //     </a>
    //   </div>

    //   <button
    //     className="md:hidden text-2xl focus:outline-none transform-none"
    //     onClick={toggleMobileMenu}
    //   >
    //     {isMobileMenuOpen ? (
    //       <IoClose className="text-white text-3xl" />
    //     ) : (
    //       <TiThMenu className="text-white text-3xl" />
    //     )}
    //   </button>

    //   <ul
    //     className={`${
    //       isMobileMenuOpen
    //         ? "block absolute left-0 top-full w-full bg-black px-6 py-4 shadow-lg space-y-[15px] translate-x-0 opacity-100  "
    //         : "hidden"
    //     } md:flex md:space-x-8 sm:space-x-6 md:space-y-0 transition-transform duration-500`}
    //   >
    //     {navItems.map((item, index) => (
    //       <li
    //         key={index}
    //         onMouseEnter={() => setActiveDropdown(index)}
    //         onMouseLeave={() => setActiveDropdown(null)}
    //         className="border-b border-gray-900 md:pb-0 pb-5 sm:border-none last:border-none"
    //       >
    //         <a
    //           href={item.link}
    //           className="text-white font-[500] sm:text-[14px] lg:text[18px] md:text[18px] hover:text-gray-400 transition-colors relative group flex items-center justify-between md:justify-start w-full"
    //         >
    //           {item.label}

    //           {item.dropdownItems && (
    //             <span className="ml-2 md:ml-1 flex items-center">
    //               {activeDropdown === index ? (
    //                 <MdOutlineKeyboardArrowUp className="text-[20px]" />
    //               ) : (
    //                 <MdKeyboardArrowDown className="text-[20px]" />
    //               )}
    //             </span>
    //           )}

    //           <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"></span>
    //         </a>

    //         {item.dropdownItems && activeDropdown === index && (
    //           <div
    //             className="absolute z-50 left-0 rounded-lg right-0 transition-opacity duration-500 bg-black mt-[14px]"
    //             style={{ animation: "sliceDown 1s ease-in-out forwards" }}
    //           >
    //             <div
    //               className={`container justify-center my-8 pt-10 pb-10 rounded-lg mx-auto grid ${
    //                 item.label === "Technologies"
    //                   ? "grid-cols-3"
    //                   : "grid-cols-4"
    //               } text-sm px-6 md:px-40 lg:px-20 gap-4`}
    //             >
    //               {item.dropdownItems.map((dropdownItem, i) => (
    //                 <div key={i} className="space-y-4 mt-2 text-start">
    //                   <h3 className="font-semibold text-[17px] text-white text-center">
    //                     {dropdownItem.heading}
    //                   </h3>
    //                   <ul>
    //                     {dropdownItem.items.map((subItem, j) => (
    //                       <li
    //                         key={j}
    //                         className="hover:text-gray-300 text-[17px] py-2 font-[400] text-center"
    //                       >
    //                         <a href={subItem.link}>{subItem.label}</a>
    //                       </li>
    //                     ))}
    //                   </ul>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         )}
    //       </li>
    //     ))}
    //   </ul>

    //   <div className="hidden md:block lg:di">
    //     <a
    //       href="#_"
    //       className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 border-2 border-white overflow-hidden  font-semibold text-black transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-gray-50 group"
    //     >
    //       <span className="absolute bottom-0 left-0 w-full  transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>

    //       <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
    //         <FaCircleArrowRight className="w-6 h-6 text-black font-bold" />
    //       </span>
    //       <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
    //         <FaCircleArrowRight className="w-6 h-6 text-white font-bold" />
    //       </span>
    //       <span
    //         className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-semibold sm:text-sm md:text-base lg:text-lg xl:text-xl"
    //       >
    //         Contact Us
    //       </span>
    //     </a>
    //   </div>
    // </nav>

    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 flex justify-between items-center 
    ${
      activeDropdown === 1 ? "transition duration-500" : ""
    } bg-black text-white shadow-md transition-transform duration-500 
    ${isVisible ? "translate-y-0" : "-translate-y-full"} 
    ${
      isScrolled ? "my-2 mx-3 rounded-lg w-full max-w-[98.4%]" : "rounded-none"
    }`}
    >
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold">
        <a href="/" className="flex items-center">
          <img
            src="https://www.dakshinfo.com/images/headerlogo.svg"
            alt="logo"
            className="object-cover lg:h-[40px] xl:h-[60px] md:h-[45px] sm:h-[55px] "
          />
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <IoClose className="text-white text-3xl" />
        ) : (
          <TiThMenu className="text-white text-3xl" />
        )}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMobileMenuOpen
            ? "block absolute left-0 top-full w-full bg-black px-6 py-4 shadow-lg space-y-4 translate-x-0 opacity-100"
            : "hidden"
        } md:flex md:space-x-5 lg:space-x-5 xl:space-x-8 transition-transform duration-500`}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
            className="border-b border-gray-900 md:pb-0 pb-4 sm:border-none last:border-none"
          >
            <a
              href={item.link}
              className="text-white font-medium sm:text-[14px] md:text-[14px] lg:text-[17px] xl:text-[17px] hover:text-gray-400 transition-colors relative group flex items-center justify-between md:justify-start w-full"
            >
              {item.label}

              {item.dropdownItems && (
                <span className="ml-2 md:ml-1 flex items-center">
                  {activeDropdown === index ? (
                    <MdOutlineKeyboardArrowUp className="text-[20px]" />
                  ) : (
                    <MdKeyboardArrowDown className="text-[20px]" />
                  )}
                </span>
              )}

              <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            {/* Dropdown Menu */}
            {item.dropdownItems && activeDropdown === index && (
              <div
                className="absolute z-50 left-0 rounded-lg right-0 transition-opacity duration-500 bg-black mt-4"
                style={{ animation: "sliceDown 1s ease-in-out forwards" }}
              >
                <div
                  className={`container mx-auto justify-center my-6 pt-6 pb-6 rounded-lg grid ${
                    item.label === "Technologies"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-4"
                  } text-sm px-4 sm:px-10 md:px-20 lg:px-24 xl:px-32 gap-4`}
                >
                  {item.dropdownItems.map((dropdownItem, i) => (
                    <div key={i} className="space-y-3 text-start">
                      <h3 className="font-semibold text-[16px] md:text-[17px] text-white text-center">
                        {dropdownItem.heading}
                      </h3>
                      <ul>
                        {dropdownItem.items.map((subItem, j) => (
                          <li
                            key={j}
                            className="hover:text-gray-300 text-[15px] md:text-[17px] py-2 font-normal text-center"
                          >
                            <a href={subItem.link}>{subItem.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div className="hidden lg:block sm:hidden md:hidden">
        <a
          href="#_"
          className="relative inline-flex items-center justify-start py-2 sm:py-3 pl-4 pr-10 sm:pr-12 border-2 border-white overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded-full hover:pl-8 hover:pr-6 bg-gray-50 group"
        >
          <span className="absolute bottom-0 left-0 w-full transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>

          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <FaCircleArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-black font-bold" />
          </span>
          <span className="absolute left-0 pl-2 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <FaCircleArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-white font-bold" />
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-semibold sm:text-[14px] md:text-[14px] lg:text-[17px] xl:text-[17px]">
            Contact Us
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
