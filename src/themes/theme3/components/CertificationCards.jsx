import { useState } from "react";
import { motion } from "framer-motion";
import { SiCisco, SiFreecodecamp, SiUdacity, SiDatacamp } from "react-icons/si";

const MotionDiv = motion.div;

const initialCertifications = [
  {
    id: 1,
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    icon: SiUdacity,
    iconColor: "text-blue-700",
    link: "https://www.udacity.com/certificate/e/a42076a6-2c2c-11f1-a4ec-47040fbe9c58",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    icon: SiFreecodecamp,
    iconColor: "text-indigo-950",
    link: "https://www.freecodecamp.org/certification/imnotmarkk_/responsive-web-design-v9",
  },
  {
    id: 3,
    title: "Associate Data Analyst",
    issuer: "Datacamp",
    icon: SiDatacamp,
    iconColor: "text-green-500", 
    link: "https://www.datacamp.com/certificate/DAA0017604221232",
  },
];

export default function CertificationCards({ isDark, themeColors }) {
  const [certifications, setCertifications] = useState(initialCertifications);

  const handleCardClick = (id) => {
    setCertifications((current) => {
      const clickedIndex = current.findIndex((item) => item.id === id);
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
    <div className="relative isolate flex items-center justify-center w-full font-geist h-[300px] sm:h-[340px] lg:h-[400px] max-w-5xl mx-auto mt-1 overflow-visible px-4">
      {certifications.map((certification, index) => {
        const position = index === 0 ? "center" : index === 1 ? "left" : "right";
        const isCenter = position === "center";
        const isRight = position === "right";
        const CertificationIcon = certification.icon;

        return (
          <MotionDiv
            key={certification.id}
            initial={false}
            animate={{
              x: position === "center" ? "0%" : position === "left" ? "-60%" : "60%",
              y: isCenter ? 0 : 15,
              scale: isCenter ? 1 : 0.82,
              rotate: position === "left" ? -10 : position === "right" ? 10 : 0,
              opacity: isCenter ? 1 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 85, damping: 20, mass: 0.9 }}
            onClick={() => handleCardClick(certification.id)}
            className={`
              absolute
              top-1/2
              w-[85%] max-w-[280px] sm:w-[260px] md:w-[280px] lg:w-[300px]
              aspect-[4/3]
              rounded-2xl sm:rounded-3xl
              border
              ring-1 ring-offset-4
              ${isDark ? "ring-neutral-800 ring-offset-[#0f0f0f]" : "ring-gray-300 ring-offset-white"}
              p-4 sm:p-5 md:p-6
              flex flex-col items-center justify-center
              text-center
              cursor-pointer
              shadow-2xl
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
            {/* Responsive Icon Box */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 md:mb-5 shadow-sm overflow-hidden">
              {CertificationIcon ? (
                <CertificationIcon 
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${certification.iconColor}`} 
                />
              ) : (
                <span className="text-black font-bold text-xs">CERT</span>
              )}
            </div>

            {/* Responsive Title */}
            <h4 className={`font-bold text-xs sm:text-sm md:text-base leading-tight mb-1 sm:mb-2 ${themeColors.heading}`}>
              {certification.title}
            </h4>

            {/* Responsive Issuer */}
            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3 sm:mb-4 md:mb-5">
              {certification.issuer}
            </p>

            {/* Minimalist Verify Button (Only on Center Card) */}
            {isCenter && (
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevents card from rotating when clicking the link
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2
                  text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-widest uppercase
                  transition-colors duration-300
                  ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"}
                `}
              >
                <span className="text-xs sm:text-sm leading-none opacity-50 font-light">{`{`}</span>
                VERIFY
                <span className="text-xs sm:text-sm leading-none opacity-50 font-light">{`}`}</span>
              </a>
            )}
          </MotionDiv>
        );
      })}
    </div>
  );
}