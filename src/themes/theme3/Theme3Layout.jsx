import { useEffect, useRef, useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { Link, Outlet, useLocation } from "react-router-dom";

import ThemeSwitcher from "../../components/ThemeSwitcher";
import ThemeToggle from "../../components/ThemeToggle";
import Sidebar from "./components/Sidebar.jsx";

const navItems = [
    { label: "Quotes", to: "/theme3#quotes" },
    { label: "Projects", to: "/theme3/projects" },
    { label: "Experience", to: "/theme3#experience" },
    { label: "Technologies", to: "/theme3#technologies" },
    { label: "Certifications", to: "/theme3#certifications" },
    { label: "Graphic Design", to: "/theme3#graphic%20design" },
];

export default function Theme3Layout() {
    const [isDark, setIsDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const mainRef = useRef(null);

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

    useEffect(() => {
        if (!location.hash) return;

        const element = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }, [location.pathname, location.hash, location.key]);

    useEffect(() => {
        if (location.hash) return;

        mainRef.current?.scrollTo({ top: 0, behavior: "auto" });
    }, [location.pathname, location.hash, location.key]);

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
                <Sidebar navItems={navItems} />

                <main
                    ref={mainRef}
                    data-lenis-prevent=""
                    className="h-full min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain"
                >
                    <header className={`md:hidden sticky top-0 z-30 border-b px-5 py-4 backdrop-blur-md ${isDark ? "bg-[#0a0a0a]/90 border-neutral-800" : "bg-white/90 border-gray-200"}`}>
                        <div className="flex items-center justify-between">
                            <Link to="/theme3" className={`text-lg font-normal tracking-tight font-pixel ${themeColors.heading}`}>
                                Mark Justin Canuel
                            </Link>
                            <button
                                type="button"
                                aria-label="Open menu"
                                onClick={() => setMenuOpen(true)}
                                className={`p-1 ${themeColors.heading}`}
                            >
                                <FiMenu className="w-6 h-6" />
                            </button>
                        </div>
                    </header>

                    <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${menuOpen ? "visible" : "invisible"}`}>
                        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMenuOpen(false)} />
                        <div className={`absolute top-0 right-0 h-full w-72 flex flex-col overflow-y-auto transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} ${isDark ? "bg-[#0a0a0a] border-l border-neutral-800" : "bg-white border-l border-gray-200"}`}>
                            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-neutral-800">
                                <Link to="/theme3" onClick={() => setMenuOpen(false)} className={`text-base font-pixel ${themeColors.heading}`}>
                                    Mark Justin Canuel
                                </Link>
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={() => setMenuOpen(false)}
                                    className={themeColors.heading}
                                >
                                    <FiX className="w-6 h-6" />
                                </button>
                            </div>
                            <nav className="flex flex-col px-6 py-6 gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.to}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-sm transition-colors hover:text-blue-400 text-neutral-500"
                                    >
                                        {item.label}
                                    </Link>
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
                                <a href="https://www.linkedin.com/in/mark-justin-canuel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-neutral-500 hover:text-blue-400 transition-colors"><FiLinkedin className="w-4 h-4" />in/markjustincanuel</a>
                                <a href="https://www.instagram.com/imnotmarkkk_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-neutral-500 hover:text-blue-400 transition-colors"><FiInstagram className="w-4 h-4" />@imnotmarkkk_</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28">
                        <Outlet context={{ isDark, themeColors }} />
                    </div>
                </main>
            </div>
        </div>
    );
}
