import React from "react";
import { Element } from "react-scroll";
import "./Landing.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Mission from "../../components/Mission/Mission";
import Clients from "../../components/Clients/Clients";
import Reviews from "../../components/Reviews/Reviews";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

function Landing() {
  return (
    <>
      <Nav />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="services">
        <Mission />
      </Element>
      <Element name="clients">
        <Clients />
      </Element>
      <Element name="reviews">
        <Reviews />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default Landing;
