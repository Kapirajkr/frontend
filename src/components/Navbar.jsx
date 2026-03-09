import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import cg from "../assets/card.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 50) navbar.classList.add("shadow-lg");
      else navbar.classList.remove("shadow-lg");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = () => setIsOpen(false);
    if (isOpen) window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 bg-[#0c0e1e] shadow-md flex justify-between items-center"
      style={{
        backgroundImage: `url(${cg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[#16f2b3] text-2xl font-bold cursor-pointer">
        Kapiraj Kumar
      </h1>

      <div
        className="md:hidden text-gray-300 text-2xl cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul
        onClick={(e) => e.stopPropagation()}
        className={`absolute md:static top-full left-0 w-full md:w-auto
          flex flex-col md:flex-row text-gray-300 text-sm uppercase
          bg-[#0c0e1e] md:bg-transparent transition-all duration-300 ease-in-out transform
          ${isOpen ? "opacity-100 translate-y-0 p-6 space-y-4" : "opacity-0 -translate-y-4 pointer-events-none"} 
          md:opacity-100 md:translate-y-0 md:pointer-events-auto
          md:space-y-0 md:space-x-6`}
        style={{ zIndex: 49 }}
      >
        {["About", "Experience", "Skills", "Education", "Projects"].map((item) => (
          <li key={item} className="font-bold text-center md:text-center">
            <button
              onClick={() => handleScrollTo(item)}
              className="hover:text-[#16f2b3] block relative group w-full"
            >
              {item}
              <span className="absolute left-0 right-0 bottom-0 mx-auto h-[2px] w-0 bg-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
