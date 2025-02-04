"use client";
import React from "react";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const FrameWorkSection = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="container mx-auto py-14 px-20 sm:px-6 lg:px-40">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h1 className="text-xl text-blue-900 py-2">FRAMEWORK</h1>
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Popular Android Frameworks We Excel In
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                At Daksh Infosoft, we specialize in various Android frameworks,
                utilizing their powerful capabilities to create dynamic and
                high-performance mobile applications. Our expertise in these
                frameworks allows us to provide innovative solutions customized
                to our clients' specific requirements.
              </p>
              <div class="mt-4">
                <div className="grid grid-cols-2">
                  <div className="">
                    <div className="flex gap-2 items-center py-2">
                      <MdOutlineArrowCircleRight className=" text-2xl" />
                      <p className=" text-[16px] font-[600]">Kotlin</p>
                    </div>
                    <div className="flex gap-2 items-center py-2">
                      <MdOutlineArrowCircleRight className=" text-2xl" />
                      <p className=" text-[16px] font-[600]">Flutter</p>
                    </div>
                    <div className="flex gap-2 items-center py-2">
                      <MdOutlineArrowCircleRight className=" text-2xl" />
                      <p className=" text-[16px] font-[600]">JAVA</p>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex gap-2 items-center py-2">
                      <MdOutlineArrowCircleRight className=" text-2xl" />
                      <p className=" text-[16px] font-[600]">Jetpack</p>
                    </div>
                    <div className="flex gap-2 items-center py-2">
                      <MdOutlineArrowCircleRight className=" text-2xl" />
                      <p className=" text-[16px] font-[600]">React Native</p>
                    </div>
                    <div className="flex gap-2 items-center py-2">
                      <MdOutlineArrowCircleRight className=" text-2xl" />
                      <p className=" text-[16px] font-[600]">Firebase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src="https://www.orientsoftware.com/Themes/Content/Images/blog/2020-04-29/OSD-%20THUMBNAIL-ARTICLES-TOP-5-MOST-USEFUL.png"
                alt="About Us Image"
                class="object-cover h-[550px]"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrameWorkSection;
