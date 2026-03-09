import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import cg from "../assets/card.png";
import ex from "../assets/exper.png";

const ExperienceSection = () => {
 const experiences = [
  {
    period: "May 2025 - Sep 2025",
    title: "Fullstack Intern",
    company: "OctaNet",
    description: [
      "Developed full-stack modules",
      "Built reusable UI components",
      "Integrated REST APIs",
      "Optimized performance on production apps"
    ]
  },
 
];


  return (
    <div
      id="experience"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-20"
      style={{
        backgroundImage: `url(${cg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-[#16f2b3] mb-16"
      >
        Experience
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full px-8 lg:px-20">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={ex}
          alt="Experience Illustration"
          className="w-[420px] mx-auto animate-pulse-slow"
        />

        <div className="relative border-l-4 border-[#16f2b3] pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-[38px] w-8 h-8 bg-[#16f2b3] rounded-full flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-[#0c0e1e]" />
              </div>

              <div className="bg-[#0f0b34]/70 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-[1.02] transition-all duration-300">
                <p className="text-[#16f2b3] text-sm font-semibold">{exp.period}</p>
                <h3 className="text-2xl font-bold mt-1">{exp.title}</h3>
                <p className="text-gray-300 text-md">{exp.company}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.description.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-[#16f2b3]/20 text-[#16f2b3] border border-[#16f2b3]/40 backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
