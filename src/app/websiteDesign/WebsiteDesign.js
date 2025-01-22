import React from "react";
import SlidingButton from "../SlidingButton/SlidingButton";

const WebsiteDesign = () => {
  return (
    <div className="bg-black text-white pt-28 px-4 text-center relative h-[480px] grid grid-cols-2">
      <div className="pl-20 flex flex-col justify-center">
        <div className="text-start">
          <h1 className="text-5xl font-bold mb-6 pr-10">
            Web Design & Development Services in Jaipur
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            Web design & development services involve designing, building,
            regularly supporting, and gradually evolving different types of
            websites.
          </p>
          <SlidingButton text="Contact Us Now" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src="https://www.beaconcoders.com/assets/img/web-designing-ghaziabad.png"
          alt="Web Design & Development Illustration"
          className="h-[350px] w-96"
        />
      </div>
    </div>
  );
};

export default WebsiteDesign;
