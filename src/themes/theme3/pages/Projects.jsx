
import { Link, useOutletContext } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import ProjectGrid from "../components/ProjectGrid.jsx";

export default function Projects() {
    const { isDark, themeColors } = useOutletContext();

    return (
        <section id="projects" className="mb-16 relative">
            <div className="flex flex-wrap justify-between items-center gap-3 mb-10">
                <h3 className="text-2xl font-pixel tracking-widest text-neutral-800 dark:text-neutral-100">
                    projects
                </h3>

                <Link
                    to="/theme3"
                    className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-blue-400 transition-colors"
                >
                    <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    BACK TO HOME
                </Link>
            </div>

            <h3 className="text-base font-geist text-neutral-600 dark:text-neutral-400 mb-8">
                Web applications, mobile apps, and school systems I've designed and developed from the ground up.
            </h3>

            <ProjectGrid
                isDark={isDark}
                themeColors={themeColors}
            />
        </section>
    );
}
