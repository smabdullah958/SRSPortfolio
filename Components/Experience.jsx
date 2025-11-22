"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Experience = () => {
  return (
    <div className="bg-gray-900 text-white pt-12 px-6">
      <div className="max-w-screen mx-auto text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          My Professional Experience
        </motion.h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* 30+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-5xl font-bold text-indigo-400">
              <CountUp end={30} duration={3} enableScrollSpy />+
            </h2>
            <p className="text-lg mt-2">Years of Experience</p>
          </motion.div>

          {/* 50+ Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-5xl font-bold text-green-400">
              <CountUp end={50} duration={3} enableScrollSpy />+
            </h2>
            <p className="text-lg mt-2">Completed Projects</p>
          </motion.div>

          {/* 90% Happy Clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition "
          >
            <h2 className="text-5xl font-bold text-yellow-400">
              <CountUp end={90} duration={3} enableScrollSpy />%
            </h2>
            <p className="text-lg mt-2">Happy Clients</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Experience;