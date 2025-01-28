import React from "react";

const SlidingButton = ({
  text = "Default Text",
  onClick,
  textcolor = "text-black",
  arrowPosition = "-40px",
  bgColor = "bg-white",
}) => {
  return (
    <div className="flex" >
    <div className="relative group w-44 h-14 overflow-hidden">
     
      <div className="absolute pb-3 inset-0 flex items-center transition-transform duration-1000 group-hover:translate-x-full z-10">
        
        <button
          className={`h-10 w-32 mr-2 text-black font-medium rounded-full flex items-center justify-center  ${bgColor}`}
          onClick={onClick}
        >
         <p className={` font-bold text-[14px]  ${textcolor}`}> {text}</p>
        </button>
        
        <div className="h-10 w-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-black font-bold">
          →
        </div>
      </div>
  
      
      <div className="absolute inset-0 flex items-center justify-end transition-transform duration-500 group-hover:translate-x-0 translate-x-full z-0">
        <div className="h-10 w-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-black font-bold">
          →
        </div>
        <button
           className={`h-10 w-32 mr-2 text-black font-medium rounded-full flex items-center justify-center  ${bgColor}`}
          onClick={onClick}
        >
        <p className={` font-bold text-[14px]  ${textcolor}`}> {text}</p>
        </button>
        
      </div>
    </div>
  </div>
  
  );
};

export default SlidingButton;


