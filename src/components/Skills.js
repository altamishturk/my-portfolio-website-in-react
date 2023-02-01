import React, { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';


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
  ]);
  const currentSkill = skills.find(sk => sk.seleted);


  const handleSelect = (skillName)=> {
    setSkills(prev => {
      return prev.map(sk => sk.skill === skillName? {...sk,seleted: true}:{...sk,seleted: false});
    })
  }

  return (
    <section className='py-10'>
      <div className='container mx-auto rounded-lg shadow-lg'>
        <div className='flex items-center justify-center'>
          <div className='p-3 w-[100%] md:w-[50%] flex justify-center md:justify-start  items-start flex-wrap gap-2'>
            {
              skills.map(sk => <button onClick={()=>handleSelect(sk.skill)} className={`${sk.seleted? "bg-blue-400":"bg-blue-400/50"} px-5 py-2`} key={sk.skill}>{sk.skill}</button>)
            }
          </div>
          <div className='p-3 w-[100%] md:w-[50%] flex justify-center items-center'>
             <div className='w-[200px] h-[200px]'>
                <CircularProgressbar value={currentSkill.percent} text={`${currentSkill.percent}%`} />;
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills