'use client';

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<null | string>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='bg-bgcolor relative'>
      <header className='border-b border-textColor bg-bgcolor fixed lg:left-28 w-full flex items-center justify-between py-2 lg:py-4 lg:w-5/6 lg:m-auto'>
        <h1 className='text-white hover:text-textColor ml-4 lg:ml-0 font-semibold lg:text-xl cursor-pointer'><Link href="/">@martin</Link></h1>
        <nav className={`bg-bgcolor fixed lg:w-1/3 lg:right-28 lg:top-0 lg:flex 
          ${isMenuOpen ? "shadow-xl w-full top-14 py-4 transition-all duration-300 ease-in-out" : "hidden"}`}>
          <ul className='lg:absolute lg:right-0 lg:top-4 text-textColor font-medium flex items-center justify-center gap-2 flex-col lg:flex-row lg:gap-6 text-sm lg:text-lg'>
            <li className="hover:text-white transition duration-300"><a href="#about" className="" onClick={handleLinkClick}>About Me</a></li>
            <li className="hover:text-white transition duration-300"><a href="/" onClick={handleLinkClick}>Home</a></li>
            <li className="hover:text-white transition duration-300"><a href="" onClick={handleLinkClick}>Portfolio</a></li>
            <li className="hover:text-white transition duration-300"><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </nav>
        <button className='border border-white rounded-2xl mr-4 lg:hidden' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 text-white font-semibold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </header>
    </div>
  )
}

export default NavBar