import { FaExternalLinkAlt } from "react-icons/fa";

import MacBookProMockup from "./MacBookProMockup.jsx";
import Proj1 from "../../../assets/proj1.png";
import Proj2 from "../../../assets/proj2.png";
import Proj3 from "../../../assets/proj3.png";
import Proj4 from "../../../assets/proj4.webp";
import Proj5 from "../../../assets/proj5.png";

const projects = [
    { id: 1, image: Proj1, title: "eGuide ICCT Mini Capstone Frontend", description: "School and documents guide system", link: "https://demo-system-g5uf.vercel.app/" },
    { id: 2, image: Proj2, title: "Travel Booking Website", description: "Booking website frontend", link: "https://destination-website-five.vercel.app/" },
    { id: 3, image: Proj3, title: "WattsUp", description: "EV Charging Station Locator", link: "https://wattsup-vert.vercel.app/" },
    { id: 4, image: Proj4, title: "GoGreen", description: "Eco-friendly travel planner w/ Budget Tracker", link: "https://go-green-download-web.vercel.app/" },
    { id: 5, image: Proj5, title: "eGuide ICCT Web App", description: "School and documents guide system", link: "https://e-guide-fullstack-cjdmrk.vercel.app/" },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative z-10 py-12 px-4 sm:px-6 bg-white dark:bg-black/80 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-light text-center text-black dark:text-white font-montserrat mb-12">
                Projects
            </h2>

            <div className="max-w-6xl mx-auto flex flex-col gap-20">
                {projects.map((project, index) => (
                    <div key={project.id} className="flex flex-col gap-6">
                        <div
                            className={`flex flex-col items-center gap-8 cursor-pointer ${index % 2 === 0
                                    ? "lg:flex-row"
                                    : "lg:flex-row-reverse"
                                } group transition-all duration-300 hover:scale-[1.01]`}
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            <div className={`w-full mx-auto ${
    index % 2 === 0 ? "lg:pr-4" : "lg:pl-4"
}`}>
                                <div className="transform scale-75 sm:scale-90 md:scale-95 lg:scale-100 origin-center">
                                    <MacBookProMockup src={project.image} title={project.title} />
                                </div>
                            </div>

                            <div className={`w-full lg:w-2/5 ${index % 2 === 0
                                    ? "lg:text-left sm:text-center md:text-center lg:pr-8"
                                    : "lg:text-right sm:text-center md:text-center lg:pl-8"
                                }`}>
                                <h3 className={`text-xl sm:text-2xl font-base text-black dark:text-white flex items-center gap-2 transition-colors group-hover:text-amber-400 ${index % 2 === 0
                                        ? "justify-start"
                                        : "justify-end"
                                    }`}>
                                    {project.title}
                                    <FaExternalLinkAlt className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                </h3>
                                <p className={`text-neutral-600 dark:text-white/60 text-sm sm:text-base font-light mt-2 ${index % 2 === 0 ? "text-left" : "text-right"
                                    }`}>
                                    {project.description}
                                </p>
                                <div className={`mt-4 ${index % 2 === 0 ? "text-left" : "text-right"
                                    }`}>
                                    <span className="inline-block px-4 py-1.5 text-xs font-medium border border-neutral-300 dark:border-neutral-600  bg-gray-50 dark:bg-black/10 text-neutral-600 dark:text-gray-400 rounded-full hover:bg-neutral00 dark:hover:bg-neutral-900 transition-colors">
                                        View Project
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
