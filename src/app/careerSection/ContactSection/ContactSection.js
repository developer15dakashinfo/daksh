import React from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG,FaSkype, FaLinkedinIn } from 'react-icons/fa';
import { LuInstagram } from "react-icons/lu";


const ContactSection = () => {
  return (
    <div
      className="relative w-full min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage:
          "url('https://explore.zoom.us/media/hero-developer2x.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        <div className="text-white">
          <h4 className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">LOREM IPSUM</h4>
          <h1 className="text-5xl font-bold leading-tight mt-4">
            Get in touch.
          </h1>
          <div className="mt-8 space-y-4">
            <p>Phone: +1 800 755 60 20</p>
            <p>Email: [email protected]</p>
            <p>254 Walt Whitman Road Brooklyn, NY 11219</p>
          </div>
          <div className="flex space-x-2 mt-6">
            <div className="flex space-x-2 mt-4 justify-center">
              <a
                href="#"
                className="relative inline-block rounded-full p-1 group"
              >
                <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                  <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                    <FaTwitter className="text-xl text-white" />
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="relative inline-block rounded-full p-1 group"
              >
                <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                  <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                    <FaFacebookF className="text-xl text-white" />
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="relative inline-block rounded-full p-1 group"
              >
                <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                  <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                    <FaSkype className="text-xl text-white" />
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="relative inline-block rounded-full p-1 group"
              >
                <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                  <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                    <LuInstagram className="text-xl text-white" />
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="relative inline-block rounded-full p-1 group"
              >
                <div className="bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px] rounded-full">
                  <div className="flex items-center justify-center bg-black rounded-full p-3 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-600 transition-all duration-300">
                    <FaLinkedinIn className="text-xl text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white text-lg font-bold py-3 rounded-full hover:bg-yellow-600 transition"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
