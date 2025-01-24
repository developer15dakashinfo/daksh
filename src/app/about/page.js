"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import About1 from "./about1";
import About2 from "./about2/about2";
import About3 from "./about3/about3";

export default function About() {
  return (
    <div>
      <Navbar />

      <About1 />

      <About3 />

  
      <ContainerScroll />
      <Footer />
    </div>
  );
}
