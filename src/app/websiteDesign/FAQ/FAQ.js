import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./FAQ.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "How secure is my insurance information?",
      answer:
        "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
    },
    {
      question: "How can I customize my insurance coverage?",
      answer:
        "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
    },
    {
      question: "Is there a waiting period for insurance claims?",
      answer:
        "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
    },
    {
      question: "How can I get started?",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
    },
    
    
  ];

  return (
    <section className="py-16 max-w-[1800px] mx-auto bg-gray-50 sm:pb-16 lg:pb-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-blue-900 text-2xl font-medium mb-2">FAQ</h3>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Question
          </h2>
        </div>
        <div className="max-w-4xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black text-start">{faq.question}</span>
                {activeIndex === index ? (
                  <IoMdArrowDropup className="w-6 h-6 text-gray-400" />
                ) : (
                  <IoMdArrowDropdown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
