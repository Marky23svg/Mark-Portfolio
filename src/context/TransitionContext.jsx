import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navigateTo = (path) => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      navigate(path);
    }, 600);
  };

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      <div
        className={`fixed z-[100] pointer-events-none ${isDarkMode ? "bg-white" : "bg-black"}`}
        style={{
          transformOrigin: "left center",
          width: isMobile ? "500%" : "250%",
          left: isMobile ? "-80%" : "-30%",
          top: isMobile ? "-600%" : "-200%",
          bottom: isMobile ? "-600%" : "-200%",
          height: isMobile ? "1300%" : "500%",
          transform: isExiting
            ? "skewX(-45deg) scale(1.5) translateX(0)"
            : "skewX(-45deg) scale(1.5) translateX(-100%)",
          transition: "transform 0.6s ease-in-out",
        }}
      />
    </TransitionContext.Provider>
  );
}

export const useTransition = () => useContext(TransitionContext);
