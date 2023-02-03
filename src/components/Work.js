import React from "react";
import Section from "./Section";


function Work() {
  return (
    <Section title="Work">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
            <MyWork/>
            <MyWork/>
          </div> */}
          <div className="flex flex-wrap">
          <MyWork/>
          <MyWork/>
          <MyWork/>
          <MyWork/>
          <MyWork/>
          <MyWork/>
          </div>
    </Section>
    // <section className="bg-white text-gray-800 sm:px-8 py-12">
    //   <div className="relative max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 sm:rounded-lg shadow-lg">
    //     <div className="absolute right-0 bottom-0 hero-pattern w-64 h-56"></div>
    //     <div className="relative">
    //       <div>
    //         <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">Work</h2>
    //         <div className="my-4 mx-auto w-12 h-2 border-4 border-indigo-500"></div>
    //         <div className="text-center text-gray-700 font-light mb-8">Here are what some of our amazing customers are saying ...</div>
    //       </div>
    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
    //         <MyWork/>
    //         <MyWork/>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Work;

function MyWork() {
  return (
    <>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="relative mb-12">
          <div class="overflow-hidden rounded-lg">
            <img
              src="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-01.jpg"
              alt="portfolio"
              class="w-full"
            />
          </div>
          <div
            class="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg"
          >
            <span class="text-primary mb-2 block text-sm font-semibold">
              Branding
            </span>
            <h3 class="text-dark mb-4 text-xl font-bold">Branding Design</h3>
            <a
              href="/"
              class="text-body-color hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
