"use client";

import { useEffect, useState } from "react";
import "./Home4.css";
import Home5 from "./Home5";

const cards = [
  {
    frontTitle: "Real Estate",
    frontText: "Discover Strategies",
    frontImage: "https://marketplace.canva.com/EAF6nmbUlhg/1/0/1600w/canva-black-and-gold-flat-illustrative-real-estate-logo-Jj0rP4nw9ug.jpg",
    backTitle: "loreum ipsum loreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsum",
    backText: "Learn more",
    backImage: "https://marketplace.canva.com/EAF6nmbUlhg/1/0/1600w/canva-black-and-gold-flat-illustrative-real-estate-logo-Jj0rP4nw9ug.jpg",
  },

];

function Home4() {
  const [flippedIndices, setFlippedIndices] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedIndices((prev) => {
        const newIndex = Math.floor(Math.random() * cards.length);
        return prev.includes(newIndex)
          ? prev.filter((index) => index !== newIndex) // Unflip
          : [...prev, newIndex]; // Flip
      });
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <><br/><br/>
      <div className="text-center font-bold text-4xl border-b p-5  mx-80">
      OUR INDUSTRY WISE Solutions
      </div>
      <br/><br/>
      <div className="grid-container mx-80">
        {cards.map((card, index) => (
          <div
            className={`flip-card ${flippedIndices.includes(index) ? "flipped" : ""}`}
            key={index}
          >
            <div className="flip-card-inner ">
              <div className="flip-card-front 	object-fit">
                <img
                  src={card.frontImage}
                  alt={`${card.frontTitle} Front`}
                  className="card-image "
                />
                <p className="title">{card.frontTitle}</p>
              
              </div>
              <div className="flip-card-back">
               <p className="text-white text-sm text-center mb-3">{card.backTitle}</p>
               
                <button className="border border-white px-2 text-white">{card.backText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </>
  );
}

export default Home4;
