"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";
import dakshlogo from "../assets/headerlogo.svg";
import "./Navbar.css";
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
            { label: "SEO Service", link: "/DigitalMarketing/seo" },
            { label: "SMO Services", link: "/DigitalMarketing/smo" },
            {
              label: "Email Marketing",
              link: "/DigitalMarketing/emailMarketing",
            },
            { label: "PCC Services", link: "/DigitalMarketing/ppcservices" },
            {
              label: "Social Media Marketing",
              link: "/DigitalMarketing/smm",
            },
          ],
        },
        {
          heading: "MOBILE MARKETING",
          items: [
            { label: "Bulk SMS", link: "/MobileMarketing/bulksms" },
            { label: "RCS", link: "/MobileMarketing/rcs" },
            { label: "IVR", link: "/MobileMarketing/ivr" },
            { label: "Official Whatsapp API", link: "/MobileMarketing/official_whatsaap_api" },
            { label: "Voice Call", link: "/MobileMarketing/voice_call" },
            { label: "Calling Agent", link: "/MobileMarketing/Calling_agent" },
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
   
  ];

  return (
    <div className="mx-auto">
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-4 px-4 flex justify-between items-center 
          bg-black text-white shadow-md transition-transform duration-500 
          ${isVisible ? "translate-y-0" : "-translate-y-full"} 
          ${isScrolled ? "my-2 rounded-lg" : "rounded-none"}`}
      >
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold">
          <a href="/" className="flex items-center">
            <img
              src="https://www.dakshinfo.com/images/headerlogo.svg"
              alt="logo"
              className="object-cover h-[30px] sm:h-[50px] md:h-[45px] lg:h-[50px]"
            />
          </a>
        </div>

     

        {/* Nav Items - Desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.link}
                className="flex items-center gap-1 font-medium text-[13px] lg:text-[15px] xl:text-[16px] hover:text-gray-400 transition"
              >
                {item.label}
                {item.dropdownItems && (
                  <>
                    {activeDropdown === index ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </>
                )}
              </a>

             {/* Dropdown */}
{item.dropdownItems && activeDropdown === index && (
  <div className="absolute left-1/2 top-full  w-max transform -translate-x-1/2 bg-white text-black rounded-lg shadow-lg z-50 animate-fadeIn">
    <div
      className={`grid gap-4 p-6 text-sm ${
        item.label === "Technologies"
          ? "grid-cols-2 sm:grid-cols-3"
          : "grid-cols-2 sm:grid-cols-4"
      }`}
    >
      {item.dropdownItems.map((dropdownItem, i) => (
        <div key={i} className="text-start space-y-3">
          <h3 className="font-semibold text-[14px] lg:text-[15px] text-center">
            {dropdownItem.heading}
          </h3>
          <ul className="space-y-2 text-center">
            {dropdownItem.items.map((subItem, j) => (
              <li
                key={j}
                className="hover:text-gray-900 text-[14px] hover:underline"
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
         <div className=" flex items-center gap-3">
          <a
            href="contact"
            className="relative inline-flex items-center justify-start py-2 gap-2  pl-4 pr-10 sm:pr-12 border-2 border-white overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded-full hover:pl-8 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>

            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <FaCircleArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-black font-bold" />
            </span>
            <span className="absolute left-0 pl-2 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <FaCircleArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-white font-bold" />
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-semibold sm:text-[10px] md:text-[10px] lg:text-[15px] xl:text-[15px]">
              Contact Us
            </span>
          </a>

             {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <IoClose /> : <TiThMenu />}
        </button>
        </div>


        {/* Nav Items - Mobile */}
        {isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white text-black px-6 py-4 md:hidden">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-700 py-3 last:border-none"
              >
                <a
                  href={item.link}
                  className="flex justify-between items-center w-full text-[16px] font-medium"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === index ? null : index
                    )
                  }
                >
                  {item.label}
                  {item.dropdownItems && (
                    <>
                      {activeDropdown === index ? (
                        <MdOutlineKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </>
                  )}
                </a>

                {/* Mobile Dropdown Items */}
                {item.dropdownItems && activeDropdown === index && (
                  <div className="mt-3">
                    {item.dropdownItems.map((dropdownItem, i) => (
                      <div key={i} className="mb-4">
                        <h4 className="text-white font-semibold text-[14px]">
                          {dropdownItem.heading}
                        </h4>
                        <ul className="ml-2 mt-2 space-y-1">
                          {dropdownItem.items.map((subItem, j) => (
                            <li key={j} className="text-[14px] ">
                              <a
                                href={subItem.link}
                                className="text-black-300 hover:text-gray-700 hover:underline "
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
