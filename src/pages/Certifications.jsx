import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import Cert1 from "../assets/cert1.jpg";
import Cert2 from "../assets/cert2.jpg";
import Cert3 from "../assets/cert3.jpg";
import Cert4 from "../assets/cert4.jpg";

const certificates = [
  {
    id: 1,
    image: Cert1,
    title: "Web Development Certification",
    externalLink: null,
  },
  {
    id: 2,
    image: Cert2,
    title: "Vibe Coders Certification",
    externalLink: "https://www.vibecoders.ph/cert/GAI2Z26-611B",
  },
  {
    id: 3,
    image: Cert3,
    title: "Udacity Nanodegree",
    externalLink: "https://www.udacity.com/certificate/e/a42076a6-2c2c-11f1-a4ec-47040fbe9c58",
  },
  {
    id: 4,
    image: Cert4,
    title: "React Advanced Certification",
    externalLink: null,
  },
];

function Certifications() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (cert) => {
    if (cert.externalLink) {
      window.open(cert.externalLink, "_blank");
    } else {
      setSelectedImage(cert.image);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-black min-h-[50px] col-span-1 sm:col-span-3 pb-10">
      {/* Title + Back button on the same row (preserving your original classes) */}
      <div className="flex justify-between items-center px-5 pt-4">
        <h1 className="text-black dark:text-white text-2xl font-bold">
          Certifications
        </h1>
        <button
          className="bg-gray-50 dark:bg-black dark:hover:bg-white dark:hover:text-black rounded-lg h-8 w-24 text-black dark:text-white cursor-pointer border border-gray-300 dark:border-gray-600 hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1"
          onClick={() => navigate("/")}
        >
          <MdKeyboardDoubleArrowLeft />
          Back
        </button>
      </div>

      {/* Grid – exactly your original classes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 justify-items-center mx-0 sm:mx-20 my-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="h-48 w-70 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600 text-sm font-semibold text-center rounded-xl cursor-pointer flex items-center justify-center transition-transform hover:scale-105"
            onClick={() => handleCardClick(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="h-48 w-full object-cover rounded-xl p-1"
            />
          </div>
        ))}
      </div>

      {/* Modal – unchanged */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate preview"
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

export default Certifications;