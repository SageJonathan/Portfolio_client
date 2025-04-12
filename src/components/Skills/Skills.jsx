import "./Skills.scss";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import sass from "../../assets/icons/sass.png";
import js from "../../assets/icons/javascript.png";
import node from "../../assets/icons/node.png";
import react from "../../assets/icons/react.svg";
import express from "../../assets/icons/express.png";
import mysql from "../../assets/icons/mysql.png";
import figma from "../../assets/icons/figma.png";

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
          <img className="skills__icons" src={node} alt="" />
          <img className="skills__icons" src={express} alt="" />
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
        </div>
        <div className="skills__images-contianer__mobile">
          <img className="skills__icons" src={node} alt="" />
          <img className="skills__icons" src={express} alt="" />
          <img className="skills__icons" src={mysql} alt="" />
        </div>
      </div>
    </>
  );
}

export default Skills;
