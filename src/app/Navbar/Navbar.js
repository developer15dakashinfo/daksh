"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";
import logo from "../assets/headerlogo.svg";
import SlidingButton from "../SlidingButton/SlidingButton";
import "./Navbar.css";
import Image from "next/image";
import ExpandButton from "../Expandbutton/Expandbutton";

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
            { label: "Web Designing ", link: "/websiteDesign/webdesigning" },
            { label: "Web Development", link: "/websiteDesign/webdevelopement" },
          ],
        },
        {
          heading: "MOBILE APP DEVELOPMENT",
          items: [
            {
              label: "Android App Development",
              link: "/MobileAppDevelopment",
            },
            {
              label: "iOS App Development",
              link: "/MobileAppDevelopment",
            },
            {
              label: "Flutter App Development",
              link: "/MobileAppDevelopment",
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
            {
              label: "React js",
              link: "/websiteDesign/android_app_development",
            },
            { label: "Wordpress", link: "/websiteDesign/ios_app_development" },
            {
              label: "Laravel",
              link: "/websiteDesign/flutter_app_development",
            },
            {
              label: "Node js",
              link: "/websiteDesign/flutter_app_development",
            },
          ],
        },
        {
          heading: "CUSTOM DEVELOPMENTS",
          items: [
            { label: "Php", link: "/websiteDesign/digitalmarketing" },
            { label: "Java", link: "/websiteDesign/seomarketing" },
            { label: "Figma", link: "/websiteDesign/smomarketing" },
            { label: "Angular js", link: "/websiteDesign/emailmarketing" },
          ],
        },
        {
          heading: "DIGITAL MARKETING",
          items: [
            {
              label: "SEO (Search Engine Optimization)",
              link: "/websiteDesign/digitalmarketing",
            },
            {
              label: "SMO (Social Media Optimization)",
              link: "/websiteDesign/seomarketing",
            },
            { label: "Email Marketing", link: "/websiteDesign/smomarketing" },
            {
              label: "Official Whatsapp API",
              link: "/websiteDesign/emailmarketing",
            },
            {
              label: "RCS (Rich Communication Services)",
              link: "/websiteDesign/emailmarketing",
            },
          ],
        },
      ],
    },
    { label: "About Us", link: "/about" },
    { label: "Career", link: "/careerSection" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-5 px-6 md:px-20 flex justify-between items-center ${
        activeDropdown === 1 ? " transition duration-500" : ""
      } bg-black text-white shadow-md transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "my-2 mx-3 rounded-lg w-full max-w-[98.4%]"
          : "rounded-none"
      }`}
    >
      <div className="text-2xl font-bold ">
        <a href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="h-10" />
        </a>
      </div>

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

      <ul
        className={`${
          isMobileMenuOpen
            ? "block absolute left-0 top-full w-full bg-black px-6 py-4 shadow-lg space-y-[15px] translate-x-0 opacity-100  "
            : "hidden"
        } md:flex md:space-x-8 sm:space-x-6 md:space-y-0 transition-transform duration-500`}

       
        
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
            className="border-b border-gray-900 md:pb-0 pb-5 sm:border-none last:border-none"
          >
            <a
              href={item.link}
              className="text-white font-[500] text-[17px] hover:text-gray-400 transition-colors relative group flex items-center justify-between md:justify-start w-full"
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

            {item.dropdownItems && activeDropdown === index && (
              <div
                className="absolute z-50 left-0 rounded-lg right-0 transition-opacity duration-500 bg-black mt-3"
                style={{ animation: "sliceDown 1s ease-in-out forwards" }}
              >
                <div className="container justify-center my-8 pt-10 pb-10 rounded-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm px-6 md:px-40">
                  {item.dropdownItems.map((dropdownItem, i) => (
                    <div key={i} className="space-y-4 mt-2 text-start">
                      <h3 className="font-semibold text-white">
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
        <SlidingButton
          text="Contact Us"
          bgColor="bg-white"
          textcolor="text-black"
        />
      </div>



    </nav>
  );
};

export default Navbar;
