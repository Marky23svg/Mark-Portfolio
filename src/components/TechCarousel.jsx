import "../TechCarousel.css";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiTailwindcss, 
  SiBootstrap, 
  SiMysql, 
  SiSpring, 
  SiFigma, 
  SiExpress, 
  SiNodedotjs, 
  SiMongodb 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; 
import { DiPhotoshop } from "react-icons/di"; // Actual Photoshop Icon

const techs = [
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiTailwindcss, 
  SiBootstrap, 
  SiMysql, 
  SiSpring, 
  SiFigma, 
  VscVscode, 
  DiPhotoshop, // Replaced FaCode with the real Photoshop icon
  SiExpress, 
  SiNodedotjs, 
  SiMongodb, 
];

export default function TechCarousel() {
  return (
    // Added bg-transparent
    <div className="carousel h-24 flex items-center bg-transparent">
      <div className="carousel-track gap-12">
        {[...techs, ...techs].map((Icon, i) => (
          <div 
            key={i} 
            // Added bg-transparent to the icon wrapper
            className="h-14 w-14 flex items-center justify-center shrink-0 bg-transparent text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity"
            title="Tech Stack"
          >
            <Icon className="w-10 h-10" />
          </div>
        ))}
      </div>
    </div>
  );
}