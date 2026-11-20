import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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

const MotionDiv = motion.div;

// Map tech keys → icon + brand color + full name
const techIconMap = {
  EXPO: { Icon: SiExpo,        color: "#FFFFFF", name: "Expo" },
  RN:   { Icon: SiReact,       color: "#61DAFB", name: "React Native" },
  TW:   { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  SB:   { Icon: SiSupabase,    color: "#3ECF8E", name: "Supabase" },
  JS:   { Icon: SiJavascript,  color: "#F7DF1E", name: "JavaScript" },
  EX:   { Icon: SiExpress,     color: "#FFFFFF", name: "Express" },
  MDB:  { Icon: SiMongodb,     color: "#47a248", name: "MongoDB" },
  NJS:  { Icon: SiNodedotjs,   color: "#339933", name: "Node.js" },
  SIO:  { Icon: SiSocketdotio, color: "#FFFFFF", name: "Socket.IO" },

};

const initialProjects = [
  {
    id: 1,
    title: "Attendify",
    date: "Sep 2026",
    badges: ["Mobile App"],
    description:
      "Attendance tracking mobile app for company employees, with selfie and location verification on time in/out.",
    tech: ["EXPO", "RN", "TW", "SB"],
    image: Attendify,
  },
  {
    id: 2,
    title: "Faculty Consult",
    date: "Nov 2026",
    badges: ["Web System"],
    description:
      "A web system that digitizes student-faculty consultations appointment requests, scheduling, and tracking—with role-based access.",
    tech: ["MDB", "EX", "RN", "NJS", "TW", "SIO"],
    image: FacultySys,
  },
  {
    id: 3,
    title: "E-Guide",
    date: "June 2026",
    badges: ["Web System"],
    description: "A centralized web platform that guides students through various school processes with step-by-step procedures, requirements, and instructions in one accessible system.",
    tech: ["MDB", "EX", "RN", "NJS", "TW",],
    image: Eguide,
  },
];

export default function ProjectCards({ isDark, themeColors }) {
  const [projects, setProjects] = useState(initialProjects);

  const handleCardClick = (id) => {
    setProjects((current) => {
      const clickedIndex = current.findIndex((p) => p.id === id);
      if (clickedIndex === 0) return current;

      const next = [...current];
      if (clickedIndex === 2) {
        next.unshift(next.pop());
      } else {
        next.push(next.shift());
      }
      return next;
    });
  };

  return (
    <div className="
      relative isolate
      flex items-center justify-center
      w-full
      h-[380px] sm:h-[400px] lg:h-[440px]
      max-w-5xl
      mx-auto
      mt-6 sm:mt-8
      overflow-visible
      px-2
    ">
      {projects.map((project, index) => {
        const position =
          index === 0 ? "center" : index === 1 ? "left" : "right";
        const isCenter = position === "center";
        const isRight = position === "right";

        return (
          <MotionDiv
            key={project.id}
            initial={false}
            animate={{
              x:
                position === "center"
                  ? "0%"
                  : position === "left"
                  ? "-65%"
                  : "65%",
              y: isCenter ? 0 : 15,
              scale: isCenter ? 1 : 0.82,
              rotate:
                position === "left" ? -10 : position === "right" ? 10 : 0,
              opacity: isCenter ? 1 : 0.7,
            }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 20,
              mass: 0.9,
            }}
            onClick={() => handleCardClick(project.id)}
            className={`
              absolute top-1/2 -translate-y-1/2
              w-[min(78vw,320px)] sm:w-[320px]
              min-h-[270px] sm:min-h-[300px] lg:min-h-[320px]
              rounded-2xl sm:rounded-3xl
              border p-4 sm:p-5
              flex flex-col
              cursor-pointer shadow-2xl
              ${
                isDark
                  ? "bg-[#0f0f0f] border-neutral-800"
                  : "bg-white border-gray-300"
              }
            `}
            style={{
              zIndex: isCenter ? 30 : isRight ? 20 : 10,
              transformOrigin: "center center",
            }}
          >
            {/* Header */}
            <div
              className={`flex items-center gap-3 mb-4 ${
                isRight ? "justify-end" : ""
              }`}
            >
              {project.image ? (
                <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-600">
                  <img
                    src={project.image}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : project.emoji ? (
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-lg sm:text-xl">
                  {project.emoji}
                </div>
              ) : null}

              <div className={`min-w-0 ${isRight ? "text-right" : ""}`}>
                <h4
                  className={`font-bold ${
                    isCenter ? "text-lg sm:text-xl" : "text-sm"
                  } tracking-wide ${themeColors.heading}`}
                >
                  {project.title}
                </h4>

                <div
                  className={`flex items-center flex-wrap gap-1.5 mt-1 ${
                    isRight ? "justify-end" : ""
                  }`}
                >
                  <p className="text-[8px] sm:text-[10px] text-neutral-500 font-mono">
                    {project.date}
                  </p>

                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[7px] sm:text-[8px] font-mono px-1.5 py-0.5 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className={`${
                isCenter ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"
              } text-neutral-400 leading-relaxed mb-4 ${
                isRight ? "text-right" : ""
              } ${isCenter ? "" : "line-clamp-3"}`}
            >
              {project.description}
            </p>

            {/* Technologies */}
            {project.tech.length > 0 && (
              <div
                className={`flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 ${
                  isRight ? "justify-end" : ""
                }`}
              >
                {project.tech.map((tech) => {
                  const entry = techIconMap[tech];

                  if (!entry) {
                    return (
                      <div
                        key={tech}
                        title={tech}
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[8px] sm:text-[10px] rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 font-mono"
                      >
                        {tech}
                      </div>
                    );
                  }

                  const { Icon, color, name } = entry;
                  return (
                    <div
                      key={tech}
                      title={name}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center"
                      style={{ color }}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  );
                })}
              </div>
            )}

            {/* View Project */}
            {isCenter && (
              <button
                onClick={(e) => e.stopPropagation()}
                className={`w-full py-2.5 sm:py-2 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 mt-auto cursor-pointer ${
                  isDark
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                View project <FiArrowRight />
              </button>
            )}
          </MotionDiv>
        );
      })}
    </div>
  );
}