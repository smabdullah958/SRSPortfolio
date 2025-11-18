"use client"
import Image from "next/image"
import Link from "next/link"
import { ReactTyped } from "react-typed"
const HomePage = () => {
  let Role=[
    "IT Professional" ,"Software Engineer ","CS Instructor ", "E-commerce And Content Specialist"
  ]
  return (
    <div id='home'       className="w-full h-full 2xl:px-40 2xl:pt-48  2xl:pb-24 grid grid-cols-1 md:flex md:justify-around md:items-center   pt-20  bg-gray-900 px-6"  >
      <div className="flex justify-center pt-5">

      <Image src="/me (2).jpeg" alt="me" loading="lazy"  width={300} height={300} className="rounded-full shadow-lg border-4 border-gray-700 hover:scale-105 transition-all hover:duration-1000 aos-init aos-animate "/>
      
      </div>
      <div className="flex flex-col justify-center   md:pl-10 lg:pl-20 ">
   <p className="text-xl sm:text-3xl md:text-5xl text-gray-100 font-bold md:text-left text-center pt-5 md:pt-0">I am <span className="text-blue-300">Syed Rahim Shah </span></p>
   <p className="mt-1 sm:mt-3 text-lg sm:text-xl md:text-2xl text-gray-100 font-bold md:text-left text-center ">
    I am {" "} 
    <ReactTyped
    className="text-blue-300"
     strings={Role}
     typeSpeed={80}
     backSpeed={50}
     loop
    />
    </p>
    <p  className="text-gray-400 my-3 text-sm sm:text-md  sm:mx-10 md:mx-0">With 30+ years of experience in software development, computer science education, and digital solutions</p>

<div className="flex gap-10 mb-5 mt-5 md:mt-0 justify-center md:justify-start">

<Link href="#Contact" className="bg-blue-500 text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 md:mt-10 ">Contact Me</Link>

<button className="bg-gray-800 text-white px-4 py-3 rounded-xl hover:bg-gray-600 transition-all duration-300 md:mt-10 w-24">CV</button>

</div>

   <div></div>

   </div>
    </div>
  )
}

export default HomePage
