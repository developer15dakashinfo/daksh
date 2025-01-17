import React, { useEffect } from "react";
import gsap from "gsap";
import './ReadMoreButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const ReadMoreButton = () => {
  useEffect(() => {
    const link = document.querySelector(".link");
    const pink = document.querySelector(".color");

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

    // Cleanup event listeners on component unmount
    return () => {
      link.removeEventListener("mouseenter", () => hoverTL.play());
      link.removeEventListener("mouseleave", () => hoverTL.reverse());
    };
  }, []);

  return (
    <div className="wrapper mt-10">
      <a className="link" href="#" target="_blank">
        <div className="color"></div>
        <span className="">Read More     <FontAwesomeIcon icon={faArrowRight} className='text-white text-xl ms-2  align-center'/></span>
    
       
      </a>
    </div>
  );
};

export default ReadMoreButton;
