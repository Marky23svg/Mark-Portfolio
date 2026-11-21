
import { NavLink } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

import ThemeSwitcher from "../../../components/ThemeSwitcher.jsx";
import ThemeToggle from "../../../components/ThemeToggle.jsx";

export default function Sidebar({ navItems = [] }) {
  const navClass = 
    "flex items-center gap-3 text-sm transition-colors hover:text-blue-400";

  return (
    <aside
      data-lenis-prevent=""
      className={`
        theme3-background
        font-jetbrains
        hidden md:flex
        flex-col shrink-0
        w-56 lg:w-64
        h-full min-h-0
        border-r border-gray-200 dark:border-neutral-800
        px-5 lg:px-6 py-8
        overflow-y-auto overflow-x-hidden
        overscroll-y-contain
        bg-gray-50 dark:bg-[#0a0a0a] text-neutral-800 dark:text-neutral-300
      `}
    >
      {/* NAME */}
      <h1 className="text-lg font-pixel tracking-tight mb-8 shrink-0 text-black dark:text-white">
        Mark Justin Canuel
      </h1>

      <hr className="mb-8 border-gray-200 dark:border-neutral-800" />

      {/* SECTION NAVIGATION */}
      <nav className="flex flex-col gap-2 mb-8 shrink-0">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 text-base transition-colors duration-200 ${
                isActive
                  ? "text-neutral-900 dark:text-neutral-100 font-semibold"
                  : "text-neutral-400 dark:text-neutral-500 hover:text-blue-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <FiArrowRight className="w-4 h-4 shrink-0" />
                )}

                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <hr className="mb-8 border-gray-200 dark:border-neutral-800" />

      {/* VISITORS */}
      <div className="flex flex-col gap-2 mb-8 shrink-0">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-700 border-2 border-gray-50 dark:border-[#0a0a0a]" />
          <div className="w-6 h-6 rounded-full bg-neutral-400 dark:bg-neutral-600 border-2 border-gray-50 dark:border-[#0a0a0a]" />
          <div className="w-6 h-6 rounded-full bg-neutral-500 border-2 border-gray-50 dark:border-[#0a0a0a]" />
        </div>

        <span className="text-xs font-medium mt-1">
          2 people viewing now
        </span>
      </div>

      <hr className="mb-8 border-gray-200 dark:border-neutral-800" />

      {/* GLOBAL THEME TOGGLE */}
      <div className="mb-5 shrink-0">
        <ThemeToggle circularTransition />
      </div>

      {/* THEME SWITCHER */}
      <div className="mb-8 shrink-0">
        <ThemeSwitcher />
      </div>

      <hr className="mb-8 border-gray-200 dark:border-neutral-800" />

      {/* CONTACT */}
      <div className="flex flex-col gap-3 shrink-0 pb-4">
        <p className="text-xs leading-relaxed mb-2">
          For work, collabs & everything else, reach me at
        </p>

        <a href="mailto:markjustincanuel2@gmail.com" className={navClass}>
          <FiMail className="w-4 h-4 shrink-0" />
          <span className="text-xs break-all">
            markjustincanuel2@gmail.com
          </span>
        </a>

        <a
          href="https://github.com/Marky23svg"
          target="_blank"
          rel="noopener noreferrer"
          className={navClass}
        >
          <FiGithub className="w-4 h-4" />
          <span className="text-xs">@Marky23svg</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mark-justin-canuel/"
          target="_blank"
          rel="noopener noreferrer"
          className={navClass}
        >
          <FiLinkedin className="w-4 h-4" />
          <span className="text-xs">in/markjustincanuel</span>
        </a>

        <a
          href="https://www.instagram.com/imnotmarkkk_/"
          target="_blank"
          rel="noopener noreferrer"
          className={navClass}
        >
          <FiInstagram className="w-4 h-4" />
          <span className="text-xs">@imnotmarkkk_</span>
        </a>
      </div>
    </aside>
  );
}
