import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Section from './Section';
import D3Icon from "../assets/skills/d3.png"
import html from "../assets/skills/html-5.png";
import css from "../assets/skills/css-3.png";
import bootstrap from "../assets/skills/bootstrap.png";
import javascript from "../assets/skills/js.png";
import git from "../assets/skills/git.png";
import nodejs from "../assets/skills/nodejs.png";
import reactjs from "../assets/skills/react.png";
import wordpress from "../assets/skills/wordpress.png";
import mongodb from "../assets/skills/mongodb.png";
import tailwindcss from "../assets/skills/tailwind-css.png";

const skills = [
  
  {
    src: html,
    name: "HTML"
  },
  {
    src: css,
    name: "CSS"
  },
  {
    src: javascript,
    name: "JavaScript"
  },
  {
    src: bootstrap,
    name: "Bootstrap"
  },
  {
    src:   tailwindcss,
    name: "Tailwind CSS"
  },
  {
    src:   nodejs,
    name: "Node.js"
  },
  {
    src:   reactjs,
    name: "React.js"
  },
  {
    src:   mongodb,
    name: "Mongodb"
  },
  {
    src:   git,
    name: "git"
  },
  {
    src:   wordpress,
    name: "Wordpress"
  },
  {
    src: D3Icon,
    name: "D3.JS"
  }
]


function Skills() {


  return (
    <>
    <Section title="Skills" description="The following are the skills I consider myself to be competent in">
      <div className='flex  justify-center items-center gap-10 flex-wrap'>
        {
          skills.map((skill,i) => <Skill key={i} skill={skill}/>)
        }
      </div>
    </Section>
    </>
  )
}

export default Skills;



function Skill({skill}){

  return (<>
  <div className='flex flex-col items-center'>
    <img src={skill.src} alt={skill.name} width={80}/>
    <h6 className='border-t mt-2 font-bold text-sm'>{skill.name}</h6>
  </div>
  </>)
}

