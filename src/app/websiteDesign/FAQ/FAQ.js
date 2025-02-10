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
        "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential. We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
    },
    {
      question: "How can I customize my insurance coverage?",
      answer:
        "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget. Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
    },
    {
      question: "Is there a waiting period for insurance claims?",
      answer:
        "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details. We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
    },
    {
      question: "Is there a waiting period for insurance claims?",
      answer:
        "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details. We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
    },
    {
      question: "Is there a waiting period for insurance claims?",
      answer:
        "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details. We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
    },
    {
      question: "Is there a waiting period for insurance claims?",
      answer:
        "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details. We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
    },
  ];

  return (
    <div className="max-w-[1600px]  mx-auto ">
    <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex flex-col text-left basis-1/2">
        <p className="inline-block font-semibold text-primary mb-4">
          Insurance FAQ
        </p>
        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
          Frequently Asked Questions
        </p>
      </div>
      <ul className="basis-1/2">
        {faqData.map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              {activeIndex === index ? (
                <IoMdArrowDropup className="w-5 h-5 text-primary" />
              ) : (
                <IoMdArrowDropdown className="w-5 h-5 text-primary" />
              )}
            </button>
            <div
              className="transition-all duration-300 ease-in-out overflow-hidden"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <div className="pb-5 leading-relaxed">{item.answer}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default FAQ;
