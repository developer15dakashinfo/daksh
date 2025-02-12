"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/app/Footer/Footer";
import Navbar from "@/app/Navbar/Navbar";
import FAQ from "@/app/websiteDesign/FAQ/FAQ";
import Herosection from "../Herosection/Herosection";
import MobileAboutSection from "../AboutSection/AboutSection";
import MobileFeatureSection from "../MobileFeature/MobileFeature";
import SliderSectionHome7 from "@/app/MobileAppDevelopment/SliderSection/SliderSection";
import ContactSectionname from "@/app/careerSection/ContactSection/ContactSectionname";
import FeatureSection from "@/app/DigitalMarketing/Features/Features";
import ContentSectionHome5 from "@/app/MobileAppDevelopment/ContentSection/ContentSection";

export default function MobileMarketingPage() {
  const params = useParams();
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    if (params?.slug) {
      setSlug(params.slug);
    }
  }, [params]);

  const data = {

    bulksms: { title: "Bulk SMS", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    rcs: { title: "RCS (Rich Communication Services)", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    ivr: { title: "IVR (Interactive Voice Response)", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    official_whatsaap_api: { title: "Official Whatsaap API", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    voice_call: { title: "Voice Call", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },
    Calling_agent: { title: "Calling Agent", content: "At MyCompany, we offer cutting-edge digital marketing solutions to help businesses thrive in the online space. Whether you're looking to boost brand awareness, increase website traffic, or drive conversions, our expert team ensures your business reaches the right audience with the right strategies." },


  };

  const pageData = slug ? data[slug] || { title: "Not Found", content: "Page not found" } : { title: "Loading...", content: "Please wait..." };

  return (
    <div className="max-w-[1800px]  mx-auto ">
      <Navbar />
      <Herosection title={pageData.title} content={pageData.content} />
      <MobileAboutSection title={pageData.title} content={pageData.content}/>
      <MobileFeatureSection/>
      
      <SliderSectionHome7/>
      <ContactSectionname/>
      
      <FAQ/>
      <Footer />
    </div>
  );
}
