

// import React from "react";
// import { FaArrowRight } from "react-icons/fa6";

// const SlidingButton = ({
//   text = "Default Text",
//   onClick,
//   textcolor = "text-black",
//   bgColor = "bg-white",
//   arrowBgColor = "bg-gray-300",
//   arrowTextColor = "text-black",
// }) => {
//   return (
//     <div className="flex">
//       <div className="relative group w-44 h-14 overflow-hidden">
//         {/* First Sliding Section - Initially visible */}
//         <div className="absolute inset-0 flex items-center transition-transform duration-500 group-hover:-translate-x-full z-10">
//           <button
//             className={`h-12 w-40 mr-2 text-black font-medium rounded-full flex items-center justify-center ${bgColor}`}
//             onClick={onClick}
//           >
//             <p className={`font-bold text-[16px] ${textcolor}`}>{text}</p>
//           </button>

//           {/* Arrow with Custom Background */}
//           <div
//             className={`h-12 w-16 rounded-full flex items-center justify-center text-black font-bold ${arrowBgColor} ${arrowTextColor}`}
//           >
//             <FaArrowRight />
//           </div>
//         </div>

//         {/* Second Sliding Section - Initially hidden */}
//         <div className="absolute inset-0 flex items-center justify-end transition-transform duration-500 translate-x-full group-hover:translate-x-0 z-0">
//           <button
//             className={`h-12 w-40  text-black font-medium rounded-full flex items-center justify-center ${bgColor}`}
//             onClick={onClick}
//           >
//             <p className={`font-bold text-[16px] ${textcolor}`}>{text}</p>
//             <div
//               className={`h-12 w-12 text-lg rounded-full flex items-center justify-center text-black font-bold  ${arrowTextColor}`}
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
  arrowBgColor = "bg-gray-300",
  arrowTextColor = "text-black",
}) => {
  return (
    <div className="flex">
      <div className="relative flex group w-48 h-14 overflow-hidden">
        {/* Button container */}
        <button
          className={`h-[40px] w-32 text-black gap-5 font-medium rounded-full flex items-center justify-center transition-all duration-500 ${bgColor} group-hover:pr-l`}
          onClick={onClick}
        >
         
          <p className={`font-bold text-[16px]  ${textcolor}`}>
            {text}
          </p>

          
         
        </button>
        <span
            className={`h-10 w-10 flex items-center justify-center rounded-full transition-all duration-500 group-hover:translate-x-2 ${arrowBgColor} ${arrowTextColor}`}
          >
            <FaArrowRight />
          </span>
      </div>
    </div>
  );
};

export default SlidingButton;
