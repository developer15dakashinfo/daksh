import React from 'react'
import SlidingButton from '../SlidingButton/SlidingButton'

const HomeSection2 = () => {
  return (
    <>
    <div>
      <div className="bg-white">
      <div className=" text-black flex items-center mx-10 shadow-lg border my-14 rounded-lg">
        <div className="px-10 py-5 flex items-center">
          <div className="w-3/12 flex justify-end">
            <img
              className="w-64 object-cover rounded-lg h-40"
              src="https://www.antiersolutions.com/wp-content/uploads/2023/04/Mask-Group-68586.png.webp"
              alt="Lightbulb"
            />
          </div>

          <div className="w-[5px] bg-blue-600 h-44 mx-6"></div>

          <div className="w-8/12 h-44 py-5 font-nunito">
            <div className="space-y-3 pr-20">
              <h3 className="text-2xl font-bold">DID YOU KNOW!</h3>
              <p className="text-start text-xl font-light mt-4">
                According to the App Industry Report 2022, Web 3 gaming
                accounts for almost half of the overall blockchain activity,
                with daily unique active wallets of 1.15 million and a
                transaction count of 7.4 billion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 px-20 py-16">
      <div>
        <img
          className=" object-cover rounded-lg h-[450px] px-20"
          src="https://aresourcepool.com/wp-content/uploads/2022/03/Android-1.png"
          alt="Lightbulb"
        />
      </div>
      <div className="pr-20">
        <h1 className=" text-4xl font-bold">
          Experienced Android App Development Consultants at Your Service
        </h1>
        <p className="text-lg py-5 ">
          Antier, as one of the top blockchain consulting companies, helps
          empower businesses by providing futuristic blockchain-based
          solutions that play a significant role in harnessing the potential
          of blockchain technology to the fullest in favor of their growth and
          development.<br></br>
          Blockchain is undoubtedly a very powerful network and with its
          in-built features of trustability, transparency, security, etc. can
          have far-reaching effects on businesses belonging to different
          industries by enabling them to translate their business goals into
          success stories. <br></br>
          As one of the prominent blockchain consulting firms, we house a team
          of top-notch blockchain consultants who dedicatedly researches,
          develops, and test blockchain ecosystem to propose astounding ideas
          to integrate blockchain architecture into businesses.
        </p>
        <div>
          <SlidingButton
            text="Free Demo"
            textcolor="text-white"
            bgColor="bg-black"
            arrowBgColor="bg-black"
            arrowTextColor="text-white"
            
          />
         
        </div>
      </div>
    </div>
  </div></>
  )
}

export default HomeSection2