import { useState } from "react";
import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from "react-icons/fa6";
import { FaExternalLinkAlt, FaEnvelope, FaApple } from "react-icons/fa";

import GraphicCarousel from "../../../components/GraphicCarousel";
import TechCarousel from "../../../components/TechCarousel";
import IPhone17ProMaxMockup from "../components/IPhone17ProMaxMockup.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import V2gif from "../assets/v2gif.gif";
import V2markdp from "../assets/v2markdp.jpeg";
import V2bgdark from "../assets/v2bgdark4k.webp";
import V2bglight from "../assets/v2bglight4k.webp";
import Cert1 from "../../../assets/cert1.webp";
import Cert2 from "../../../assets/cert2.webp";
import Cert3 from "../../../assets/cert3.webp";
import Cert4 from "../../../assets/cert4.webp";
import Cert5 from "../../../assets/cert5.webp";
import Cert6 from "../../../assets/cert6.jpg";
import Cert7 from "../../../assets/cert7.jpg";

const certificates = [
    { id: 1, image: Cert1, title: "DevKada 2026 Hackathon", link: null },
    { id: 2, image: Cert2, title: "Gen AI to Z Certification", link: "https://www.vibecoders.ph/cert/GAI2Z26-611B" },
    { id: 3, image: Cert3, title: "Udacity AWS AI Practitioner", link: "https://www.udacity.com/certificate/e/a42076a6-2c2c-11f1-a4ec-47040fbe9c58" },
    { id: 4, image: Cert4, title: "Freecodecamp Responsive Web Design", link: null },
    { id: 5, image: Cert5, title: "WordPress Web Development Certification", link: null },
    { id: 6, image: Cert6, title: "Application Development and Emerging Technologies", link: null },
    { id: 7, image: Cert7, title: "DataCamp Associate Data Analyst Certification", link: "https://www.datacamp.com/certificate/DAA0017604221232" },
];

export default function Theme2Home() {
    const { isDarkMode } = useOutletContext();
    const [selectedImage, setSelectedImage] = useState(null);
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <section className="relative z-10 min-h-[100vh] flex items-center px-6 pt-16 md:pt-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${isDarkMode ? V2bgdark : V2bglight})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-7xl sm:text-[10rem] md:text-[13rem] font-extralight text-black dark:text-white font-montserrat leading-none text-left">
                                Hello
                            </h1>
                            <p className="text-base text-justify pl-2 sm:pl-7 text-black dark:text-white leading-relaxed max-w-xl">
                                I'm Mark, I bridge creativity, technology, and code to build websites that are not only visually appealing but also functional and user-friendly.
                            </p>
                            <div className="flex items-center pl-2 sm:pl-7 gap-3 mt-8 text-sm text-black/80 dark:text-white/60">
                                <span>Scroll down</span>
                                <FaArrowDown className="animate-bounce" />
                            </div>
                            <div className="flex gap-4 pl-2 sm:pl-7 mt-6">
                                <a href="https://github.com/Marky23svg" target="_blank" rel="noopener noreferrer" className="text-black/70 dark:text-white/60 hover:text-black hover:dark:text-white transition">
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/mark-justin-canuel-081bb7378/" target="_blank" rel="noopener noreferrer" className="text-black/70 dark:text-white/60 hover:text-black hover:dark:text-white transition">
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/imnotmarkkk_/" target="_blank" rel="noopener noreferrer" className="text-black/70 dark:text-white/60 hover:text-black hover:dark:text-white transition">
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-end">
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="relative z-10 py-12 px-4 sm:px-6 bg-white dark:bg-black/80 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-light text-center font-montserrat text-black dark:text-white font-montserrat mb-6">
                    About Me
                </h2>
                <div className="max-w-9xl mx-auto">
                    <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-3xl md:pr-30 pb-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
                            <div
                                className="flex justify-center mt- sm:mb-0 mb-8 "
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <IPhone17ProMaxMockup
                                    src={hovered ? V2gif : V2markdp}
                                    title="Mark Justin Canuel"
                                />
                            </div>

                            <div className="flex flex-col gap-3 md:-ml-25 md:mr-15 px-4 md:px-0">
                                <div className="text-center bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-4xl">
                                    <p className="text-base font-light text-neutral-700 dark:text-white/70 leading-relaxed text-justify p-5">
                                        I am <span className="font-semibold text-black dark:text-white">Mark Justin Canuel</span>, an aspiring Software Engineer and a 4th year Bachelor of Science in Information Technology student.
                                        I specialize in frontend development, building clean, responsive, and user-friendly interfaces, while also exploring backend technologies
                                        to understand full-stack integration. Through my experience as a capstone project leader and collaborating with various groups, I have developed
                                        strong leadership, communication, and teamwork skills.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-1">
                                    <div className="bg-white/40 dark:bg-neutral-900 backdrop-blur-sm rounded-4xl border border-gray-300 dark:border-neutral-600 p-4 text-center">
                                        <h3 className="text-lg sm:text-2xl font-bold text-black dark:text-white">3+</h3>
                                        <p className="text-[12px] sm:text-sm text-neutral-500 dark:text-white/60">Years Experience</p>
                                    </div>
                                    <div className="bg-white/40 dark:bg-neutral-900 backdrop-blur-sm rounded-4xl border border-gray-300 dark:border-neutral-600 p-4 text-center">
                                        <h3 className="text-lg sm:text-2xl font-bold text-black dark:text-white">Focus</h3>
                                        <p className="text-[12px] sm:text-sm text-neutral-500 dark:text-white/60">Design & Code</p>
                                    </div>
                                    <div className="bg-white/40 dark:bg-neutral-900 backdrop-blur-sm rounded-4xl border border-gray-300 dark:border-neutral-600 p-4 text-center">
                                        <h3 className="text-lg sm:text-2xl font-bold text-black dark:text-white">Location</h3>
                                        <p className="text-[12px] sm:text-sm text-neutral-500 dark:text-white/60">Marikina City</p>
                                    </div>
                                </div>

                                <div className="bg-white/40 dark:bg-neutral-900 backdrop-blur-sm rounded-4xl mt-1 border border-gray-300 dark:border-neutral-600">
                                    <h3 className="text-sm font-medium text-neutral-950 dark:text-white/60 ml-4 mt-3 pb-1 text-center">Tools and Technologies</h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 mx-4 my-4 gap-2">
                                        {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "Bootstrap", "MySQL", "Spring Boot", "Figma", "VS Code", "Photoshop", "Express", "Node.js", "MongoDB"].map((tech) => (
                                            <div key={tech} className="h-7 border border-transparent text-neutral-600 dark:text-gray-300 text-xs font-medium text-center cursor-pointer rounded-lg flex items-center justify-center hover:border-gray-400 dark:hover:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all duration-300">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full py-6 bg-white dark:bg-black border-gray-200 dark:border-neutral-800">
                <TechCarousel />
            </div>

            <ProjectsSection />

            <section
                id="certifications"
                className="relative z-10 py-16 px-4 sm:px-6 bg-white dark:bg-black"
            >
                <h2 className="text-3xl sm:text-4xl font-light text-center text-black dark:text-white font-montserrat mb-3">
                    Certifications
                </h2>

                <p className="text-center text-sm text-neutral-500 dark:text-white/50 mb-10">
                    Credentials, learning milestones, and achievements
                </p>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                onClick={() =>
                                    cert.link
                                        ? window.open(cert.link, "_blank", "noopener,noreferrer")
                                        : setSelectedImage(cert.image)
                                }
                                className="
                                    group relative isolate overflow-hidden cursor-pointer
                                    rounded-[28px]
                                    border border-gray-200 dark:border-white/[0.12]
                                    bg-white/50 dark:bg-white/[0.045]
                                    backdrop-blur-2xl
                                    shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                                    dark:shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                                    transition-all duration-500 ease-out
                                    hover:-translate-y-1.5
                                    hover:bg-white/75 dark:hover:bg-white/[0.075]
                                    hover:border-white dark:hover:border-white/20
                                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                                    dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                                "
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white dark:via-white/40 to-transparent z-10 pointer-events-none" />

                                <div className="relative m-2.5 mb-0 overflow-hidden rounded-[21px] aspect-[4/3] bg-neutral-100 dark:bg-neutral-800">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        loading="lazy"
                                        className="
                                            w-full h-full object-cover
                                            transition-transform duration-700 ease-out
                                            group-hover:scale-[1.06]
                                        "
                                    />

                                    <div className="
                                        absolute inset-0
                                        bg-gradient-to-t from-black/60 via-black/5 to-transparent
                                        opacity-70 group-hover:opacity-100
                                        transition-opacity duration-300
                                    " />

                                    <div className="
                                        absolute bottom-3 right-3
                                        flex items-center gap-1.5
                                        rounded-full px-3 py-1.5
                                        bg-white/20 backdrop-blur-xl
                                        border border-white/30
                                        text-white text-[11px] font-medium
                                        shadow-lg
                                        transition-all duration-300
                                        group-hover:bg-white/30
                                    ">
                                        {cert.link ? (
                                            <>
                                                View Certificate
                                                <FaExternalLinkAlt className="w-2.5 h-2.5" />
                                            </>
                                        ) : (
                                            <>
                                                Preview
                                                <FaExternalLinkAlt className="w-2.5 h-2.5" />
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="relative px-4 pt-4 pb-5">
                                    <div className="flex items-start gap-3">
                                        <div className="
                                            flex-shrink-0 flex items-center justify-center
                                            w-8 h-8 rounded-xl
                                            bg-black/[0.04] dark:bg-white/[0.08]
                                            border border-black/[0.04] dark:border-white/[0.06]
                                        ">
                                            <FaApple className="h-[15px] text-neutral-500 dark:text-white/70 -mt-0.5" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <h3 className="
                                                text-xs font-medium leading-snug
                                                text-neutral-900 dark:text-white/90
                                                transition-colors duration-300
                                                group-hover:text-black dark:group-hover:text-white
                                            ">
                                                {cert.title}
                                            </h3>

                                            <p className="mt-1.5 -mb-2 text-[11px] text-neutral-500 dark:text-white/45">
                                                Certificate of achievement
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="
                                    absolute bottom-0 left-6 right-6 h-px
                                    bg-gradient-to-r from-transparent via-black/[0.06] dark:via-white/[0.12] to-transparent
                                    pointer-events-none
                                " />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedImage &&
                createPortal(
                    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                        <img src={selectedImage} alt="Certificate preview" className="max-w-180 max-h-180 object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
                        <button className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition" onClick={() => setSelectedImage(null)}>×</button>
                    </div>,
                    document.body
                )}

            <section id="graphic" className="relative z-10 py-12 px-4 sm:px-6 bg-white dark:bg-black/80 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-light text-center text-black dark:text-white font-montserrat mb-2">
                    Graphic Design
                </h2>
                <p className="text-center text-neutral-500 dark:text-white/50 text-sm mb-8">A collection of my Photoshop works</p>
                <div className="bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl overflow-hidden py-6">
                    <GraphicCarousel onImageClick={(img) => setSelectedImage(img)} />
                </div>
            </section>

            <section id="contact" className="relative z-10 py-16 px-4 sm:px-6 bg-white dark:bg-black backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-light text-center text-black dark:text-white font-montserrat mb-2">Contact</h2>
                <p className="text-center text-neutral-500 dark:text-white/50 text-sm mb-10">Feel free to reach out!</p>
                <div className="max-w-2xl mx-auto flex flex-col gap-4">
                    <a href="mailto:markjustincanuel2@gmail.com" className="group flex items-center gap-5 bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-neutral-800 shrink-0">
                            <FaEnvelope className="w-5 h-5 text-black dark:text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 dark:text-white/50">Email</p>
                            <p className="text-black dark:text-white font-medium">markjustincanuel2@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/mark-justin-canuel-081bb7378/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-neutral-800 shrink-0">
                            <FaLinkedin className="w-5 h-5 text-black dark:text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 dark:text-white/50">LinkedIn</p>
                            <p className="text-black dark:text-white font-medium">Mark Justin Canuel</p>
                        </div>
                    </a>
                    <a href="https://github.com/Marky23svg" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-neutral-800 shrink-0">
                            <FaGithub className="w-5 h-5 text-black dark:text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 dark:text-white/50">GitHub</p>
                            <p className="text-black dark:text-white font-medium">Marky23svg</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/imnotmarkkk_/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-neutral-800 shrink-0">
                            <FaInstagram className="w-5 h-5 text-black dark:text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 dark:text-white/50">Instagram</p>
                            <p className="text-black dark:text-white font-medium">@imnotmarkkk_</p>
                        </div>
                    </a>
                </div>
                <p className="text-center text-neutral-400 dark:text-white/30 text-xs mt-12"> © {new Date().getFullYear()} Mark Justin Canuel. All rights reserved.</p>
            </section>
        </>
    );
}
