import React from 'react'
import SlidingButton from '../SlidingButton/SlidingButton';

const HomeSection1 = () => {
  return (
    <section
    className="bg-cover bg-center bg-no-repeat h-[550px]"
    style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/05/00/79/02/360_F_500790266_gaZS8kRQeZsUbD1zKOJJ8bjI0uwNLghi.jpg)` }}
  >
    <div className="bg-black"></div>
    <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between h-full">
      <div className="text-white lg:w-1/2 space-y-6 text-center lg:text-left pt-20">
        <h1 className="text-4xl font-bold py-1 leading-normal">
        ANDROID APP DEVELOPMENT <br />
          <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
          START TO BUILD UP YOUR CAREER.
          </span>
        </h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div>
          <SlidingButton text="Contact Us" />
          
        </div>
      </div>
    </div>

    
  </section>
  )
}

export default HomeSection1;