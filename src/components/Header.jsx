import React, { useState, useRef, useEffect } from 'react';
import { FaDownload, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { useTransition } from '../context/TransitionContext.jsx';
import Mark from '../assets/Markpfp3.webp';
import MarkHover from '../assets/MarkpfpHover.webp';
import Markwebp from '../assets/Markwebp.webp';
import MarkDogs from '../assets/MarkDogs.gif';
import MarkShiba from '../assets/MarkShiba.jpg';
import MarkDogsSound from '../assets/MarkDogsSound.mp3';
import ThemeToggle from './ThemeToggle.jsx';
import { PiUserSwitchFill } from "react-icons/pi";

function Header() {
  const [hovered, setHovered] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);
  const { navigateTo } = useTransition();

  // Unlock audio on first user interaction
  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
        audioRef.current.play()
          .then(() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.volume = 0.5;
            setAudioUnlocked(true);
          })
          .catch(() => {});
      }
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };

    document.addEventListener('click', unlockAudio);
    document.addEventListener('touchstart', unlockAudio);

    return () => {
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };
  }, []);

  // Play sound and keep it looping
  const playSound = () => {
    if (audioRef.current && audioUnlocked && !isPlayingRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true; // 👈 keeps playing while hovered
      audioRef.current.play().catch(err => console.log('Play failed:', err));
      isPlayingRef.current = true;
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      isPlayingRef.current = false;
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
    playSound();
  };

  const handleMouseMove = () => {
    // If the sound already ended, restart it while still hovering
    if (audioRef.current && audioUnlocked && audioRef.current.paused) {
      playSound();
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    stopSound();
  };

  return (
    <header className="relative">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={MarkDogsSound} preload="auto" />

      <section className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 py-10 pb-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 2xl:px-60 bg-gray-50 dark:bg-black border-b border-gray-300 dark:border-gray-600">

        {/* Controls */}
        <div className="absolute top-4 right-4 sm:top-11 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-56 2xl:px-60 flex flex-col-reverse sm:flex-row flex-nowrap items-end sm:items-center gap-2">
          <button
            className="bg-gray-200 dark:bg-neutral-800 dark:hover:bg-white dark:hover:text-black rounded-full h-8 w-8 text-black dark:text-white cursor-pointer border border-gray-300 dark:border-gray-600 hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1"
            onClick={() => navigateTo("/v2")}
          >
            <PiUserSwitchFill className="h-6 w-6" />
          </button>
          <ThemeToggle />
        </div>

        {/* Image - Shiba by default, Dogs GIF on hover (with looping sound) */}
        <img
          src={hovered ? MarkDogs : MarkShiba}
          alt="Mark Dev"
          className="w-32 h-32 sm:w-35 sm:h-35 rounded-lg shadow-md transition-all duration-500 cursor-pointer object-cover"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Mark Justin Canuel
            </h2>
            <MdVerified className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
          </div>
          <h2 className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-400 flex items-center gap-1">
            <GoLocation className="text-gray-700 dark:text-gray-400" />
            Marikina City, Philippines
          </h2>

          <h2 className="text-lg sm:text-xl font-medium text-black dark:text-white">
            Software Engineer
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2 sm">
            <a href="/Mark_resumev2.pdf" download="MARK_JUSTIN_CANUEL_Resume.pdf">
              <button className="group px-5 py-2 bg-gradient-to-r from-[#FFD700] to-[#FBBF24] text-gray-100 font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-[0_0_15px_#FFD700] hover:shadow-[0_0_30px_#FFD700] hover:text-black transition-all duration-300">
                <IoMdDownload className="group-hover:translate-y-1 transition-transform" />
                Resume
              </button>
            </a>

            <button
              onClick={() => window.location.href = "mailto:markjustincanuel2@gmail.com"}
              className="group px-2 py-2 bg-white border dark:bg-black dark:text-white dark:border-gray-600 border-gray-300 text-black rounded-lg hover:text-black dark:hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer"
            >
              <FaEnvelope className="group-hover:translate-y-1 transition-transform" />
              Send Email
            </button>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="group px-5 py-2 bg-white border dark:bg-black dark:text-white dark:border-gray-600 border-gray-300 text-black rounded-lg hover:text-black dark:hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer"
            >
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