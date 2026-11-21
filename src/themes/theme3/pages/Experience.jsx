import { Link, useOutletContext } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const experiences = [
    {
        year: "August 2026 - Present",
        company: "Intelliseven",
        initials: "I7",
        role: "Software Developer Intern",
        type: "Internship",
        description: "Worked closely with the engineering team to develop a comprehensive CRM system and a Point of Sale (POS) application, including a dedicated admin dashboard for management. My primary focus was on the frontend, building responsive user interfaces and interactive dashboards. I also contributed to the backend, helping to design database schemas, build RESTful APIs, and implement the server-side logic required to connect the POS and CRM systems seamlessly.",
    },
    {
        year: "January - June 2026",
        company: "eGuide ICCT",
        initials: "EG",
        role: "Capstone Project Developer",
        type: "Academic Project",
        description: "Led a team of developers in building a centralized school requirements guide system. Architected the full-stack infrastructure, handling both the frontend user experience and the backend database integration to ensure students could easily navigate complex academic processes and document tracking.",
    },
    {
        year: "April 2026",
        company: "DevKada",
        initials: "DK",
        role: "Hackathon Participant",
        type: "Competition",
        description: "Built a fully functional prototype addressing real-world community problems within a strict 48-hour time constraint. Utilized modern web technologies to rapidly design, develop, and pitch a scalable solution to a panel of industry judges, demonstrating strong teamwork and rapid problem-solving skills.",
    },
    {
        year: "May 2025",
        company: "Cisco Networking Academy",
        initials: "CN",
        role: "Networking Student",
        type: "Certification",
        description: "Completed rigorous coursework covering networking fundamentals, IP addressing, routing protocols, and basic device configuration. Gained hands-on experience with network topologies, security principles, and troubleshooting methodologies to understand the backbone of modern internet infrastructure.",
    },
    {
        year: "2024",
        company: "Self-Taught",
        initials: "ST",
        role: "Programming Foundations",
        type: "Learning",
        description: "Built a strong foundation in computer science principles through self-directed learning, online courses, and various mini-projects. Mastered core programming concepts, algorithms, and data structures, which paved the way for advanced software engineering practices.",
    },
    {
        year: "July 2023",
        company: "WordPress Workshop",
        initials: "WP",
        role: "Web Development Trainee",
        type: "Workshop",
        description: "Collaborated with peers in an intensive workshop environment to design and develop interactive, dynamic web applications using WordPress. Learned the fundamentals of content management systems, theme customization, and responsive web design best practices.",
    },
    {
        year: "2023",
        company: "Self-Taught",
        initials: "HW",
        role: "Hello World!",
        type: "Milestone",
        description: "Wrote my first line of code and officially started the journey into software development. What began as simple curiosity quickly evolved into a deep passion for building things for the web and solving complex problems through programming.",
    },
];

export default function Experience() {
    const { isDark, themeColors } = useOutletContext();

    return (
        <section id="experience" className="relative isolate mb-16 overflow-hidden sm:mb-20">
            {/* Background Pattern */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-70"
                style={{
                    backgroundImage: `radial-gradient(${
                        isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)"
                    } 1px, transparent 1px)`,
                    backgroundSize: "18px 18px",
                }}
            />

            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <h3 className="text-2xl font-pixel tracking-widest text-neutral-800 dark:text-neutral-100">
                    experience
                </h3>

                <Link
                    to="/theme3"
                    className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-blue-400 transition-colors"
                >
                    <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    BACK TO HOME
                </Link>
            </div>

            {/* Timeline */}
            <div className="relative mt-10">
                {/* The vertical line - shifted slightly to center with the new larger boxes */}
                <div
                    aria-hidden="true"
                    className={`absolute bottom-3 left-[19px] top-3 w-px ${
                        isDark ? "bg-neutral-800" : "bg-gray-300"
                    }`}
                />

                <div className="space-y-10 sm:space-y-12">
                    {experiences.map((item, index) => (
                        <div key={index} className="relative pl-14 sm:pl-16 group">
                            
                            {/* Square Marker with Initials */}
                            <span
                                aria-hidden="true"
                                className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center border text-xs font-mono font-bold transition-colors duration-300 ${
                                    isDark
                                        ? "border-neutral-700 bg-[#0a0a0a] text-neutral-400 group-hover:border-blue-500 group-hover:text-blue-500"
                                        : "border-gray-300 bg-white text-gray-500 group-hover:border-blue-500 group-hover:text-blue-500"
                                }`}
                            >
                                {item.initials}
                            </span>

                            <div className="min-w-0 pt-1">
                                
                                {/* Company & Year Row */}
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                                    <h4 className={`text-sm sm:text-base font-geist font-semibold ${themeColors.heading}`}>
                                        {item.company}
                                    </h4>
                                    <span className="text-[10px] font-mono tracking-widest text-blue-500 uppercase border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 rounded-sm">
                                        {item.type}
                                    </span>
                                    <span className="text-xs font-mono text-neutral-500">
                                        {item.year}
                                    </span>
                                </div>

                                {/* Role */}
                                <h5 className="text-sm sm:text-sm font-geist text-neutral-500 dark:text-neutral-400 mb-2">
                                    {item.role}
                                </h5>

                                {/* Description */}
                                <p className={`break-words text-sm font-geist leading-relaxed sm:text-base ${
                                    isDark ? "text-neutral-400" : "text-neutral-600"
                                }`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}