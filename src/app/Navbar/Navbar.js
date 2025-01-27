"use client"; // Ensure this is a client component

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../logo/logo";
import Button from "../Button/Button";
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
          heading: "APP DEVELOPMENT",
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
            { label: "IVR", link: "/websiteDesign/api" },
            { label: "Voice Call", link: "/websiteDesign/api" },

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
      className={`fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-20 flex justify-between items-center ${
        activeDropdown === 1 ? "pb-[300px] transition duration-500" : ""
      } bg-black text-white shadow-md transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "my-2 mx-3 rounded-lg w-full max-w-[98.2%]"
          : "rounded-none"
      }`}
    >
      <div className="text-2xl font-bold">
        <a href="/" className="flex items-center">
          <Logo />
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
        } md:flex space-x-8 md:space-x-12`}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href={item.link}
              className="text-white font-medium text-[16px]  hover:text-gray-400 transition-colors relative flex items-center"
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
              <span className="absolute left-0  right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>

            {item.dropdownItems && activeDropdown === index && (
              <div
                className={`absolute mx-7 w-[99vw] z-50 transition-opacity duration-500`}
                style={{
                  marginTop: "2px",
                  animation: "sliceDown 1s ease-in-out forwards",
                }}
              >
                <div className="container justify-center mt-10 aligin-item-top rounded-lg mx-auto grid grid-cols-4 w-[97.7%]  gap-8 text-sm px-10 md:px-40">
                  {item.dropdownItems.map((dropdownItem, i) => (
                    <div key={i} className="space-y-4 mt-14 text-center">
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
        <SlidingButton text="Contact Us"/>
      </div>
    </nav>
  );
};

export default Navbar;
