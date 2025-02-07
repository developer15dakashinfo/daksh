

import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const SlidingButton = ({
  text = "Default Text",
  onClick,
  textcolor = "text-black",
  bgColor = "bg-white",
  arrowBgColor = "bg-gray-300",
  arrowTextColor = "text-black",
}) => {
  return (
    <div className="flex">
      <div className="relative group w-44 h-14 overflow-hidden">
        
        <div className="absolute inset-0 flex items-center transition-transform duration-500 group-hover:-translate-x-full z-10">
          <button
            className={`h-12 w-40 mr-2 text-black font-medium rounded-full flex items-center justify-center ${bgColor}`}
            onClick={onClick}
          >
            <p className={`font-bold text-[16px] ${textcolor}`}>{text}</p>
          </button>

          
          <div
            className={`h-12 w-16 rounded-full flex items-center justify-center text-black font-bold ${arrowBgColor} ${arrowTextColor}`}
          >
            <FaArrowRight />
          </div>
        </div>

        
        <div className="absolute inset-0 flex items-center justify-end transition-transform duration-500 translate-x-full group-hover:translate-x-0 z-0">
          <button
            className={`h-12 w-44  text-black font-medium rounded-full flex items-center justify-center ${bgColor}`}
            onClick={onClick}
          >
            <p className={`font-bold text-[16px] ${textcolor}`}>{text}</p>
            <div
              className={`h-12 w-12 text-lg rounded-full flex items-center justify-center text-black font-bold  ${arrowTextColor}`}
            >
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlidingButton;
