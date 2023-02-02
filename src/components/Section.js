import React from 'react'

function Section({children,background,title}) {
  return (
    <section id={title} className={`${background} py-20`}>
        <div className='container mx-auto px-5'>
            <div className='pb-10'>
                <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
                <div className="my-4 mx-auto w-12 h-2 border-4 border-indigo-500"></div>
                <div className="text-center text-gray-700 font-light mb-8">Here are what some of our amazing customers are saying ...</div>
            </div>
            <div>
                {children}
            </div>
        </div>
    </section>
  )
}

export default Section