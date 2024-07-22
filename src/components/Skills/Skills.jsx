import "./Skills.scss";
import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"
import sass from "../../assets/images/sass.png"
import js from "../../assets/images/javascript.png"
import node from "../../assets/images/node.png"
import react from "../../assets/images/react.svg"
import express from "../../assets/images/express.png"
import axios from "../../assets/images/axios.png"
import mysql from "../../assets/images/mysql.png"
import knex from "../../assets/images/knex.png"
import figma from "../../assets/images/figma.png"



function Skills() {
  return (
  
   <>
    <div className="skills">
        {/* <h2 className="skills__header"> Languages </h2> */}
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
