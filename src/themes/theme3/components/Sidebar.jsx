
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
              `flex items-center gap-3 text-base transition-colors duration-200 ${isActive
                ? "text-neutral-900 dark:text-neutral-100 font-semibold"
                : "text-neutral-500 dark:text-neutral-500 hover:text-blue-400"
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
          {[
            "https://kureansiklopedi.com/_next/image?url=https%3A%2F%2Fcdn.t3pedia.org%2Fmedia%2Fuploads%2F2025%2F05%2F19%2FSNbTxDRvemaXm7uzldFol7DRXjKbqeE4.jpg&w=1280&q=75",
            "https://assets.fiba.basketball/image/upload/w_2800/c_pad,ar_12:10/c_pad,ar_10:12/ar_10:12,c_crop,g_face,z_0.25/e_trim/c_lpad,ar_1:1/w_2800/w_2200,h_2000,c_crop,x_300/w_300,c_fill/q_auto/f_auto/.headshot--person_235828--competition_208942?buster=20774",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9H39LxgRKoyIlbb6vo0dgcvUtcWOn8sI--_QxBqnxK-miFCEQMCrnUjI&s=10",
          ].map((avatar, index) => (
            <div
              key={index}
              className="w-7 h-7 rounded-full border-2 border-gray-50 dark:border-[#0a0a0a] bg-cover bg-center bg-white"
              style={{ backgroundImage: `url(${avatar})` }}
            />
          ))}
        </div>

        <span className="text-xs font-medium mt-1">
          3 people viewing now
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
          <span className="text-xs">in/mark-justin-canuel</span>
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
