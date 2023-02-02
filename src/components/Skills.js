import React, { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import Section from './Section';

function Skills() {

  const [skills, setSkills] = useState([
    {
      skill: "HTML",
      percent: 50,
      seleted: true
    },
    {
      skill: "CSS",
      percent: 70,
      seleted: false
    },
    {
      skill: "Javascript",
      percent: 80,
      seleted: false
    },
    {
      skill: "React",
      percent: 80,
      seleted: false
    },
    {
      skill: "Node.js",
      percent: 80,
      seleted: false
    },
    {
      skill: "MongoDB",
      percent: 80,
      seleted: false
    },
    {
      skill: "Git",
      percent: 80,
      seleted: false
    },
    {
      skill: "Bootstrap",
      percent: 80,
      seleted: false
    },
    {
      skill: "Tailwind CSS",
      percent: 80,
      seleted: false
    },
    {
      skill: "D3.js",
      percent: 80,
      seleted: false
    },
    {
      skill: "WordPress",
      percent: 80,
      seleted: false
    },
  ]);
  const currentSkill = skills.find(sk => sk.seleted);


  const handleSelect = (skillName)=> {
    setSkills(prev => {
      return prev.map(sk => sk.skill === skillName? {...sk,seleted: true}:{...sk,seleted: false});
    })
  }

  return (
    <>
    <Section title="Skills">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
          <div className='grid grid-cols-2 gap-6 p-4'>
             {
               skills.map(sk => <Skill key={sk.skill} skill={sk} handleSelect={handleSelect}/>)
             }
           </div>
           <div className='p-4 w-[100%] md:w-[50%] flex justify-center items-center'>
              <div className='w-[200px] h-[200px]'>
                 <CircularProgressbar 
                 styles={buildStyles({pathColor: 'rgb(37 99 235)',textColor: 'rgb(37 99 235)'})} 
                 value={currentSkill.percent} 
                 text={`${currentSkill.percent}%`} />;
              </div>
           </div>
          </div>
    </Section>
    {/* <section className="bg-white text-gray-800 sm:px-8 py-12">
      <div className="relative max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 sm:rounded-lg shadow-lg">
        <div className="absolute right-0 bottom-0 hero-pattern w-64 h-56"></div>
        <div className="relative">
          <div>
            <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">Skills</h2>
            <div className="my-4 mx-auto w-12 h-2 border-4 border-indigo-500"></div>
            <div className="text-center text-gray-700 font-light">Here are what some of our amazing customers are
              saying ...</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
          <div className='grid grid-cols-2 gap-6 p-4'>
             {
               skills.map(sk => <Skill key={sk.skill} skill={sk} handleSelect={handleSelect}/>)
             }
           </div>
           <div className='p-4 w-[100%] md:w-[50%] flex justify-center items-center'>
              <div className='w-[200px] h-[200px]'>
                 <CircularProgressbar 
                 styles={buildStyles({pathColor: 'rgb(37 99 235)',textColor: 'rgb(37 99 235)'})} 
                 value={currentSkill.percent} 
                 text={`${currentSkill.percent}%`} />;
              </div>
           </div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  )
}

export default Skills;


function Skill({skill,handleSelect}){

  return (
    <>
      <button 
      onClick={()=>handleSelect(skill.skill)} 
      className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700  ${skill.seleted? "font-bold border-4 border-gray-800":""}`}>{skill.skill}</button>
    </>
  )
}