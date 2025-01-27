"use client";
import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Cardsection from "../CardSection/Cardsection";
import HeroVisual from "../HeroVisual";
// import HeroVisual from "../HeroVisual";
import OurWebDesign from "../OurWebDesign/OurWebDesign";
import Benefits from "../Benefits/Benefits";
import Testimonials from "../testimonials/Testimonials";
import FAQ from "../FAQ/FAQ";

export default function WebsiteDesign({ params }) {
  const [slug, setSlug] = useState("");
  useEffect(() => {
    (async () => {
      const resolvedParams = await params; // Resolve the params Promise
      setSlug(resolvedParams.slug); // Extract the slug value
    })();
  }, [params]);

  const data = {
    appdevelopment: { title: "App Developement", content: "This is content for Page 1." },
    webdevelopement: { title: "Web Developement ", content: "This is content for Page 2." },
    marketing: { title: "Marketing ", content: "This is content for Page 3." },
    android_app_development: { title: "Android App Development", content: "This is content for Page 1." },
    ios_app_development: { title: "IOS App Development ", content: "This is content for Page 2." },
    flutter_app_development: { title: "Flutter App Development ", content: "This is content for Page 3." },
    seomarketing: { title: "SEO Marketing", content: "This is content for Page 1." },
    smomarketing: { title: "SMO Marketing ", content: "This is content for Page 2." },
    digitalmarketing: { title: "digital Marketing ", content: "This is content for Page 3." },
    emailmarketing: { title: "Email Marketing ", content: "This is content for Page 3." },
    bulksms: { title: "Bulk sms ", content: "This is content for Page 3." },
    rcs: { title: "RCS ", content: "This is content for Page 3." },
    api: { title: "Official Whatsapp API ", content: "This is content for Page 3." },
     };

  const pageData = data[slug] || { title: "404", content: "Page not found." };

  return (
    <div>
      <Navbar />
      <HeroVisual title={pageData.title} content={pageData.content} />

      <Cardsection/>
      <Benefits/>
      <Testimonials/>
      <FAQ/>
      {/* <OurWebDesign title={pageData.title} content={pageData.content} /> */}
      
      
      <Footer />
    </div>
  );
}
