// Button.js
import React, { useEffect } from "react";
import gsap from "gsap";
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Button = ({ 
  text = "Read More", 
  icon = faArrowRight, 
  href = "#", 
  className = "", 
  target = "_blank", 
  customStyles = {}
}) => {
  useEffect(() => {
    const links = document.querySelectorAll(".button-link");

    links.forEach(link => {
      const pink = link.querySelector(".button-color");

      const hoverTL = gsap.timeline();
      hoverTL.pause();

      hoverTL.to(pink, {
        width: "calc(100% + 1.3em)",
        ease: "Elastic.easeOut(0.25)",
        duration: 0.4,
      });
      hoverTL.to(pink, {
        width: "2em",
        left: "calc(100% - 1.45em)",
        ease: "Elastic.easeOut(0.4)",
        duration: 0.6,
      });

      link.addEventListener("mouseenter", () => {
        hoverTL.play();
      });

      link.addEventListener("mouseleave", () => {
        hoverTL.reverse();
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", () => hoverTL.play());
        link.removeEventListener("mouseleave", () => hoverTL.reverse());
      });
    };
  }, []);

  return (
    <div className={`button-wrapper ${className}`} style={customStyles}>
      <a className="button-link" href={href} target={target}>
        <div className="button-color"></div>
        <span className="text-lg">
          {text}
          {icon && <FontAwesomeIcon icon={icon} className="text-white text-xl ms-2 align-center" />}
        </span>
      </a>
    </div>
  );
};



export default Button