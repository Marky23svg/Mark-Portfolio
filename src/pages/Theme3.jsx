import { useState, useEffect } from "react";
import { FiArrowRight, FiMenu, FiX, FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

// --- Icon Imports for Technologies ---
import {
    SiHtml5,
    SiCss3,
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
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiPhotoshop } from "react-icons/di";
// -------------------------------------

import Sidebar from "../components/Sidebar.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import TechCarousel from "../components/TechCarousel.jsx";
import ProjectCards from "../components/ProjectCards.jsx";
import CertificationCards from "../components/CertificationCards.jsx";
import GraphicCarousel from "../components/GraphicCarousel.jsx";
import MusicBio from "../components/MusicBio.jsx";

import Markpfp from "../assets/Markpfp.png";
import MarkTheme3 from "../assets/MarkTheme3.jpg";
import MarkV3 from "../assets/v2markdpTheme3.jpeg";

export default function Theme3() {
    const [isDark, setIsDark] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const projects = [
        "Quotes",
        "Projects",
        "Experience",
        "Technologies",
        "Certifications",
        "Graphic Design",
    ];

    // Array containing tech names and icons to match the image
    const techStack = [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
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
    ];

    const themeColors = {
        background: isDark ? "bg-[#0a0a0a]" : "bg-white",
        text: isDark ? "text-neutral-300" : "text-neutral-800",
        heading: isDark ? "text-white" : "text-black",
        border: isDark ? "border-neutral-800" : "border-gray-200",
    };

    return (
        <div
            className={`theme3-background h-dvh w-full overflow-hidden font-sans ${themeColors.background} ${themeColors.text} selection:bg-neutral-800 selection:text-white`}
        >
            <div className="flex h-full min-h-0 w-full">

                {/* DESKTOP SIDEBAR */}
                <Sidebar projects={projects} />

                {/* MAIN CONTENT */}
                <main
                    data-lenis-prevent=""
                    className="h-full min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain"
                >

                    {/* MOBILE HEADER */}
                    <header className={`md:hidden sticky top-0 z-30 border-b px-5 py-4 backdrop-blur-md ${isDark ? "bg-[#0a0a0a]/90 border-neutral-800" : "bg-white/90 border-gray-200"}`}>
                        <div className="flex items-center justify-between">
                            <h1 className={`text-lg font-normal tracking-tight font-pixel ${themeColors.heading}`}>
                                Mark Justin Canuel
                            </h1>
                            <button onClick={() => setMenuOpen(true)} className={`p-1 ${themeColors.heading}`}>
                                <FiMenu className="w-6 h-6" />
                            </button>
                        </div>
                    </header>

                    {/* MOBILE DRAWER */}
                    <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
                        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMenuOpen(false)} />
                        <div className={`absolute top-0 right-0 h-full w-72 flex flex-col overflow-y-auto transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} ${isDark ? 'bg-[#0a0a0a] border-l border-neutral-800' : 'bg-white border-l border-gray-200'}`}>
                            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-neutral-800">
                                <h1 className={`text-base font-pixel ${themeColors.heading}`}>Mark Justin Canuel</h1>
                                <button onClick={() => setMenuOpen(false)} className={themeColors.heading}><FiX className="w-6 h-6" /></button>
                            </div>
                            <nav className="flex flex-col px-6 py-6 gap-4">
                                {projects.map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-sm transition-colors hover:text-blue-400 text-neutral-500">
                                        {item}
                                    </a>
                                ))}
                            </nav>
                            <hr className="mx-6 border-gray-200 dark:border-neutral-800" />
                            <div className="flex flex-col px-6 py-6 gap-3">
                                <ThemeToggle />
                                <ThemeSwitcher />
                            </div>
                            <hr className="mx-6 border-gray-200 dark:border-neutral-800" />
                            <div className="flex flex-col px-6 py-6 gap-3">
                                <p className="text-xs text-neutral-500">For work, collabs & everything else</p>
                                <a href="mailto:markjustincanuel2@gmail.com" className="flex items-center gap-3 text-xs text-neutral-500 hover:text-blue-400 transition-colors"><FiMail className="w-4 h-4" />markjustincanuel2@gmail.com</a>
                                <a href="https://github.com/Marky23svg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-neutral-500 hover:text-blue-400 transition-colors"><FiGithub className="w-4 h-4" />@Marky23svg</a>
                                <a href="https://www.linkedin.com/in/mark-justin-canuel-081bb7378/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-neutral-500 hover:text-blue-400 transition-colors"><FiLinkedin className="w-4 h-4" />in/markjustincanuel</a>
                                <a href="https://www.instagram.com/imnotmarkkk_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-neutral-500 hover:text-blue-400 transition-colors"><FiInstagram className="w-4 h-4" />@imnotmarkkk_</a>
                            </div>
                        </div>
                    </div>

                    {/* CONTENT CONTAINER */}
                    <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28">
                        {/* PROFILE SECTION */}
                        <section className="grid grid-cols-1 sm:grid-cols-[220px_1fr] lg:grid-cols-[310px_1fr] gap-8 lg:gap-12 items-start mb-16 lg:mb-20">

                            <div className="w-full max-w-[320px] sm:max-w-none mx-auto rounded bg-neutral-800 overflow-hidden relative">

                                <img
                                    src={MarkTheme3}
                                    alt="Profile"
                                    className="w-full h-auto object-cover"
                                />

                                {/* DARK GRADIENT */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none" />

                                {/* BOTTOM DOTTED GRADIENT */}
                                <div
                                    className="absolute inset-0 z-20 pointer-events-none"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
                                        backgroundSize: "12px 12px",
                                        backgroundPosition: "4.5px -3.5px",
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

                                <div className="text-sm leading-relaxed space-y-4 mb-8 max-w-lg text-neutral-500 dark:text-neutral-500">
                                    <p>
                                        I'm an aspiring full-stack engineer building web and mobile applications. Currently, my work centers on agentic AI workflows.
                                    </p>

                                    <p>
                                        Turning ideas into reality through web development, software engineering, and graphic design is what I love.
                                    </p>
                                </div>

                                {/* SOCIAL LINKS */}
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

                                {/* MUSIC BIO */}
                                <div className="mt-6">
                                    <MusicBio />
                                </div>

                            </div>
                        </section>


                        {/* TECHNOLOGY CAROUSEL */}
                        <section
                            id="quotes"
                            className={`border-t border-b py-6 mb-16 ${themeColors.border}`}
                        >
                            <TechCarousel isDark={isDark} />
                        </section>


                        {/* PERSONAL QUOTES SECTION */}
                        <section id="quotes" className="mb-20">

                            <div className="flex flex-wrap justify-between items-end gap-3 mb-6">
                                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                                    01 — quotes i live by
                                </h3>

                            </div>

                            <div className={`border-t ${themeColors.border}`}>

                                {/* Quote 1 */}
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

                                {/* Quote 2 */}
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
                                        Instead of waiting for opportunities to come, I take initiative. Whether it's a new project or a new skill, I believe in building the future I want to see.
                                    </p>
                                </article>

                                {/* Quote 3 */}
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
                                        I try to approach every design and development challenge with a playful and curious mindset. The best ideas often come when you're enjoying the process.
                                    </p>
                                </article>

                            </div>
                        </section>

                        {/* PROJECTS SECTION */}
                        <section id="projects" className="mb-16 relative">

                            <div className="flex flex-wrap justify-between items-end gap-3 mb-12">
                                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                                    02 — projects
                                </h3>

                                <a
                                    href="#projects"
                                    className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-blue-400 transition-colors flex items-center gap-1"
                                >
                                    ALL PROJECTS <FiArrowRight />
                                </a>
                            </div>

                            <ProjectCards
                                isDark={isDark}
                                themeColors={themeColors}
                            />

                        </section>


                        {/* EXPERIENCE SECTION */}
                        <section id="experience" className="mb-16 sm:mb-20">

                            <div className="flex items-center justify-between mb-7">
                                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                                    03 — experience
                                </h3>

                                <a
                                    href="#experience"
                                    className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-blue-400 transition-colors"
                                >
                                    FULL HISTORY
                                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>

                            <div className={`border-t ${themeColors.border}`}>

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

                        {/* TECHNOLOGY STACK SECTION */}
                        <section id="technologies" className="mb-16 sm:mb-1">

                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                                    STACK I RELY ON
                                </h3>

                                <a
                                    href="#technologies"
                                    className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-blue-400 transition-colors"
                                >
                                    VIEW ALL
                                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-2.5">

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
                                <a
                                    href="#technologies"
                                    className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-blue-400 transition-colors"
                                >
                                    VIEW ALL
                                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>

                            <CertificationCards
                                isDark={isDark}
                                themeColors={themeColors}
                            />
                        </section>

                        <section id="graphic design" className="py-12 sm:py-16 mt-10">
                            {/* MODAL */}
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
                                <a
                                    href="#technologies"
                                    className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-500 hover:text-blue-400 transition-colors"
                                >
                                    VIEW ALL
                                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>

                            {/* 
      👇 ADDED CLASSES HERE 👇
      This tells Tailwind to find all <img> tags inside this div, make them grayscale by default, 
      and remove the grayscale on hover with a smooth transition.
    */}
                            <div className={`border overflow-hidden py-6 ${themeColors.border} ${isDark ? "bg-[#111]" : "bg-gray-50"} 
        [&_img]:grayscale [&_img]:hover:grayscale-0 [&_img]:transition-all [&_img]:duration-500`}>

                                <GraphicCarousel
                                    isDark={isDark}
                                    themeColors={themeColors}
                                    onImageClick={(img) => setSelectedImage(img)}
                                />
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
}