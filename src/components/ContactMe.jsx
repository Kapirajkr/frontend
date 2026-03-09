import React from "react";
import { motion } from "framer-motion";
import cg from "../assets/card.png";

const ContactMe = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16"
      style={{
        backgroundImage: `url(${cg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#16f2b3] mb-10"
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16 w-full lg:w-3/4">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-[#0f0b34] p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-xl font-bold mb-6 text-[#16f2b3]">Send a Message</h3>

          <form action="#" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 mb-5 bg-[#0c0e1e] border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-[#16f2b3]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 mb-5 bg-[#0c0e1e] border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-[#16f2b3]"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              className="w-full p-3 mb-6 bg-[#0c0e1e] border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-[#16f2b3]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#16f2b3] text-[#0c0e1e] font-bold py-3 rounded-lg hover:bg-[#13d9a1] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="flex flex-col justify-center bg-[#0f0b34] p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-xl font-bold mb-6 text-[#16f2b3]">Get in Touch</h3>

          <p className="text-gray-300 mb-3">
            <strong>Email:</strong> kapirajkumar12345@gmail.com
          </p>
          <p className="text-gray-300 mb-3">
            <strong>Phone:</strong> +91-6307311682
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/Kapirajkr" target="_blank" className="text-[#16f2b3] text-2xl hover:text-white transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kapiraj-kumar/" target="_blank" className="text-[#16f2b3] text-2xl hover:text-white transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/kapi_0202" target="_blank" className="text-[#16f2b3] text-2xl hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactMe;
