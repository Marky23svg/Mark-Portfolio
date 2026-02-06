import Html from "./assets/html.png";
import Css from "./assets/css.png";
import Js from "./assets/js.png";
import ReactLogo from "./assets/reactlogo.png";
import Tailwind from "./assets/tailwind.png";
import Bootstrap from "./assets/bootstrap.png";
import Mysql from "./assets/mysql.png";
import Spring from "./assets/spring.png";
import Figma from "./assets/figma.png";
import Vscode from "./assets/vscode.png";
import Ps from "./assets/ps.png";


const logos = [Html, Css, Js, ReactLogo, Tailwind, Bootstrap, Mysql, Spring, Figma, Vscode, Ps];

export default function TechCarousel() {
  return (
    <div className="carousel h-24 flex items-center">
      <div className="carousel-track gap-12">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            className="h-14 w-14 object-contain rounded-lg shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
