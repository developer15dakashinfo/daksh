import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [activeField, setActiveField] = useState("");

  const handleFocus = (fieldName) => {
    setActiveField(fieldName); 
  };
  const handleBlur = () => {
    setActiveField(""); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      <main className="bg-white w-full max-w-7xl p-8 rounded-lg shadow-lg mt-8">
      <div className="px-20 pt-10">
      <div className="w-3/4">
        <h4 className="text-[15px] font-[500] text-left text-gray-800 mb-3">
          Contact Us
        </h4>
        <h1 className="text-6xl font-[400] text-left text-gray-800 mb-6">
          Do you have a project in mind? Write to us!
        </h1>
      </div>
      <form className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First Name *"
            className={`w-full py-2 px-4 border rounded-full focus:outline-none ${
              activeField === "firstName"
                ? "focus:ring-1 focus:ring-black"
                : "focus:ring-1 focus:ring-green-900"
            }`}
            onFocus={() => handleFocus("firstName")}
            onBlur={handleBlur}
          />
          <input
            type="text"
            placeholder="Last Name *"
            className={`w-full py-2 px-4 border rounded-full focus:outline-none ${
              activeField === "lastName"
                ? "focus:ring-1 focus:ring-black"
                : "focus:ring-1 focus:ring-green-900"
            }`}
            onFocus={() => handleFocus("lastName")}
            onBlur={handleBlur}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone no *"
            className={`w-full py-2 px-4 border rounded-full focus:outline-none ${
              activeField === "phone"
                ? "focus:ring-1 focus:ring-black"
                : "focus:ring-1 focus:ring-green-900"
            }`}
            onFocus={() => handleFocus("phone")}
            onBlur={handleBlur}
          />
          <input
            type="email"
            placeholder="E-mail *"
            className={`w-full py-2 px-4 border rounded-full focus:outline-none ${
              activeField === "email"
                ? "focus:ring-1 focus:ring-black"
                : "focus:ring-1 focus:ring-green-900"
            }`}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
          />
        </div>
        <textarea
          rows="4"
          placeholder="Your message ..."
          className={`w-full py-2 px-4 border rounded-2xl focus:outline-none ${
            activeField === "message"
              ? "focus:ring-1 focus:ring-black"
              : "focus:ring-1 focus:ring-green-900"
          }`}
          onFocus={() => handleFocus("message")}
          onBlur={handleBlur}
        ></textarea>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="privacy"
            className="w-4 h-4 focus:ring-green-900"
          />
          <label htmlFor="privacy" className="text-gray-600 text-sm">
            I confirm that I have read the information on data processing.
          </label>
        </div>
        <button
          type="submit"
          className="w-28 bg-green-900 text-white py-2 rounded-full hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-900 relative"
          style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.7)" }}
        >
          <span className="text-[15px] font-semibold transition-all duration-300 ease-in-out">
            Send
          </span>
        </button>
      </form>
    </div>
        <div className="flex items-center justify-end space-x-6 px-20">
          <p className="text-gray-600 text-[12px]">OR CALL US</p>
          <div className="flex items-center px-6 py-3 gap-3 rounded-full shadow-lg bg-gray-100 hover:bg-green-900 hover:text-white transition-all duration-300">
            <FaPhoneAlt className="text-xl transition-all duration-300" />
            <span className="font-medium text-xl transition-all duration-300">
              9983388855
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
