"use client";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CareerSectionfirst from "./CareerSectionfirst";
import ContactSectionname from "./ContactSection/ContactSectionname";
import JoinOurTeam from "./JoinOurTeam/JoinOurTeam";
import OurTeam from "./ourTeam/ourTeam";


export default function Career() {
  return (
    <div>
      <Navbar />
      <CareerSectionfirst />

      <JoinOurTeam />

      <OurTeam/>

      <ContactSectionname/>
      <Footer />
    </div>
  );
}
