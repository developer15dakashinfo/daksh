import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./FAQ.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How to do something?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et eros in sapien malesuada sodales nec eu purus.",
    },
    {
      question: "What are the benefits of using this service?",
      answer:
        "Aliquam venenatis aliquet nisi, dictum tristique lectus faucibus vitae. Ut sit amet arcu fermentum orci.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 7-day free trial for new users to explore the features of our service.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "Go to the account settings, click on 'Forgot Password', and follow the instructions sent to your email.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. Your access will remain until the end of the billing cycle.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (

    <section className="relative py-20 px-4 sm:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          <span>You ask? We </span>
          <span className="font-serif italic text-blue-900">answer.</span>
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-lg px-6 sm:px-10 md:px-16 py-10 sm:py-14 mt-10 max-w-5xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="cursor-pointer mb-6 pb-6 border-b border-gray-200 last:border-0"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-start">
              <h3
                className={`text-lg sm:text-lg font-[500] ${
                  activeIndex === index ? "text-blue-900" : "text-black"
                }`}
              >
                {faq.question}
              </h3>
              <div className="icon">
                {activeIndex === index ? (
                  <IoMdArrowDropup size={24} />
                ) : (
                  <IoMdArrowDropdown size={24} />
                )}
              </div>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-[1000px] mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-500 text-sm sm:text-lg">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default FAQ;
