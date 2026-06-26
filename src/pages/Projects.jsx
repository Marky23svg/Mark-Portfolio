import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.png";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.png";

const projects = [
  {
    id: 1,
    image: Proj1,
    title: "eGuide ICCT",
    description: "School and documents guide system",
    externalLink: "https://demo-system-g5uf.vercel.app/",
  },
  {
    id: 2,
    image: Proj2,
    title: "Travel Booking Website",
    description: "Booking website frontend",
    externalLink: "https://destination-website-five.vercel.app/",
  },
  {
    id: 3,
    image: Proj3,
    title: "WattsUp",
    description: "EV Charging Station Locator",
    externalLink: "https://watts-up-vert.vercel.app/",
  },
  {
    id: 4,
    image: Proj4,
    title: "GoGreen",
    description: "Eco-friendly travel planner w/ Budget Tracker",
    externalLink: "https://go-green-download-web.vercel.app/",
  },
  {
    id: 5,
    image: Proj5,
    title: "eGuide ICCT v2",
    description: "School and documents guide system",
    externalLink: "https://e-guide-fullstack-cjdmrk.vercel.app/",
  },
];

function Projects() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (project) => {
    if (project.externalLink) {
      window.open(project.externalLink, "_blank");
    } else {
      setSelectedImage(project.image);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen">
      {/* Title + Back button */}
      <div className="flex justify-between items-center px-5 pt-4">
        <h1 className="text-black dark:text-white text-2xl font-bold">
          Projects
        </h1>
        <button
          className="bg-gray-50 dark:bg-black dark:hover:bg-white dark:hover:text-black rounded-lg h-8 w-24 text-black dark:text-white cursor-pointer border border-gray-300 dark:border-gray-600 hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1"
          onClick={() => navigate("/")}
        >
          <MdKeyboardDoubleArrowLeft />
          Back
        </button>
      </div>

      {/* Grid - Slightly smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 md:px-12 lg:px-20 my-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-black rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
            onClick={() => handleCardClick(project)}
          >
            {/* Image Container - Slightly shorter */}
            <div className="relative overflow-hidden bg-gray-200 dark:bg-black h-52">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium flex items-center gap-2">
                  View Project <FaExternalLinkAlt className="w-3 h-3" />
                </span>
              </div>
            </div>
            
            {/* Content - Slightly tighter */}
            <div className="p-4">
              <h3 className="text-gray-900 dark:text-white text-base font-semibold mb-1">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;