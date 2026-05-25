import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ThinkFashion",
      description:
        "A full-stack E-commerce website with menu browsing, order, and Add to cart features, ensuring a seamless user experience.",
      link: "#",
    },
   
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      id="projects"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16"
    >
      <motion.h2
        className="text-3xl font-bold text-[#16f2b3] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16 w-full"
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 180, damping: 10 }}
            className="relative group bg-[#0f0b34] p-6 rounded-xl shadow-lg overflow-hidden
              border border-transparent hover:border-[#16f2b3] hover:shadow-[#16f2b3]/30 no-underline"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-500 bg-gradient-to-r from-[#16f2b3] to-transparent blur-xl"></div>

            <h3 className="text-xl font-bold text-[#16f2b3]">{project.title}</h3>
            <p className="text-gray-300 mt-4 leading-relaxed">{project.description}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
