import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "./CodeBlock";
import bg from "../assets/hero.svg";

const PortfolioHero = () => {
  return (
    <div
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col pt-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between flex-1 px-8 lg:px-16 gap-10">

        {/* LEFT BLOCK */}
        <motion.div
          className="flex flex-col w-full lg:w-[45%] items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold leading-tight tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            Hello,
            <br />
            This is <span className="text-[#f9a826] drop-shadow-[0px_0px_1px_#f9a826]">Kapiraj Kumar</span>,
            <br />
            I'm a Professional <br />
            <span className="text-[#16f2b3] drop-shadow-[0px_0px_1px_#16f2b3]">
              Software Developer.
            </span>
          </motion.h2>

          <motion.div
            className="flex mt-6 space-x-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <a className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
              href="#contact"
            >
              Contact Me
            </a>

            <a
              href="#"
              className="border border-pink-500 hover:bg-pink-500 py-2 px-4 rounded-md transition-all duration-300"
            >
              Get Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex mt-6 space-x-5 text-[#f9a826] text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <a href="https://github.com/Kapirajkr" className="hover:text-white transition-all hover:scale-110">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kapiraj-kumar/" className="hover:text-white transition-all hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/kapi_0202" className="hover:text-white transition-all hover:scale-110">
              <i className="fab fa-instagram"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* CENTER DIVIDER LINE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="hidden lg:block w-[3px] h-72 bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full shadow-[0_0_20px_#16f2b3]"
        />

        {/* RIGHT CODE BLOCK */}
        <motion.div
  className="w-full lg:w-[50%] flex justify-center items-center"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
  whileHover={{ scale: 1.02 }}
>
  <CodeBlock />
</motion.div>


      </div>
    </div>
  );
};

export default PortfolioHero;

