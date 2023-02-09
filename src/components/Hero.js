import React from 'react';
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import LinkedIn from "./Icons/LinkedIn";
import AltamishImg from "../assets/myImages/altamish5.jpg";
// import bgImg from "../assets/background/background.jpg";

function Hero() {
  return (
    <>
      <section id='Home' className={`h-[100vh] min-h-[700px] text-gray-600 body-font`}>
        <div className="container h-[100%] mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img 
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
          alt="hero" 
          src={AltamishImg}
          // src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font text-2xl md:text-4xl mb-4 font-medium text-gray-900">I'm Altamish <br/> Web Developer/Designer/UX Creator</h1>
            <p className="mb-8 leading-relaxed">A web developer who has expertise in both front-end and back-end web development.</p>
            <div className="flex justify-center">
              <Facebook size={35}/>
              <Instagram size={35}/>
              <LinkedIn size={35}/>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default Hero;