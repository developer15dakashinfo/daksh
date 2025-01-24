import React, { useState } from "react";
import "./FAQ.scss"; // Assuming you place your CSS styles in this file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    { question: "Collapsible Group Item #1", answer: "Some placeholder content for the first accordion panel. This panel is shown by default." },
    { question: "Collapsible Group Item #2", answer: "Some placeholder content for the second accordion panel. This panel is hidden by default." },
    { question: "Collapsible Group Item #3", answer: "Some placeholder content for the third accordion panel. This panel is hidden by default." },
    { question: "Collapsible Group Item #4", answer: "Some placeholder content for the fourth accordion panel. This panel is hidden by default." },
  ];

  return (
    <section id="full-faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center">
              <h6>Frequently Asked Questions</h6>
              {/* <h2>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,</h2> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="accordion faq-area" id="accordionExample">
              {faqData.map((item, index) => (
                <div className="card" key={index}>
                  <div
                    className={`card-header ${activeIndex === index ? "active" : ""}`}
                    id={`heading${index + 1}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left"
                        type="button"
                      >
                        {item.question}
                        <span
                          className={`fa ${
                            activeIndex === index ? "fa-caret-up" : "fa-caret-down"
                          }`}
                        ></span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id={`collapse${index + 1}`}
                    className={`collapse ${activeIndex === index ? "show" : ""}`}
                  >
                    <div className="card-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
