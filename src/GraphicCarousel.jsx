import Graphic1 from "./assets/graphic1.png";
import Graphic2 from "./assets/graphic2.png";
import Graphic3 from "./assets/graphic3.png";
import Graphic4 from "./assets/graphic4.png";



const logos = [Graphic1, Graphic2, Graphic3, Graphic4];

export default function GraphicCarousel() {
  return (
    <div className="carousel h-full flex items-center">
      <div className="carousel-track gap-12">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            className="h-[200px] w-auto object-contain rounded-lg shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
