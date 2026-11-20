import { useOutletContext } from "react-router-dom";

import ProjectCards from "../components/ProjectCards.jsx";

export default function Projects() {
    const { isDark, themeColors } = useOutletContext();

    return (
        <section id="projects" className="mb-16 relative">
            <div className="flex flex-wrap justify-between items-end gap-3 mb-12">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    02 — projects
                </h3>
            </div>

            <ProjectCards
                isDark={isDark}
                themeColors={themeColors}
            />
        </section>
    );
}
