// import React, { useState } from "react";
// import { TiThMenu } from "react-icons/ti";
// import { IoMdArrowDropright } from "react-icons/io";

// import logoPath from "../assets/logo.svg";
// import {
//   MdKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
//   MdOutlineArrowRight,
// } from "react-icons/md";
// import { IoClose } from "react-icons/io5";
// import skype from "../assets/skype.png";
// import mail from "../assets/email.png";
// import phone from "../assets/phone.png";

// import Link from "next/link";
// import Image from "next/image";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   const navbarData = [
//     { label: "Home", link: "/" },
//     { label: "About Us", link: "/about" },
//     {
//       label: "Our Services",
//       icon: <IoMdArrowDropright />,
//       dropdown: [
//         {
//           heading: "WEB DEVELOPMENT",
//           items: [
//             { label: "Web Designing & Development", link: "#" },
//             { label: "E-commerce Website Design", link: "#" },
//             { label: "Graphic Design Service", link: "#" },
//             { label: "WordPress Development Service", link: "#" },
//           ],
//         },
//         {
//           heading: "APP DEVELOPMENT",
//           items: [
//             { label: "Android App Development", link: "#" },
//             { label: "Hybrid App Development", link: "#" },
//             { label: "iOS App Development", link: "#" },
//           ],
//         },
//         {
//           heading: "DIGITAL MARKETING",
//           items: [
//             { label: "Digital Marketing", link: "#" },
//             { label: "SEO Service", link: "#" },
//             { label: "SMO Services", link: "#" },
//             { label: "Email Marketing", link: "#" },
//           ],
//         },
//         {
//           heading: "MOBILE",
//           items: [
//             { label: "Voice Call", link: "#" },
//             { label: "IVR", link: "#" },
//             { label: "Short/Long Code", link: "#" },
//           ],
//         },

//       ],
//     },
//     { label: "Pricing", link: "/pricing" },
//     { label: "Career", link: "/career" },
//   ];

//   return (
//     <nav className="fixed top-0 z-50  w-full bg-black py-3">
//       <div className="relative flex justify-between items-center py-3 px-6 md:px-14">
//         <a href="/" className="flex items-center">
//           <Image src={logoPath} alt="Logo" className="h-14 w-60" />
//         </a>

//         <button
//           className="md:hidden text-2xl focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           {isMobileMenuOpen ? (
//             <IoClose className="text-green-900 text-4xl" />
//           ) : (
//             <TiThMenu className="text-green-900 text-4xl" />
//           )}
//         </button>

//         <div className="hidden md:flex space-x-14 items-center ">
//           {navbarData.map((menu, index) => (
//             <div key={index} className="group inline-block">
//               <div
//                 className="flex items-center cursor-pointer"
//                 onMouseEnter={() => toggleDropdown(index)}
//                 onClick={() => toggleDropdown(index)}
//               >
//                 <span className="text-white font-[500] text-[16px] hover:text-gray-400 transition-colors relative group">
//                   {menu.label}
//                   <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"></span>
//                 </span>

//                 {menu.dropdown && (
//                   <>
//                     {activeDropdown === index ? (
//                       <MdOutlineKeyboardArrowUp className="text-[23px] text-white" />
//                     ) : (
//                       <MdKeyboardArrowDown className="text-[23px] text-white" />
//                     )}
//                   </>
//                 )}
//               </div>

//               {menu.dropdown && activeDropdown === index && (
//                 <div
//                 className={`absolute top-full left-0 w-full bg-black shadow-lg z-50 pt-4 overflow-hidden transform transition-all ease-in-out duration-300 ${
//                   activeDropdown === index
//                     ? "translate-y-0 opacity-100"
//                     : "-translate-y-full opacity-0 pointer-events-none"
//                 }`}
//                   onMouseLeave={() => toggleDropdown(index)}
//                 >
//                   <div className="w-full">
//                     <div className="grid grid-cols-4 px-60 pt-14 pb-5 gap-5">
//                       {menu.dropdown.map((dropdownItem, idx) => (
//                         <div key={idx} className="text-center">
//                           <h3 className="text-gray-300 font-medium text-[16px] pb-2">
//                             {dropdownItem.heading}
//                           </h3>
//                           <ul className="space-y-5 pl-0 py-3">
//                             {dropdownItem.items.map((item, i) => (
//                               <li
//                                 key={i}
//                                 className="flex justify-center items-center space-x-2"
//                               >
//                                 <span>{item.icon}</span>
//                                 <a
//                                   href={item.link}
//                                   className="hover:text-gray-500 text-white font-[600] no-underline text-[15px]"
//                                 >
//                                   {item.label}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

//             </div>
//           ))}
//         </div>

//         <div>
//         <Link href="/contactUs">
//             <div className="text-[15px] bg-white text-black font-medium px-6 py-3 rounded-full">
//               Contact us
//             </div>
//           </Link>
//         </div>
//       </div>

//       <div
//         className={`absolute top-0 left-0 h-96 pt-8 w-full bg-blue-100 shadow-lg overflow-hidden transform transition-transform duration-700 ${
//           isMobileMenuOpen
//             ? "translate-y-0 opacity-100"
//             : "-translate-y-full opacity-0"
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4 text-2xl text-black focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           <IoClose className="text-black text-4xl" />
//         </button>

//         <ul className="space-y-2 p-4">
//           {navbarData.map((menu, index) => (
//             <li key={index} className="border-b border-gray-300 py-1">
//               <div className="flex justify-between items-center">
//                 <a
//                   href={menu.link}
//                   className="text-black font-semibold no-underline"
//                 >
//                   {menu.label}
//                 </a>
//                 {menu.label === "Our Services" && (
//                   <MdOutlineArrowRight className="text-black text-2xl" />
//                 )}
//               </div>
//             </li>
//           ))}
//           <li className="pt-16 flex gap-4 items-center">
//             <Image src="/assets/phone.png" alt="Phone" height={30} width={30} />
//             <Image src="/assets/email.png" alt="Mail" height={30} width={30} />
//             <Image src="/assets/skype.png" alt="Skype" height={30} width={30} />
//             <Image
//               src="/assets/whatsaap.png"
//               alt="WhatsApp"
//               height={30}
//               width={30}
//             />
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import logoPath from "../assets/logo.svg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = 0; 
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY < lastScrollY && currentScrollY > 10) {
        
        setIsScrolled(true);
      } else {
        
        setIsScrolled(false);
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

  return (
  
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-5 flex justify-between items-center bg-black text-white shadow-md transition-all duration-500 ${
        isScrolled
          ? "my-2 mx-4 rounded-lg w-[97.7%]  "
          : " rounded-none"
      }`}
      // style={{ transform: isScrolled ? "translateY(0)" : "translateY(-10px)",
        
      //  }}
    >
      
      <div className="text-2xl font-bold">
        <a href="/" className="flex items-center">
          {/* <Image src={logoPath} alt="Logo" className="h-14 w-60" /> */}
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
            onMouseEnter={() => {
              if (item.dropdownItems) {
                setShowDropdown(true);
                setActiveDropdown(index);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdownItems) {
                setShowDropdown(false);
                setActiveDropdown(null);
              }
            }}
          >
            <a
              href={item.link}
              className="text-white font-medium text-[16px] hover:text-gray-400 transition-colors relative flex items-center"
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

            
            {item.dropdownItems && (
              <div
                className={`fixed top-[80px] left-0 w-full bg-black py-6 shadow-lg z-50 transition-all duration-500 ${
                  showDropdown && activeDropdown === index
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform -translate-y-5"
                }`}
              >
                <div className="container mx-auto grid grid-cols-4 gap-8 text-sm px-10 md:px-40">
                  {item.dropdownItems.map((dropdownItem, i) => (
                    <div key={i} className="space-y-4 text-center">
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
          <div className="text-[15px] bg-white text-black font-medium px-8 py-3 rounded-full">
            Contact us
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

 