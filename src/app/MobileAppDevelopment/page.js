"use client"
import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "../Navbar/Navbar";
import AppServices from "./AppServices/AppServices";
import HomeSection1 from "./HeroSection";
import HomeSection2 from "./Home2";
import HomeSection3 from "./AppServices/AppServices";
import Footer from "../Footer/Footer";
import HomeProcess4 from "./AppProcess/AppProcess";
import ContentSectionHome5 from "./ContentSection/ContentSection";
import SliderSectionHome7 from "./SliderSection/SliderSection";
import BenefitsSectionHome6 from "./BenifitsSection/BenefitsSection";
import FAQ from "../websiteDesign/FAQ/FAQ";
import ContactSectionname from "../careerSection/ContactSection/ContactSectionname";


const page = () => {
  return (
    <>
      <Navbar />
      <HomeSection1 />
      <HomeSection2 />

      <HomeSection3 />
      <ContentSectionHome5/>
      <BenefitsSectionHome6/>
      <HomeProcess4/>
      <SliderSectionHome7/>
      <ContactSectionname/>
      
      <FAQ/>
      
      <Footer/>
    </>
  );
};

export default page;
