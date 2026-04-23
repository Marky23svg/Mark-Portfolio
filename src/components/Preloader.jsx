import { useEffect, useState } from "react";

function Preloader({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    const isDarkMode = savedTheme ? JSON.parse(savedTheme) : false;
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    // Simple setTimeout for progress updates
    const duration = 900;
    const interval = 30; // Update every 30ms
    const steps = duration / interval;
    let currentProgress = 0;
    const increment = 100 / steps;
    
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 300);
        }, 500);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className={`fixed inset-0 bg-gray-50 dark:bg-black z-50 flex flex-col justify-center items-center transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center w-72 max-w-[85%]">
          <div className="mb-3">
            <span className="text-4xl font-light text-gray-900 dark:text-white">
              {progress}
            </span>
            <span className="text-xl text-gray-400 dark:text-gray-500">%</span>
          </div>

          {/* Progress Bar - CSS transition handles the smoothness */}
          <div className="h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 dark:bg-blue-600 rounded-full transition-[width] duration-200 ease-out"
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