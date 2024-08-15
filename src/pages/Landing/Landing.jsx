import React from "react";
import { Element } from "react-scroll";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./Landing.scss";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Skills from "../../components/Skills/Skills";
import About from "../../components/About/About";
import Mission from "../../components/Mission/Mission";

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
      <Element name="skills">
        <Skills />
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
