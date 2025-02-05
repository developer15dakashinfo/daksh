"use client";
import Footer from "@/app/Footer/Footer";
import Navbar from "@/app/Navbar/Navbar";
import Benefits from "@/app/websiteDesign/Benefits/Benefits";

import { useEffect, useState } from "react";
import AppTechnologyPage from "../AppTechnology/AppTechnology";


export default function technolgy({ params }) {
  const [slug, setSlug] = useState("");
  useEffect(() => {
    (async () => {
      const resolvedParams = await params; 
      setSlug(resolvedParams.slug); 
    })();
  }, [params]);

  const data = {
    AppTechnology: { title: "App Technology", content: "Learn about apps" },
    android: { title: "Android App", content: "" },
    ios: { title: "iOS App", content: "" },
    flutter: { title: "Flutter App", content: "" },
    reactjs: { title: "Custom React js", content: "" },
    wordpress: { title: "WordPress", content: "" },
    laravel: { title: "Laravel Web", content: "" },
    nodejs: { title: "Custom Node js", content: "" },
    php: { title: "Custom PHP", content: "" },
    java: { title: "Java", content: "" },
    figma: { title: "Figma", content: "" },
    anjular_js: { title: "Angular js", content: "" },
  };


  const pageData = data[slug] || { title: "", content: "" };

  return (
    <div>

      <Navbar/>
      <AppTechnologyPage title={pageData.title} content={pageData.content}/>
      <Footer />
    </div>
  );
}
