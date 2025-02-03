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
    android: { title: "Technology", content: "Android" },
    ios: { title: "iOS", content: "Development" },
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
