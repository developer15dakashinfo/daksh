"use client";

import React, { useState, useEffect } from 'react';
import Home6 from '../Home6/Home6';
import './Home5.scss'
import { FaFileCode } from 'react-icons/fa6';
const Home5 = () => {
  const cards = [
    {
      title: "App Development",
      description:
        "Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.",
      image:
        "https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg",
      icon: <FaFileCode />,
    },
    
    
  ];
  return (
    <>
   
   <div className='mt-10'>
   <div>
   <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Case</span> Studies</h1>      </div>
   <div className="canvas-wrapper">
        <a href="#" className="canvas">
          <div className="canvas_border">
            <svg>
              <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor: 'rgb(253,137,68)', stopOpacity: 1}} /><stop offset="100%" style={{stopColor: 'rgb(153,75,23)', stopOpacity: 1}} /></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#D34F48" /><stop offset="100%" stopColor="#772522" /></linearGradient></defs>
              <rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth={4} strokeMiterlimit={30} width="100%" height="100%" />
            </svg>
          </div>
          <div className="canvas_img-wrapper">
            <img className="canvas_img" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png" alt="" />
          </div>
          <div className="canvas_copy canvas_copy--left">
            <span className="canvas_copy_subtitle">Heading</span>
            <strong className="canvas_copy_title">Hello</strong>
            <strong className="canvas_copy_title">World</strong>
            <span className="canvas_copy_details">Details and stuff</span>
          </div>
        </a>
        <a href="#" className="canvas">
          <div className="canvas_border">
            <svg>
              <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor: 'rgb(253,137,68)', stopOpacity: 1}} /><stop offset="100%" style={{stopColor: 'rgb(153,75,23)', stopOpacity: 1}} /></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#D34F48" /><stop offset="100%" stopColor="#772522" /></linearGradient></defs>
              <rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth={4} strokeMiterlimit={30} width="100%" height="100%" />
            </svg>
          </div>
          <div className="canvas_img-wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg flex flex-col relative group"
            >
              <img className="w-full group-hover:blur-sm" src={card.image} alt={card.title} />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute top-20 left-4 text-lg font-bold flex items-center gap-2 text-white transition-transform duration-500 group-hover:-translate-y-6">
                {card.icon} {card.title}
              </div>
              <div className="absolute top-28 left-4 text-sm font-semibold text-white transition-transform duration-500 group-hover:-translate-y-6">
                {card.description}
              </div>
              <div className="absolute bottom-[-30px] left-4 text-lg flex items-center gap-2 text-blue-600 transition-transform duration-500 group-hover:translate-y-[-50px]">
                Learn More 
              </div>
            </div>
          ))}
        </div>
          </div>
          <div className="canvas_copy canvas_copy--left">
            <span className="canvas_copy_subtitle">Heading</span>
            <strong className="canvas_copy_title">Hello</strong>
            <strong className="canvas_copy_title">World</strong>
            <span className="canvas_copy_details">Details and stuff</span>
          </div>
        </a>
        <a href="#" className="canvas">
          <div className="canvas_border">
            <svg>
              <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor: 'rgb(253,137,68)', stopOpacity: 1}} /><stop offset="100%" style={{stopColor: 'rgb(153,75,23)', stopOpacity: 1}} /></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#D34F48" /><stop offset="100%" stopColor="#772522" /></linearGradient></defs>
              <rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth={4} strokeMiterlimit={30} width="100%" height="100%" />
            </svg>
          </div>
          <div className="canvas_img-wrapper">
            <img className="canvas_img" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png" alt="" />
          </div>
          <div className="canvas_copy canvas_copy--left">
            <span className="canvas_copy_subtitle">Heading</span>
            <strong className="canvas_copy_title">Hello</strong>
            <strong className="canvas_copy_title">World</strong>
            <span className="canvas_copy_details">Details and stuff</span>
          </div>
        </a>
        <a href="#" className="canvas">
          <div className="canvas_border">
            <svg>
              <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor: 'rgb(253,137,68)', stopOpacity: 1}} /><stop offset="100%" style={{stopColor: 'rgb(153,75,23)', stopOpacity: 1}} /></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#D34F48" /><stop offset="100%" stopColor="#772522" /></linearGradient></defs>
              <rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth={4} strokeMiterlimit={30} width="100%" height="100%" />
            </svg>
          </div>
          <div className="canvas_img-wrapper">
            <img className="canvas_img" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png" alt="" />
          </div>
          <div className="canvas_copy canvas_copy--left">
            <span className="canvas_copy_subtitle">Heading</span>
            <strong className="canvas_copy_title">Hello</strong>
            <strong className="canvas_copy_title">World</strong>
            <span className="canvas_copy_details">Details and stuff</span>
          </div>
        </a>
      </div>
   </div>
  </>
  );
};

export default Home5;
