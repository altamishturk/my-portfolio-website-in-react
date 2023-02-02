import React from "react";
import Section from "./Section";


function Work() {
  return (
    <Section title="Work">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
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
      <div className="grid place-items-center p-5 h-auto  bg-gray-100 rounded-lg antialiased text-gray-900">
        <div>
          <img
            src="https://source.unsplash.com/random/350x350"
            alt=" random imgee"
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-4 -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm"> /wk</span>
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span className="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
