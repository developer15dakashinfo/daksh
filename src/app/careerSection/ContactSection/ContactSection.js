import SlidingButton from "@/app/SlidingButton/SlidingButton";
import React from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG,FaSkype, FaLinkedinIn } from 'react-icons/fa';
import { LuInstagram } from "react-icons/lu";


const ContactSection = () => {
  const iconColors = ["bg-blue-500", "bg-blue-700", "bg-sky-500", "bg-gradient-to-tr from-yellow-400 via-orange-500 via-pink-500 to-violet-600", "bg-blue-600"];
  return (
<div
  className="relative w-full min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-6 lg:px-12 py-12"
  style={{
    backgroundImage:
      "url('https://explore.zoom.us/media/hero-developer2x.png')",
  }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
    {/* Contact Information */}
    <div className="text-white text-center md:text-left">
      <h4 className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent text-lg md:text-xl">
        LOREM IPSUM
      </h4>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
        Get in touch.
      </h1>
      <div className="mt-6 space-y-4 text-sm md:text-base">
        <p>Phone: +1 800 755 60 20</p>
        <p>Email: [email protected]</p>
        <p>254 Walt Whitman Road Brooklyn, NY 11219</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-4 mt-6">
        {[
          FaTwitter,
          FaFacebookF,
          FaSkype,
          LuInstagram,
          FaLinkedinIn,
        ].map((Icon, idx) => (
          <a key={idx} href="#" className="p-1 rounded-full">
            <div className={`p-3 rounded-full ${iconColors[idx]}`}>
              <Icon className="text-xl text-white" />
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* Contact Form */}
    <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
      <form className="space-y-4 md:space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 md:p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 md:p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 md:p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        {/* <button
          type="submit"
          className="w-full bg-emerald-600 text-white text-lg font-bold py-3 rounded-full hover:bg-yellow-600 transition"
        >
          SEND MESSAGE
        </button> */}
        <div className="flex justify-center mt-8 mb-10">
          <SlidingButton
            text="Explore More"
            bgColor="bg-black"
            textcolor="text-white"
            arrowBgColor = "bg-black" 
  arrowTextColor = "text-white"
          />
        </div>
        
      </form>
    </div>
  </div>
</div>

  

  );
};

export default ContactSection;
