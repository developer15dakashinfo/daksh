import React from "react";

const SlidingButton = ({
  text = "Default Text",
  onClick,
  arrowPosition = "-40px",
}) => {
  return (
    <div className="flex bg-black">
    <div className="relative group w-44 h-12 overflow-hidden">
     
      <div className="absolute inset-0 flex items-center transition-transform duration-1000 group-hover:translate-x-full z-10">
        
        <button
          className="h-12 w-32 mr-2 bg-white text-black font-medium rounded-full flex items-center justify-center"
          onClick={onClick}
        >
         <p className=" font-medium text-[14px]"> {text}</p>
        </button>
        
        <div className="h-12 w-12 rounded-full border-2 border-white bg-white flex items-center justify-center text-black font-bold">
          →
        </div>
      </div>
  
      
      <div className="absolute inset-0 flex items-center justify-end transition-transform duration-500 group-hover:translate-x-0 translate-x-full z-0">
        <div className="h-12 w-12 rounded-full border-2 border-white bg-white flex items-center justify-center text-black font-bold">
          →
        </div>
        <button
          className="h-12 w-32 bg-white text-black font-medium rounded-full flex items-center justify-center"
          onClick={onClick}
        >
          {text}
        </button>
        
      </div>
    </div>
  </div>
  
  );
};

export default SlidingButton;


