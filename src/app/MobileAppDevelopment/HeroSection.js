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
          height: "90vh",
          position: "relative",
        }}
      >
        <div className="grid grid-cols-2 pt-24 px-20">
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="text-left pt-28 pr-10 relative z-10">
            <h3 className="text-white text-2xl font-semibold py-3 text-left">
              SERVICES
            </h3>
            <h1 className="text-5xl font-bold text-blue-500 text-left">
              {title} <span className="text-white">Services</span>
            </h1>
            <p className="text-xl pt-5 text-left text-white">
              We offer professional website development services to help
              businesses establish a strong online presence. Our expertise spans
              custom website design, responsive development, and performance
              optimization, ensuring a seamless user experience across all
              devices.
            </p>
          </div>
          <div>
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
                      alt="artificial intelligence icon"
                    />
                  </div>
                </div>
                <div className="center-logo">
                <img
            src="https://www.dakshinfo.com/images/headerlogo.svg"
            alt="About Us Image"
            class="object-cover h-[50px]"
          ></img>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
  )
}

export default HomeSection1;