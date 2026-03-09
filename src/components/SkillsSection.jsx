
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaUserGraduate, FaCheckCircle } from "react-icons/fa";

const timeline = [
  {
    phase: "Foundation",
    period: "2021 - 2022",
    skills: "C, C++, DSA, Problem Solving",
    icon: <FaUserGraduate />,
  },
  {
    phase: "Web Development",
    period: "2022 - 2023",
    skills: "HTML, CSS, JavaScript, React, Tailwind",
    icon: <FaCode />,
  },
//   {
//     phase: "Full-Stack Development",
//     period: "2023 - 2024",
//     skills: "Node.js, Express, MongoDB, Redux, Postman",
//     icon: <FaRocket />,
//   },
//   {
//     phase: "Advanced & Industry",
//     period: "2024 - Present",
//     skills: "Next.js, Strapi, Performance Optimization",
//     icon: <FaCheckCircle />,
//   },
];

const SkillsTimeline = () => {
  return (
    <div id="skills" className="relative w-full bg-[#0c0e1e] text-white py-16 overflow-hidden">
<motion.h2
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-[#16f2b3] mb-14"
      >
        My Skill Journey
      </motion.h2>
      {/* Background glowing line */}
      <div className="absolute left-1/2 top-[120px] w-1 h-[80%] bg-gradient-to-b from-[#16f2b3] to-transparent animate-glow" />


      

      <div className="relative w-full max-w-5xl mx-auto space-y-12 px-6">

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex items-center gap-6 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="text-4xl bg-[#16f2b3] text-[#0c0e1e] p-4 rounded-full shadow-lg">
              {item.icon}
            </div>

            <div className="bg-[#0f0b34] p-6 rounded-xl shadow-xl w-full max-w-md hover:scale-[1.02] transition-all duration-300">
              <p className="text-[#16f2b3] text-sm font-semibold">{item.period}</p>
              <h3 className="text-xl font-bold mt-1">{item.phase}</h3>
             <p className="text-[#16f2b3] font-bold mt-2 text-[16px] tracking-wide drop-shadow-[0_0_6px_#16f2b3]">
  {item.skills}
</p>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default SkillsTimeline;


