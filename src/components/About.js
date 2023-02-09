import React from 'react';
import Section from "./Section";

function About() {
  return (
    <Section 
    background="bg-gray-100" 
    title="About"
    description="The following information will provide you with an overview of who I am"
    >
       <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="i" loading="lazy" width="" height=""/>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">A Full-Stack Web Developer with a Passion for Quality Services</h2>
              <p className="mt-6 text-gray-600">I'm a full stack web developer with over 2 years of experience in developing and managing web applications. My primary focus is on developing custom web applications using HTML, CSS and JavaScript, I am also proficient in a range of other technologies such as React, Node.js, and MongoDB.</p>
              <p className="mt-4 text-gray-600">I am passionate about developing modern, responsive, and user-friendly websites. I have a deep understanding of the entire development process, from coding, debugging, and testing to deployment and maintenance. My goal is to develop innovative and user-centric web applications that meet customer needs.</p>
              <p className="mt-4 text-gray-600">I'm highly organized and I work well under pressure. I'm comfortable working in a team as well as taking on individual projects. I'm able to quickly adapt to new tools and technologies and I'm highly motivated to continuously improve my skill set.</p>
              <p className="mt-4 text-gray-600">With my extensive development experience and my dedication to delivering exceptional results, I am confident that I can help you build cutting-edge web applications. If you're looking for a full stack web developer, please get in touch. I would be more than happy to discuss your project and help you bring it to life.</p>
            </div>
          </div>
    </Section>
  )
}

export default About