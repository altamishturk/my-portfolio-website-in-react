import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Section from './Section';
import D3Icon from "../assets/d3.png"
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/js.png";
import git from "../assets/git.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/react.png";
import wordpress from "../assets/wordpress.png";
import mongodb from "../assets/mongodb.png";
import tailwindcss from "../assets/tailwind-css.png";

const skills = [D3Icon,css,html,bootstrap,javascript,git,nodejs,reactjs,wordpress,mongodb,tailwindcss,]


function Skills() {


  return (
    <>
    <Section title="Skills">
      <div className='flex  justify-center items-center gap-10 flex-wrap'>
        {
          skills.map((still,i) => <img key={i} src={still} alt={still} width={80}/>)
        }
      </div>
    </Section>
    </>
  )
}

export default Skills;

