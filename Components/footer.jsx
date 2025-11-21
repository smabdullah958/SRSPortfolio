"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  let IconsObject = [
    {
      icon: <FaLinkedinIn />,
      link: "https://smabdullah.netlify.app/",
    },
    {
      icon: <FaGithub />,
      link: "https://smabdullah.netlify.app/",
    },
  ];

  return (
    <footer className=" bg-blue-500 text-white py-8 shadow-xl border-t border-blue-300/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {IconsObject.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="text-3xl p-3 bg-white/20 rounded-full 
                         backdrop-blur-lg border border-white/30 
                         hover:bg-white hover:text-blue-600 
                         transition-all duration-300 hover:scale-110"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white/90 text-sm sm:text-base text-center font-light tracking-wide">
          © 2025 Syed Rahim Shah — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
