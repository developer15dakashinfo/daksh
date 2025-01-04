"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import Home3 from "./Home3";

function Home2() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".panel");
    //const sections2 = gsap.utils.toArray(".panel2");

    // Horizontal scroll animation for the first container
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), // Adjust for six panels in one row
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 0.7,
        end: "+=3000", // Adjust end based on container width
      },
    });
    
    // gsap.to(sections2, {
    //   xPercent: 100 * (sections2.length - 1),
    //   scrollTrigger: {
    //     trigger: ".container2",
    //     pin: true,
    //     scrub: 0.7,
    //     end: "+=3000",
    //   },
    // });
    
  }, []);

  return (
    <div className="home2 p-5">
      {/* Fixed Header */}
     

      {/* First Horizontal Scroll Section */}
      <div className="container w-full  overflow-x-auto">
      <div className="text-7xl fixed font-bold pb-96 mb-60 text-white leading-40">SERVICES <br/> WE<br/> PROVIDE</div>
        <div className="panel border rounded-3xl  shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
          <div className=" ">
            <div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-7 inline-block">
                <img
                  src="https://www.dakshinfo.com/images/servicehover1.png"
                  className="text-black"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Web desginning
                </h3>
                <p className="text-base font-medium text-body-color">
                  To make your business stand apart, we provide UX/UI design for
                  web & mobile app that looks appealing and interactive.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel border rounded-xl shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
          <div className=" ">
            <div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-7 inline-block">
                <img
                  src="https://www.dakshinfo.com/images/servicehover2.svg"
                  className="text-black"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Mobile App Development
                </h3>
                <p className="text-base font-medium text-body-color">
                Apps are redefining the way we interact with services
                 and empowering businesses to engage with their customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel border rounded-xl shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
          <div className=" ">
            <div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-7 inline-block">
                <img
                  src="https://www.dakshinfo.com/images/servicehover3.png"
                  className="text-black"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                E-Commerce Solutions
                </h3>
                <p className="text-base font-medium text-body-color">
                eCommerce web development has indeed become a necessity instead of a means to drive greater traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel border rounded-xl shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
        <div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
        <img
          src="https://www.dakshinfo.com/images/servicehover4.png"
          className="text-black"
        />
      </div>
      <div>
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        Voice mail
        </h3>
        <p className="text-base font-medium text-body-color">
        Make your impact more than words, send pre-recorded messages in your voice and make it more reachable to your valuable profits.
        </p>
      </div>
    </div>
        </div>
        <div className="panel border rounded-xl shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
        <div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
        <img
          src="https://www.dakshinfo.com/images/servicehover5.png"
          className="text-black"
        />
      </div>
      <div>
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        Bulk SMS
        </h3>
        <p className="text-base font-medium text-body-color">
        Bulk SMS in India | Bulk SMS Service Provider India - Short Message Service or simply the SMS is a revolution of mobile phone industry.
        </p>
      </div>
    </div>
        </div>
        <div className="panel border rounded-xl shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
        <div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
        <img
          src="https://www.dakshinfo.com/images/servicehover6.png"
          className="text-black"
        />
      </div>
      <div>
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        (SEO) services
        </h3>
        <p className="text-base font-medium text-body-color">
        We provide Search Engine Optimization (SEO) services to boost your online presence and connect with more customers.
        </p>
      </div>
      </div>
        </div>
        
      </div>

      
    </div>
  );
}

export default Home2;



{/* <div className="panel2 rounded-xl shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
<div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
        <img
          src="https://www.dakshinfo.com/images/servicehover4.png"
          className="text-black"
        />
      </div>
      <div>
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        Voice mail
        </h3>
        <p className="text-base font-medium text-body-color">
        Make your impact more than words, send pre-recorded messages in your voice and make it more reachable to your valuable profits.
        </p>
      </div>
    </div>
</div>
<div className="panel2 rounded-xl shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
<div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
        <img
          src="https://www.dakshinfo.com/images/servicehover5.png"
          className="text-black"
        />
      </div>
      <div>
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        Bulk SMS
        </h3>
        <p className="text-base font-medium text-body-color">
        Bulk SMS in India | Bulk SMS Service Provider India - Short Message Service or simply the SMS is a revolution of mobile phone industry.
        </p>
      </div>
    </div>
</div>
<div className="panel2 rounded-xl shadow-xl transition-all hover:shadow-lg hover:bg-blue-100">
<div className="mb-9 rounded-xl py-8 px-7  transition-all  sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
        <img
          src="https://www.dakshinfo.com/images/servicehover6.png"
          className="text-black"
        />
      </div>
      <div>
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        (SEO) services
        </h3>
        <p className="text-base font-medium text-body-color">
        We provide Search Engine Optimization (SEO) services to boost your online presence and connect with more customers.
        </p>
      </div>
    </div>
</div> */}