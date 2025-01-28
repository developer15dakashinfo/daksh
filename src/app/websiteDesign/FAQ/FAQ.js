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
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="font-heading text-5xl font-bold text-gray-900">
              <span>You ask? We</span>
              <span className="font-serif italic"> answer</span>
            </h1>
          </div>
          <div className="bg-white rounded-4xl shadow-lg px-8 sm:px-20 py-14">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`cursor-pointer mb-8 pb-8 border-b border-gray-200 ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-start">
                  <h3
                    className={`text-xl font-semibold ${
                      activeIndex === index ? "text-blue-900" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div className="icon">
                    {activeIndex === index ? (
                      <IoMdArrowDropup size={24} color="black" />
                    ) : (
                      <IoMdArrowDropdown size={24} color="black" />
                    )}
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeIndex === index ? "max-h-screen mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-lg text-gray-500">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
