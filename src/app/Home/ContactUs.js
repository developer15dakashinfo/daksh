// import React from 'react'
// import { IoMdMail } from 'react-icons/io'

// const ContactUs = () => {
//   return (
//      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//           <div className="bg-green-900 text-white py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h2 className="text-white uppercase text-sm font-bold mb-4">
//                 Contact Us
//               </h2>
//               <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
//                 Get Customized Solutions, Recommendations, and Estimates for Your
//                 Requirements.
//               </h1>
//               <ul className="space-y-2">
//                 <li className="flex items-center">
//                   <span className="text-green-500 mr-2">✔</span> 100% Confidential
//                 </li>
//                 <li className="flex items-center">
//                   <span className="text-green-500 mr-2">✔</span> We sign NDA
//                 </li>
//               </ul>
//               <hr className="my-6 border-gray-700" />
//               <p className="flex text-sm gap-2">
//                 <IoMdMail className="text-xl" />
//                 <a
//                   href="mailto:info@dakshinfo.com"
//                   className="text-white text-[16px]"
//                 >
//                   info@dakshinfo.com
//                 </a>
//               </p>
//             </div>

//             <div>
//               <h3 className="text-white mb-4 text-[20px]">
//                 Fill out the form and we will contact you
//               </h3>
//               <form className="space-y-3">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <input
//                     type="text"
//                     placeholder="Your Name *"
//                     className="text-sm p-2 w-full rounded border bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address *"
//                     className="text-sm p-2 w-full rounded border bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <input
//                     type="text"
//                     placeholder="Phone Number *"
//                     className="text-sm p-2 w-full rounded border bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Company"
//                     className="text-sm p-2 w-full rounded border bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
//                   />
//                 </div>
//                 <textarea
//                   placeholder="Message *"
//                   rows="4"
//                   className="text-sm p-3 w-full rounded border bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
//                 ></textarea>
//                 <div className="flex items-center">
//                   <input type="checkbox" id="recaptcha" className="mr-2" />
//                   <label htmlFor="recaptcha" className="text-sm text-gray-400">
//                     I'm not a robot
//                   </label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-white hover:bg-blue-600 text-green-900 font-bold rounded"
//                 >
//                   Book A Free Consultation
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default ContactUs

// pages/contact.js

import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      <header className="w-full bg-black flex items-center justify-between px-8 py-4">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </header>

      <main className="bg-white w-full max-w-7xl p-8 rounded-lg shadow-lg mt-8">
        <div className="px-20 py-10">
          <div className=" w-3/4">
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
                className="w-full py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
              />

              <input
                type="text"
                placeholder="Last Name *"
               className="w-full py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone no *"
              className="w-full py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
              />
              <input
                type="email"
                placeholder="E-mail *"
                className="w-full py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Your message ..."
              className="w-full py-2 px-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-900"
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
              className="w-1/6 backdrop-blur-lg  text-white py-3 rounded-full shadow-lg hover:bg-green-900 focus:outline-none focus:ring focus:ring-red-300"
            >
              <div
                
                className="relative px-14 py-[10px] rounded-full bg-teal-900 hover:blur-none transition-all duration-300 ease-in-out group"
                style={{ filter: "blur(7px)" }}
              ></div>
              <p
                className="absolute text-[15px] text-white font-semibold bottom-[30px] right-[70px] transition-all duration-300 ease-in-out"
                style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.7)" }}
              >
                Send
              </p>
            </button>
            
          </form>

          
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-gray-600">OPPURE CHIAMACI</p>
          <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
            <img src="/phone-icon.png" alt="Phone" className="h-6 mr-2" />
            <span className="font-bold text-gray-800">0421 75297</span>
          </div>
        </div>
      </main>

      <footer className="w-full text-center mt-8">
        
      </footer>
    </div>
  );
};

export default Contact;
