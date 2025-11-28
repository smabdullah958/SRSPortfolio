"use client"
import Image from "next/image";
import React, { useEffect} from "react";
import {ReactTyped} from "react-typed";
import Link from "next/link";
import Aos from "aos";

const HomePage = () => {



  useEffect(()=>{
    Aos.init({
       duration:1000,
    });
  },[]);
  let Role=[
    "IT Professional" ,"Software Engineer ","CS Instructor ", "E-commerce And Content Specialist"
  ]
  return (
    <section
      id="home"
      className="w-full h-full  flex items-center justify-center pt-24 md:pt-32 pb-10 bg-gray-900 px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 items-center max-w-6xl p-5 md:pt-0">
        {/* Left Side - Image */}
        <div className="flex justify-center pt-5">
          <Image
            src="/me.jpeg"
            alt="My Image"
            data-aos="fade-right"
            data-aos-delay="100"      
            data-aos-duration="500"
            width={300}
            height={300}
            style={{
              transition: 'all 0.3s ease-in-out'
            }}
            loading="lazy"
            className="rounded-full shadow-lg border-4 border-gray-700 hover:scale-105 transition-all hover:duration-1000"
          />
        </div>

        {/* Right Side - Text */}
        <div
            data-aos="fade-left"
            data-aos-delay="200"      
            data-aos-duration="500"
         className="text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            I am <span className="text-blue-400">Syed Rahim Shah</span>
          </h1>

          <p className="text-lg md:text-2xl font-bold text-white">
            I am a{" "}
                <ReactTyped
    className="text-blue-300"
     strings={Role}
     typeSpeed={80}
     backSpeed={50}
     loop
    />

          </p>

          <p  className="text-gray-400 my-3 text-sm sm:text-md  sm:mx-10 md:mx-0">With 30+ years of experience in software development, computer science education, and digital solutions</p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <Link
              href="#Projects"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              View Projects
            </Link>
            <Link
              href="#Contact"
              className="px-6 py-3 bg-gray-800 text-gray-200 font-semibold rounded-lg shadow-md border border-gray-600 hover:bg-gray-700 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
           
               
    </section>
  );
};

export default HomePage;