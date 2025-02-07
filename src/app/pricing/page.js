"use client";

import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Pricing.css";
import "./Pricing.scss";

import Pricing1 from "./pricing1/Pricing1";


export default function Pricing() {
    return (
       <div className="bg-gray">
         <Navbar/>
         <br/><br/><br/>
         <Head>
        <title>My Page | Next.js SEO</title>
        <meta
          name="description"
          content="This is the meta description for My Page"
        />
        {/* Additional meta tags */}
      </Head>

         <div>
  
         <div className="hero">
  <div className="diagonal-hero-bg">
     <div className="stars">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-7xl text-white font-bold">PRICING</h1>
          <h1 className="text-7xl text-white font-bold">DAKSH INFOSFT</h1>
         
        </div>
        <div className="small"></div>
        <div className="medium"></div>
        <div className="big"></div>
      </div>
   </div>
</div>
      
      </div>
         <Pricing1/>
        <>
        <section className="containerr ">
          <section className="card__container">
            <div className="card__bx" style={{ '--clr': '#790958' }}>
              <div className="card__data">
                <div className="card__icon">
                  <i className="fa-solid fa-paintbrush"></i>
                </div>
                <div className="card__content">
                  <h3>Designing</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="card__bx" style={{ '--clr': '#24538f' }}>
              <div className="card__data">
                <div className="card__icon">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="card__content">
                  <h3>Development</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="card__bx" style={{ '--clr': '#fc466b' }}>
              <div className="card__data">
                <div className="card__icon">
                  <i className="fa-brands fa-searchengin"></i>
                </div>
                <div className="card__content">
                  <h3>SEO</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="containerr">
          <section className="card__container">
            <div className="card__bx" style={{ '--clr': '#fdbb2d' }}>
              <div className="card__data">
                <div className="card__icon">
                  <i className="fa-solid fa-paintbrush"></i>
                </div>
                <div className="card__content">
                  <h3>Designing</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="card__bx" style={{ '--clr': '#eb5ae5' }}>
              <div className="card__data">
                <div className="card__icon">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="card__content">
                  <h3>Development</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="card__bx" style={{ '--clr': '#9594e9' }}>
              <div className="card__data">
                <div className="card__icon">
                  <i className="fa-brands fa-searchengin"></i>
                </div>
                <div className="card__content">
                  <h3>SEO</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </section>
        </section>

        
        </>
       <Footer/>


       </div>
  );
}
