import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Cert1 from "../../../assets/cert1.webp";
import Cert2 from "../../../assets/cert2.webp";
import Cert3 from "../../../assets/cert3.webp";
import Cert4 from "../../../assets/cert4.webp";
import Cert5 from "../../../assets/cert5.webp";
import Cert6 from "../../../assets/cert6.jpg";
import Cert7 from "../../../assets/cert7.jpg";

const certificates = [
    {
        id: 1,
        image: Cert1,
        title: "DevKada 2026 Hackathon",
        issuer: "DevKada",
        date: "2026",
        link: null,
        rotation: "-rotate-3", // 👈 Tilted Left
    },
    {
        id: 2,
        image: Cert2,
        title: "Gen AI to Z Certification",
        issuer: "Vibe Coders",
        date: "",
        link: "https://www.vibecoders.ph/cert/GAI2Z26-611B",
        rotation: "rotate-2", // 👈 Tilted Right
    },
    {
        id: 3,
        image: Cert3,
        title: "Udacity AWS AI Practitioner",
        issuer: "Udacity",
        date: "",
        link: "https://www.udacity.com/certificate/e/a42076a6-2c2c-11f1-a4ec-47040fbe9c58",
        rotation: "-rotate-2", // 👈 Tilted Left
    },
    {
        id: 4,
        image: Cert4,
        title: "Freecodecamp Responsive Web Design",
        issuer: "Freecodecamp",
        date: "",
        link: "https://www.freecodecamp.org/certification/imnotmarkk_/responsive-web-design-v9",
        rotation: "rotate-3", // 👈 Tilted Right
    },
    {
        id: 5,
        image: Cert5,
        title: "WordPress Web Development Certification",
        issuer: "WordPress",
        date: "",
        link: null,
        rotation: "-rotate-1", // 👈 Slight Tilt Left
    },
    {
        id: 6,
        image: Cert6,
        title: "Application Development and Emerging Technologies",
        issuer: "Cisco Networking Academy",
        date: "",
        link: null,
        rotation: "rotate-2", // 👈 Tilted Right
    },
    {
        id: 7,
        image: Cert7,
        title: "DataCamp Associate Data Analyst Certification",
        issuer: "DataCamp",
        date: "",
        link: "https://www.datacamp.com/certificate/DAA0017604221232",
        rotation: "-rotate-2", // 👈 Tilted Left
    },
];

export default function Certifications() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <section id="certifications" className="relative ">
            
            {/* HEADER */}
            <div className="flex items-center justify-between mb-10 max-w-5xl mx-auto">
                <h3 className="text-2xl font-pixel  tracking-widest text-neutral-800 dark:text-neutral-100">
                     credentials
                </h3>

                <Link
                    to="/theme3"
                    className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-blue-400 transition-colors"
                >
                    <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    BACK TO HOME
                </Link>
            </div>

            {/* CLEAN GRID LAYOUT */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-2 pt-4 pb-12">
                    {certificates.map((cert) => (
                        <article
                            key={cert.id}
                            // 👇 Added the rotation class, and hover:rotate-0 to level it out
                            className={`
                                group flex flex-col rounded-3xl border p-2 mb-8 transition-all duration-300 ease-out
                                border-neutral-200 bg-[#fdfdfd] shadow-sm 
                                hover:-translate-y-2 hover:scale-[1.02] hover:rotate-0 hover:shadow-xl hover:z-10 relative
                                dark:border-neutral-800 dark:bg-neutral-950 dark:hover:shadow-lg dark:hover:shadow-black/50
                                ${cert.rotation}
                            `}
                        >   
                            {/* Image Container */}
                            <div className="flex h-48 sm:h-40 items-center justify-center rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#0f0f0f]">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="h-full w-full object-cover rounded-2xl"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-1 flex-col mt-5 text-center">
                                <h4 className="text-sm font-geist font-semibold leading-snug text-black dark:text-white sm:text-base">
                                    {cert.title}
                                </h4>

                                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                                    {cert.issuer}{cert.date ? ` • ${cert.date}` : ""}
                                </p>

                                {/* Divider & Button */}
                                <div className="mt-auto pt-5">
                                    <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                                        {cert.link ? (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-neutral-800 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                                            >
                                                <span className="opacity-50">{`{`}</span>
                                                VERIFY
                                                <span className="opacity-50">{`}`}</span>
                                            </a>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => setSelectedImage(cert.image)}
                                                className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-neutral-800 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                                            >
                                                <span className="opacity-50">{`{`}</span>
                                                VERIFY
                                                <span className="opacity-50">{`}`}</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Certificate preview"
                        className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    />
                    <button
                        type="button"
                        className="absolute right-6 top-6 flex h-10 w-10 items-center font-pixel justify-center rounded-full pb-1 bg-white/10 text-3xl text-white transition hover:bg-white/10 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                </div>
            )}
        </section>
    );
}