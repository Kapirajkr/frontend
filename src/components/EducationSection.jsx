import React from "react";
import { motion } from "framer-motion";
import edu from "../assets/edulogo.png";

const EducationSection = () => {
  const educationData = [
    {
      year: "2021 - 2025",
      title: "BACHELORS",
      institution: "University of Lucknow",
    },
    {
      year: "2019 - 2020",
      title: "HIGHER SECONDARY CERTIFICATE",
      institution: "Jawahar Navodaya Vidyalaya, Gorakhpur",
    },
    {
      year: "2017 - 2018",
      title: "SECONDARY SCHOOL CERTIFICATE",
      institution: "Jawahar Navodaya Vidyalaya, Gorakhpur",
    },
  ];

  return (
    <div
      id="education"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col justify-center py-16"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-[#16f2b3] mb-4"
      >
        Education
      </motion.h2>

      {/* Strong animated neon underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        className="w-56 h-[6px] bg-gradient-to-r from-[#16f2b3] via-[#16f2b3] to-transparent mx-auto mb-16 rounded-full shadow-[0_0_22px_#16f2b3]"
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16 gap-10">

        {/* Education Cards */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="bg-[#0f0b34] p-6 rounded-xl shadow-xl border border-[#16f2b356]
                           hover:border-[#16f2b3] hover:shadow-[0_0_25px_#16f2b3] transition-all duration-300"
              >
                <p className="text-[#16f2b3] text-lg font-bold">{edu.year}</p>
                <h3 className="text-xl font-extrabold mt-1">{edu.title}</h3>
                <p className="text-gray-300 mt-1 font-medium">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={edu} alt="Education Illustration" className="w-96 opacity-90" />
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection;
