"use client";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HeroVisual from "./HeroVisual";
import OurWebDesign from "./OurWebDesign/OurWebDesign";

export default function websiteDesign() {
  return (
    <div>
      <Navbar />

      <HeroVisual/>
      <OurWebDesign/>

      <Footer />
    </div>
  );
}
