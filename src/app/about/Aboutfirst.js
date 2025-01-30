import Navbar from "../Navbar/Navbar";
import "./Pricing.scss";

export default function Aboutfirst() {
    return (
      <div>
  
  <div className="hero">
  <div className="diagonal-hero-bg">
     <div className="stars">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-7xl text-white font-bold">ABOUT</h1>
      <h1 className="text-7xl text-white font-bold">DAKSH INFOSFT</h1>
          <div style={{backgroundColor:"#FFEC89"}} className="absolute right-96 rotate-160 me-20 top-40 w-40 h-40  text-center  font-bold align-center rounded-full uppercase text-black text-xl pt-10">this is <br/>
who we <br/>
are!</div>
        </div>
        <div className="small"></div>
        <div className="medium"></div>
        <div className="big"></div>
      </div>
   </div>
</div>
      <div className="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
           
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-3">
            {/* image - start */}
            <a href="#" className="group relative flex h-60 items-end overflow-hidden rounded-[34px] bg-gray-100 shadow-lg md:h-80">
              <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a href="#" className="group relative flex h-60 items-end overflow-hidden rounded-[34px] bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a href="#" className="group relative flex h-60 items-end overflow-hidden rounded-[34px] bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a href="#" className="group relative flex h-60 items-end overflow-hidden rounded-[34px] bg-gray-100 shadow-lg md:h-80">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
            {/* image - end */}
          </div>
        </div>
      </div>
      </div>
    );
  }
  