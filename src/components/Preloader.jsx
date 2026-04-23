import { useEffect, useState } from "react";

function Preloader({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Read theme from localStorage using the same key as your toggle button
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    const isDarkMode = savedTheme ? JSON.parse(savedTheme) : false;
    
    // Apply theme to html element for the preloader
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;
    const duration = 1200;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(newProgress));

      if (newProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 300);
        }, 500);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className={`fixed inset-0 bg-gray-50 dark:bg-black z-50 flex flex-col justify-center items-center transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center w-72 max-w-[85%]">
          {/* Percentage Display */}
          <div className="mb-3">
            <span className="text-4xl font-light text-gray-900 dark:text-white transition-all duration-75">
              {progress}
            </span>
            <span className="text-xl text-gray-400 dark:text-gray-500">%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 dark:bg-blue-600 rounded-full transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-4 text-sm text-gray-400 dark:text-gray-500 font-light">
            Loading portfolio
          </p>
        </div>
      </div>
    );
  }

  return children;
}

export default Preloader;