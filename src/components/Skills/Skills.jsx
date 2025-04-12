import { useEffect } from 'react';

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

function Skills() {
  useEffect(() => {
    const icons = document.querySelectorAll('.skills__icons');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.2, 
    });

    icons.forEach(icon => observer.observe(icon));

    return () => {
      icons.forEach(icon => observer.unobserve(icon));
    };
  }, []);

  return (
    <div className="skills">
      <div className="skills__images-container skills__images-container--top">
        <img className="skills__icons" src={figma} alt="Figma" />
        <img className="skills__icons" src={html} alt="HTML" />
        <img className="skills__icons" src={css} alt="CSS" />
        <img className="skills__icons" src={sass} alt="Sass" />
        <img className="skills__icons" src={tailwind} alt="Tailwind" />
      </div>

      <div className="skills__images-container">
        <img className="skills__icons" src={js} alt="JavaScript" />
        <img className="skills__icons" src={ts} alt="TypeScript" />
        <img className="skills__icons" src={react} alt="React" />
        <img className="skills__icons" src={next} alt="Next.js" />
        <img className="skills__icons" src={vue} alt="Vue.js" />
      </div>

      <div className="skills__images-container skills__images-container--bottom">
        <img className="skills__icons" src={node} alt="Node.js" />
        <img className="skills__icons" src={express} alt="Express" />
        <img className="skills__icons" src={mysql} alt="MySQL" />
        <img className="skills__icons" src={postgres} alt="PostgreSQL" />
        <img className="skills__icons" src={sqlite} alt="SQLite" />
      </div>

      <div className="skills__images-contianer__mobile">
        <img className="skills__icons" src={figma} alt="Figma" />
        <img className="skills__icons" src={html} alt="HTML" />
        <img className="skills__icons" src={css} alt="CSS" />
        <img className="skills__icons" src={sass} alt="Sass" />
        <img className="skills__icons" src={tailwind} alt="Tailwind" />
      </div>

      <div className="skills__images-contianer__mobile">
        <img className="skills__icons" src={js} alt="JavaScript" />
        <img className="skills__icons" src={ts} alt="TypeScript" />
        <img className="skills__icons" src={react} alt="React" />
        <img className="skills__icons" src={next} alt="Next.js" />
        <img className="skills__icons" src={vue} alt="Vue.js" />
      </div>

      <div className="skills__images-contianer__mobile">
        <img className="skills__icons" src={node} alt="Node.js" />
        <img className="skills__icons" src={express} alt="Express" />
        <img className="skills__icons" src={mysql} alt="MySQL" />
        <img className="skills__icons" src={postgres} alt="PostgreSQL" />
        <img className="skills__icons" src={sqlite} alt="SQLite" />
      </div>
    </div>
  );
}

export default Skills;
