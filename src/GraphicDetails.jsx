import { useNavigate } from "react-router-dom";
import Graphic1 from "./assets/graphic1.png";
import Graphic2 from "./assets/graphic2.png";
import Graphic3 from "./assets/graphic3.png";
import Graphic4 from "./assets/graphic4.png";

export default function GraphicDetails() {
  const navigate = useNavigate();

  const posters = [
    { src: Graphic1, title: "Poster 1" },
    { src: Graphic2, title: "Poster 2" },
    { src: Graphic3, title: "Poster 3" },
    { src: Graphic4, title: "Poster 4" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8 bg-gray-100 dark:bg-gray-950">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">Graphic Design Projects</h1>
        <button
          className="bg-gray-900 dark:bg-gray-100 dark:text-black dark:hover:text-white dark:hover:border-gray-400 text-white px-4 py-1 rounded-lg border border-black/40 hover:bg-black/10 hover:text-gray-900 transition"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>

      {/* Posters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {posters.map((poster, index) => (
          <div
            key={index}
            className=" rounded-xl shadow-lg overflow-hidden inline-flex flex-col items-center p-2 hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
          >
            <img
              src={poster.src}
              alt={poster.title}
              className="w-auto max-h-[70vw] sm:max-h-[600px] object-contain rounded-lg"
            />
            <h2 className="mt-2 font-semibold text-lg text-black dark:text-white text-center">
              {poster.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
