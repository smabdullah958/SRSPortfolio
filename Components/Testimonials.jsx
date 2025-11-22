"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import { FaUser, FaRegUserCircle } from "react-icons/fa";

const Testimonials = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const data = [
    {
      name: "Ayesha Khan",
      message:
        "Amazing service! The quality was perfect and delivery was fast. Highly recommended!",
    },
    {
      name: "Ali Raza",
      message:
        "Very professional and responsive. My experience was wonderful!",
    },
    {
      name: "John",
      message:
        "I loved the product! Everything was exactly as shown in the pictures.",
    },{
      name:"Tom",
      message:"I had a great experience with a mr rahim shah. They were very responsive and went above and beyond to ensure my needs were met."
    },{
      name:"Root",
      message:"he is very great developer and i am very happy to work with him."
    }
  ];

  return (
    <div data-aos="flip-left" className="w-full py-14 bg-gray-900 text-white">
      <h1 className="text-center text-4xl font-extrabold mb-12 tracking-wide">
        Testimonials
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-800/60 backdrop-blur-xl 
              border border-gray-700/60
              p-6 rounded-2xl shadow-xl 
              transition-all duration-500 
              hover:-translate-y-2 hover:shadow-2xl hover:border-gray-500
            "
          >
            {/* Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="
                  text-6xl 
                  p-3 rounded-full 
                  bg-gray-700 
                  shadow-md shadow-black/50
                "
              >
                {item.gender === "male" ? (
                  <FaUser className="text-gray-200" />
                ) : (
                  <FaRegUserCircle className="text-gray-200" />
                )}
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed italic">
              “{item.message}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
