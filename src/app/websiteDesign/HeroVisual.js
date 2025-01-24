import React, { useEffect, useState } from "react";
import "./HeroVisual.css";

const HeroVisual = () => {
  const [stars, setStars] = useState([]);

  const generateParticles = (count) =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${5 + Math.random() * 5}s`, 
    }));

  useEffect(() => {
    
    setStars(generateParticles(300));
  }, []);

  return (
    <div className="hero-visual">
      <div className="star-background">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
