import React from "react";
import Section from "./Section";
import project1 from "../assets/projects/1.JPG";
import project2 from "../assets/projects/2.JPG";
import project3 from "../assets/projects/3.JPG";
import project17 from "../assets/projects/17.JPG";
import project4 from "../assets/projects/4.JPG";
import project38 from "../assets/projects/38.PNG";


const projects = [
  {
    img: project1,
    name: `One Stop Management Services`,
    link: "https://osm-services.com",
    domainName: "Portfolio"
  },
  {
    img: project2,
    name: `Brand Lab`,
    link: "https://www.212deg.com/",
    domainName: "Business"
  },
  {
    img: project3,
    name: `Shenal's portFolio`,
    link: "https://www.shenalarimilli.com/",
    domainName: "Portfolio"
  },
  {
    img: project17,
    name: `Text to Speak`,
    link: "https://text-to-speak-by-me.netlify.app/",
    domainName: "Text to Speak"
  },
  {
    img: project38,
    name: `Oasis Reality`,
    link: "https://oasis-reality.netlify.app/",
    domainName: "Property Management"
  },
  {
    img: project4,
    name: `Website`,
    link: "https://chorpolath-map-data-visualization.netlify.app/",
    domainName: "Fitness"
  }
]


function Work() {
  return (
    <Section title="Work" description="See what my projects looks like below if you're interested">
          <div className="flex flex-wrap">
          {
            projects.map((project,i) =>  <MyWork key={i} project={project}/>)
          }
          </div>
    </Section>
  );
}

export default Work;

function MyWork({project}) {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/3">
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-lg">
            <img
              src={project.img}
              alt="portfolio"
              className="w-full"
            />
          </div>
          <div
            className="relative z-10 mx-5 -mt-9 rounded-lg bg-white py-5 px-3 text-center shadow-lg">
      
            <h3 className="text-dark text-sm">{project.domainName}</h3>
            {/* <a
              href={project.link}
              className="text-black hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition "
            >
              View Project
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
