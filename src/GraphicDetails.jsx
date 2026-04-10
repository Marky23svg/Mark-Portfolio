import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Graphic1 from "./assets/graphic1.webp";
import Graphic2 from "./assets/graphic2.webp";
import Graphic3 from "./assets/graphic3.webp";
import Graphic4 from "./assets/graphic4.webp";
import Graphic5 from "./assets/graphic5.webp";
import Graphic6 from "./assets/graphic6.webp";
import Graphic7 from "./assets/graphic7.webp";
import Graphic8 from "./assets/graphic8.webp";

export default function GraphicDetails() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const posters = [
    { src: Graphic1, title: "Poster 1" },
    { src: Graphic2, title: "Poster 2" },
    { src: Graphic3, title: "Poster 3" },
    { src: Graphic4, title: "Poster 4" },
    { src: Graphic5, title: "Poster 5" },
    { src: Graphic6, title: "Poster 6" },
    { src: Graphic7, title: "Poster 7" },
    { src: Graphic8, title: "Poster 8" },
  ];

  const nextSlide = () => {
  if (currentIndex < posters.length - 1) {
    setCurrentIndex(currentIndex + 1);
  }
};


  const prevSlide = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 p-3 dark:bg-black">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Graphic Design Projects
        </h1>
        <button
          className="bg-black dark:bg-gray-100 dark:hover:bg-black dark:hover:text-white rounded-lg h-8 w-24 text-white dark:text-black cursor-pointer border border-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>

      {/* Slider */}
      <div className="relative max-w-3xl mx-auto">

        {/* Image Container */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {posters.map((poster, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center p-4"
              >
                <img
                  src={poster.src}
                  alt={poster.title}
                  className="w-full max-h-[650px] object-contain rounded-lg"
                />
                {/*<h2 className="mt-1 font-semibold text-lg text-black dark:text-white">
                  {poster.title}
                </h2>*/}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white h-10 w-10 rounded-full hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-400 cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6 m-auto" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white h-10 w-10 rounded-full hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-400 cursor-pointer"
        >
          <ChevronRight className="h-6 w-6 m-auto" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {posters.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index
                  ? "bg-black dark:bg-white"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
