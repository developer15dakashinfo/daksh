import React, { useState } from "react";
import "./Logo.css";

const Logoname = () => {
    const [color, setColor] = useState('black'); // Initial color

    const changeColor = () => {
      const newColor = color === 'black' ? 'red' : 'black'; // Toggle between black and red
      setColor(newColor);
    };
  
    return (
        <div className="gradient-text-container">
        <p className="gradient-text text-2xl">DAKSH</p>
      </div>
    );
  }
export default Logoname;
