import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigateTimerRef = useRef(null);

  useEffect(() => {
    const checkTheme = () => setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => clearTimeout(navigateTimerRef.current), []);

  const navigateTo = (path) => {
    clearTimeout(navigateTimerRef.current);
    setIsExiting(true);
    navigateTimerRef.current = setTimeout(() => {
      setIsExiting(false);
      navigate(path);
    }, 600);
  };

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      <div
        className={`fixed inset-0 z-[100] pointer-events-none ${isDarkMode ? "bg-white" : "bg-black"}`}
        style={{
          transition: "clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          clipPath: isExiting
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        }}
      />
    </TransitionContext.Provider>
  );
}

export const useTransition = () => useContext(TransitionContext);
