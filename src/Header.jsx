import React, { useState } from 'react';
import { FaDownload, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import Mark from './assets/Markpfp3.png';
import MarkHover from './assets/MarkpfpHover.png'; // <-- new image
import ThemeToggle from './ThemeToggle.jsx';

function Header() {
  const [hovered, setHovered] = useState(false); // state to track hover

  return (
    <header className="relative">
      <div className="absolute top-4 right-4 sm:top-12 sm:right-50">
        <ThemeToggle />
      </div>
      <section className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 py-10 px-5 pb-5 sm:px-50 bg-gray-50 dark:bg-black border-b border-black/10 dark:border-gray-600">

        {/* Image */}
        <img
          src={hovered ? MarkHover : Mark}
          alt="Mark Dev"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl shadow-md transition-all duration-500 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />


        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Canuel, Mark Justin 
          </h2>
          <MdVerified className="h-5 w-5 sm:h-6 sm:w-6 mt-1 text-blue-500" />
          </div>
          <h2 className="text-sm sm:text-lg font-medium mt-1 text-gray-700 dark:text-gray-400">
            Marikina City, Philippines
          </h2>

          <h2 className="text-lg sm:text-2xl font-medium text-black dark:text-white">
            Frontend Developer
          </h2>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
            <a href="/Mark_resume.pdf" download="MARK_JUSTIN_CANUEL_Resume.pdf">
              <button className="group px-5 py-2 bg-gradient-to-r from-[#FFD700] to-[#FBBF24] 
      text-gray-100 font-semibold rounded-lg flex items-center gap-2 cursor-pointer
      shadow-[0_0_15px_#FFD700] hover:shadow-[0_0_30px_#FFD700] 
      hover:text-black transition-all duration-300">
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
                Resume
              </button>
            </a>


            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="group px-4 py-1 bg-white border dark:bg-black dark:text-white dark:border-gray-600 border-gray-300 text-black rounded-lg 
              hover:text-black transition duration-300 flex items-center gap-2 cursor-pointer">
              <FaEnvelope className="group-hover:translate-y-1 transition-transform" />
              Send Email
            </button>


            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="group px-5 py-1 bg-white border dark:bg-black dark:text-white dark:border-gray-600 border-gray-300 text-black rounded-lg 
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
