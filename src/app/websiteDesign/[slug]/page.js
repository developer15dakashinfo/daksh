"use client";
import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import CardSectionname from "../CardSection/CardSectionname.js";
import HeroVisual from "../HeroVisual";
// import HeroVisual from "../HeroVisual";
import OurWebDesign from "../OurWebDesign/OurWebDesign";
import Benefits from "../Benefits/Benefits";
import Testimonials from "../testimonials/Testimonials";
import FAQ from "../FAQ/FAQ";
import HomeProcess4 from "@/app/MobileAppDevelopment/AppProcess/AppProcess";

export default function WebsiteDesign({ params }) {
  const [slug, setSlug] = useState("");
  useEffect(() => {
    (async () => {
      const resolvedParams = await params; 
      setSlug(resolvedParams.slug); 
    })();
  }, [params]);

  const data = {
    appdevelopment: { title: "App ", content: "Developement"  },
    webdevelopement: { title: "Web  ", content: "Developement" },
    webdesigning: { title: "Web Designing ", content: "Services" },
    marketing: { title: "Marketing ", content: "" },
    ppc_services: { title: "PPC Services", content: "Join our trusted community of Atlassian partners. Our program provides exclusive benefits and updates which help you to serve your clients to grow their business." },
    social_media_marketing: { title: "Social Media Marketing", content: "Join our trusted community of Atlassian partners. Our program provides exclusive benefits and updates which help you to serve your clients to grow their business." },
    seomarketing: { title: "SEO Marketing", content: "Join our trusted community of Atlassian partners. Our program provides exclusive benefits and updates which help you to serve your clients to grow their business." },
    smomarketing: { title: "SMO Marketing ", content: "Join our trusted community of Atlassian partners. Our program provides exclusive benefits and updates which help you to serve your clients to grow their business." },
    digitalmarketing: { title: "digital Marketing ", content: "This is content for Page 3." },
    emailmarketing: { title: "Email Marketing ", content: "Join our trusted community of Atlassian partners. Our program provides exclusive benefits and updates which help you to serve your clients to grow their business." },
    bulksms: { title: "Bulk sms ", content: "Join our trusted community of Atlassian partners. Our program provides exclusive benefits and updates which help you to serve your clients to grow their business." },
    rcs: { title: "RCS ", content: "Join our trusted community of Atlassian partners. Our program provides exclusive benefits and updates which help you to serve your clients to grow their business." },
    api: { title: "Official Whatsapp API ", content: "Join our trusted community of Atlassian partners. Our program provides exclusive benefits and updates which help you to serve your clients to grow their business." },
     };

  const pageData = data[slug] || { title: "", content: "" };

  return (
    <div className="max-w-[1600px]  mx-auto ">
      <Navbar />
      <Benefits  title={pageData.title} content={pageData.content} />
      {/* <HeroVisual title={pageData.title} content={pageData.content} /> */}

      <CardSectionname/>
      <HomeProcess4/>
     
      <Testimonials/>
      {/* <FAQ/> */}
      {/* <OurWebDesign title={pageData.title} content={pageData.content} /> */}
      
      
      <Footer />
    </div>
  );
}
