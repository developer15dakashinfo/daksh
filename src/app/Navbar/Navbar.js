"use client"; 

import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css"
import logo from "../assets/headerlogo.svg";

import SlidingButton from "../SlidingButton/SlidingButton";


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        setIsScrolled(currentScrollY > 10);
      }

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
            { label: "Web Designing ", link: "/websiteDesign/appdevelopment" },
            { label: "Web Development", link: "/websiteDesign/webdevelopment" },
            
          ],
        },
        {
          heading: "MOBILE APP DEVELOPMENT",
          items: [
            { label: "Android App Development", link: "/websiteDesign/android_app_development"},
            { label: "iOS App Development", link: "/websiteDesign/ios_app_development" },
            { label: "Flutter App Development", link: "/websiteDesign/flutter_app_development" },
          ],
        },
        {
          heading: "DIGITAL MARKETING",
          items: [
            { label: "Digital Marketing",link: "/websiteDesign/digitalmarketing" },
            { label: "SEO Service", link: "/websiteDesign/seomarketing" },
            { label: "SMO Services", link: "/websiteDesign/smomarketing" },
            { label: "Email Marketing", link: "/websiteDesign/emailmarketing" },
          ],
        },
        {
          heading: "MOBILE",
          items: [
            { label: "Bulk SMS", link: "/websiteDesign/bulksms" },
            { label: "RCS", link: "/websiteDesign/rcs" },
            { label: "Official Whatsapp API", link: "/websiteDesign/api" },

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
            { label: "Android ", link: "/websiteDesign/appdevelopment" },
            { label: "IOS", link: "/websiteDesign/webdevelopment" },
            { label: "Flutter", link: "/websiteDesign/webdevelopment" },
            
          ],
        },
        {
          heading: "WEB DEVELOPMENT",
          items: [
            { label: "React js", link: "/websiteDesign/android_app_development"},
            { label: "Wordpress", link: "/websiteDesign/ios_app_development" },
            { label: "Laravel", link: "/websiteDesign/flutter_app_development" },
            { label: "Node js", link: "/websiteDesign/flutter_app_development" },
          ],
        },
        {
          heading: "CUSTOM DEVELOPMENTS",
          items: [
            { label: "Php",link: "/websiteDesign/digitalmarketing" },
            { label: "Java", link: "/websiteDesign/seomarketing" },
            { label: "Figma", link: "/websiteDesign/smomarketing" },
            { label: "Angular js", link: "/websiteDesign/emailmarketing" },
          ],
        },
        {
          heading: "DIGITAL MARKETING",
          items: [
            { label: "SEO (Search Engine Optimization)",link: "/websiteDesign/digitalmarketing" },
            { label: "SMO (Social Media Optimization)", link: "/websiteDesign/seomarketing" },
            { label: "Email Marketing", link: "/websiteDesign/smomarketing" },
            { label: "Official Whatsapp API", link: "/websiteDesign/emailmarketing" },
            { label: "RCS (Rich Communication Services)", link: "/websiteDesign/emailmarketing" },
          ],
        },
        
      ],
    },
    { label: "About Us", link: "/about" },
    { label: "Career", link: "/careerSection" },
    { label: "Contact Us", link: "/contact" },
    { label: "Pricing", link: "/pricing" },
  ];
 
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-20 flex justify-between items-center ${
        activeDropdown === 1 ? " transition duration-500" : ""
      } bg-black text-white shadow-md transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "my-2 mx-3 rounded-lg w-full max-w-[98.4%]"
          : "rounded-none"
      }`}
    >
     <div className="text-2xl font-bold">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" /> 
        </a>
      </div>

      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <IoClose className="text-green-900 text-4xl" />
        ) : (
          <TiThMenu className="text-green-900 text-4xl" />
        )}
      </button>

      <ul
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex space-x-8 md:space-x-8 sm:space-x-4`}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className=""
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href={item.link}
              className="text-white font-[500] text-[17px] sm:text:12px hover:text-gray-400 transition-colors relative group flex items-center"
            >
              {item.label}
              {item.dropdownItems && (
                <>
                  {activeDropdown === index ? (
                    <MdOutlineKeyboardArrowUp className="ml-1 text-[20px]" />
                  ) : (
                    <MdKeyboardArrowDown className="ml-1 text-[20px]" />
                  )}
                </>
              )}
              <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            {item.dropdownItems && activeDropdown === index && (
              <div
                className={`absolute z-50 left-0 rounded-lg right-0 transition-opacity duration-500 `}
                style={{
                  marginTop: "5px",
                  backgroundColor: "black",
                  animation: "sliceDown 1s ease-in-out forwards",
                }}
              >
                <div className="container justify-center my-5 rounded-lg mx-auto grid grid-cols-4 gap-8 text-sm px-10 md:px-40">
                  {item.dropdownItems.map((dropdownItem, i) => (
                    <div key={i} className="space-y-4 mt-10 text-start">
                      <h3 className="font-semibold aligin-top text-white ">
                        {dropdownItem.heading}
                      </h3>
                      <ul>
                        {dropdownItem.items.map((subItem, j) => (
                          <li
                            key={j}
                            className="hover:text-gray-300 py-2 font-semibold"
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

      <div className="hidden md:block">
        <SlidingButton text="Contact Us" bgColor="bg-white" textcolor="text-black"/>
      </div>
    </nav>
  );
};

export default Navbar;