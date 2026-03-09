import React from "react";
import { motion } from "framer-motion";
import cg from "../assets/card.png";
import mypic from "../assets/mypichalf.jpg";

const neonColors = [
  "text-[#16f2b3]", // neon green
  "text-[#f9a826]", // yellow
  "text-white" // white
];

const colorizeText = (text) => {
  return text.split(" ").map((word, index) => {
    const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
    return (
      <span
        key={index}
        className={`${randomColor} font-semibold transition-all duration-200`}
      >
        {word}{" "}
      </span>
    );
  });
};

const AboutSection = () => {
  const introText =
    "Hello! I'm Kpairaj Kumar, a passionate Software Engineer with strong interest in full-stack development, scalable systems, and modern UI engineering.";

  return (
    <div
      id="about"
      className="min-h-screen bg-[#05060f] text-white flex flex-col items-center py-16"
      style={{
        backgroundImage: `url(${cg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[#16f2b3] mb-14 tracking-wide"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col items-center lg:flex-row gap-14 px-10 lg:px-20">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative w-60 h-60 rounded-full overflow-hidden shadow-[0_0_15px_#16f2b355]"
        >
          <img src={mypic} alt="Angad Yadav" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text Box */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center lg:text-left max-w-2xl bg-[#0b0f29]/70 p-10 rounded-2xl border border-[#16f2b3]/30 shadow-[0_0_20px_#16f2b322] backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold text-[#16f2b3] mb-4">
            Who I Am?
          </h3>

          <p className="text-lg leading-relaxed">
            {colorizeText(introText)}
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            I enjoy building real-world products, exploring new technologies, and collaborating with teams
            to create meaningful solutions that make an impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;

