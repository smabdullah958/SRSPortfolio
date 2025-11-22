
"use client";
import Aos from "aos";
import { useEffect } from "react";

import React, { useState } from "react";
import {
  FaJs, FaPython, FaJava, FaAws, FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt,
  FaBootstrap, FaDatabase, FaServer, FaCogs, FaFire, FaTerminal
} from "react-icons/fa";
import {
  SiPhp, SiMysql, SiPostgresql, SiMongodb, SiExpress, SiTailwindcss, SiCpanel
} from "react-icons/si";

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const modernSkills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-600" /> },
    { name: "Firebase", icon: <FaFire className="text-yellow-600" /> },
    { name: "cPanel", icon: <SiCpanel className="text-orange-500" /> },
  ];

  const legacySkills = [
    { name: "COBOL", icon: <FaTerminal className="text-gray-500" /> },
    { name: "RPG", icon: <FaDatabase className="text-lime-500" /> },
    { name: "EP90", icon: <FaServer className="text-pink-500" /> },
    { name: "Pascal", icon: <FaCogs className="text-red-400" /> },
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(modernSkills.length / itemsPerSlide);

  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  const changeSlide = (index) => {
    setDirection(index > slide ? "next" : "prev");
    setSlide(index);
  };

  const SkillCard = ({ name, icon }) => (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
      <div className="text-5xl mb-2">{icon}</div>
      <p className="text-lg font-medium">{name}</p>
    </div>
  );

  return (
    <div id="Skills" className="bg-gray-900 text-white py-12">
      <style>
        {`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right { animation: slideInRight 0.4s ease-out forwards; }
        .animate-slide-left { animation: slideInLeft 0.4s ease-out forwards; }
      `}
      </style>

      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-down" className="text-4xl font-extrabold text-center mb-12 pb-2">Expertise</h2>

        {/* Modern Stack */}
        <h3 data-aos="fade-down" className="text-2xl font-bold mb-6 text-cyan-400">🚀 Modern Stack</h3>

        {/* SKILLS SLIDER */}
        <div className="relative" data-aos="fade-down">

          <div
            key={slide}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 
              ${direction === "next" ? "animate-slide-right" : "animate-slide-left"}`}
          >
            {modernSkills
              .slice(slide * itemsPerSlide, slide * itemsPerSlide + itemsPerSlide)
              .map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} />
              ))}
          </div>

           {/* DOTS NAVIGATION */}
          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              < button
                key={index}
                onClick={() => changeSlide(index)}
                className={`size-2 xl:size-3 rounded-full transition-all 
                  ${slide === index ? "bg-cyan-400 scale-110" : "bg-gray-600 hover:bg-gray-400"}`}
              />
            ))}
          </div> 
        </div>

        {/* Legacy Section */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-red-400 " data-aos="fade-up">💾 Legacy Skills</h3>
        <div data-aos="fade-down" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {legacySkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
