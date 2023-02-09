import React, { useState } from 'react';
import Logo from "../assets/logo-1.png";
import {HiOutlineMenuAlt2} from "react-icons/hi";
import {RxCross2} from "react-icons/rx"

const NavItems = [
  {
    text: "Home",
    active: false
  },
  {
    text: "About",
    active: false
  },
  {
    text: "Skills",
    active: false
  },
  {
    text: "Testimonials",
    active: false
  },
  {
    text: "Work",
    active: false
  },
  {
    text: "Contact Us",
    active: false
  },
  
]

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header sticky top-0 z-index-100 bg-white shadow-md">
        <div className='container mx-auto px-5 flex items-center justify-between py-02'>
          {/* <!-- logo --> */}
          <div className="w-[150px]">
                <img className='w[100%]' src={Logo} alt="logo"/>
          </div>

          {/* <!-- navigation for big screens--> */}
          <nav className="nav font-semibold text-lg hidden lg:block">
              <ul className="flex items-center">
                  {
                    NavItems.map(item => <NavItem key={item.text} item={item}/>)
                  }
              </ul>
          </nav>

          <div className='lg:hidden'>
            {
              !isOpen && <HiOutlineMenuAlt2 
              size={28}
              onClick={()=>setIsOpen(true)}/>
            }
            {
              isOpen && <RxCross2 
              size={28}
              onClick={()=>setIsOpen(false)}/>
            }
          </div>
          
          {/* for mobiles  */}
          <nav 
          className={`transition-all duration-700 nav absolute w-[70%] h-[100vh] bg-gray-100 ${isOpen? "right-0":"right-[-70%]"} top-[50.5px] font-semibold text-lg lg:hidden`}>
            <ul className="flex items-start flex-col">
                {
                  NavItems.map(item => <NavItem setIsOpen={setIsOpen} key={item.text} item={item}/>)
                }
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header;



function NavItem({item,setIsOpen}){

  return (
    <>
      <li onClick={()=>setIsOpen(false)} className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
        <a href={`#${item.text}`}>{item.text}</a>
      </li>
    </>
  )
}