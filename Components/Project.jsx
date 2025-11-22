"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Aos from "aos";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  let project = [
    {
      name: "Project 1",
      image: "/pro1.png",
      description:"A modern and full stack webapplication"
    },
    {
      name: "Project 2",
      image: "/pro2.jpg",
      description:"A modern and full  webapplication"
    },
    {
      name: "Project 3",
      image: "/pro3.png",
      description:"A modern and full stack web"
    },
  ];

  return (
    <div id="Projects" className="bg-gray-900 text-white  px-6">
      {/* Heading */}
      <h1 data-aos="fade-down"  className="text-4xl font-bold text-center mb-12">My Projects</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-screen mx-auto">
        {project.map((item,index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800 rounded-xl shadow-lg p-4 hover:scale-105 transition duration-500 cursor-pointer border border-gray-700 hover:border-indigo-500"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg w-full h-60 object-cover"
            />

            {/* Title */}
            <h3 className="text-xl font-bold mt-4 text-indigo-400">
              {item.name}
            </h3>

            {/* Description (optional) */}
            <p className="text-gray-300 mt-2 text-sm">
              {item.description}
            </p>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
