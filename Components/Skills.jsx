// // import React from 'react'
// // import {
// //   FaJs, FaPython, FaJava, FaAws, FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt,
// //   FaBootstrap, FaDatabase, FaServer, FaCogs, FaFire, FaTerminal
// // } from 'react-icons/fa';
// // import {
// //    SiPhp, SiMysql, SiPostgresql, SiMongodb, SiExpress, SiTailwindcss, SiCpanel
// // } from 'react-icons/si';

// // const Skills = () => {

// //   const modernSkills = [
// //     { name: 'JavaScript', icon: <FaJs className='text-yellow-400' /> },
// //     { name: 'Python', icon: <FaPython className='text-blue-500' /> },
// //     { name: 'Java', icon: <FaJava className='text-red-500' /> },
// //     // { name: 'C#', icon: <SiCsharp className='text-purple-600' /> },
// //     { name: 'PHP', icon: <SiPhp className='text-indigo-400' /> },
// //     { name: 'React', icon: <FaReact className='text-cyan-400' /> },
// //     { name: 'Vue.js', icon: <FaVuejs className='text-green-500' /> },
// //     { name: 'Node.js', icon: <FaNodeJs className='text-green-600' /> },
// //     { name: 'Express', icon: <SiExpress className='text-gray-400' /> },
// //     { name: 'MySQL', icon: <SiMysql className='text-blue-400' /> },
// //     { name: 'PostgreSQL', icon: <SiPostgresql className='text-blue-600' /> },
// //     { name: 'MongoDB', icon: <SiMongodb className='text-green-700' /> },
// //     { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
// //     { name: 'CSS', icon: <FaCss3Alt className='text-blue-500' /> },
// //     { name: 'Tailwind', icon: <SiTailwindcss className='text-cyan-500' /> },
// //     { name: 'Bootstrap', icon: <FaBootstrap className='text-purple-500' /> },
// //     { name: 'AWS', icon: <FaAws className='text-orange-600' /> },
// //     { name: 'Firebase', icon: <FaFire className='text-yellow-600' /> },
// //     { name: 'cPanel', icon: <SiCpanel className='text-orange-500' /> },
// //   ];

// //   const legacySkills = [
// //     { name: 'COBOL', icon: <FaTerminal className='text-gray-500' /> },
// //     { name: 'RPG', icon: <FaDatabase className='text-lime-500' /> },
// //     { name: 'EP90', icon: <FaServer className='text-pink-500' /> },
// //     { name: 'Pascal', icon: <FaCogs className='text-red-400' /> },
// //   ];

// //   const SkillCard = ({ name, icon }) => (
// //     <div className='flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300'>
// //       <div className='text-5xl mb-2'>
// //         {icon}
// //       </div>
// //       <p className='text-lg font-medium'>{name}</p>
// //     </div>
// //   );

// //   return (
// //     <div id='Skills' className='min-h-screen bg-gray-900 text-white py-12'>
// //       <div className='max-w-screen mx-auto px-4 sm:px-6 lg:px-8'>
// //         <h2 className='text-4xl font-extrabold text-center mb-12 pb-2'>
// //           Expertise
// //         </h2>

// //         {/* Modern Skills Section */}
// //         <h3 className='text-2xl font-bold mb-6 text-cyan-400'>🚀 Modern Stack</h3>
// //         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12'>
// //           {modernSkills.map((skill, index) => (
// //             <SkillCard key={index} name={skill.name} icon={skill.icon} />
// //           ))}
// //         </div>

// //         {/* Legacy Skills Section */}
// //         <h3 className='text-2xl font-bold mb-6 text-red-400'>💾 Legacy Skills</h3>
// //         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
// //           {legacySkills.map((skill, index) => (
// //             <SkillCard key={index} name={skill.name} icon={skill.icon} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skills;
"use client"

import React, { useState } from 'react'
import {
  FaJs, FaPython, FaJava, FaAws, FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt,
  FaBootstrap, FaDatabase, FaServer, FaCogs, FaFire, FaTerminal
} from 'react-icons/fa';
import {
   SiPhp, SiMysql, SiPostgresql, SiMongodb, SiExpress, SiTailwindcss, SiCpanel
} from 'react-icons/si';

const Skills = () => {

  const modernSkills = [
    { name: 'JavaScript', icon: <FaJs className='text-yellow-400' /> },
    { name: 'Python', icon: <FaPython className='text-blue-500' /> },
    { name: 'Java', icon: <FaJava className='text-red-500' /> },
    { name: 'PHP', icon: <SiPhp className='text-indigo-400' /> },
    { name: 'React', icon: <FaReact className='text-cyan-400' /> },
    { name: 'Vue.js', icon: <FaVuejs className='text-green-500' /> },
    { name: 'Node.js', icon: <FaNodeJs className='text-green-600' /> },
    { name: 'Express', icon: <SiExpress className='text-gray-400' /> },
    { name: 'MySQL', icon: <SiMysql className='text-blue-400' /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className='text-blue-600' /> },
    { name: 'MongoDB', icon: <SiMongodb className='text-green-700' /> },
    { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
    { name: 'CSS', icon: <FaCss3Alt className='text-blue-500' /> },
    { name: 'Tailwind', icon: <SiTailwindcss className='text-cyan-500' /> },
    { name: 'Bootstrap', icon: <FaBootstrap className='text-purple-500' /> },
    { name: 'AWS', icon: <FaAws className='text-orange-600' /> },
    { name: 'Firebase', icon: <FaFire className='text-yellow-600' /> },
    { name: 'cPanel', icon: <SiCpanel className='text-orange-500' /> },
  ];

  const legacySkills = [
    { name: 'COBOL', icon: <FaTerminal className='text-gray-500' /> },
    { name: 'RPG', icon: <FaDatabase className='text-lime-500' /> },
    { name: 'EP90', icon: <FaServer className='text-pink-500' /> },
    { name: 'Pascal', icon: <FaCogs className='text-red-400' /> },
  ];

  // ---- SLIDER LOGIC ----
  const [startIndex, setStartIndex] = useState(0);
  // We add this state to know which way to animate (Slide from Right or Left)
  const [direction, setDirection] = useState('next'); 
  const itemsPerSlide = 4;

  const nextSlide = () => {
    if (startIndex + itemsPerSlide < modernSkills.length) {
      setDirection('next'); // Set direction to next
      setStartIndex(startIndex + itemsPerSlide);
    }
  };

  const prevSlide = () => {
    if (startIndex - itemsPerSlide >= 0) {
      setDirection('prev'); // Set direction to prev
      setStartIndex(startIndex - itemsPerSlide);
    }
  };

  const SkillCard = ({ name, icon }) => (
    <div className='flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300'>
      <div className='text-5xl mb-2'>{icon}</div>
      <p className='text-lg font-medium'>{name}</p>
    </div>
  );

  return (
    <div id='Skills' className='min-h-screen bg-gray-900 text-white py-12'>
      
      {/* INJECTING CUSTOM CSS STYLES FOR ANIMATION
         This creates the smooth slide-in effect 
      */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        .animate-slide-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }
      `}</style>

      <div className='max-w-screen mx-auto px-4 sm:px-6 lg:px-8'>

        <h2 className='text-4xl font-extrabold text-center mb-12 pb-2'>
          Expertise
        </h2>

        {/* Modern Skills Section */}
        <h3 className='text-2xl font-bold mb-6 text-cyan-400'>🚀 Modern Stack</h3>

        <div className='relative group'>

          {/* SLIDER GRID CONTAINER */}
          {/* Key Prop: We use key={startIndex}. 
             When the key changes, React destroys this div and rebuilds it.
             This forces the 'animate-slide-...' class to run again immediately.
          */}
          <div 
            key={startIndex} 
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 
              ${direction === 'next' ? 'animate-slide-right' : 'animate-slide-left'}`}
          >
            {modernSkills
              .slice(startIndex, startIndex + itemsPerSlide)
              .map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>

          {/* PREVIOUS BUTTON */}
          {startIndex > 0 && (
            <button
              onClick={prevSlide}
              className='absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 
                         bg-gray-700 hover:bg-cyan-600 text-white px-3 py-3 rounded-full 
                         shadow-xl transition-all duration-300
                         opacity-100  '
            >
              ◀
            </button>
          )}

          {/* NEXT BUTTON */}
          {startIndex + itemsPerSlide < modernSkills.length && (
            <button
              onClick={nextSlide}
              className='absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 
                         bg-gray-700 hover:bg-cyan-600 text-white px-3 py-3 rounded-full shadow-xl transition-all duration-300
                         opacity-100 '
            >
              ▶
            </button>
          )}

        </div>

        {/* Legacy Skills Section */}
        <h3 className='text-2xl font-bold mt-12 mb-6 text-red-400'>💾 Legacy Skills</h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
          {legacySkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;