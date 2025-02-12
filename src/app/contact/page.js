"use client";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Contactname from "./contact1/Contactname.js";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1600px]  mx-auto ">
        <Contactname />

        <Footer />
      </div>
    </div>
  );
}
