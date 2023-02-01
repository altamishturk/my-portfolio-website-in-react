import React from 'react'

function Header() {
  return (
    // <header classNameNameName="fixed top-0 z-index-10 left-0 w-full text-white bg-white shadow-sm">
    //     <nav classNameNameName="m-auto w-4/5 flex h-16 items-center justify-between bg-white">
    //         <div>
    //             <a href="/" classNameNameName="no-underline font-semibold text-black">Altamish</a>
    //         </div>

    //         <div classNameNameName="nav__menu" id="nav__menu">
    //             <ul classNameNameName="flex list-none">
    //                 <li classNameNameName="ml-12"><a href="#home" classNameNameName="no-underline font-semibold text-black active">Home</a></li>
    //                 <li classNameNameName="ml-12"><a href="#about" classNameNameName="no-underline font-semibold text-black">About</a></li>
    //                 <li classNameNameName="ml-12"><a href="#skills" classNameNameName="no-underline font-semibold text-black">Skills</a></li>
    //                 <li classNameNameName="ml-12"><a href="#testimonials" classNameNameName="no-underline font-semibold text-black">Testimonials</a></li>
    //                 <li classNameNameName="ml-12"><a href="#work" classNameNameName="no-underline font-semibold text-black">Work</a></li>
    //                 <li classNameNameName="ml-12"><a href="#contact" classNameNameName="no-underline font-semibold text-black">Contact</a></li>
    //             </ul>
    //         </div>

    //         <div classNameNameName="hidden" id="nav__toggle">
    //             <i classNameNameName="fas fa-bars" id='menu'></i>
    //             <i classNameNameName="fas fa-plus" id="plus"></i>
    //         </div>
    //     </nav>
    // </header>
   
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        {/* <!-- logo --> */}
        <h1 className="w-3/12">
            <a href="/">
            Altamish
            </a>
        </h1>

        {/* <!-- navigation --> */}
        <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                <a href="/">Accueil</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <a href="/">Produits</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <a href="/">Collections</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header