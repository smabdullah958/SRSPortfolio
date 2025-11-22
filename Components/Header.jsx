
"use client"
// import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa"; // FaBars = burger icon, FaTimes = close icon
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  let [show, setshow] = useState(false)

  let CloseNavBar=()=>{
    setTimeout(() => {
      setshow(false)
    }, 1000);
  }

  return (
    <>
      {/* Desktop Navbar */}
      <div className='hidden 2xl:h-40 md:flex md:items-center md:justify-between md:bg-[#292727] md:w-full md:px-5 md:py-3 md:shadow-md md:fixed md:top-0 z-50 h-20'>

         <h1 className="text-white font-bold text-xl ">S<span className="text-4xl">R</span>S</h1>

      <div className='flex gap-x-10 justify-end bg-[#2d2d2d] items-center '>
        <Link href="#home" className='text-gray-200 hover:text-[#087ef5] text-md font-medium transition-all duration-300  hover:scale-110'>Home</Link>
        <Link href="#about" className='text-gray-200 text-md font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-110'>About</Link>
         <Link href="#Services" className='text-gray-200 text-md font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-110'>Services</Link>

        <Link href="#Skills" className='text-gray-200 text-md font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-110'>Skills</Link>
     
        <Link href="#Projects" className='text-gray-200 text-md font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-110'>Projects</Link>
        <Link href="#Contact" className='text-gray-200 text-md font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-110 mr-5'>Contact</Link>
      </div>
      </div>

      {/* Mobile Navbar */}
      <div className='md:hidden flex items-center justify-between  bg-[#2d2d2d] w-full px-5 py-3 shadow-md fixed top-0 z-50 h-20'>
        {/* Logo (optional) */}
        <h1 className="text-white font-bold text-xl">S<span className="text-4xl">R</span>S</h1>

        {/* Burger button */}
        {/* if show false than display the burger button if a show is true than a display teh burger button  */}
      {(show===false)? 
       (
          <FaBars size={28} onClick={() => setshow(true)} className="cursor-pointer text-gray-200" />
        ):
         (<FaTimes size={28} onClick={() => setshow(false)} className="cursor-pointer text-gray-200" />
        )

        }
      
      </div>

      {/* Mobile menu dropdown */}
      {show && (
        <div className='md:hidden w-full flex flex-col  items-center bg-[#2d2d2d] p-6 space-y-4 fixed top-14 shadow-lg z-50'>
          <Link  href="#home" onClick={CloseNavBar} className='text-gray-200 text-lg font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-105'>Home</Link>
          <Link href="#about" onClick={CloseNavBar} className='text-gray-200 text-lg font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-105'>About</Link>
          <Link href="#Services" onClick={CloseNavBar} className='text-gray-200 text-lg font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-105'>Services</Link>
          <Link href="#Skills" onClick={CloseNavBar} className='text-gray-200 text-lg font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-105'>Skills</Link>
          <Link href="#Projects" onClick={CloseNavBar} className='text-gray-200 text-lg font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-105'>Projects</Link>
          <Link href="#Contact" onClick={CloseNavBar} className='text-gray-200 text-lg font-medium transition-all duration-300 hover:text-[#087ef5] hover:scale-105'>Contact</Link>
        </div>
      )}
    </>
  )
}

export default Header