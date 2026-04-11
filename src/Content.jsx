import TechCarousel from "./TechCarousel";
import GraphicCarousel from "./GraphicCarousel";
import Proj1 from "./assets/proj1.png";
import Proj2 from "./assets/proj2.png";
import Proj3 from "./assets/proj3.png";
import Cert1 from "./assets/cert1.jpg";
import Cert2 from "./assets/cert2.jpg";
import Cert3 from "./assets/cert3.jpg";
import { useNavigate } from "react-router-dom"; //Image hover
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";




function Content() {
    const navigate = useNavigate(); //For button
    const [showModal, setShowModal] = useState(false); 
    return (

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-5 sm:px-60 px-3 bg-gray-50 dark:bg-black">

            {/*About me*/}
            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] sm:min-h-[50px] col-span-2 sm:pb-1 pb-5">
                <h1 className="text-black dark:text-white text-2xl font-bold px-5 p-4">About Me</h1>
                <p className="text-black dark:text-gray-300 px-5 text-justify text-base font-normal">
                    I am <b>Mark Justin Canuel</b>, a 3rd year Bachelor of Science in Information Technology student with a strong interest
                    in UI/UX design and web development. I specialize in frontend development, where I enjoy building clean, responsive, and
                    user-friendly interfaces, and I also have basic knowledge of backend development, allowing me to understand how different
                    parts of a system work together. As a student, I am continuously learning and improving my skills through hands-on projects,
                    with the goal of creating web applications that are both visually appealing and functional.
                </p>
            </div>
            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] row-span-1 sm:row-span-2">
                <h1 className="text-black dark:text-white text-2xl font-bold px-5 pt-4">Education</h1>

                <div className="relative mx-8 my-2"> 
                    {/* timeline column */}
                    <div className="absolute left-0 top-0 h-full w-10 flex justify-center">
                        <div className="w-[0.1px] bg-gray-400 dark:bg-gray-500 h-full mt-2"></div>
                    </div>

                    {/* item */}
                    <div className="relative flex mb-3">
                        {/* dot */}
                        <div className="absolute left-5 top-1">
                            <div className="h-3 w-3 bg-black dark:bg-white shadow-black rounded- pt-1 -translate-x-1/2">
                                {/*<div className="h-3 w-3 bg-gray-900 dark:bg-gray-100 shadow-black rounded- ml-1 "></div>*/}
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-black pl-3 w-full">
                            <h2 className="font-bold">Capstone Project Developer</h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">eGuide ICCT Centralized School Requirements Guide System</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2026</p>
                        </div>
                    </div>

                    {/* item */}
                    <div className="relative flex mb-3 group">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-3 w-3 bg-gray-50 dark:bg-black group-hover:bg-black dark:group-hover:bg-white border border-gray-400 border-1 shadow-black rounded- cursor-pointer pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-black  pl-3 w-full">
                            <h2 className="font-bold">Tech Stack & Programming Experience </h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">React, Tailwind, Spring Boot, MySQL, & Web Dev</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2025</p>
                        </div>
                    </div>

                    <div className="relative flex mb-3 group">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-3 w-3 bg-gray-50 dark:bg-black group-hover:bg-black dark:group-hover:bg-white border border-gray-400 border-1 shadow-black rounded- cursor-pointer pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-black pl-3 w-full">
                            <h2 className="font-bold">CCNA Certification </h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Networking fundamentals, routing, switching, and device configuration</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2025</p>
                        </div>
                    </div>

                    <div className="relative flex mb-3 group">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-3 w-3 bg-gray-50 dark:bg-black group-hover:bg-black dark:group-hover:bg-white border border-gray-400 border-1 shadow-black rounded- cursor-pointer pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-black pl-3 w-full">
                            <h2 className="font-bold">Programming Foundations </h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Self-learning, online courses, mini-projects</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2024</p>
                        </div>
                    </div>

                    <div className="relative flex mb-3 group">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-3 w-3 bg-gray-50 dark:bg-black group-hover:bg-black dark:group-hover:bg-white border border-gray-400 border-1 shadow-black rounded- cursor-pointer pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-black pl-3 w-full">
                            <h2 className="font-bold">WordPress Workshop Experience</h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Peer collaboration, designing, and developing interactive web applications.</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2023</p>
                        </div>
                    </div>

                    <div className="relative flex mb-8 group">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-3 w-3 bg-gray-50 dark:bg-black group-hover:bg-black dark:group-hover:bg-white border border-gray-400 border-1 shadow-black cursor-pointer pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-black pl-3 w-full">
                            <h2 className="font-bold">Hello World!</h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Started learning programming</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2023</p>
                        </div>
                    </div>
                </div>


            </div>

            {/*Tools & Technologies*/}
            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] col-span-2">
                <h1 className="text-black dark:text-white text-2xl font-bold px-5 p-4">Tools & Technologies</h1>
                <div className="px-0 py-7">
                    <TechCarousel />
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 mx-8 my-4 gap-x-1 gap-y-2 ">
                    <div className="h-6 w-24 bg-[#ff4d00] text-xs text-white font-medium text-center cursor-pointer pt-1">HTML</div>
                    <div className="h-6 w-24 bg-[#005eff] text-xs text-white font-medium text-center cursor-pointer pt-1">CSS</div>
                    <div className="h-6 w-24 bg-[#ffee00] text-xs text-black/80 font-medium text-center cursor-pointer pt-1">JavaScript</div>
                    <div className="h-6 w-24 bg-[#00d9ff] text-xs text-white font-medium text-center cursor-pointer pt-1">React</div>
                    <div className="h-6 w-24 bg-[#000021] text-xs text-[#00d9ff] font-medium text-center cursor-pointer pt-1">Tailwind</div>
                    <div className="h-6 w-24 bg-[#7511f5] text-xs text-white font-medium text-center cursor-pointer pt-1">Bootstrap</div>
                    <div className="h-6 w-24 bg-[#5aa5fa] text-xs text-[white] font-medium text-center cursor-pointer pt-1">MySQL</div>
                    <div className="h-6 w-24 bg-[#71ba41] text-xs text-white font-medium text-center cursor-pointer pt-1">Spring Boot</div>
                    <div className="h-6 w-24 bg-[#000021] text-xs text-[#ff0d6e] font-medium text-center cursor-pointer pt-1">Figma</div>
                    <div className="h-6 w-24 bg-[#0181ce] text-xs text-white font-medium text-center cursor-pointer pt-1">VSCode</div>
                    <div className="h-6 w-24 bg-[#001e36] text-xs text-[#31a8ff] font-medium text-center cursor-pointer pt-1">Photoshop</div>

                    {/*<div className="h-6 w-24 bg-black/10 text-xs text-black font-meduim text-center cursor-pointer pt-1">HTML</div>
                    <div className="h-6 w-24 bg-[#E9E9E9] text-xs text-black font-meduim text-center cursor-pointer pt-1">CSS</div>
                    <div className="h-6 w-24 bg-[#ffee00] text-xs text-black/80 font-medium text-center cursor-pointerpt-1">JavaScript</div>
                    <div className="h-6 w-24 bg-[#00d9ff] text-xs text-white font-medium text-center cursor-pointer pt-1">React</div>
                    <div className="h-6 w-24 bg-[#000021] text-xs text-[#00d9ff] font-medium text-center cursor-pointer pt-1">Tailwind</div>
                    <div className="h-6 w-24 bg-[#7511f5] text-xs text-white font-medium text-center cursor-pointer pt-1">Bootstrap</div>
                    <div className="h-6 w-24 bg-[#5aa5fa] text-xs text-[white] font-medium text-center cursor-pointer pt-1">MySQL</div>
                    <div className="h-6 w-24 bg-[#71ba41] text-xs text-white font-medium text-center cursor-pointer pt-1">Spring Boot</div>
                    <div className="h-6 w-24 bg-[#000021] text-xs text-[#ff0d6e] font-medium text-center cursor-pointer pt-1">Figma</div>
                    <div className="h-6 w-24 bg-[#0181ce] text-xs text-white font-medium text-center cursor-pointer pt-1">VSCode</div>
                    <div className="h-6 w-24 bg-[#001e36] text-xs text-[#31a8ff] font-medium text-center cursor-pointer pt-1">Photoshop</div>*/}
                </div>
            </div>

            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 min-h-[50px] py-4  row-span-3">
                <h1 className="text-black dark:text-white text-2xl font-bold px-5 ">Graphic Design Projects</h1>
                <div className="px-0 py-10">
                    <GraphicCarousel />
                </div>
                <div className="flex justify-center px-8">
                    <button
                        className="bg-black dark:bg-gray-100 dark:hover:bg-black dark:hover:text-white rounded-lg h-8 w-24 text-white dark:text-black cursor-pointer border border-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        onClick={() => navigate("/graphic-design-details")}
                    >
                        View
                    </button>
                </div>
            </div>
            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] sm:min-h-[50px] col-span-2 row-span-2 pb-10">

                <h1 className="text-black dark:text-white text-2xl font-bold px-5 p-4">Web Projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-4 justify-items-center mx-0 sm:mx-4 my-4">
                    <div className="h-40 w-50 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600 text-sm text-white font-semibold text-center rounded-xl cursor-pointer"
                        onClick={() => window.open("https://demo-system-g5uf.vercel.app/", "_blank")}>
                        <img
                            src={Proj1}
                            className="h-30 object-cover rounded-xl p-1"
                        />
                        <h3 className="text-gray-900 dark:text-white text-normal font-semibold mt-1">eGuide ICCT System</h3>
                    </div>
                    <div className="h-40 w-50 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600 text-sm text-white font-semibold text-center rounded-xl cursor-pointer"
                        onClick={() => window.open("https://destination-website-five.vercel.app/", "_blank")}>
                        <img
                            src={Proj2}
                            className="h-30 object-cover rounded-xl p-1"
                        />
                        <h3 className="text-gray-900 dark:text-white text-normal font-semibold mt-1">Travel Booking Website</h3>
                    </div>
                    <div className="h-40 w-50 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600 text-sm text-white font-semibold text-center rounded-xl cursor-pointer"
                        onClick={() => window.open("https://formula1-website-gamma.vercel.app/", "_blank")}>
                        <img
                            src={Proj3}
                            className="h-30 object-cover rounded-xl p-1"
                        />
                        <h3 className="text-gray-900 dark:text-white text-normal font-semibold mt-1">Formula 1 Website</h3>
                    </div>
                </div>

            </div>
            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 min-h-[50px] col-span-2">
                <h1 className="text-black dark:text-white text-2xl text-center font-bold px-1 sm:px-8 p-5 my-10 sm:my-0">Do what you Love, <br className="block sm:hidden"></br> Love what you Do</h1>
            </div>
            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] col-span-1 sm:col-span-3 sm:pb-10 pb-10">

                <h1 className="text-black dark:text-white text-2xl font-bold px-5 p-4">Certifications</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-4 justify-items-center mx-0 sm:mx-2 my-4">
                    <div className="h-45 w-62 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600 
                    text-sm font-semibold text-center rounded-xl cursor-pointer flex items-center justify-center"
                        onClick={() => setShowModal(true)}>
                        <img
                            src={Cert1}
                            className="h-44 object-cover rounded-xl p-1"
                        />

                    </div>
                    {/* Modal Popup */}
                    {showModal && (
                        <div
                            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
                            onClick={() => setShowModal(false)}
                        >
                            <img
                                src={Cert1}
                                className="max-w-full max-h-full object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    )}
                    <div className="h-45 w-62 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600 
                    text-sm font-semibold text-center rounded-xl cursor-pointer flex items-center justify-center"
                    onClick={() => window.open("https://www.vibecoders.ph/cert/GAI2Z26-611B", "_blank")}>
                        <img
                            src={Cert2}
                            className="h-44.5 object-cover rounded-xl p-1"
                        />

                    </div>

                    <div className="h-45 w-62 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600 
                    text-sm font-semibold text-center rounded-xl cursor-pointer flex items-center justify-center"
                    onClick={() => window.open("https://www.udacity.com/certificate/e/a42076a6-2c2c-11f1-a4ec-47040fbe9c58", "_blank")}>
                        <img
                            src={Cert3}
                            className="h-44.5 object-cover rounded-xl p-1"
                        />

                    </div>
                </div>

            </div>

            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 shadow-black/20 col-span-2 sm:pb-10 pb-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-6 justify-items-stretch mx-5 my-4 px-1">

                    {/* Column 1: Get in touch */}
                    <div className="w-full">
                        <h1 className="text-black dark:text-white text-xl font-bold text-left mb-5">Get in touch</h1>
                        <div className="bg-gray-50 dark:bg-black dark:border-gray-600 flex justify-center items-center border border-black/10 rounded-lg p-9">
                            <p className="text-medium font-semibold text-center text-black dark:text-gray-300">
                                Actively seeking an OJT/Internship opportunity.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Social Links */}
                    <div className="w-full">
                        <h1 className="text-black dark:text-white text-xl font-bold text-left mb-5">Social Links</h1>

                      {/*}  <button
                            onClick={() => window.open("https://www.facebook.com/markjustin.canuel", "_blank")}
                            className="bg-gray-50 dark:bg-black dark:border-gray-600 h-10 w-full rounded-lg border border-black/10 flex items-center gap-3 px-5 mb-3 cursor-pointer"
                        >
                            <FaFacebook className="h-5 w-5 text-blue-600" />
                            <p className="text-base sm:text-sm font-medium">Facebook</p>
                        </button> */}

                        <button
                            onClick={() => window.open("https://www.instagram.com/imnotmarkkk_/", "_blank")}
                            className="bg-gray-50 dark:bg-black dark:border-gray-600 h-10 w-full rounded-lg border border-black/10 flex items-center gap-3 px-5 mb-3 cursor-pointer"
                        >
                            <FaInstagram className="h-5 w-5 text-pink-500" />
                            <p className="text-base sm:text-sm font-medium">Instagram</p>
                        </button>

                        <button
                            onClick={() => window.open("https://www.linkedin.com/in/mark-justin-canuel-081bb7378/", "_blank")}
                            className="bg-gray-50 dark:bg-black dark:border-gray-600 h-10 w-full rounded-lg border border-black/10 flex items-center gap-3 px-5 mb-3 cursor-pointer"
                        >
                            <FaLinkedin className="h-5 w-5 text-blue-600" />
                            <p className="text-base sm:text-sm font-medium">LinkedIn</p>
                        </button>

                        <button
                            onClick={() => window.open("https://github.com/Marky23svg", "_blank")}
                            className="bg-gray-50 dark:bg-black dark:border-gray-600 h-10 w-full rounded-lg border border-black/10 flex items-center gap-3 px-5 cursor-pointer"
                        >
                            <FaGithub className="h-5 w-5" />
                            <p className="text-base sm:text-sm font-medium">Github</p>
                        </button>
                    </div>

                    {/* Column 3: Contacts */}
                    <div className="w-full">
                        <h1 className="text-black dark:text-white text-xl font-bold text-left mb-5">Contacts</h1>

                        <button
                            onClick={() => window.open("mailto:markjustincanuel2@gmail.com", "_blank")}
                            className="bg-gray-50 dark:bg-black dark:border-gray-600 h-10 w-full rounded-lg border border-black/10 flex items-center gap-2 px-4 mb-3"
                        >
                            {/*<FaEnvelope className="h-4 w-4" />*/}
                            <p className="text-base sm:text-xs font-medium">markjustincanuel2@gmail.com</p>
                        </button>

                        <button
                            onClick={() => window.open("tel#", "_blank")}
                            className="bg-gray-50 dark:bg-black dark:border-gray-600 h-10 w-full rounded-lg border border-black/10 flex items-center gap-2 px-4"
                        >
                            {/*<FaPhone className="h-4 w-4" />*/}
                            <p className="text-base sm:text-xs font-medium">09679101896</p>
                        </button>
                    </div>

                </div>
            </div>


            <div className="bg-gray-50 dark:bg-black rounded-xl sm:border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] row-span-2 mb-5 py-5 sm:p-0 ">
                <h1 className="text-black dark:text-white text-xl font-bold text-left px-5 p-4 mb-1">Goals</h1>
                <div className="px-5 pb-4.5">

                    <div className="bg-gray-50 dark:bg-black dark:border-gray-600 flex justify-center items-center border border-black/10 rounded-lg p-3 mb-3">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            Grow and build a strong career in IT through continuous learning and hands-on experience.
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-black dark:border-gray-600 flex justify-center items-center border border-black/10 rounded-lg p-3">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            Improve my skills in web and software development and contribute to real-world impactful projects.
                        </p>
                    </div>
                </div>
            </div>









        </div>
    );
}
export default Content;