import Button from "@/app/Button/Button";
import React from "react";

const JoinOurTeam = () => {
  const jobs = [
    { title: "Full-Stack Developer", type: "Full Time", location: "Toledo, USA" },
    { title: "Senior UX Designer", type: "Full Time", location: "Remote" },
    { title: "Project Manager", type: "Full Time", location: "Fairfield, USA" },
    { title: "React Developer", type: "Full Time", location: "Pembroke Pines, USA" },
  ];

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
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">
              Apply now
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinOurTeam;
