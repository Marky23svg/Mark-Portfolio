import TechCarousel from "./TechCarousel";
import GraphicCarousel from "./GraphicCarousel";
import Proj1 from "./assets/proj1.png";
import Proj2 from "./assets/proj2.png";
import Proj3 from "./assets/proj3.png";
import Cert1 from "./assets/cert1.jpg";
import { useNavigate } from "react-router-dom"; //Image hover
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa6";




function Content() {
    const navigate = useNavigate(); //For button
    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-5 sm:px-30 bg-gray-100 dark:bg-gray-950">
            
            {/*About me*/}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] sm:min-h-[50px] col-span-2 sm:pb-1 pb-5">
                <h1 className="text-gray-900 dark:text-white text-2xl font-bold px-8 p-5">About Me</h1>
                <p className="text-gray-800 dark:text-gray-300 px-8 text-justify text-base font-semibold">
                    I am <b>Mark Justin Canuel</b>, a 3rd year Bachelor of Science in Information Technology student with a strong interest
                    in UI/UX design and web development. I specialize in frontend development, where I enjoy building clean, responsive, and
                    user-friendly interfaces, and I also have basic knowledge of backend development, allowing me to understand how different
                    parts of a system work together. As a student, I am continuously learning and improving my skills through hands-on projects,
                    with the goal of creating web applications that are both visually appealing and functional.
                </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] row-span-2  ">
                <h1 className="text-gray-900 dark:text-white text-2xl font-bold px-8 p-5">Education</h1>

                <div className="relative mx-8 my-10">
                    {/* timeline column */}
                    <div className="absolute left-0 top-0 h-full w-10 flex justify-center">
                        <div className="w-0.5 bg-gray-400 dark:bg-gray-500 h-full mt-2"></div>
                    </div>

                    {/* item */}
                    <div className="relative flex mb-8">
                        {/* dot */}
                        <div className="absolute left-5 top-1">
                            <div className="h-6 w-6 bg-gray-400 shadow-black rounded-full pt-1 -translate-x-1/2">
                                <div className="h-4 w-4 bg-gray-900 dark:bg-gray-100 shadow-black rounded-full ml-1 "></div>
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-gray-900 pl-3 w-full">
                            <h2 className="font-bold">Capstone Project Developer</h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">eGuide ICCT School and Academic Requirements Guide System</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2026</p>
                        </div>
                    </div>

                    {/* item */}
                    <div className="relative flex mb-8">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-4 w-4 bg-gray-900 dark:bg-gray-100 shadow-black rounded-full pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-gray-900  pl-3 w-full">
                            <h2 className="font-bold">Tech Stack & Programming Experience </h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">React, Spring Boot, MySQL, & Web Dev</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2025</p>
                        </div>
                    </div>

                    <div className="relative flex mb-8">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-4 w-4 bg-gray-900 dark:bg-gray-100 shadow-black rounded-full pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-gray-900 pl-3 w-full">
                            <h2 className="font-bold">CCNA Certification </h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Networking fundamentals, routing, switching, and device configuration</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2025</p>
                        </div>
                    </div>

                    <div className="relative flex mb-8">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-4 w-4 bg-gray-900 dark:bg-gray-100 shadow-black rounded-full pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-gray-900 pl-3 w-full">
                            <h2 className="font-bold">Programming Foundations </h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Self-learning, online courses, mini-projects</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2024</p>
                        </div>
                    </div>

                    <div className="relative flex mb-8">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-4 w-4 bg-gray-900 dark:bg-gray-100 shadow-black rounded-full pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-gray-900 pl-3 w-full">
                            <h2 className="font-bold">WordPress Workshop Experience</h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Peer collaboration, designing, and developing interactive web applications.</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2023</p>
                        </div>
                    </div>

                    <div className="relative flex mb-8">
                        {/* dot */}
                        <div className="absolute left-5 top-2">
                            <div className="h-4 w-4 bg-gray-900 dark:bg-gray-100 shadow-black rounded-full pt-1 -translate-x-1/2">
                            </div>

                        </div>

                        {/* content */}
                        <div className="ml-12 bg-gray-50 dark:bg-gray-900 pl-3 w-full">
                            <h2 className="font-bold">Hello World!</h2>
                            <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">Started learning programming</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">2023</p>
                        </div>
                    </div>
                </div>


            </div>

            {/*Tools & Technologies*/}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] col-span-2">
                <h1 className="text-gray-900 dark:text-white text-2xl font-bold px-8 p-5">Tools & Technologies</h1>
                <div className="px-8 py-7">
                    <TechCarousel />
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-7 mx-8 my-4 gap-x-2 gap-y-4 ">
                    <div className="h-6 w-24 bg-[#ff4d00] text-sm text-white font-semibold text-center rounded-xl cursor-pointer ">HTML</div>
                    <div className="h-6 w-24 bg-[#005eff] text-sm text-white font-semibold text-center rounded-xl cursor-pointer">CSS</div>
                    <div className="h-6 w-24 bg-[#ffee00] text-sm text-black/80 font-semibold text-center rounded-xl cursor-pointer">JavaScript</div>
                    <div className="h-6 w-24 bg-[#00d9ff] text-sm text-white font-semibold text-center rounded-xl cursor-pointer">React</div>
                    <div className="h-6 w-24 bg-[#000021] text-sm text-[#00d9ff] font-semibold text-center rounded-xl cursor-pointer">Tailwind</div>
                    <div className="h-6 w-24 bg-[#7511f5] text-sm text-white font-semibold text-center rounded-xl cursor-pointer">Bootstrap</div>
                    <div className="h-6 w-24 bg-[#5aa5fa] text-sm text-[white] font-semibold text-center rounded-xl cursor-pointer">MySQL</div>
                    <div className="h-6 w-24 bg-[#71ba41] text-sm text-white font-semibold text-center rounded-xl cursor-pointer">Spring Boot</div>
                    <div className="h-6 w-24 bg-[#000021] text-sm text-[#ff0d6e] font-semibold text-center rounded-xl cursor-pointer">Figma</div>
                    <div className="h-6 w-24 bg-[#0181ce] text-sm text-white font-semibold text-center rounded-xl cursor-pointer">VSCode</div>
                    <div className="h-6 w-24 bg-[#001e36] text-sm text-[#31a8ff] font-semibold text-center rounded-xl cursor-pointer">Photoshop</div>

                </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 min-h-[50px] py-5  row-span-3">
                <h1 className="text-gray-900 dark:text-white text-2xl font-bold px-8 ">Graphic Design Projects</h1>
                <div className="px-8 py-10">
                    <GraphicCarousel />
                </div>
                <div className="flex justify-center px-8">
                    <button
                        className="bg-gray-900 dark:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white rounded-lg h-8 w-24 text-white dark:text-black cursor-pointer border border-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        onClick={() => navigate("/graphic-design-details")}
                    >
                        View
                    </button>
                </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] sm:min-h-[50px] col-span-2 row-span-2 pb-10">

                <h1 className="text-gray-900 dark:text-white text-2xl font-bold px-8 p-5">Web Projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-4 justify-items-center mx-0 sm:mx-8 my-4">
                    <div className="h-50 w-62 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-sm text-white font-semibold text-center rounded-xl cursor-pointer">
                        <img
                            src={Proj1}
                            className="h-36 object-cover rounded-xl p-1"
                        />
                        <h3 className="text-gray-900 dark:text-white text-normal font-semibold mt-3">eGuide ICCT System</h3>
                    </div>
                    <div className="h-50 w-62 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-sm text-white font-semibold text-center rounded-xl cursor-pointer">
                        <img
                            src={Proj2}
                            className="h-36 object-cover rounded-xl p-1"
                        />
                        <h3 className="text-gray-900 dark:text-white text-normal font-semibold mt-3">Travel Booking Website</h3>
                    </div>
                    <div className="h-50 w-62 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-sm text-white font-semibold text-center rounded-xl cursor-pointer">
                        <img
                            src={Proj3}
                            className="h-36 object-cover rounded-xl p-1"
                        />
                        <h3 className="text-gray-900 dark:text-white text-normal font-semibold mt-3">F1 Racing Website</h3>
                    </div>
                </div>

            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 min-h-[50px] col-span-2">
                <h1 className="text-gray-900 dark:text-white text-2xl text-center font-bold px-8 p-5">Do What You Love, Love What You Do</h1>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] col-span-1 sm:col-span-3 sm:pb-10 pb-10">
                <h1 className="text-gray-900 dark:text-white text-2xl font-bold px-8 p-5">Certifications</h1>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-3 gap-y-4 justify-items-center mx-0 sm:mx-8 my-4">
                    <div className="h-50 w-62 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-sm font-semibold text-center rounded-xl cursor-pointer">
                        <img
                            src={Cert1}
                            className="h-49 object-cover rounded-xl p-1"
                        />
                        
                    </div>
                    {/* Additional certification items can be added here 
                    <div className="h-50 w-62 bg-gray-50 dark:bg-gray-900 dark:border border-gray-600 text-sm text-white font-semibold shadow-lg text-center rounded-xl cursor-pointer">
                        <img
                            src={Proj2}
                            className="h-36 object-cover rounded-xl p-1"
                        />
                        <h3 className="text-gray-900 dark:text-white text-normal font-semibold mt-3">Travel Booking Website</h3>
                    </div>
                    <div className="h-50 w-62 bg-gray-50 dark:bg-gray-900 dark:border border-gray-600 text-sm text-white font-semibold shadow-lg text-center rounded-xl cursor-pointer">
                        <img
                            src={Proj3}
                            className="h-36 object-cover rounded-xl p-1"
                        />
                        <h3 className="text-gray-900 dark:text-white text-normal font-semibold mt-3">F1 Racing Website</h3>
                    </div>
                    */}
                </div>

            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-black/20 col-span-2 sm:pb-10 pb-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6 justify-items-stretch mx-8 my-4 px-1">

                    {/* Column 1: Get in touch */}
                    <div className="w-full">
                        <h1 className="text-gray-900 dark:text-white text-xl font-bold text-left mb-5">Get in touch</h1>
                        <div className="bg-gray-50 dark:bg-gray-900 dark:border-gray-600 flex justify-center items-center border border-black/10 rounded p-9">
                            <p className="text-medium font-semibold text-center text-gray-900 dark:text-gray-300">
                                Actively seeking an OJT/Internship opportunity.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Social Links */}
                    <div className="w-full">
                        <h1 className="text-gray-900 dark:text-white text-xl font-bold text-left mb-5">Social Links</h1>

                        <button
                            onClick={() => window.open("https://www.facebook.com/markjustin.canuel", "_blank")}
                            className="bg-gray-50 dark:bg-gray-900 dark:border-gray-600 h-10 w-full rounded border border-black/10 flex items-center gap-3 px-5 mb-3 cursor-pointer"
                        >
                            <FaFacebook className="h-5 w-5 text-blue-600" />
                            <p className="text-sm font-medium">Facebook</p>
                        </button>

                        <button
                            onClick={() => window.open("https://www.instagram.com/imnotmarkkk_/", "_blank")}
                            className="bg-gray-50 dark:bg-gray-900 dark:border-gray-600 h-10 w-full rounded border border-black/10 flex items-center gap-3 px-5 mb-3 cursor-pointer"
                        >
                            <FaInstagram className="h-5 w-5 text-pink-500" />
                            <p className="text-sm font-medium">Instagram</p>
                        </button>

                        <button
                            onClick={() => window.open("https://github.com/Marky23svg", "_blank")}
                            className="bg-gray-50 dark:bg-gray-900 dark:border-gray-600 h-10 w-full rounded border border-black/10 flex items-center gap-3 px-5 cursor-pointer"
                        >
                            <FaGithub className="h-5 w-5" />
                            <p className="text-sm font-medium">Github</p>
                        </button>
                    </div>

                    {/* Column 3: Contacts */}
                    <div className="w-full">
                        <h1 className="text-gray-900 dark:text-white text-xl font-bold text-left mb-5">Contacts</h1>

                        <button
                            onClick={() => window.open("mailto:markjustincanuel2@gmail.com", "_blank")}
                            className="bg-gray-50 dark:bg-gray-900 dark:border-gray-600 h-10 w-full rounded border border-black/10 flex items-center gap-2 px-3 mb-3"
                        >
                            <FaEnvelope className="h-4 w-4" />
                            <p className="text-sm font-medium">markjustincanuel2@gmail.com</p>
                        </button>

                        <button
                            onClick={() => window.open("tel:0967dummy#", "_blank")}
                            className="bg-gray-50 dark:bg-gray-900 dark:border-gray-600 h-10 w-full rounded border border-black/10 flex items-center gap-2 px-3"
                        >
                            <FaPhone className="h-4 w-4" />
                             <p className="text-sm font-medium">09679101896</p>
                        </button>
                    </div>

                </div>
            </div>


            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-black/20 min-h-[50px] row-span-2 mb-5 pb-10 ">
            <h1 className="text-gray-900 dark:text-white text-xl font-bold text-left px-8 p-4 mb-1">Goals</h1>
               <div className="px-5">
                        
                        <div className="bg-gray-50 dark:bg-gray-900 dark:border-gray-600 flex justify-center items-center border border-black/10 rounded p-3 mb-5">
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                                Grow and build a strong career in IT through continuous learning and hands-on experience.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 dark:border-gray-600 flex justify-center items-center border border-black/10 rounded p-3">
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                                Improve my skills in software development and contribute to real-world impactful projects.
                            </p>
                        </div>
                    </div> 
            </div>









        </div>
    );
}
export default Content;