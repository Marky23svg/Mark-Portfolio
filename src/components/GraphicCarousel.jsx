import "../TechCarousel.css";
import Graphic1 from "../assets/graphic1.webp";
import Graphic2 from "../assets/graphic2.webp";
import Graphic3 from "../assets/graphic3.webp";
import Graphic4 from "../assets/graphic4.webp";
import Graphic5 from "../assets/graphic5.webp";
import Graphic6 from "../assets/graphic6.webp";
import Graphic7 from "../assets/graphic7.webp";
import Graphic8 from "../assets/graphic8.webp";
import Graphic9 from "../assets/graphic9.webp";
import Graphic10 from "../assets/graphic10.webp";

const graphics = [Graphic1, Graphic2, Graphic3, Graphic4, Graphic5, Graphic6, Graphic7, Graphic8, Graphic9, Graphic10];

export default function GraphicCarousel({ onImageClick }) {
  return (
    <div className="carousel h-48 flex items-center">
      <div className="carousel-track gap-6">
        {[...graphics, ...graphics].map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="h-40 w-40 object-cover rounded-2xl shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-neutral-700"
            onClick={() => onImageClick(img)}
          />
        ))}
      </div>
    </div>
  );
}
