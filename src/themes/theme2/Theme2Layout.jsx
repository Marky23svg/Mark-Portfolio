import { useEffect, useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { Link, Outlet, useLocation } from "react-router-dom";

import ThemeSwitcher from "../../components/ThemeSwitcher";
import ThemeToggle from "../../components/ThemeToggle";

const navItems = [
    { label: "About Me", to: "/theme2#about" },
    { label: "Projects", to: "/theme2/projects" },
    { label: "Certificates", to: "/theme2#certifications" },
    { label: "Contact", to: "/theme2#contact" },
];

export default function Theme2Layout() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const checkTheme = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!location.hash) return;

        const element = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }, [location.pathname, location.hash, location.key]);

    useEffect(() => {
        if (location.hash) return;

        window.scrollTo({ top: 0, behavior: "auto" });
    }, [location.pathname, location.hash, location.key]);

    return (
        <>
            <div className="min-h-screen relative overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0" />
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl z-0" />

                <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-white/80 dark:bg-black/10 border-b border-gray-300 dark:border-neutral-700 backdrop-blur-md items-center px-6 md:px-12 py-4">
                    <Link to="/theme2">
                        <img src={isDarkMode ? "/mjv2dark.png" : "/mjv2light.png"} alt="Logo" className="h-10 w-auto" />
                    </Link>

                    <ul className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link to={item.to} className="text-black font-thin dark:text-white transition hover:opacity-70 cursor-pointer">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex flex-row flex-nowrap items-center gap-4">
                        <ThemeToggle />
                        <ThemeSwitcher />
                    </div>

                    <button
                        type="button"
                        aria-label="Open menu"
                        className="md:hidden cursor-pointer p-1"
                        onClick={() => setMenuOpen(true)}
                    >
                        <CgMenu className="w-7 h-7 text-black dark:text-white" />
                    </button>
                </nav>

                <main className="relative z-10">
                    <Outlet context={{ isDarkMode }} />
                </main>
            </div>

            <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${menuOpen ? "visible" : "invisible"}`}>
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setMenuOpen(false)}
                />
                <div className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-neutral-900 shadow-2xl flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200 dark:border-neutral-700">
                        <Link to="/theme2" onClick={() => setMenuOpen(false)}>
                            <img src={isDarkMode ? "/mjv2dark.png" : "/mjv2light.png"} alt="Logo" className="h-8 w-auto" />
                        </Link>
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMenuOpen(false)}
                            className="text-black dark:text-white"
                        >
                            <CgClose className="w-8 h-8" />
                        </button>
                    </div>
                    <nav className="flex flex-col px-6 py-6 gap-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={() => setMenuOpen(false)}
                                className="text-black dark:text-white text-base font-medium hover:opacity-70 transition text-left cursor-pointer"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4 px-6 pt-2 border-t border-gray-200 dark:border-neutral-700">
                        <ThemeToggle />
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </>
    );
}
