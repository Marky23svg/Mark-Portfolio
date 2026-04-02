import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
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
      <div className="w-16 h-8 bg-gray-300 dark:bg-gray-300 rounded-full peer relative">
        {/* Icons inside track - perfectly centered */}
        <FaSun className={`absolute left-2 top-1/2 -translate-y-1/2 text-yellow-500 text-base transition-opacity z-10 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
        <FaMoon className={`absolute right-2 top-1/2 -translate-y-1/2 text-blue-950 text-base transition-opacity z-10 ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Sliding circle - properly sized and positioned */}
        <div className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-300 ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}></div>
      </div>
    </label>
  );
}