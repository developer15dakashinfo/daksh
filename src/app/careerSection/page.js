"use client";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CareerSection from "./CareerSection";
import ContactSection from "./ContactSection/ContactSection";
import JoinOurTeam from "./JoinOurTeam/JoinOurTeam";
import OurTeam from "./ourTeam/ourTeam";


export default function Career() {
  return (
    <div>
      <Navbar />
      <CareerSection />

      <JoinOurTeam />

      <OurTeam/>

      <ContactSection/>
      <Footer />
    </div>
  );
}
