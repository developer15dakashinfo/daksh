import React from "react";


const CareerSectionfirst = () => {
  return (

<>
<section
      className="relative bg-cover bg-center bg-no-repeat h-[480px]"
      style={{
        backgroundImage:
          "url('https://assets.weforum.org/article/image/v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between h-full">
        <div className="text-white lg:w-1/2 space-y-6 text-center lg:text-left pt-10">
          <h1 className="text-4xl font-bold py-1 leading-normal">
            JOIN OUR AWESOME TEAM AND <br />
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              START TO BUILD UP YOUR CAREER.
            </span>
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-14 flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-sky-400 to-emerald-600 p-[2px]">
            <div className="w-full h-full bg-black rounded-full overflow-hidden">
              <figure className="overflow-hidden rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.jpg?s=612x612&w=0&k=20&c=BFFIc-xOwzeRyR8ui9VkFKEqqqQFBbISJzr-ADN6hS8="
                  alt="Team working"
                  className="object-cover w-80 h-80"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      
    </section>

    
    </>


  );
};

export default CareerSectionfirst;
