import React from "react";
import { FaCode, FaShoppingCart, FaPenNib, FaChalkboardTeacher, FaTools } from "react-icons/fa";

const Services = () => {
  const services = [
    { 
      title: "Software Development", 
      icon: <FaCode size={40} /> 
    },{ 
      title: "IT Consultation", 
      icon: <FaTools size={40} /> 
    },{ 
      title: "Technical Training", 
      icon: <FaChalkboardTeacher size={40} /> 
    },    { 
      title: "E-commerce Solutions", 
      icon: <FaShoppingCart size={40} /> 
    },    { 
      title: "Content Creation", 
      icon: <FaPenNib size={40} /> 
    },

  ];

  return (
    <div
      id="Services"
      className="w-full h-full 2xl:py-16 bg-gray-900 sm:px-16 px-10 text-[#ece3e3] text-xl"
    >
      <h1 className="text-3xl font-bold pt-5 sm:pt-10 pb-10 text-center">What I Offer</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pb-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-gray-800 p-7 rounded-2xl shadow-lg 
              hover:scale-105 hover:bg-gray-700 
              transition-all duration-500 cursor-pointer 
              flex flex-col items-center text-center
            "
          >
            <div className="text-blue-400 mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold">{service.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
