
import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Graphic1 from "../../../assets/graphic1.webp";
import Graphic2 from "../../../assets/graphic2.webp";
import Graphic3 from "../../../assets/graphic3.webp";
import Graphic4 from "../../../assets/graphic4.webp";
import Graphic5 from "../../../assets/graphic5.webp";
import Graphic6 from "../../../assets/graphic6.webp";
import Graphic7 from "../../../assets/graphic7.webp";
import Graphic8 from "../../../assets/graphic8.webp";
import Graphic9 from "../../../assets/graphic9.webp";
import Graphic10 from "../../../assets/graphic10.webp";

const graphics = [
    { id: 1, image: Graphic1, span: "md:col-span-2 md:row-span-1" },
    { id: 2, image: Graphic2, span: "md:col-span-1 md:row-span-1" },
    { id: 3, image: Graphic3, span: "md:col-span-1 md:row-span-1" },
    { id: 4, image: Graphic4, span: "md:col-span-1 md:row-span-1" },
    { id: 5, image: Graphic5, span: "md:col-span-1 md:row-span-1" },
    { id: 6, image: Graphic6, span: "md:col-span-1 md:row-span-2" },
    { id: 7, image: Graphic7, span: "md:col-span-2 md:row-span-1" },
    { id: 8, image: Graphic8, span: "md:col-span-1 md:row-span-1" },
    { id: 9, image: Graphic9, span: "md:col-span-1 md:row-span-1" },
    { id: 10, image: Graphic10, span: "md:col-span-1 md:row-span-1" },
];

export default function GraphicDesign() {
    const { themeColors } = useOutletContext();
    const [selectedImage, setSelectedImage] = useState(null);

    // Lock background scrolling only while modal is open
    useEffect(() => {
        if (!selectedImage) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <section id="graphic-design" className="relative max-w-6xl mx-auto py- px-">

            {/* HEADER */}
            <div className="flex flex-col items-center justify-center mb-12 relative">
                <Link
                    to="/theme3"
                    className="absolute left-0 top-1/2 -translate-y-1/2 group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-blue-400 transition-colors"
                >
                    <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    BACK TO HOME
                </Link>

                <h2 className={`text-5xl sm:text-6xl md:text-6xl font-pixel tracking-tighter text-center ${themeColors.heading}`}>
                    Design Anthology
                </h2>
            </div>

            {/* CLEAN MASONRY GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[250px]">
                {graphics.map((graphic, index) => (
                    <button
                        key={graphic.id}
                        type="button"
                        onClick={() => setSelectedImage(graphic.image)}
                        className={`${graphic.span} group relative block w-full h-full rounded- overflow-hidden cursor-pointer`}
                    >
                        <img
                            src={graphic.image}
                            alt={`Graphic work ${graphic.id}`}
                            loading={index < 3 ? "eager" : "lazy"}
                            fetchPriority={index === 0 ? "high" : "auto"}
                            decoding="async"
                            draggable="false"
                            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                        />

                        {/* Subtle hover overlay */}
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 pointer-events-none" />
                    </button>
                ))}
            </div>

            {/* MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Graphic design preview"
                        decoding="async"
                        draggable="false"
                        className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    />

                    <button
                        type="button"
                        aria-label="Close image preview"
                        className="absolute right-6 top-6 z-50 flex pb-2 h-10 w-10 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                </div>
            )}
        </section>
    );
}
