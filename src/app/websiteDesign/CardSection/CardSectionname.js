import React, { useEffect, useRef } from "react";
import "../CardSection/CardSection.scss";

const CardSectionname = () => {

return(
  <>
  <h2 className="text-gray-800 text-5xl font-bold my-10">Top Features of Web Development</h2>
  <div className="font-sans bg-white p-4">
        <div className="md:max-w-7xl max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">Elevate Your Online Presence</h2>
              <p className="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
              <p className="text-sm text-gray-500">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
              <button type="button" className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Get started</button>
            </div>
            <div className="max-h-72">
              <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
            </div>
          </div>
          <hr className="border-gray-300 my-12" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="max-h-72 max-md:order-1">
              <img src="https://readymadeui.com/analtsis.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
            </div>
            <div className="text-left">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">Your Success, Our Commitment</h2>
              <p className="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
              <p className="text-sm text-gray-500">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
              <button type="button" className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Get started</button>
            </div>
          </div>
          <hr className="border-gray-300 my-12" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">Elevate Your Online Presence</h2>
              <p className="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
              <p className="text-sm text-gray-500">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
              <button type="button" className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Get started</button>
            </div>
            <div className="max-h-72">
              <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      
      
      
      <div className="flex flex-col justify-center w-full sm:w-auto sm:flex-row p-4 my-10">
        <a  className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-blue-400 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1">
        Connect on Whatsapp
          <span className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
            </svg>
          </span>
        </a>
        <a  className="flex items-center justify-center w-full px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-blue-900 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
        Connect on Telegram
        </a>
      </div>
      </>
)
};

export default CardSectionname;
