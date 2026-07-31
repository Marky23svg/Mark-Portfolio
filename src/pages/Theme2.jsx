import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown, FaPhone } from "react-icons/fa6";
import { FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import { PiUserSwitchFill } from "react-icons/pi";
import { CgClose, CgMenu } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import { useTransition } from "../context/TransitionContext.jsx";
import ThemeToggle from "../components/ThemeToggle";
import ProfileImg from "../assets/Markpfp3.webp";
import V2bglight from "../assets/v2bglight4k.webp";
import V2bgdark from "../assets/v2bgdark4k.webp";
import V2mark from "../assets/v2mark.jpg";
import V2gif from "../assets/v2gif.gif";
import V2markdp from "../assets/v2markdp.jpeg";
import GraphicCarousel from "../components/GraphicCarousel";
import TechCarousel from "../components/TechCarousel";
import MacBookProMockup from "../components/MacBookProMockup";
import IPhone17ProMaxMockup from "../components/IPhone17ProMaxMockup";
import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.png";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.png";
import Cert1 from "../assets/cert1.webp";
import Cert2 from "../assets/cert2.webp";
import Cert3 from "../assets/cert3.webp";
import Cert4 from "../assets/cert4.webp";
import Cert5 from "../assets/cert5.webp";
import Cert6 from "../assets/cert6.jpg";
import Cert7 from "../assets/cert7.jpg";


const projects = [
    { id: 1, image: Proj1, title: "eGuide ICCT Mini Capstone Frontend", description: "School and documents guide system", link: "https://demo-system-g5uf.vercel.app/" },
    { id: 2, image: Proj2, title: "Travel Booking Website", description: "Booking website frontend", link: "https://destination-website-five.vercel.app/" },
    { id: 3, image: Proj3, title: "WattsUp", description: "EV Charging Station Locator", link: "https://watts-up-vert.vercel.app/" },
    { id: 4, image: Proj4, title: "GoGreen", description: "Eco-friendly travel planner w/ Budget Tracker", link: "https://go-green-download-web.vercel.app/" },
    { id: 5, image: Proj5, title: "eGuide ICCT Web App", description: "School and documents guide system", link: "https://e-guide-fullstack-cjdmrk.vercel.app/" },
];


const certificates = [
    { id: 1, image: Cert1, title: "DevKada 2026 Hackathon", link: null },
    { id: 2, image: Cert2, title: "Gen AI to Z Certification", link: "https://www.vibecoders.ph/cert/GAI2Z26-611B" },
    { id: 3, image: Cert3, title: "Udacity AWS AI Practitioner", link: "https://www.udacity.com/certificate/e/a42076a6-2c2c-11f1-a4ec-47040fbe9c58" },
    { id: 4, image: Cert4, title: "Freecodecamp Responsive Web Design", link: null },
    { id: 5, image: Cert5, title: "WordPress Web Development Certification", link: null },
    { id: 6, image: Cert6, title: "Application Development and Emerging Technologies", link: null },
    { id: 7, image: Cert7, title: "DataCamp Associate Data Analyst Certification", link: "https://www.datacamp.com/certificate/DAA0017604221232" },
];

function Theme2() {
    const { navigateTo } = useTransition();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    useEffect(() => {
        const checkTheme = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="min-h-screen relative overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${isDarkMode ? V2bgdark : V2bglight})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0" />
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl z-0" />

                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-white/80 dark:bg-black/10 border-b border-gray-300 dark:border-neutral-700 backdrop-blur-md items-center px-6 md:px-12 py-4">
                    <img src={isDarkMode ? "/mjv2dark.png" : "/mjv2light.png"} alt="Logo" className="h-10 w-auto" />

                    {/* Desktop nav links */}
                    <ul className="hidden md:flex gap-8">
                        <li><button onClick={() => scrollTo('about')} className="text-black font-thin dark:text-white transition hover:opacity-70 cursor-pointer">About Me</button></li>
                        <li><button onClick={() => scrollTo('projects')} className="text-black font-thin dark:text-white transition hover:opacity-70 cursor-pointer">Projects</button></li>
                        <li><button onClick={() => scrollTo('certifications')} className="text-black font-thin dark:text-white transition hover:opacity-70 cursor-pointer">Certificates</button></li>
                        <li><button onClick={() => scrollTo('contact')} className="text-black font-thin dark:text-white transition hover:opacity-70 cursor-pointer">Contact</button></li>
                    </ul>

                    {/* Desktop controls */}
                    <div className="hidden md:flex flex-row flex-nowrap items-center gap-4">
                        <ThemeToggle />
                        <button onClick={() => navigateTo("/")} className="bg-gray-200 dark:bg-neutral-800 dark:hover:bg-white dark:hover:text-black rounded-full h-8 w-8 text-black dark:text-white cursor-pointer border border-gray-300 dark:border-gray-600 hover:bg-black hover:text-white transition-colors flex items-center justify-center">
                            <PiUserSwitchFill className="w-6 h-6" />
                        </button>
                    </div>

                    <button className="md:hidden cursor-pointer p-1" onClick={() => setMenuOpen(true)}>
                        <CgMenu className="w-7 h-7 text-black dark:text-white" />
                    </button>
                </nav>

                {/* Mobile slide-in drawer */}
                <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
                    {/* Backdrop */}
                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMenuOpen(false)} />
                    {/* Drawer panel slides in from right */}
                    <div className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-neutral-900 shadow-2xl flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        {/* Drawer header */}
                        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200 dark:border-neutral-700">
                            <img src={isDarkMode ? "/mjv2dark.png" : "/mjv2light.png"} alt="Logo" className="h-8 w-auto" />
                            <button onClick={() => setMenuOpen(false)} className="text-black dark:text-white"><CgClose className="w-8 h-8" /></button>
                        </div>
                        {/* Nav links */}
                        <nav className="flex flex-col px-6 py-6 gap-5">
                            <button onClick={() => scrollTo('about')} className="text-black dark:text-white text-base font-medium hover:opacity-70 transition text-left cursor-pointer">About Me</button>
                            <button onClick={() => scrollTo('projects')} className="text-black dark:text-white text-base font-medium hover:opacity-70 transition text-left cursor-pointer">Projects</button>
                            <button onClick={() => scrollTo('certifications')} className="text-black dark:text-white text-base font-medium hover:opacity-70 transition text-left cursor-pointer">Certificates</button>
                            <button onClick={() => scrollTo('contact')} className="text-black dark:text-white text-base font-medium hover:opacity-70 transition text-left cursor-pointer">Contact</button>
                        </nav>
                        {/* Controls */}
                        <div className="flex items-center gap-4 px-6 pt-2 border-t border-gray-200 dark:border-neutral-700">
                            <ThemeToggle />
                            <button onClick={() => { navigateTo("/"); setMenuOpen(false); }} className="bg-gray-200 dark:bg-neutral-800 dark:hover:bg-white dark:hover:text-black rounded-full h-8 w-8 text-black dark:text-white cursor-pointer border border-gray-300 dark:border-gray-600 hover:bg-black hover:text-white transition-colors flex items-center justify-center">
                                <PiUserSwitchFill className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative z-10 min-h-[80vh] flex items-center px-6 pt-16 md:pt-20">
                    <div className="max-w-6xl mx-auto w-full">
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
            </div>

            {/* About Me Section */}
            <section id="about" className="relative z-10 py-12 px-4 sm:px-6 bg-white dark:bg-black/80 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-light text-center font-montserrat text-black dark:text-white font-montserrat mb-6">
                    About Me
                </h2>
                <div className="max-w-9xl mx-auto">
                    <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-3xl md:pr-30 pb-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">

                            {/* Left - Image */}
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

                            {/* Right - About Me Text */}
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
                                        {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'Bootstrap', 'MySQL', 'Spring Boot', 'Figma', 'VS Code', 'Photoshop', 'Express', 'Node.js', 'MongoDB'].map((tech) => (
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

            {/* Tech Carousel */}
            <div className="w-full py-6 bg-white dark:bg-black border-gray-200 dark:border-neutral-800">
                <TechCarousel />
            </div>

            {/* Projects Section */}
            <section id="projects" className="relative z-10 py-12 px-4 sm:px-6 bg-white dark:bg-black/80 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-light text-center text-black dark:text-white font-montserrat mb-12">
                    Projects
                </h2>

                <div className="max-w-6xl mx-auto flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <div key={project.id} className="flex flex-col gap-6">
                            {/* Project row */}
                            <div
                                className={`flex flex-col items-center gap-8 cursor-pointer ${index % 2 === 0
                                        ? 'lg:flex-row'
                                        : 'lg:flex-row-reverse'
                                    } group transition-all duration-300 hover:scale-[1.01]`}
                                onClick={() => window.open(project.link, "_blank")}
                            >
                                {/* MacBook Mockup */}
                                <div className={`w-full mx-auto ${
    index % 2 === 0 ? 'lg:pr-4' : 'lg:pl-4'
}`}>
    <div className="transform scale-75 sm:scale-90 md:scale-95 lg:scale-100 origin-center">
        <MacBookProMockup src={project.image} title={project.title} />
    </div>
</div>

                                {/* Info */}
                                <div className={`w-full lg:w-2/5 ${index % 2 === 0
                                        ? 'lg:text-left sm:text-center md:text-center lg:pr-8'
                                        : 'lg:text-right sm:text-center md:text-center lg:pl-8'
                                    }`}>
                                    <h3 className={`text-xl sm:text-2xl font-base text-black dark:text-white flex items-center gap-2 transition-colors group-hover:text-amber-400 ${index % 2 === 0
                                            ? 'justify-start'
                                            : 'justify-end'
                                        }`}>
                                        {project.title}
                                        <FaExternalLinkAlt className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                    </h3>
                                    <p className={`text-neutral-600 dark:text-white/60 text-sm sm:text-base font-light mt-2 ${index % 2 === 0 ? 'text-left' : 'text-right'
                                        }`}>
                                        {project.description}
                                    </p>
                                    <div className={`mt-4 ${index % 2 === 0 ? 'text-left' : 'text-right'
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

            {/* Certifications Section */}
            <section id="certifications" className="relative z-10 py-12 px-4 sm:px-6 bg-white dark:bg-black backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-light text-center text-black dark:text-white font-montserrat mb-8">
                    Certifications
                </h2>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="group bg-white/40 dark:bg-neutral-900 backdrop-blur-md border border-gray-300 dark:border-neutral-600 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                                onClick={() => cert.link ? window.open(cert.link, "_blank") : setSelectedImage(cert.image)}
                            >
                                <div className="relative overflow-hidden h-40">
                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium flex items-center gap-2">
                                            {cert.link ? <>View Certificate <FaExternalLinkAlt className="w-3 h-3" /></> : "Preview"}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-black dark:text-white text-center font-light text-xs">{cert.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Preview Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Certificate preview" className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
                    <button className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition" onClick={() => setSelectedImage(null)}>×</button>
                </div>
            )}

            {/* Graphic Design Section */}
            <section id="graphic" className="relative z-10 py-12 px-4 sm:px-6 bg-white dark:bg-black/80 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-light text-center text-black dark:text-white font-montserrat mb-2">
                    Graphic Design
                </h2>
                <p className="text-center text-neutral-500 dark:text-white/50 text-sm mb-8">A collection of my Photoshop works</p>
                <div className="bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl overflow-hidden py-6">
                    <GraphicCarousel onImageClick={(img) => setSelectedImage(img)} />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative z-10 py-16 px-4 sm:px-6 bg-white dark:bg-black backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-light text-center text-black dark:text-white font-montserrat mb-2">Contact</h2>
                <p className="text-center text-neutral-500 dark:text-white/50 text-sm mb-10">Feel free to reach out!</p>
                <div className="max-w-2xl mx-auto flex flex-col gap-4">
                    {/* Email */}
                    <a href="mailto:markjustincanuel2@gmail.com" className="group flex items-center gap-5 bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-neutral-800 shrink-0">
                            <FaEnvelope className="w-5 h-5 text-black dark:text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 dark:text-white/50">Email</p>
                            <p className="text-black dark:text-white font-medium">markjustincanuel2@gmail.com</p>
                        </div>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/mark-justin-canuel-081bb7378/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-neutral-800 shrink-0">
                            <FaLinkedin className="w-5 h-5 text-black dark:text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 dark:text-white/50">LinkedIn</p>
                            <p className="text-black dark:text-white font-medium">Mark Justin Canuel</p>
                        </div>
                    </a>
                    {/* GitHub */}
                    <a href="https://github.com/Marky23svg" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white/40 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-3xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-neutral-800 shrink-0">
                            <FaGithub className="w-5 h-5 text-black dark:text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 dark:text-white/50">GitHub</p>
                            <p className="text-black dark:text-white font-medium">Marky23svg</p>
                        </div>
                    </a>
                    {/* Instagram */}
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

export default Theme2;