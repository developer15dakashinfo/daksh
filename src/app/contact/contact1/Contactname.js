import React, { useState, useEffect } from "react";
import "./Contact1.css";
import "./Contactus.scss";
import {
  MdLocationPin,
  MdMoreTime,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi2";

export default function Contactname() {
  return (
    <div>
      <div className="hero">
        <div className="diagonal-hero-bg">
          <div className="stars">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-5xl text-white font-bold">Contact Us</h1>
              <h1 className="text-7xl text-white font-bold">DAKSH INFOSFT</h1>
            </div>
            <div className="small"></div>
            <div className="medium"></div>
            <div className="big"></div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <section class="text-center pb-12 px-4">
          <h2 class="text-2xl font-bold">Get In Touch</h2>
          <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
            We are here to help you. Reach out to us via any of the following
            methods.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
            <div class="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 class="text-xl font-bold">Call Us</h3>
              <p class="text-gray-700 mt-2">+1 123 456 7890</p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 class="text-xl font-bold">Email Us</h3>
              <p class="text-gray-700 mt-2">contact@wisedoctors.com</p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 class="text-xl font-bold">Visit Us</h3>
              <p class="text-gray-700 mt-2">123 Health St, Wellness City</p>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="flex justify-center items-center  h-screen bg-white ">
       
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40  rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={""}
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-950 text-gray-100 p-3 rounded-lg w-full 
                  focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-950 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                </div>
                <i className="fas fa-map-marker-alt pt-2 pr-2">
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Main Office</h2>
                    <p className="text-gray-400">
                      5555 Tailwind RD, Pleasant Grove, UT 73533
                    </p>
                  </div>
                </i>
              </div>
              <i className="fas fa-map-marker-alt pt-2 pr-2">
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-phone-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Call Us</h2>
                      <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                      <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                    </div>
                  </i>
                </div>
                <i className="fas fa-phone-alt pt-2 pr-2">
                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <a
                      href="https://www.facebook.com/ENLIGHTENEERING/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                    >
                      <i className="fab fa-facebook-f text-blue-900"></i>
                    </a>
                    <i className="fab fa-facebook-f text-blue-900">
                      <a
                        href="https://www.linkedin.com/company/enlighteneering-inc-"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                      >
                        <i className="fab fa-linkedin-in text-blue-900"></i>
                      </a>
                      <i className="fab fa-linkedin-in text-blue-900"></i>
                    </i>
                  </div>
                  <i className="fab fa-facebook-f text-blue-900">
                    <i className="fab fa-linkedin-in text-blue-900"></i>
                  </i>
                </i>
              </i>
            </div>
            <i className="fas fa-map-marker-alt pt-2 pr-2">
              <i className="fas fa-phone-alt pt-2 pr-2">
                <i className="fab fa-facebook-f text-blue-900">
                  <i className="fab fa-linkedin-in text-blue-900"></i>
                </i>
              </i>
            </i>
          </div>
          <i className="fas fa-map-marker-alt pt-2 pr-2">
            <i className="fas fa-phone-alt pt-2 pr-2">
              <i className="fab fa-facebook-f text-blue-900">
                <i className="fab fa-linkedin-in text-blue-900"></i>
              </i>
            </i>
          </i>
        </div>
        <i className="fas fa-map-marker-alt pt-2 pr-2">
          <i className="fas fa-phone-alt pt-2 pr-2">
            <i className="fab fa-facebook-f text-blue-900">
              <i className="fab fa-linkedin-in text-blue-900">
                
              </i>
            </i>
          </i>
        </i>
      </div>
      <i className="fas fa-map-marker-alt pt-2 pr-2">
        <i className="fas fa-phone-alt pt-2 pr-2">
          <i className="fab fa-facebook-f text-blue-900">
            <i className="fab fa-linkedin-in text-blue-900">
             
            </i>
          </i>
        </i>
      </i> */}

      <div class="max-w-screen-lg mx-auto p-5">
        <div class="grid grid-cols-1 md:grid-cols-12 border">
          <div class="bg-gray-900 rounded-xl md:col-span-4 p-10 text-white">
            <p class="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span class="text-indigo-600">Touch</span>
            </h3>
            <p class="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <div class="flex items-center mt-5 gap-1">
              <MdLocationPin className=" text-5xl text text-blue-800" />
              <span class="text-sm">
                House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
              </span>
            </div>
            <div class="flex items-center mt-5 gap-1">
              <MdOutlinePhoneInTalk className=" text-3xl text text-blue-800" />
              <span class="text-sm">+93 749 99 65 50</span>
            </div>
            <div class="flex items-center mt-5 gap-1">
              <MdMoreTime className=" text-3xl text text-blue-800" />
              <span class="text-sm">24/7</span>
            </div>
          </div>
          <form class="md:col-span-8 p-10">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                ></input>
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                ></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                ></input>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div class="flex justify-between w-full px-3">
                <div class="md:flex md:items-center">
                  <label class="block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox"></input>
                    <span class="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <form action="https://fabform.io/f/xxxxx" method="post">
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Visit Our Location
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="mt-16 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div>
                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                      <div className=" flex items-center gap-2">
                        <CiLocationOn className=" text-3xl text text-blue-800" />

                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            Our Address
                          </h3>
                          <p className="mt-1 text-gray-600">
                            123 Main St, San Francisco, CA 94105
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                      <div className=" flex items-center gap-2">
                      <CiTimer className=" text-3xl text text-blue-800" />
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            Hours
                          </h3>
                          <p className="mt-1 text-gray-600">
                            Monday - Friday: 9am - 5pm
                          </p>
                          <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                      <p className="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                      
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                      <div className=" flex items-center gap-2">
                      <HiOutlinePhone  className=" text-3xl text text-blue-800" />
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            Contact
                          </h3>
                          <p className="mt-1 text-gray-600">
                            Email: info@example.com
                          </p>
                          <p className="mt-1 text-gray-600">
                            Phone: +1 23494 34993
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
