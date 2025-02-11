// "use client"; // Ensure this runs on the client side
// import { useRouter } from "next/navigation";
// import React from "react";

// const JoinOurTeam = () => {
//   const router = useRouter();

//   const jobs = [
//     { title: "Full-Stack Developer", type: "Full Time", location: "Toledo, USA" },
//     { title: "Senior UX Designer", type: "Full Time", location: "Remote" },
//     { title: "Project Manager", type: "Full Time", location: "Fairfield, USA" },
//     { title: "React Developer", type: "Full Time", location: "Pembroke Pines, USA" },
//   ];

//   return (
//     <div className="bg-black py-16 px-6 sm:px-12 lg:px-24">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-[50px] font-extrabold text-white">Join our team</h2>
//         <p className="text-white mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//           Malesuada tellus vestibulum, commodo pulvinar.
//         </p>
//       </div>
//       <div className="mt-10 space-y-4 max-w-5xl mx-auto">
//         {jobs.map((job, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between bg-white shadow rounded-lg p-8"
//           >
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {job.title}
//               </h3>
//               <p className="text-sm text-gray-500">
//                 {job.type} {job.location && ` • ${job.location}`}
//               </p>
//             </div>
            
//             <button
//               onClick={() => router.push("/careerSection/ApplyForm")}  
//               className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow"
//             >
//               Apply now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JoinOurTeam;


"use client"; // Ensure this runs on the client side
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";

const JoinOurTeam = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility

  const jobs = [
    { title: "Full-Stack Developer", type: "Full Time", location: "Toledo, USA" },
    { title: "Senior UX Designer", type: "Full Time", location: "Remote" },
    { title: "Project Manager", type: "Full Time", location: "Fairfield, USA" },
    { title: "React Developer", type: "Full Time", location: "Pembroke Pines, USA" },
  ];

  // Handle button click to toggle form visibility
  const handleApplyClick = () => {
    setIsFormVisible(true); // Set form visibility to true when "Apply now" is clicked
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsFormVisible(false); // Close the modal
  };

  return (
    <div className="bg-black py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[50px] font-extrabold text-white">Join our team</h2>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Malesuada tellus vestibulum, commodo pulvinar.
        </p>
      </div>
      <div className="mt-10 space-y-4 max-w-5xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white shadow rounded-lg p-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500">
                {job.type} {job.location && ` • ${job.location}`}
              </p>
            </div>
            
            <button
              onClick={handleApplyClick}  // Show the form when the button is clicked
              className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow"
            >
              Apply now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 shadow-lg rounded-lg max-w-lg w-full">
            <div className="flex justify-between">
            
            <h3 className="text-xl font-semibold text-gray-800">Apply for a job</h3>
            <button
              onClick={handleCloseModal} 
              className=" text-gray-600 text-lg"
            >
              <IoClose />
            </button>
            </div>
            <form className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinOurTeam;
