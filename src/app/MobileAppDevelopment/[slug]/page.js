

// "use client";

// import Footer from "@/app/Footer/Footer";
// import Navbar from "@/app/Navbar/Navbar";
// import { useEffect, useState } from "react";
// import HomeSection1 from "../HeroSection";
// import HomeSection2 from "../Home2";
// import ContentSectionHome5 from "../ContentSection/ContentSection";
// import BenefitsSectionHome6 from "../BenifitsSection/BenefitsSection";
// import HomeProcess4 from "../AppProcess/AppProcess";
// import SliderSectionHome7 from "../SliderSection/SliderSection";
// import ContactSectionname from "@/app/careerSection/ContactSection/ContactSectionname";
// import HomeSection3 from "../AppServices/AppServices";
// import FAQ from "@/app/websiteDesign/FAQ/FAQ";


// export default function mobileAppDevelopment({ params }) {
//   const [slug, setSlug] = useState("");
//   useEffect(() => {
//     (async () => {
//       const resolvedParams = await params;
//       setSlug(resolvedParams.slug);
//     })();
//   }, [params]);

//   const data = {
//     android_app_development: { title: "Android ", content: "App Development" },
//     ios_app_development: { title: "IOS  ", content: "App Development" },
//     flutter_app_development: {
//       title: "Flutter App Development ",
//       content: "App Development.",
//     },
//   };

//   const pageData = data[slug] || { title: "", content: "" };

//   return (
//     <div>
//       <Navbar/>
//       <HomeSection1 title={pageData.title} content={pageData.content} />
      
//       <HomeSection2 />

//       <HomeSection3 />
//       <ContentSectionHome5 />
//       <BenefitsSectionHome6 />
//       <HomeProcess4 />
//       <SliderSectionHome7 />
//       <ContactSectionname />

//       <FAQ />

//       <Footer/>
//     </div>
//   );
// }

"use client";

import Footer from "@/app/Footer/Footer";
import Navbar from "@/app/Navbar/Navbar";
import HomeSection1 from "../HeroSection";
import HomeSection2 from "../Home2";
import ContentSectionHome5 from "../ContentSection/ContentSection";
import BenefitsSectionHome6 from "../BenifitsSection/BenefitsSection";
import HomeProcess4 from "../AppProcess/AppProcess";
import SliderSectionHome7 from "../SliderSection/SliderSection";
import ContactSectionname from "@/app/careerSection/ContactSection/ContactSectionname";
import HomeSection3 from "../AppServices/AppServices";
import FAQ from "@/app/websiteDesign/FAQ/FAQ";

export default function MobileAppDevelopment({ params }) {
  const { slug } = params; 

  const data = {
    android_app_development: { title: "Android", content: "App Development" },
    ios_app_development: { title: "iOS", content: "App Development" },
    flutter_app_development: {
      title: "Flutter App Development",
      content: "App Development.",
    },
  };

  const pageData = data[slug] || { title: "Not Found", content: "Page not found" };

  return (
    <div>
      <Navbar />
      <HomeSection1 title={pageData.title} content={pageData.content} />
      <HomeSection2 />
      <HomeSection3 />
      <ContentSectionHome5 />
      <BenefitsSectionHome6 />
      <HomeProcess4 />
      <SliderSectionHome7 />
      <ContactSectionname />
      <FAQ />
      <Footer />
    </div>
  );
}
