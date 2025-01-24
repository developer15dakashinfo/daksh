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
  };

  const pageData = data[slug] || { title: "404", content: "Page not found." };

  return (
    <div>
      <Navbar />
      <HeroVisual/>

      <Cardsection/>
      <Benefits/>
      <Testimonials/>
      <FAQ/>
      <FAQ/>
      <OurWebDesign title={pageData.title} content={pageData.content} />
      
      
      <Footer />
    </div>
  );
}
