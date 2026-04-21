import { useState, useEffect } from "react";
import Graphic1 from "../assets/graphic1.webp";
import Graphic2 from "../assets/graphic2.webp";
import Graphic3 from "../assets/graphic3.webp";
import Graphic4 from "../assets/graphic4.webp";
import Graphic5 from "../assets/graphic5.webp";
import Graphic6 from "../assets/graphic6.webp";
import Graphic7 from "../assets/graphic7.webp";
import Graphic8 from "../assets/graphic8.webp";

const logos = [Graphic1, Graphic2, Graphic3, Graphic4, Graphic5, Graphic6, Graphic7, Graphic8];

export default function GraphicCarousel() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Wait 500ms to ensure images are rendered
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="carousel">
      <div 
        className="carousel-track gap-12"
        style={{ 
          animation: loaded ? 'scroll 20s linear infinite' : 'none'
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={logo}
              alt=""
              className="h-[200px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}