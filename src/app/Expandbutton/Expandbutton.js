import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./ExpandButton.css";

const ExpandButton = ({ text = "Contact Us", className = "" }) => {
  return (
    <main className="main">
      <section>
        <button className={`btn ${className}`}>
         
          <span className="btn-text">{text} </span>
          
          <FaArrowRight className="btn-icon" />
        </button>
      </section>
    </main>
  );
};

export default ExpandButton;
