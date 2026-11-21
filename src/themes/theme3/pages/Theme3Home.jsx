import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link, useOutletContext } from "react-router-dom";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiBootstrap,
    SiSpring,
    SiMysql,
    SiMongodb,
    SiFigma,
    SiExpress,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiOpencode,
    SiClaude,
    SiDeepseek,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiPhotoshop } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import CertificationCards from "../components/CertificationCards.jsx";
import GraphicCarousel from "../../../components/GraphicCarousel.jsx";
import MusicBio from "../components/MusicBio.jsx";
import ProjectCards from "../components/ProjectCards.jsx";
import TechCarousel from "../../../components/TechCarousel.jsx";
import MarkTheme3 from "../assets/MarkTheme3.jpg";

function AntigravityIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            fillRule="evenodd"
            className={className}
            aria-hidden="true"
        >
            <path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" />
        </svg>
    );
}

function ChatGptIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
    );
}

export default function Theme3Home() {
    const { isDark, themeColors } = useOutletContext();
    const [selectedImage, setSelectedImage] = useState(null);

    const techStack = [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "MySQL", icon: SiMysql },
        { name: "Spring Boot", icon: SiSpring },
        { name: "Figma", icon: SiFigma },
        { name: "VSCode", icon: VscVscode },
        { name: "Photoshop", icon: DiPhotoshop },
        { name: "Express", icon: SiExpress },
        { name: "Node", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "OpenCode", icon: SiOpencode },
        { name: "Antigravity", icon: AntigravityIcon },
        { name: "Claude", icon: SiClaude },
        { name: "DeepSeek", icon: SiDeepseek },
        { name: "ChatGPT", icon: ChatGptIcon },
    ];

    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-[220px_1fr] lg:grid-cols-[310px_1fr] gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
                <div className="w-full max-w-[320px] sm:max-w-none mx-auto rounded bg-neutral-800 overflow-hidden relative">
                    <img
                        src={MarkTheme3}
                        alt="Profile"
                        className="w-full h-auto object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none" />

                    <div
                        className="absolute inset-0 z-20 pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(255,255,255,0.60) 1px, transparent 1px)",
                            backgroundSize: "12px 12px",
                            backgroundPosition: "4.5px -3.5px",
                            filter: "blur(0.5px)",
                            maskImage:
                                "radial-gradient(ellipse at 50% 110%, black 0%, transparent 65%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse at 50% 110%, black 0%, transparent 65%)",
                        }}
                    />
                </div>

                <div className="flex flex-col justify-start pt-0">
                    <h1 className={`text-3xl sm:text-4xl lg:text-3xl font-thin font-pixel tracking-tight mb-2 ${themeColors.heading}`}>
                        Mark Justin Canuel
                    </h1>

                    <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-600 dark:text-neutral-500 mb-6 sm:mb-8">
                        Software Engineer
                    </h2>

                    <div className="text-sm font-geist leading-relaxed space-y-4 mb-8 max-w-lg text-neutral-500 dark:text-neutral-500">
                        <p>
                            I'm an aspiring full-stack engineer building web and mobile applications. Currently, my work centers on agentic AI workflows.
                        </p>

                        <p>
                            Turning ideas into reality through web development, software engineering, and graphic design is what I love.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs font-mono uppercase tracking-wider text-neutral-500">
                        <a
                            href="https://github.com/Marky23svg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            github ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mark-justin-canuel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            linkedin ↗
                        </a>

                        <a
                            href="https://www.instagram.com/imnotmarkkk_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            instagram ↗
                        </a>
                    </div>

                    <div className="mt-6">
                        <MusicBio />
                    </div>
                </div>
            </section>

            <section
                id="quotes"
                className={`border-t border-b py-6 mb-16 ${themeColors.border}`}
            >
                <TechCarousel isDark={isDark} />
            </section>

            <section id="quotes" className="mb-20 font-geist">
                <div className="flex flex-wrap justify-between items-end gap-3 mb-6">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        01 — quotes i live by
                    </h3>
                </div>

                <div className={`border-t ${themeColors.border}`}>
                    <article className={`py-6 border-b group ${themeColors.border}`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                            <h4 className={`text-base font-semibold transition-colors ${themeColors.heading}`}>
                                "Do what you love, and love what you do."
                            </h4>
                            <span className="text-xs text-neutral-500 font-mono whitespace-nowrap uppercase tracking-wider">
                                On Passion
                            </span>
                        </div>

                        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                            Finding joy in the process makes the hard work worth it. I believe that true success comes from genuinely enjoying the journey, not just the destination.
                        </p>
                    </article>

                    <article className={`py-6 border-b group ${themeColors.border}`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                            <h4 className={`text-base font-semibold transition-colors ${themeColors.heading}`}>
                                "The best way to predict the future is to create it."
                            </h4>
                            <span className="text-xs text-neutral-500 font-mono whitespace-nowrap uppercase tracking-wider">
                                On Action
                            </span>
                        </div>

                        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                            Instead of waiting for opportunities to come, I take initiative. I believe in building the future I want to see.
                        </p>
                    </article>

                    <article className={`py-6 border-b group ${themeColors.border}`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                            <h4 className={`text-base font-semibold transition-colors ${themeColors.heading}`}>
                                "Creativity is intelligence having fun."
                            </h4>
                            <span className="text-xs text-neutral-500 font-mono whitespace-nowrap uppercase tracking-wider">
                                On Creativity
                            </span>
                        </div>

                        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                            I try to approach every design and development challenge with a playful and curious mindset. The best ideas come from genuinely enjoying the process.
                        </p>
                    </article>
                </div>
            </section>

            <section id="projects" className="mb-16 relative">
                <div className="flex flex-wrap justify-between items-end gap-3 mb-12">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        02 — projects
                    </h3>

                    <Link
                        to="/theme3/projects"
                        className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                        ALL PROJECTS <FiArrowRight />
                    </Link>
                </div>

                <ProjectCards
                    isDark={isDark}
                    themeColors={themeColors}
                />
            </section>

            <section id="experience" className="mb-16 sm:mb-20">
                <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        03 — experience
                    </h3>

                    <Link
                        to="/theme3/experience"
                        className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-blue-400 transition-colors"
                    >
                        FULL HISTORY
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className={`font-geist border-t ${themeColors.border}`}>
                    {[
                        {
                            year: "2026",
                            role: "Software Developer Intern",
                            company: "Intelliseven",
                        },
                        {
                            year: "2026",
                            role: "Capstone Project Developer",
                            company: "eGuide ICCT Centralized School Requirements Guide System",
                        },
                        {
                            year: "2026",
                            role: "DevKada Hackathon",
                            company: "Built a prototype addressing real-world problems with modern web tech.",
                        },
                        {
                            year: "2025",
                            role: "Cisco Networking Academy",
                            company: "Networking fundamentals, routing, switching, and device configuration",
                        },
                        {
                            year: "2024",
                            role: "Programming Foundations",
                            company: "Self-learning, online courses, mini-projects",
                        },
                        {
                            year: "2023",
                            role: "WordPress Workshop Experience",
                            company: "Peer collaboration, designing, and developing interactive web applications.",
                        },
                        {
                            year: "2023",
                            role: "Hello World!",
                            company: "Started learning programming",
                        },
                    ].map((item, index) => (
                        <article
                            key={index}
                            className={`group grid grid-cols-1 sm:grid-cols-[75px_1fr_auto] gap-2 sm:gap-5 items-start sm:items-center py-5 px-2 border-b ${themeColors.border} transition-colors duration-300 hover:bg-neutral-500/[0.04]`}
                        >
                            <span className="text-xs font-mono text-blue-400">
                                {item.year}
                            </span>

                            <h4 className={`text-sm sm:text-sm font-medium ${themeColors.heading} group-hover:text-blue-400 transition-colors`}>
                                {item.role}
                            </h4>

                            <span className="text-xs sm:text-sm text-neutral-500 sm:text-right">
                                {item.company}
                            </span>
                        </article>
                    ))}
                </div>
            </section>

            <section id="technologies" className="mb-16 sm:mb-1">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        STACK I RELY ON
                    </h3>

                    <Link
                        to="/theme3/technologies"
                        className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-blue-400 transition-colors"
                    >
                        VIEW ALL
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="flex flex-wrap gap-2.5 font-geist">
                    {techStack.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <span
                                key={tech.name}
                                className={`inline-flex items-center gap-2 px-3 py-2  border text-xs sm:text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 ${isDark
                                        ? "bg-[#111] border-neutral-800 text-neutral-300 hover:bg-neutral-800"
                                        : "bg-gray-50 border-gray-200 text-neutral-700 hover:bg-gray-100"
                                    }`}
                            >
                                {Icon && <Icon className="w-4 h-4 opacity-70" />}
                                {tech.name}
                            </span>
                        );
                    })}
                </div>
            </section>

            <section id="certifications" className="py-12 sm:py-16">
                <div className="-mb-25 justify-between flex">
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        04 — Credentials
                    </p>
                    <Link
                        to="/theme3/certifications"
                        className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-blue-400 transition-colors"
                    >
                        VIEW ALL
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <CertificationCards
                    isDark={isDark}
                    themeColors={themeColors}
                />
            </section>

            <section id="graphic design" className="py-12 sm:py-16 mt-10">
                {selectedImage && (
                    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                        <img src={selectedImage} alt="Certificate preview" className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
                        <button className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition" onClick={() => setSelectedImage(null)}>×</button>
                    </div>
                )}

                <div className="mb-10 justify-between flex">
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        05 — Graphic Design Works
                    </p>
                    <Link
                        to="/theme3/graphic-design"
                        className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-blue-400 transition-colors"
                    >
                        VIEW ALL
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className={`border overflow-hidden py-6 ${themeColors.border} ${isDark ? "bg-[#111]" : "bg-gray-50"} 
        [&_img]:grayscale [&_img]:hover:grayscale-0 [&_img]:transition-all [&_img]:duration-500`}>
                    <GraphicCarousel
                        isDark={isDark}
                        themeColors={themeColors}
                        onImageClick={(img) => setSelectedImage(img)}
                    />
                </div>
            </section>
        </>
    );
}
