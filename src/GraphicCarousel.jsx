import Graphic1 from "./assets/graphic1.png";
import Graphic2 from "./assets/graphic2.png";
import Graphic3 from "./assets/graphic3.png";
import Graphic4 from "./assets/graphic4.png";
import Graphic5 from "./assets/graphic5.png";
import Graphic6 from "./assets/graphic6.png";
import Graphic7 from "./assets/graphic7.png";



const logos = [Graphic1, Graphic2, Graphic3, Graphic4, Graphic5, Graphic6, Graphic7];

export default function GraphicCarousel() {
  return (
    <div className="carousel">
      <div className="carousel-track gap-12">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            className="h-[200px] w-auto object-contain  shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
