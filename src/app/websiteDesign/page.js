"use client";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OurWebDesign from "./OurWebDesign/OurWebDesign";
import WebsiteDesign from "./WebsiteDesign";

export default function websiteDesign() {
  return (
    <div>
      <Navbar />

      <WebsiteDesign />
      <OurWebDesign/>

      <Footer />
    </div>
  );
}
