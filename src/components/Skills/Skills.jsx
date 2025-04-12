import "./Skills.scss";
import figma from "../../assets/icons/figma.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import sass from "../../assets/icons/sass.png";
import tailwind from "../../assets/icons/tailwind.png"
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
  return (
    <>
      <div className="skills">
        <div className="skills__images-container skills__images-container--top">
          <img className="skills__icons" src={figma} alt="" />
          <img className="skills__icons" src={html} alt="" />
          <img className="skills__icons" src={css} alt="" />
          <img className="skills__icons" src={sass} alt="" />
          <img className="skills__icons" src={tailwind} alt="" />
        </div>

        <div className="skills__images-container">
          <img className="skills__icons" src={js} alt="" />
          <img className="skills__icons" src={ts} alt="" />
          <img className="skills__icons" src={react} alt="" />
          <img className="skills__icons" src={next} alt="" />
          <img className="skills__icons" src={vue} alt="" />
        </div>

        <div className="skills__images-container skills__images-container--bottom">
          <img className="skills__icons" src={node} alt="" />
          <img className="skills__icons" src={express} alt="" />
          <img className="skills__icons" src={mysql} alt="" />
          <img className="skills__icons" src={postgres} alt="" />
          <img className="skills__icons" src={sqlite} alt="" />
        </div>

        <div className="skills__images-contianer__mobile">
          <img className="skills__icons" src={figma} alt="" />
          <img className="skills__icons" src={html} alt="" />
          <img className="skills__icons" src={css} alt="" />
          <img className="skills__icons" src={sass} alt="" />
          <img className="skills__icons" src={tailwind} alt="" />
        </div>
        <div className="skills__images-contianer__mobile">
          <img className="skills__icons" src={js} alt="" />
          <img className="skills__icons" src={ts} alt="" />
          <img className="skills__icons" src={react} alt="" />
          <img className="skills__icons" src={next} alt="" />
          <img className="skills__icons" src={vue} alt="" />
        </div>
        <div className="skills__images-contianer__mobile">
          <img className="skills__icons" src={node} alt="" />
          <img className="skills__icons" src={express} alt="" />
          <img className="skills__icons" src={mysql} alt="" />
          <img className="skills__icons" src={postgres} alt="" />
          <img className="skills__icons" src={sqlite} alt="" />
        </div>
      </div>
    </>
  );
}

export default Skills;
