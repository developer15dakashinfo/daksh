import SlidingButton from "@/app/SlidingButton/SlidingButton";
import React, { useEffect, useState } from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG,FaSkype, FaLinkedinIn } from 'react-icons/fa';
import { LuInstagram } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "Founder of Rubik",
    image: "https://readymadeui.com/team-2.webp",
    review: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 3,
  },
  {
    name: "Mark Adair",
    role: "Founder of Alpha",
    image: "https://readymadeui.com/team-5.webp",
    review: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 4,
  },
  {
    name: "Simon Konecki",
    role: "Founder of Labar",
    image: "https://readymadeui.com/team-4.webp",
    review: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 5,
  }
  ,
  {
    name: "Simon Konecki",
    role: "Founder of Labar",
    image: "https://readymadeui.com/team-4.webp",
    review: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 5,
  }
  ,
  {
    name: "Simon Konecki",
    role: "Founder of Labar",
    image: "https://readymadeui.com/team-4.webp",
    review: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 5,
  }
  ,
  {
    name: "Simon Konecki",
    role: "Founder of Labar",
    image: "https://readymadeui.com/team-4.webp",
    review: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 5,
  }
];

const ContactSectionname = () => {
  const iconColors = ["bg-blue-500", "bg-blue-700", "bg-sky-500", "bg-gradient-to-tr from-yellow-400 via-orange-500 via-pink-500 to-violet-600", "bg-blue-600"];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);
  return (
<>
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

<div className="px-8 font-sans mt-4 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-gray-800 text-2xl font-bold">What our happy clients say</h2>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">Hear from our satisfied customers about their experiences.</p>
      </div>

      <div className="relative flex items-center justify-center mt-8">
        <button onClick={prevSlide} className="absolute left-0 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
          <FaChevronLeft className="text-gray-800" />
        </button>

        <div className="flex space-x-8">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={index} className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative flex flex-col items-center text-center">
              <img src={testimonial.image} className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300" alt={testimonial.name} />
              <h6 className="text-gray-800 text-[15px] font-bold mt-6">{testimonial.name}</h6>
              <p className="mt-1 text-xs text-gray-500">{testimonial.role}</p>
              <p className="text-gray-800 text-sm leading-relaxed mt-4">{testimonial.review}</p>
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className={`w-4 ${starIndex < testimonial.rating ? 'fill-blue-600' : 'fill-gray-300'}`} viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="absolute right-0 bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
          <FaChevronRight className="text-white" />
        </button>
      </div>
    </div>
</>

  

  );
};

export default ContactSectionname;
