import React from "react";
import Slider from "react-infinite-logo-slider";

const Testimonials = ({ title, content }) => {
  return (
    <div className=" max-w-8xl  mx-auto ">
      <section className="bg-blue-950 py-20 my-20">
        <div className="container  p-6 mx-auto space-y-12 lg:px-8 l text-white">
          <div>
            <h2 className="text-3xl font-bold  text-center sm:text-5xl">
              New Features
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
              Explore the latest features that enhance your learning experience
              and make it even more exciting.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-4 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-rocket"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-start ">
                      Advanced Learning Algorithms
                    </h4>
                    <p className="mt-2 text-start ">
                      Discover our improved learning algorithms that adapt to
                      your preferences and provide even more personalized
                      learning suggestions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bookmark-plus"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        <line x1={12} x2={12} y1={7} y2={13} />
                        <line x1={15} x2={9} y1={10} y2={10} />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-start ">
                      Interactive Learning Resources
                    </h4>
                    <p className="mt-2 text-start ">
                      Access an extensive library of interactive resources that
                      make your learning journey engaging and interactive.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-video"
                      >
                        <path d="m22 8-6 4 6 4V8Z" />
                        <rect
                          width={14}
                          height={12}
                          x={2}
                          y={6}
                          rx={2}
                          ry={2}
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-start ">
                      Enhanced Video Streaming
                    </h4>
                    <p className="mt-2 text-start ">
                      Experience seamless video integration with enhanced
                      streaming capabilities, providing a better and more
                      uninterrupted learning experience.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-file-question"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
                        <path d="M12 17h.01" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-start ">
                      Advanced Quiz Generation{" "}
                    </h4>
                    <p className="mt-2 text-start ">
                      Take your knowledge testing to the next level with
                      advanced quiz generation, providing more customization
                      options for your quizzes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                width={600}
                height={600}
                src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
                className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </section>

      <div>
        <h2 className="text-3xl font-bold text-center sm:text-5xl">
          Our Partners
        </h2>
      </div>
      <br />
      <Slider
        width="250px"
        duration={8}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        <Slider.Slide>
          <img
            src="https://www.antiersolutions.com/wp-content/uploads/2023/05/web3auth-logo.svg"
            alt="any"
            className="w-36"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://www.antiersolutions.com/wp-content/uploads/2024/08/boba-new.png.webp"
            alt="any2"
            className="w-36"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://www.antiersolutions.com/wp-content/uploads/2022/12/logotype.bfb3381.png"
            alt="any3"
            className="w-36"
          />
        </Slider.Slide>
        <Slider.Slide>
          <div>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2023/05/zeeve.png"
              alt="any3"
              className="w-36"
            />
          </div>
        </Slider.Slide>
      </Slider>
      <br />
      <Slider
        width="250px"
        duration={20}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        <Slider.Slide>
          <div>
            <img
              src="https://www.antiersolutions.com/wp-content/uploads/2023/05/zeeve.png"
              alt="any3"
              className="w-36"
            />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://www.antiersolutions.com/wp-content/uploads/2023/05/web3auth-logo.svg"
            alt="any"
            className="w-36"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://www.antiersolutions.com/wp-content/uploads/2024/08/boba-new.png.webp"
            alt="any2"
            className="w-36"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://www.antiersolutions.com/wp-content/uploads/2022/12/logotype.bfb3381.png"
            alt="any3"
            className="w-36"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://www.antiersolutions.com/wp-content/uploads/2024/10/hashlock_logo.svg"
            alt="any3"
            className="w-36"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="https://www.antiersolutions.com/wp-content/uploads/2024/04/Clip01.svg"
            alt="any3"
            className="w-36"
          />
        </Slider.Slide>
      </Slider>

      <br />
      <br />
      <br />
      <br />

      <div className="font-sans">
        <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-slate-100">
          <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
            <h2 className="text-gray-800 lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
              Elevate Your Experience with Modern Elegance
            </h2>
            <p className="text-gray-800 mt-6 text-base leading-relaxed">
              Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
              officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
              tempor ut reprehenderit.
            </p>
            <button
              type="button"
              className="bg-transparent border-2 border-gray-800 mt-12 transition-all text-gray-800 font-bold text-sm rounded-md px-6 py-2.5"
            >
              Get Started
            </button>
          </div>
          <div className="lg:h-[480px] flex items-center">
            <img
              src="https://readymadeui.com/team-image.webp"
              className="w-full h-full object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12">
          <div className="bg-gray-100 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#007bff"
              className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
              viewBox="0 0 32 32"
            >
              <path
                d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                data-original="#000000"
              />
              <path
                d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Customization
            </h3>
            <p className="text-sm text-gray-600">
              Tailor our product to suit your needs.
            </p>
            <a
              href="javascript:void(0);"
              className="text-blue-600 font-bold inline-block text-sm mt-4 hover:underline"
            >
              Learn more
            </a>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#007bff"
              className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
              viewBox="0 0 512.001 512.001"
            >
              <path
                d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Support</h3>
            <p className="text-sm text-gray-600">
              24/7 customer support for all your inquiries.
            </p>
            <a
              href="javascript:void(0);"
              className="text-blue-600 font-bold inline-block text-sm mt-4 hover:underline"
            >
              Learn more
            </a>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#007bff"
              className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
              viewBox="0 0 24 24"
            >
              <g fillRule="evenodd" clipRule="evenodd">
                <path
                  d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                  data-original="#000000"
                />
                <path
                  d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                  data-original="#000000"
                />
                <path
                  d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                  data-original="#000000"
                />
              </g>
            </svg>
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Performance
            </h3>
            <p className="text-sm text-gray-600">
              Experience blazing-fast performance with our product.
            </p>
            <a
              href="javascript:void(0);"
              className="text-blue-600 font-bold inline-block text-sm mt-4 hover:underline"
            >
              Learn more
            </a>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#007bff"
              className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
              viewBox="0 0 682.667 682.667"
            >
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
              </defs>
              <g
                fill="none"
                stroke="#007bff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={40}
                clipPath="url(#a)"
                transform="matrix(1.33 0 0 -1.33 0 682.667)"
              >
                <path
                  d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                  data-original="#000000"
                />
                <path
                  d="M178 271.894 233.894 216 334 316.105"
                  data-original="#000000"
                />
              </g>
            </svg>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Security</h3>
            <p className="text-sm text-gray-600">
              Your data is protected by the latest security measures.
            </p>
            <a
              href="javascript:void(0);"
              className="text-blue-600 font-bold inline-block text-sm mt-4 hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
