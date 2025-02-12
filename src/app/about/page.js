"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Aboutfirst from "./Aboutfirst";
import About2 from "./about2/about2";
import About3 from "./about3/about3";
import { useEffect, useState } from "react";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures code runs only on the client
  }, []);

  return (
    <div>
      <Navbar />

      <div className="max-w-[1800px]  mx-auto ">
        <Aboutfirst />

        <About3 />

        {/* <ContainerScroll /> */}
        <Footer />
      </div>
    </div>
  );
}
