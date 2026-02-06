import React, { useState } from 'react';
import { FaDownload, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Mark from './assets/Markpfp3.png';
import MarkHover from './assets/MarkpfpHover.png'; // <-- new image
import ThemeToggle from './ThemeToggle.jsx';

function Header() {
  const [hovered, setHovered] = useState(false); // state to track hover

  return (
    <header className="relative">
      <div className="absolute top-4 right-4 sm:top-12 sm:right-30">
        <ThemeToggle />
      </div>
      <section className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 py-10 px-5 pb-5 sm:px-30 bg-gray-100 dark:bg-gray-950 border-b border-black/10 dark:border-gray-600">

        {/* Image */}
        <img
          src={hovered ? MarkHover : Mark}
          alt="Mark Dev"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl shadow-md transition-all duration-500 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />

       
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Canuel, Mark Justin
          </h2>

          <h2 className="text-sm sm:text-lg font-medium mt-1 text-gray-700 dark:text-gray-400">
            Marikina City
          </h2>

          <h2 className="text-lg sm:text-2xl font-medium text-gray-900 dark:text-white">
            Frontend Developer
          </h2>

          {/* Buttons */}
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
            <a href="/Mark_resume.pdf" download="MARK_JUSTIN_CANUEL_Resume.pdf">
            <button className="group px-4 py-1 bg-gray-900 dark:bg-yellow-300 dark:border-yellow-300 border border-gray-400 text-white rounded-lg 
              hover:bg-white hover:text-black transition duration-300 flex items-center gap-2 cursor-pointer">
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
              Resume
            </button>
            </a>
            
            
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="group px-3 py-1 bg-white border border-black/40 text-black rounded-lg 
              hover:text-black transition duration-300 flex items-center gap-2 cursor-pointer">
              <FaEnvelope className="group-hover:translate-y-1 transition-transform" />
              Send Email
            </button>
            

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
             className="group px-3 py-1 bg-white border border-black/40 text-black rounded-lg 
              hover:text-black transition duration-300 flex items-center gap-2 cursor-pointer">
              <FaPhoneAlt className="group-hover:translate-y-1 transition-transform" />
              Contact
            </button>
           
          </div>
          
        </div>
 
      </section>
    </header>



  );
}

export default Header;
