
import React from "react";

const SlidingButton = ({
  text = "Default Text",
  onClick,
  arrowPosition = "-40px",
}) => {
  return (
    <div className="flex items-center justify-center bg-black h-20">
      <div className="relative group w-36 h-12 ">
        
        <button
          className="absolute mr-4 inset-0 flex items-center justify-center bg-white text-black font-medium rounded-full transition-transform duration-500 group-hover:translate-x-full"
          onClick={onClick}
        >
          {text}
        </button>

        
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500`}
        >
          <div
            className={`absolute h-12 w-12 rounded-full border-2 border-white bg-white flex items-center justify-center text-black font-bold transition-transform duration-500 group-hover:translate-x-full`}
            style={{ right: arrowPosition }}
          >
            →
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingButton;


