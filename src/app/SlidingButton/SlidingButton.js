// import React from "react";
// import { FaArrowRight } from "react-icons/fa6";

// const SlidingButton = ({
//   text = "Default Text",
//   onClick,
//   textcolor = "text-black",
//   bgColor = "bg-white",
//   arrowBgColor = "bg-white", 
//   arrowTextColor = "text-black",
// }) => {
//   return (
//     <div className="flex">
//       <div className="relative group w-44 h-14 overflow-hidden">
//         {/* First Sliding Section */}
//         <div className="absolute inset-0 flex items-center transition-transform duration-1000 group-hover:translate-x-full z-10">
//           <button
//             className={`h-12 w-36 mr-2 text-black font-medium rounded-full flex items-center justify-center ${bgColor}`}
//             onClick={onClick}
//           >
//             <p className={`font-bold text-[16px] ${textcolor}`}>{text}</p>
//           </button>

//           {/* Arrow with Custom Background */}
//           <div
//             className={`h-12 w-12 rounded-full border-2 border-white flex items-center justify-center text-black font-bold ${arrowBgColor} ${arrowTextColor}`}
//           >
//             <FaArrowRight />
//           </div>
//         </div>

//         {/* Second Sliding Section */}
//         <div className="absolute inset-0  flex items-center justify-end transition-transform duration-500 group-hover:translate-x-0 translate-x-full z-0">
//           <button
//             className={`h-12 w-40 gap-2 text-black font-medium rounded-full flex items-center justify-center ${bgColor}`}
//             onClick={onClick}
//           >
//             <p className={`font-bold text-[16px] ${textcolor}`}>{text}</p>
//             <div
//               className={`h-8 w-8 text-xl rounded-full border-2 border-black flex items-center justify-center text-white font-bold bg-black ${arrowTextColor}`}
//             >
//               <FaArrowRight />
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlidingButton;

import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const SlidingButton = ({
  text = "Default Text",
  onClick,
  textcolor = "text-black",
  bgColor = "bg-white",
  arrowBgColor = "bg-white",
  arrowTextColor = "text-black",
}) => {
  return (
    <div className="flex">
      <div className="relative group w-40 h-14 overflow-hidden">
        {/* First Sliding Section - Initially visible */}
        <div className="absolute inset-0 flex items-center transition-transform duration-500 group-hover:-translate-x-full z-10">
          <button
            className={`h-12 w-36 mr-2 text-black font-medium rounded-full flex items-center justify-center ${bgColor}`}
            onClick={onClick}
          >
            <p className={`font-bold text-[16px] ${textcolor}`}>{text}</p>
          </button>

          {/* Arrow with Custom Background */}
          <div
            className={`h-12 w-12 rounded-full border-2 border-white flex items-center justify-center text-black font-bold ${arrowBgColor} ${arrowTextColor}`}
          >
            <FaArrowRight />
          </div>
        </div>

        {/* Second Sliding Section - Initially hidden */}
        <div className="absolute inset-0 flex items-center justify-end transition-transform duration-500 translate-x-full group-hover:translate-x-0 z-0">
          <button
            className={`h-12 w-40 gap-2 text-black font-medium rounded-full flex items-center justify-center ${bgColor}`}
            onClick={onClick}
          >
            <p className={`font-bold text-[16px] ${textcolor}`}>{text}</p>
            <div
              className={`h-8 w-8 text-xl rounded-full border-2 border-black flex items-center justify-center text-white font-bold bg-black ${arrowTextColor}`}
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
