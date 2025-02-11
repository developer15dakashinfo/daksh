"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/app/Footer/Footer";
import Navbar from "@/app/Navbar/Navbar";
import FAQ from "@/app/websiteDesign/FAQ/FAQ";
import HeroDigitalMarketingSection from "../HeroSectionDigitalMarketing";
import OurSourcesSection from "../OurSources/OurSources";
import DigitalMarkeingServices from "../DigitalMarkeingServices/DigitalMarkeingServices";
import FeatureSection from "../Features/Features";
import ContentSectionHome5 from "@/app/MobileAppDevelopment/ContentSection/ContentSection";
import SliderSectionHome7 from "@/app/MobileAppDevelopment/SliderSection/SliderSection";
import ContactSectionname from "@/app/careerSection/ContactSection/ContactSectionname";

export default function DigitalMarketingPage() {
  const params = useParams();
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    if (params?.slug) {
      setSlug(params.slug);
    }
  }, [params]);

  const data = {

    emailMarketing: { title: "Email Marketing", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    seo: { title: "SEO Services", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    smo: { title: "SMO Services", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    ppcservices: { title: "PPC Services", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    smm: { title: "Social Media Marketing", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
  };

  const pageData = slug ? data[slug] || { title: "Not Found", content: "Page not found" } : { title: "Loading...", content: "Please wait..." };

  return (
    <div className="max-w-[1600px]  mx-auto ">
      <Navbar />
      <HeroDigitalMarketingSection title={pageData.title} content={pageData.content} />
      <OurSourcesSection/>
      <DigitalMarkeingServices title={pageData.title} content={pageData.content}/>
      <FeatureSection/>
      <ContentSectionHome5/>
      <SliderSectionHome7/>
      <ContactSectionname/>
      <FAQ />
      <Footer />
    </div>
  );
}
