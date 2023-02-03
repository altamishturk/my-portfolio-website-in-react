import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Section from './Section';
import {AiFillHtml5} from "react-icons/ai";
import {SiCss3,SiTailwindcss} from "react-icons/si";
import {BsFillBootstrapFill,BsWordpress} from "react-icons/bs";
import {IoLogoJavascript} from "react-icons/io";
import {FaReact,FaNodeJs} from "react-icons/fa";
import {DiMongodb,DiGit} from "react-icons/di";
import D3Icon from "../assets/d3.png"


function Skills() {


  return (
    <>
    <Section title="Skills">
      <div className='flex justify-center items-center'>
        <AiFillHtml5/>
        <SiCss3/>
        <IoLogoJavascript/>
        <SiTailwindcss/>
        <BsFillBootstrapFill/>
        <BsWordpress/>
        <FaReact/>
        <FaNodeJs/>
        <DiMongodb/>
        <DiGit/>
        <img src={D3Icon} alt="d3"/>
      </div>
    </Section>
    </>
  )
}

export default Skills;

