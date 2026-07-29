import { useState, useEffect } from "react";

function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setHideOverlay(true);
      }, 600);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {children}
      
      {!hideOverlay && (
        <div 
          className="fixed inset-0 z-50 pointer-events-none bg-black dark:bg-white"
          style={{
            transition: 'clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            clipPath: isVisible 
              ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' 
              : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        />
      )}
    </div>
  );
}

export default PageTransition;