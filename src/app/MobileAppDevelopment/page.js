import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "../Navbar/Navbar";
import AppServices from "./AppServices/AppServices";
import HomeSection1 from "./HeroSection";
import HomeSection2 from "./Home2";
import HomeSection3 from "./AppServices/AppServices";
import Footer from "../Footer/Footer";
import HomeProcess4 from "./AppProcess/AppProcess";

const page = () => {
  return (
    <>
      <Navbar />
      <HomeSection1 />
      <HomeSection2 />

      <HomeSection3 />
      <HomeProcess4/>
      <Footer/>
    </>
  );
};

export default page;
