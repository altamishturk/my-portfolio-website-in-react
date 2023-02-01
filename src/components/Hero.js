import React from 'react';
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai";


function Hero() {
  return (
    <>
      <section className="min-h-[100vh] text-gray-600 body-font">
        <div className="container h-[100vh] mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">I'm Altamish <br/> Web Developer/Designer/UX Creator</h1>
            <p className="mb-8 leading-relaxed">A web developer who has expertise in both front-end and back-end web development.</p>
            <div className="flex justify-center">
              <AiFillFacebook size={35}/>
              <AiFillInstagram size={35}/>
              <AiFillLinkedin size={35}/>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default Hero;