import React, { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { MdOutlineArrowRight } from "react-icons/md";
import logo from "../assets/logo.jpeg";
// import whatsapp from "../assets/whatsaap.png";
// import skype from "../assets/skype.png";
// import mail from "../assets/email.png";
// import phone from "../assets/phone.png";
// import bg from "../assets/bg.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navbarData = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    {
      label: "Our Services",
      icon: <IoMdArrowDropright />,
      dropdown: [
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
        {
          heading: "FOR SALES INQUIRY",
          items: [
            {
              icon: <img src={""} alt="Phone" width={20} />,
              label: "+91-92140-01234",
              link: "#",
            },
            {
              icon: <img src={""} alt="Phone" width={20} />,
              label: "+91-97729-77271",
              link: "#",
            },
            {
              icon: <img src={""} alt="Phone" width={20} />,
              label: "+91-99833-88855",
              link: "#",
            },
            {
              icon: <img src={"mail"} alt="Mail" width={20} />,
              label: "info@dakshinfo.com",
              link: "#",
            },
            {
              icon: <img src={"skype"} alt="Skype" width={20} />,
              label: "Skype",
              link: "#",
            },
          ],
        },
      ],
    },
    { label: "Pricing", link: "/pricing" },
    { label: "Career", link: "/career" },
  ];

  return (
    <nav className="fixed sticky top-0 z-50 shadow-sm bg-white">
      <div className="max-w-screen-2xl relative mx-auto flex justify-between items-center py-3 px-6 md:px-14">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14" />
        </a>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <IoClose className="text-blue-900 text-4xl" />
          ) : (
            <TiThMenu className="text-blue-900 text-4xl" />
          )}
        </button>

        <div className="hidden md:flex space-x-6 items-center">
          {navbarData.map((menu, index) => (
            <div
              key={index}
              className="group inline-block"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center text-center cursor-pointer">
                <span className="text-black  no-underline px-2 font-semibold text-[15px] hover:text-blue-800 transition-colors">
                  {menu.label}
                </span>
                {menu.dropdown && <FiPlus className="font-[900] text-[16px]" />}
              </div>

              {menu.dropdown && activeDropdown === index && (
                <div
                  className={`absolute max-w-screen-xl top-20 backdrop-blur-lg bg-white/30 text-black rounded-xl shadow-sm z-50 w-screen left-20 pt-4`}

                >
                  <div className="max-w-screen-lg mx-auto">
                    <div className="grid grid-cols-5">
                      {menu.dropdown.map((dropdownItem, idx) => (
                        <div key={idx} className="text-left gap-2 items-center">
                          <h3 className="font-semibold text-[17px] pb-2 border-b-2 border-gray-400">
                            {dropdownItem.heading}
                          </h3>
                          <ul className="space-y-4 pl-0 pt-3 opacity-100">
                            {dropdownItem.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center space-x-2"
                              >
                                <span>{item.icon}</span>
                                <a
                                  href={item.link}
                                  className="hover:text-teal-900 text-black font-[600] no-underline text-[14px] block items-center space-x-2"
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center space-x-4">
            {!isSearchActive ? (
              <button onClick={() => setIsSearchActive(true)}>
                <IoSearch className="text-xl" />
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 bg-blue-50 text-black rounded-full focus:outline-none border border-gray-200"
                />
                <button onClick={() => setIsSearchActive(false)}>
                  <IoClose className="text-xl" />
                </button>
              </div>
            )}
          </div>

          <div className="hover:bg-teal-900 hover:py-2 rounded-full transition-all duration-300 ease-in-out text-center">
            {" "}
            <a
              href=""
              className="relative px-12 py-[4px] rounded-full bg-teal-900 hover:blur-none transition-all duration-300 ease-in-out group"
              style={{ filter: "blur(7px)" }}
            >
              &nbsp;
            </a>
            <p
              className="absolute text-[15px] text-white font-semibold bottom-[20px] right-[75px] transition-all duration-300 ease-in-out"
              style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.5)" }}
            >
              Contact us
            </p>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 h-96 pt-8 w-full backdrop-blur-lg bg-white/30 shadow-lg overflow-hidden transform transition-transform duration-700 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-black focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <IoClose className="text-black text-4xl" />
        </button>

        <ul className="space-y-2 p-4">
          {navbarData.map((menu, index) => (
            <li key={index} className="border-b border-gray-300 py-1">
              <div className="flex justify-between items-center">
                <a
                  href={menu.link}
                  className="text-black font-semibold no-underline"
                >
                  {menu.label}
                </a>
                {menu.label === "Our Services" && (
                  <MdOutlineArrowRight className="text-black text-2xl" />
                )}
              </div>
            </li>
          ))}
          {/* <li className="pt-16 flex gap-4 items-center">
            <img src={phone} alt="Phone" height={30} width={30} />
            <img src={mail} alt="Mail" height={30} width={30} />
            <img src={skype} alt="Skype" height={30} width={30} />
            <img src={whatsapp} alt="WhatsApp" height={30} width={30} />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
