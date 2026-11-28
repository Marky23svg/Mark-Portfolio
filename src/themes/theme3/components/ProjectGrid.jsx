import { FiArrowUpRight } from "react-icons/fi";
import {
    SiExpo,
    SiReact,
    SiTailwindcss,
    SiSupabase,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiSocketdotio,
} from "react-icons/si";

import Attendify from "../assets/Attendify-logo.png";
import FacultySys from "../assets/FacultySys.jpg";
import Eguide from "../assets/EguideLogo.jpg";
import Proj1 from "../../../assets/proj1.png";
import Proj2 from "../../../assets/proj2.png";
import Proj3 from "../../../assets/proj3.png";
import Proj4 from "../../../assets/proj4.webp";
import Proj5 from "../../../assets/proj5.png";

// Map tech keys → icon + brand color + full name
const techIconMap = {
    EXPO: { Icon: SiExpo, color: "#FFFFFF", name: "Expo" },
    RN: { Icon: SiReact, color: "#61DAFB", name: "React Native" },
    TW: { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    SB: { Icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
    JS: { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    EX: { Icon: SiExpress, color: "#FFFFFF", name: "Express" },
    MDB: { Icon: SiMongodb, color: "#47a248", name: "MongoDB" },
    NJS: { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    SIO: { Icon: SiSocketdotio, color: "#FFFFFF", name: "Socket.IO" },
};

const projects = [
    {
        id: 6,
        image: FacultySys,
        title: "Faculty Consult",
        description: "A web system that digitizes student-faculty consultations appointment requests, scheduling, and tracking—with role-based access.",
        category: "Web System",
        date: "Nov 2026",
        featured: true,
        tech: ["MDB", "EX", "RN", "NJS", "TW", "SIO"],
        link: "https://faculty-consultation-system-murex.vercel.app/login",
    },
    {
        id: 7,
        image: Attendify,
        title: "Attendify",
        description: "Attendance tracking mobile app for company employees, with selfie and location verification on time in/out.",
        category: "Mobile App",
        date: "Sep 2026",
        featured: true,
        tech: ["EXPO", "RN", "TW", "SB"],
        link: "https://attendify-download.vercel.app/",
    },
    {
        id: 8,
        image: Eguide,
        title: "E-Guide",
        description: "A centralized web platform that guides students through various school processes with step-by-step procedures, requirements, and instructions in one accessible system.",
        category: "Web System",
        date: "June 2026",
        featured: true,
        tech: ["MDB", "EX", "RN", "NJS", "TW"],
        link: "https://e-guide-fullstack-cjdmrk.vercel.app/",
    },
    {
        id: 1,
        image: Proj1,
        title: "eGuide ICCT Mini Capstone Frontend",
        description: "School and documents guide system",
        category: "Web App",
        link: "https://demo-system-g5uf.vercel.app/",
    },
    {
        id: 2,
        image: Proj2,
        title: "Travel Booking Website",
        description: "Booking website frontend",
        category: "Website",
        link: "https://destination-website-five.vercel.app/",
    },
    {
        id: 3,
        image: Proj3,
        title: "WattsUp",
        description: "EV Charging Station Locator",
        category: "Web App",
        link: "https://wattsup-vert.vercel.app/",
    },
    {
        id: 4,
        image: Proj4,
        title: "GoGreen",
        description: "Eco-friendly travel planner w/ Budget Tracker",
        category: "Web App",
        link: "https://go-green-download-web.vercel.app/",
    },
    {
        id: 5,
        image: Proj5,
        title: "eGuide ICCT Web App",
        description: "School and documents guide system",
        category: "Web App",
        link: "https://e-guide-fullstack-cjdmrk.vercel.app/",
    },
];

function FooterLink({ href, muted = false, children }) {
    const className = `shrink-0 whitespace-nowrap font-mono text-[11px] tracking-wide transition-colors sm:text-xs cursor-pointer ${
        muted
            ? "text-neutral-800 hover:text-black dark:text-neutral-500 dark:hover:text-neutral-300" 
            : "text-neutral-900 hover:text-black dark:text-neutral-100 dark:hover:text-white"
    }${href ? "" : " cursor-default opacity-90"}`;

    if (!href) {
        return <span className={className}>{children}</span>;
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    );
}

export default function ProjectGrid() {
    const featuredProjects = projects.filter((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);

    return (
        <div className="mt-6 flex flex-col gap-8 sm:mt-8 sm:gap-10">
            <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-600">
                    Featured projects
                </h4>

                <div className="mt-4 flex flex-col gap-3 sm:gap-4">
                    {featuredProjects.map((project) => {
                        const projectUrl = project.projectUrl ?? project.link;
                        const liveUrl = project.liveUrl ?? project.link;

                        return (
                            <article
                                key={project.id}
                                // 👇 Added hover:shadow-xl and dark:hover:shadow-2xl
                                className="flex w-full flex-col rounded-2xl border p-3 transition-all duration-300 sm:p-4 lg:p-5 
    border-gray-200 bg-white shadow-md hover:shadow-xl hover:border-gray-300 
    dark:border-[#303033] dark:bg-[#18181b] dark:shadow-none dark:hover:shadow-2xl dark:hover:shadow-black/60 dark:hover:border-neutral-700 cursor-pointer"
                            >
                                <div className="flex items-start gap-3 sm:gap-3">
                                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-700 sm:h-16 sm:w-16">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} preview`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h5 className="text-base font-pixel font-thin leading-snug tracking-wide text-black dark:text-white sm:text-xl">
                                            {project.title}
                                        </h5>

                                        <p className="mt-1 text-sm font-geist leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-sm">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 border-t border-gray-200 pt-4 dark:border-[#303033] sm:mt-6 sm:pt-5">
                                    <div className="flex items-center justify-between gap-3">

                                        {/* Tech Stack Icons */}
                                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                            {project.tech && project.tech.map((tech) => {
                                                const entry = techIconMap[tech];
                                                if (!entry) return null;

                                                const { Icon, color, name } = entry;
                                                return (
                                                    <div
                                                        key={tech}
                                                        title={name}
                                                        // 👇 Removed light mode bg, made it always dark (#18181b) so the colors pop
                                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-neutral-700 bg-[#18181b] flex items-center justify-center"
                                                        style={{ color }}
                                                    >
                                                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-4 shrink-0">
                                            <FooterLink href={liveUrl} muted>
                                                Live site ↗
                                            </FooterLink>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-600">
                    Other projects
                </h4>

                <div className="mt-4 divide-y overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 divide-gray-200 dark:divide-[#303033] dark:border-[#303033] dark:bg-[#111] cursor-pointer">
                    {otherProjects.map((project) => {
                        const projectUrl = project.projectUrl ?? project.link;
                        const liveUrl = project.liveUrl ?? project.link;

                        return (
                            <div
                                key={project.id}
                                className="flex items-center px-4 py-4 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-white/[0.03] sm:px-6 sm:py-5"
                            >
                                <div className="w-[40%] min-w-0 pr-3 sm:w-[35%]">
                                    <h5 className="break-words text-sm font-pixel font-medium leading-snug text-black dark:text-white sm:text-base">
                                        {project.title}
                                    </h5>
                                </div>

                                <div className="w-[50%] min-w-0 pr-3 sm:w-[55%]">
                                    <span className="block text-[11px] font-mono uppercase tracking-widest text-blue-500 dark:text-blue-400">
                                        {project.category}
                                    </span>

                                    <p className="mt-1 break-words text-xs font-geist leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-sm">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex w-[10%] justify-end">
                                    <a
                                        href={liveUrl ?? projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${project.title}`}
                                        className="text-neutral-500 transition-colors hover:text-black dark:hover:text-white"
                                    >
                                        <FiArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}