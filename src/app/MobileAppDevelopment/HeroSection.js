"use client"
import React from 'react'

import './HeroSectionname.scss';

const HomeSection1 = ({title,content}) => {
  return (

<section
          style={{
            backgroundImage: `url('https://au-media.apjonlinecdn.com/magefan_blog/1000x500px_Best_hp_laptops_for_programming.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
          className="flex items-center justify-center px-5 sm:px-10 md:px-20 "
        >
          <div className="absolute inset-0 bg-black opacity-60 "></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pt-24 xl:pt-24 md:pt-24 pt-16">
            {/* Left Content */}
            <div className="text-left  md:pt-28 lg:pt-28  pr-5 md:pr-10">
             
              <h1 className="text-3xl md:text-5xl mt-7 font-bold text-blue-500 text-start">
                {title} <span className="text-white text-start">Services</span>
              </h1>
              <p className="xl:text-md lg:text-md text-[14px] md:text-lg pt-5 text-white text-start">
                We offer professional website development services to help
                businesses establish a strong online presence. Our expertise
                spans custom website design, responsive development, and
                performance optimization, ensuring a seamless user experience
                across all devices.
              </p>
            </div>

            {/* Right Content - Animated Icons */}
            <div className="flex justify-center items-center py-10">
              <section className="main-container">
                <div className="main">
                  <div className="big-circle">
                    <div className="icon-block">
                      <img
                        src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png"
                        alt="web design icon"
                      />
                    </div>
                    <div className="icon-block">
                      <img
                        src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png"
                        alt="game design icon"
                      />
                    </div>
                    <div className="icon-block">
                      <img
                        src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png"
                        alt="game dev icon"
                      />
                    </div>
                    <div className="icon-block">
                      <img
                        src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png"
                        alt="ui-ux icon"
                      />
                    </div>
                  </div>
                  <div className="circle">
                    <div className="icon-block">
                      <img
                        src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png"
                        alt="app icon"
                      />
                    </div>
                    <div className="icon-block">
                      <img
                        src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png"
                        alt="blockchain icon"
                      />
                    </div>
                    <div className="icon-block">
                      <img
                        src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png"
                        alt="ar-vr icon"
                      />
                    </div>
                    <div className="icon-block">
                      <img
                        src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png"
                        alt="AI icon"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex justify-center items-center">
      <img
        src="https://www.dakshinfo.com/images/headerlogo.svg"
        alt="Center Logo"
        className="h-8 md:h-[50px]"
      />
    </div>
                </div>
              </section>
            </div>
          </div>
        </section>

  )
}

export default HomeSection1;