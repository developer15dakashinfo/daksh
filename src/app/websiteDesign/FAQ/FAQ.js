import React, { useState } from "react";
import "./FAQ.scss"; // Assuming you place your CSS styles in this file
import { IoMdArrowDropdown } from "react-icons/io";

const FAQ = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "How to do something?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et eros in sapien malesuada sodales nec eu purus. Aliquam venenatis aliquet nisi, dictum tristique lectus faucibus vitae.",
    },
    {
        question: "How to do something?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et eros in sapien malesuada sodales nec eu purus. Aliquam venenatis aliquet nisi, dictum tristique lectus faucibus vitae.",
      },
      {
        question: "How to do something?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et eros in sapien malesuada sodales nec eu purus. Aliquam venenatis aliquet nisi, dictum tristique lectus faucibus vitae.",
      },
    {
      question: "How to do something?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et eros in sapien malesuada sodales nec eu purus. Aliquam venenatis aliquet nisi, dictum tristique lectus faucibus vitae.",
    },
    {
      question: "How to do something?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et eros in sapien malesuada sodales nec eu purus. Aliquam venenatis aliquet nisi, dictum tristique lectus faucibus vitae. Aliquam venenatis aliquet nisi, dictum tristique lectus faucibus vitae. Aliquam venenatis aliquet nisi, dictum tristique lectus faucibus vitae.",
    },
  ];

  return (
    <div className="faq">
      <div className="global-label">
        <div className="global-label-text">Frequently Asked Questions</div>
      </div>

      {faqData.map((item, index) => (
        <div className="faq-container" key={index}>
          <div
            className="faq-label"
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-label-text">{item.question}</div>
            <div className="faq-label-icon">
              <span
                className={`material-icons ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                <IoMdArrowDropdown className=" text-[25px]" />
              </span>
            </div>
          </div>
          <div
            className={`faq-answer ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div className="faq-answer-content">{item.answer}</div>
          </div>
        </div>
      ))}

      <div className="about-me">
        <a
          href="https://www.linkedin.com/in/nikola-mrsic-58a4a71b6"
          target="_blank"
          rel="noreferrer"
        >
          Find me on: LinkedIn
        </a>
      </div>
    </div>
  );
};

export default FAQ;