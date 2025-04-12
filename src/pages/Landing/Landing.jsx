import React from "react";
import { Element } from "react-scroll";
import "./Landing.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Mission from "../../components/Mission/Mission";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Clients from "../../components/Clients/Clients";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";


function Landing() {
  return (
    <>
    <Nav />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="mission">
        <Mission />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="clients">
        <Clients />
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
