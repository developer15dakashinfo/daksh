"use client";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import HeroVisual from "../HeroVisual";
// import HeroVisual from "../HeroVisual";
import OurWebDesign from "../OurWebDesign/OurWebDesign";


export default function WebsiteDesign({ params }) {
  const { slug } = params; 

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
     
      <OurWebDesign title={pageData.title} content={pageData.content} />
      

      <Footer />
    </div>
  );
}
