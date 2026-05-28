import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Graphic1 from "../assets/graphic1.webp";
import Graphic2 from "../assets/graphic2.webp";
import Graphic3 from "../assets/graphic3.webp";
import Graphic4 from "../assets/graphic4.webp";
import Graphic5 from "../assets/graphic5.webp";
import Graphic6 from "../assets/graphic6.webp";
import Graphic7 from "../assets/graphic7.webp";
import Graphic8 from "../assets/graphic8.webp";
import Graphic9 from "../assets/graphic9.webp";
import Graphic10 from "../assets/graphic10.webp";

const posters = [
  { src: Graphic1, title: "Poster 1" },
  { src: Graphic2, title: "Poster 2" },
  { src: Graphic3, title: "Poster 3" },
  { src: Graphic4, title: "Poster 4" },
  { src: Graphic5, title: "Poster 5" },
  { src: Graphic6, title: "Poster 6" },
  { src: Graphic7, title: "Poster 7" },
  { src: Graphic8, title: "Poster 8" },
  { src: Graphic9, title: "Poster 9" },
  { src: Graphic10, title: "Poster 10" },
];

export default function GraphicDetails() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Touch swipe for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextSlide();
    }
    if (isRightSwipe) {
      handlePrevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleNextSlide = () => {
    if (currentIndex < posters.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <div className="flex justify-between items-center p-4 sm:p-">
        <h1 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
          Graphic Design Projects
        </h1>
        <button
          className="bg-gray-50 dark:bg-black dark:hover:bg-white dark:hover:text-black rounded-lg h-8 w-24 text-black dark:text-white cursor-pointer border border-gray-300 dark:border-gray-600 hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1"
          onClick={() => navigate("/")}
        >
          <MdKeyboardDoubleArrowLeft />
          Back
        </button>
      </div>

      {/* Slider */}
      <div
        className="relative max-w-5xl mx-auto px-4 sm:px-6"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {posters.map((poster, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center p-4 sm:p-"
                >
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full max-w-4xl mx-auto max-h-[78vh] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevSlide}
            className={`absolute top-1/2 -translate-y-1/2 left-5 sm:left-4 bg-black/60 dark:bg-white/20 hover:bg-black/80 dark:hover:bg-white/30 text-white dark:text-white h-8 w-8 sm:h-10 sm:w-10 rounded-full transition-all duration-200 cursor-pointer backdrop-blur-sm ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 m-auto" />
          </button>

          <button
            onClick={handleNextSlide}
            className={`absolute top-1/2 -translate-y-1/2 right-5 sm:right-4 bg-black/60 dark:bg-white/20 hover:bg-black/80 dark:hover:bg-white/30 text-white dark:text-white h-8 w-8 sm:h-10 sm:w-10 rounded-full transition-all duration-200 cursor-pointer backdrop-blur-sm ${currentIndex === posters.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              }`}
            disabled={currentIndex === posters.length - 1}
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 m-auto" />
          </button>
        </div>

        {/* Dots Indicator - Smaller */}
        <div className="flex justify-center gap-1.5 mt-4 mb-2 flex-wrap">
          {posters.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-200 cursor-pointer ${currentIndex === index
                  ? "bg-black dark:bg-white h-1.5 w-4"
                  : "bg-gray-400 dark:bg-gray-600 h-1.5 w-1.5 hover:bg-gray-500"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - Smaller */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 pb-4">
          {currentIndex + 1} / {posters.length}
        </div>
      </div>
    </div>
  );
}