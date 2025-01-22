"use client";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Pricing.css";
import Pricing1 from "./pricing1/Pricing1";

export default function Pricing() {
    return (
       <>
         <Navbar/>
         <br/><br/><br/><br/>
<Pricing1/>
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
            <div className="card__bx" style={{ '--clr': '#5b98eb' }}>
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
            <div className="card__bx" style={{ '--clr': '#89ec5b' }}>
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
            <div className="card__bx" style={{ '--clr': '#5b98eb' }}>
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
       <Footer/>


       </>
  );
}
