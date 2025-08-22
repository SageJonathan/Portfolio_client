import { useEffect } from "react";
import "./Skills.scss";
import figma from "../../assets/icons/figma.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import sass from "../../assets/icons/sass.png";
import tailwind from "../../assets/icons/tailwind.png";
import js from "../../assets/icons/javascript.png";
import ts from "../../assets/icons/typescript.png";
import node from "../../assets/icons/node.png";
import react from "../../assets/icons/react.svg";
import next from "../../assets/icons/next.png";
import vue from "../../assets/icons/vue.png";
import express from "../../assets/icons/express.png";
import mysql from "../../assets/icons/mysql.png";
import postgres from "../../assets/icons/postgresql.png";
import sqlite from "../../assets/icons/sqlite.png";

function TechnologyExpertise() {
  useEffect(() => {
    const icons = document.querySelectorAll(".tech-stack__icon");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    icons.forEach((icon) => observer.observe(icon));

    return () => {
      icons.forEach((icon) => observer.unobserve(icon));
    };
  }, []);

  return (
    <div className="technology-expertise">
      <div className="technology-expertise__header">
        <h2 className="technology-expertise__title">Technology & Expertise</h2>
        <p className="technology-expertise__subtitle">
          We leverage cutting-edge technologies to deliver robust, scalable
          solutions that drive business growth
        </p>
      </div>

      <div className="tech-stack">
        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Frontend Development</h3>
          <p className="tech-stack__category-description">
            Modern, responsive user interfaces that deliver exceptional user
            experiences
          </p>
          <div className="tech-stack__icons">
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={html} alt="HTML" />
              <span className="tech-stack__icon-label">HTML5</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={css} alt="CSS" />
              <span className="tech-stack__icon-label">CSS3</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={sass} alt="Sass" />
              <span className="tech-stack__icon-label">Sass</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={tailwind} alt="Tailwind" />
              <span className="tech-stack__icon-label">Tailwind</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={js} alt="JavaScript" />
              <span className="tech-stack__icon-label">JavaScript</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={ts} alt="TypeScript" />
              <span className="tech-stack__icon-label">TypeScript</span>
            </div>
          </div>
        </div>

        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Frameworks & Libraries</h3>
          <p className="tech-stack__category-description">
            Powerful tools that accelerate development and ensure code quality
          </p>
          <div className="tech-stack__icons">
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={react} alt="React" />
              <span className="tech-stack__icon-label">React</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={next} alt="Next.js" />
              <span className="tech-stack__icon-label">Next.js</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={vue} alt="Vue.js" />
              <span className="tech-stack__icon-label">Vue.js</span>
            </div>
          </div>
        </div>

        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Backend & APIs</h3>
          <p className="tech-stack__category-description">
            Robust server-side solutions and scalable API architectures
          </p>
          <div className="tech-stack__icons">
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={node} alt="Node.js" />
              <span className="tech-stack__icon-label">Node.js</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={express} alt="Express" />
              <span className="tech-stack__icon-label">Express</span>
            </div>
          </div>
        </div>

        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Databases & Storage</h3>
          <p className="tech-stack__category-description">
            Reliable data management solutions for applications of any scale
          </p>
          <div className="tech-stack__icons">
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={mysql} alt="MySQL" />
              <span className="tech-stack__icon-label">MySQL</span>
            </div>
            <div className="tech-stack__icon-item">
              <img
                className="tech-stack__icon"
                src={postgres}
                alt="PostgreSQL"
              />
              <span className="tech-stack__icon-label">PostgreSQL</span>
            </div>
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={sqlite} alt="SQLite" />
              <span className="tech-stack__icon-label">SQLite</span>
            </div>
          </div>
        </div>

        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Design & Tools</h3>
          <p className="tech-stack__category-description">
            Professional design tools and development utilities
          </p>
          <div className="tech-stack__icons">
            <div className="tech-stack__icon-item">
              <img className="tech-stack__icon" src={figma} alt="Figma" />
              <span className="tech-stack__icon-label">Figma</span>
            </div>
          </div>
        </div>
      </div>

      <div className="expertise-areas">
        <h3 className="expertise-areas__title">Areas of Expertise</h3>
        <div className="expertise-areas__grid">
          <div className="expertise-area">
            <h4 className="expertise-area__title">E-commerce Development</h4>
            <p className="expertise-area__description">
              Complete online store solutions with payment processing, inventory
              management, and customer analytics
            </p>
          </div>
          <div className="expertise-area">
            <h4 className="expertise-area__title">API Development</h4>
            <p className="expertise-area__description">
              RESTful and GraphQL APIs, third-party integrations, and
              microservices architecture
            </p>
          </div>
          <div className="expertise-area">
            <h4 className="expertise-area__title">Performance Optimization</h4>
            <p className="expertise-area__description">
              Speed optimization, SEO best practices, and scalable
              infrastructure solutions
            </p>
          </div>
          <div className="expertise-area">
            <h4 className="expertise-area__title">Mobile-First Design</h4>
            <p className="expertise-area__description">
              Responsive design principles and progressive web application
              development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyExpertise;
