import React from "react";
import "./Herosection.css";

const Herosection = ({ title, content }) => {
  return (
    <>
      <div className="absolute top-40">
        <div className=" justify-start items-start text-start max-w-4xl px-20">
          <h3 className="text-white py-1 text-lg font-semibold">Services</h3>
          <h1 className="text-5xl text-white md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">{title} </span>
          </h1>
          <p className="text-xl mb-8 text-white pr-20 ">{content}</p>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>

      <div className="mx-5">
        <div className="text-black flex flex-col md:flex-row items-center py-8 mx-auto shadow-lg border my-14 rounded-lg max-w-8xl">
          <div className="w-full md:w-3/12 flex justify-center md:justify-end py-5">
            <img
              className="w-64 object-cover rounded-lg h-40"
              src="https://www.antiersolutions.com/wp-content/uploads/2023/04/Mask-Group-68586.png.webp"
              alt="Lightbulb"
            />
          </div>

          <div className="w-[80%] h-[4px] bg-blue-600 my-4 md:hidden"></div>
          <div className="hidden md:block w-[5px] bg-blue-600 h-48 mx-6"></div>

          <div className="w-full md:w-8/12 h-auto py-5 font-nunito text-center md:text-left">
            <div className="space-y-3 px-5">
              <h3 className="text-2xl font-bold">DID YOU KNOW!</h3>
              <p className="text-xl font-light mt-4">
                According to the App Industry Report 2022, Web 3 gaming accounts
                for almost half of the overall blockchain activity, with daily
                unique active wallets of 1.15 million and a transaction count of
                7.4 billion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
