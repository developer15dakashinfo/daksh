"use client";

import React, { useState, useEffect } from 'react';
import Home6 from './Home6';

const Home5 = () => {
 
  return (
    <>
    <section className="bg-green-900 text-white pt-8 pb-4">
    <h2 className="text-center text-2xl mb-2 font-bold leading-8 ">Some companies we’ve worked </h2>
  <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
      <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
        {/* Ensure that the images cover entire screen width for a smooth transition */}
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
      </div>
      {/* Duplicate of the above for infinite effect (you can use javascript to duplicate this too) */}
      <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
        {/* Ensure that the images cover entire screen width for a smooth transition */}
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
        <img className="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
      </div>
    </div>
  </section>
  <Home6/>
  </>
  );
};

export default Home5;
