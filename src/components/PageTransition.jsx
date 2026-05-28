import { useState, useEffect } from "react";

function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Keep overlay longer to ensure it reaches bottom
      setTimeout(() => {
        setHideOverlay(true);
      }, 800);
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {children}
      
      {!hideOverlay && (
        <div 
          className={`fixed z-50 pointer-events-none transition-transform duration-800 ease-in-out ${
            isVisible ? 'translate-x-full' : 'translate-x-0'
          } ${isDarkMode ? 'bg-white' : 'bg-black'}`}
          style={{
            transform: 'skewX(-45deg) scale(1.5)',
            transformOrigin: 'left center',
            width: isMobile ? '500%' : '250%',
            left: isMobile ? '-80%' : '-30%',
            top: isMobile ? '-600%' : '-200%',
            bottom: isMobile ? '-600%' : '-200%',
            height: isMobile ? '1300%' : '500%'
          }}
        />
      )}
    </div>
  );
}

export default PageTransition;