import "./Skills.scss";
import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import sass from "../../assets/logos/sass.png";
import js from "../../assets/logos/javascript.png";
import node from "../../assets/logos/node.png";
import react from "../../assets/logos/react.svg";
import express from "../../assets/logos/express.png";
import axios from "../../assets/logos/axios.png";
import mysql from "../../assets/logos/mysql.png";
import knex from "../../assets/logos/knex.png";
import figma from "../../assets/logos/figma.png";

function Skills() {
  return (
    <>
      <div className="skills">
        <div className="skills__images-container">
          <img className="skills__icons" src={figma} alt="" />
          <img className="skills__icons" src={html} alt="" />
          <img className="skills__icons" src={css} alt="" />
          <img className="skills__icons" src={sass} alt="" />
          <img className="skills__icons" src={js} alt="" />
          <img className="skills__icons" src={react} alt="" />
          <img className="skills__icons" src={axios} alt="" />
          <img className="skills__icons" src={node} alt="" />
          <img className="skills__icons" src={express} alt="" />
          <img className="skills__icons" src={knex} alt="" />
          <img className="skills__icons" src={mysql} alt="" />
        </div>
        <div className="skills__images-contianer__mobile">
          <img className="skills__icons" src={figma} alt="" />
          <img className="skills__icons" src={html} alt="" />
          <img className="skills__icons" src={css} alt="" />
          <img className="skills__icons" src={sass} alt="" />
        </div>
        <div className="skills__images-contianer__mobile">
          <img className="skills__icons" src={js} alt="" />
          <img className="skills__icons" src={react} alt="" />
          <img className="skills__icons" src={axios} alt="" />
        </div>
        <div className="skills__images-contianer__mobile">
          <img className="skills__icons" src={node} alt="" />
          <img className="skills__icons" src={express} alt="" />
          <img className="skills__icons" src={knex} alt="" />
          <img className="skills__icons" src={mysql} alt="" />
        </div>
      </div>
    </>
  );
}

export default Skills;
