import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { LuSun, LuMoon } from "react-icons/lu";

const TRANSITION_DURATION = 500;
let circularThemeTransitionActive = false;

function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("darkMode", JSON.stringify(isDark));
}

function createThemeSnapshot(isDark) {
  const root = document.getElementById("root");
  if (!root) return null;

  const snapshot = document.createElement("div");
  snapshot.className = `theme3-theme-snapshot${isDark ? " dark" : ""}`;
  snapshot.setAttribute("aria-hidden", "true");

  const clone = root.cloneNode(true);
  clone.removeAttribute("id");
  clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
  clone.style.position = "absolute";
  clone.style.top = `${-window.scrollY}px`;
  clone.style.left = `${-window.scrollX}px`;
  clone.style.width = "100%";
  clone.style.minHeight = "100vh";

  snapshot.appendChild(clone);
  document.body.appendChild(snapshot);
  return snapshot;
}

export default function ThemeToggle({ circularTransition = false }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const isTransitioning = useRef(false);
  const cleanupRef = useRef(null);

  useEffect(() => {
    if (isTransitioning.current) return;
    applyTheme(darkMode);
  }, [darkMode]);

  useEffect(() => () => {
    cleanupRef.current?.();
    cleanupRef.current = null;
  }, []);

  const startViewTransition = (next) => {
    document.documentElement.classList.add("theme3-theme-transitioning");

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      document.documentElement.classList.remove("theme3-theme-transitioning");
      if (cleanupRef.current === finish) cleanupRef.current = null;
      isTransitioning.current = false;
      circularThemeTransitionActive = false;
    };

    cleanupRef.current = finish;

    const viewTransition = document.startViewTransition(() => {
      flushSync(() => setDarkMode(next));
      applyTheme(next);
    });

    viewTransition.finished.catch(() => {}).finally(finish);
  };

  const startSnapshotTransition = (next, currentDark) => {
    const snapshot = createThemeSnapshot(currentDark);
    document.documentElement.classList.add("theme3-theme-transitioning");

    flushSync(() => setDarkMode(next));
    applyTheme(next);

    let timeoutId;
    let onAnimationEnd;

    const finish = () => {
      window.clearTimeout(timeoutId);
      if (snapshot) {
        snapshot.removeEventListener("animationend", onAnimationEnd);
        snapshot.remove();
      }
      document.documentElement.classList.remove("theme3-theme-transitioning");
      if (cleanupRef.current === finish) cleanupRef.current = null;
      isTransitioning.current = false;
      circularThemeTransitionActive = false;
    };

    cleanupRef.current = finish;

    if (snapshot) {
      onAnimationEnd = (event) => {
        if (event.target === snapshot) finish();
      };
      snapshot.addEventListener("animationend", onAnimationEnd);
    }

    timeoutId = window.setTimeout(finish, TRANSITION_DURATION + 150);
  };

  const toggleTheme = () => {
    if (isTransitioning.current || (circularTransition && circularThemeTransitionActive)) return;

    const currentDark = document.documentElement.classList.contains("dark");
    const next = !currentDark;

    if (!circularTransition) {
      setDarkMode(next);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDarkMode(next);
      applyTheme(next);
      return;
    }

    isTransitioning.current = true;
    circularThemeTransitionActive = true;

    if (typeof document.startViewTransition === "function") {
      try {
        startViewTransition(next);
        return;
      } catch {
        document.documentElement.classList.remove("theme3-theme-transitioning");
      }
    }

    startSnapshotTransition(next, currentDark);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleTheme}
        className="sr-only peer"
      />

      {/* Switch track */}
      <div className="w-16 h-8 bg-white/20 dark:bg-black/5  border border-gray-200 dark:border-neutral-800 rounded-full peer relative">
        {/* Icons inside track - perfectly centered */}
        <LuSun className={`absolute left-2 top-1/2 -translate-y-1/2 text-yellow-500 text-base transition-opacity z-10 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
        <LuMoon className={`absolute right-1.5 top-1/2 -translate-y-1/2 text-blue-950 text-base transition-opacity z-10 ${darkMode ? 'opacity-100' : 'opacity-0'}`} />

        {/* Sliding circle - properly sized and positioned */}
        <div className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-300 ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}></div>
      </div>
    </label>
  );
}
