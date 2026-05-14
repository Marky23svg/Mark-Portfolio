import React, { useState } from 'react';
import { FaDownload, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdVerified } from "react-icons/md";

import Mark from '../assets/Markpfp3.webp';
import MarkHover from '../assets/MarkpfpHover.webp';
import Markwebp from '../assets/Markwebp.webp'; // <-- new image
import ThemeToggle from './ThemeToggle.jsx';

function Header() {
  const [hovered, setHovered] = useState(false); // state to track hover

  return (
    <header className="relative">
      <div className="absolute top-4 right-4 sm:top-12 sm:right-60">
        <ThemeToggle />
      </div>
      <section className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 py-10 px-5 pb-5 sm:px-60 bg-gray-50 dark:bg-black border-b border-gray-300 dark:border-gray-600">

        {/* Image */}
        <img
          src={hovered ? Markwebp : Mark}
          alt="Mark Dev"
          className="w-32 h-32 sm:w-35 sm:h-35 rounded-md shadow-md transition-all duration-500 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />


        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Mark Justin Canuel 
          </h2>
          <MdVerified className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
          </div>
          <h2 className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-400
          flex items-center gap-1">
            <GoLocation className="text-gray-700 dark:text-gray-400"/>
            Marikina City, Philippines
          </h2>

          <h2 className="text-lg sm:text-xl font-medium text-black dark:text-white">
            Software Engineer
          </h2>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2 sm">
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
              className="group px-2 py-2 bg-white border dark:bg-black dark:text-white dark:border-gray-600 border-gray-300 text-black rounded-lg 
              hover:text-black dark:hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer">
              <FaEnvelope className="group-hover:translate-y-1 transition-transform" />
              Send Email
            </button>


            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="group px-5 py-2 bg-white border dark:bg-black dark:text-white dark:border-gray-600 border-gray-300 text-black rounded-lg 
              hover:text-black dark:hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer ">
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
