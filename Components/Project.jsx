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
      name: "Inventry and Stock Control",
      image: "/InventryAndStockControl.png",
    description: "A powerful full-stack system designed to manage stock levels, track products, and streamline inventory operations with real-time insights."

    },
    {
      name: "Library Management System",
      image: "/Library.jpg",
    description: "A modern digital library platform enabling efficient book tracking, member management, and automated borrowing & returning processes."

    },
    {
      name: "School Management System",
      image: "/SchoolManagementSystem.png",
    description: "A complete school administration solution that manages students, staff, attendance, exams, and reports through a clean, user-friendly interface."

    },
    {
      name: "Pharmacy Management System",
      image: "/PharmacyManagementSystem.png",
     description: "A professional pharmacy workflow system that handles medicine inventory, prescriptions, batch tracking, and billing with accuracy and speed."
    },
    {
      name: "PayRoll System",
      image: "/PayRollSystem.png",
    description: "A secure and automated payroll platform designed to process salaries, manage deductions, generate slips, and ensure financial compliance."
    },{
      name: "Retail POS System",
      image: "/Retail POS.png",
    description: "A fast and intuitive point-of-sale system for retail businesses, featuring real-time billing, sales analytics, and product tracking."
    },{
      name: "Data Migration System",
      image: "/DataMigration.jpg",
    description: "A reliable data migration tool that securely transfers records between systems with validation, cleanup, and performance optimization."
    }];

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
