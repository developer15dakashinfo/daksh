import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import logoPath from "../assets/logo.svg";
import Logo from "../logo/logo";
// import Logo from "../logo/logo";

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
    { label: "Home", link: "#home" },
    {
      label: "Our Services",
      link: "#services",
      dropdownItems: [
        {
          heading: "WEB DEVELOPMENT",
          items: [
            { label: "Web Designing & Development", link: "#" },
            { label: "E-commerce Website Design", link: "#" },
            { label: "Graphic Design Service", link: "#" },
            { label: "WordPress Development Service", link: "#" },
          ],
        },
        {
          heading: "APP DEVELOPMENT",
          items: [
            { label: "Android App Development", link: "#" },
            { label: "Hybrid App Development", link: "#" },
            { label: "iOS App Development", link: "#" },
          ],
        },
        {
          heading: "DIGITAL MARKETING",
          items: [
            { label: "Digital Marketing", link: "#" },
            { label: "SEO Service", link: "#" },
            { label: "SMO Services", link: "#" },
            { label: "Email Marketing", link: "#" },
          ],
        },
        {
          heading: "MOBILE",
          items: [
            { label: "Voice Call", link: "#" },
            { label: "IVR", link: "#" },
            { label: "Short/Long Code", link: "#" },
          ],
        },
      ],
    },
    { label: "About Us", link: "#about" },
    { label: "Career", link: "#career" },
    { label: "Contact Us", link: "#contact" },
    { label: "Pricing", link: "/pricing" },
  ];
  console.log(activeDropdown);
  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-20 flex justify-between items-center ${
    activeDropdown === 1 ? "pb-[250px] transition duration-900" : ""
  } bg-black text-white shadow-md transition-transform duration-500 ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  } ${isScrolled ? "my-2 mx-3 rounded-lg w-full max-w-[98.2%]" : "rounded-none"}`}
>

      <div className="text-2xl font-bold">
        <a href="/" className="flex items-center">
          {/* <Image src={logoPath} alt="Logo" className="h-14 w-60" /> */}
          <Logo/>
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
                className={`absolute  mx-7 w-[99vw] z-50 transition-opacity duration-2000`}
                style={{
                  marginTop: "2px",
                  animation: "sliceDown 1s ease-in-out forwards",
                }}
              >
                <div className="container items-center justify-center rounded-lg mx-auto grid grid-cols-4 w-[97.7%]  gap-8 text-sm px-10 md:px-40">
                  {item.dropdownItems.map((dropdownItem, i) => (
                    <div key={i} className="space-y-4 mt-4 text-center">
                      <h3 className="font-medium text-white pt-4">
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
        <Link href="/contactUs">
          <div className="text-[15px] bg-white text-black font-medium px-8 rounded-full py-2">
            Contact us
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;