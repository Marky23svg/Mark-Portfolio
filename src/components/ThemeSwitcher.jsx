import { useState, useRef, useEffect } from "react";
import { PiUserSwitchFill, PiMoonFill, PiSunFill, PiSquaresFour } from "react-icons/pi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTransition } from "../context/TransitionContext.jsx";

const themeOptions = [
  { id: "cinematic",  label: "CINEMATIC",  icon: <PiMoonFill />,    path: "/"   },
  { id: "minimalist", label: "MINIMALIST", icon: <PiSunFill />,     path: "/v2" },
  { id: "bento",      label: "BENTO",      icon: <PiSquaresFour />, path: "/v3" },
];

export default function ThemeSwitcher({ buttonClassName }) {
  const { navigateTo } = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={
          buttonClassName ??
          "bg-white/20 dark:bg-black/5 dark:hover:bg-white dark:hover:text-black  h-8 w-25 text-black dark:text-white cursor-pointer border border-gray-200 dark:border-neutral-800 hover:bg-black hover:text-white transition-colors flex items-center justify-center"
        }
      >
        <WiMoonAltThirdQuarter className="w-6 h-6 mr-1" />
        <span className="text-xs font-medium mr-1">THEME</span>
        <IoMdArrowDropdown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[220px] bg-[#1a1a1a] border border-neutral-800 rounded-md shadow-2xl overflow-hidden z-50 py-2">
          {themeOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => { setOpen(false); navigateTo(opt.path); }}
              className="w-full flex items-center gap-4 px-5 py-3 text-sm font-bold tracking-widest text-gray-300 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              <span className="text-xl text-gray-400">{opt.icon}</span>
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}