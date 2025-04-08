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
    android: { title: "Hire Android Developer", content: "" },
    ios: { title: "Hire IOS Developer", content: "" },
    flutter: { title: "Hire Flutter Developer", content: "" },
    reactjs: { title: "Hire React js Developer", content: "" },
    wordpress: { title: "Hire WordPress Developer", content: "" },
    html5: { title: "HTML5", content: "" },
    laravel: { title: "Hire Laravel Web Developer", content: "" },
    nodejs: { title: "Hire Custom Node js", content: "" },
    php: { title: "Hire Custom PHP", content: "" },
    java: { title: "Hire Custom Java", content: "" },
    figma: { title: " Hire Custom Figma", content: "" },
    anjular_js: { title: "Hire Custom Angular js", content: "" },
  };


  const pageData = data[slug] || { title: "", content: "" };

  return (
    <div className="max-w-[1800px]  mx-auto ">

      <Navbar/>
      <AppTechnologyPage title={pageData.title} content={pageData.content}/>
      <Footer />
    </div>
  );
}
