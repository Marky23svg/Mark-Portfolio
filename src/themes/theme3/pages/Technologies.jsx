import { Link, useOutletContext } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiBootstrap,
    SiSpring,
    SiMysql,
    SiMongodb,
    SiFigma,
    SiExpress,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiOpencode,
    SiClaude,
    SiDeepseek,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiPhotoshop } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";

function AntigravityIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            fillRule="evenodd"
            className={className}
            aria-hidden="true"
        >
            <path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" />
        </svg>
    );
}

function ChatGptIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
    );
}

const techStack = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "MySQL", icon: SiMysql },
    { name: "Spring Boot", icon: SiSpring },
    { name: "Figma", icon: SiFigma },
    { name: "VSCode", icon: VscVscode },
    { name: "Photoshop", icon: DiPhotoshop },
    { name: "Express", icon: SiExpress },
    { name: "Node", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "OpenCode", icon: SiOpencode },
    { name: "Antigravity", icon: AntigravityIcon },
    { name: "Claude", icon: SiClaude },
    { name: "DeepSeek", icon: SiDeepseek },
    { name: "ChatGPT", icon: ChatGptIcon },
];

export default function Technologies() {
    const { isDark, themeColors } = useOutletContext();

    return (
        <section id="technologies" className="mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
                <h3 className="text-2xl font-pixel  tracking-widest text-neutral-100">
                    technologies
                </h3>

                <Link
                    to="/theme3"
                    className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-blue-400 transition-colors"
                >
                    <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    BACK TO HOME
                </Link>
            </div>

            <div className={`font-geist border-t ${themeColors.border} pt-6`}>
                <div className="flex flex-wrap gap-2.5">
                    {techStack.map((tech) => {
                        const Icon = tech.icon;

                        return (
                            <span
                                key={tech.name}
                                className={`inline-flex items-center gap-2 px-3 py-2 border text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 ${isDark
                                        ? "bg-[#111] border-neutral-800 text-neutral-300 hover:bg-neutral-800"
                                        : "bg-gray-50 border-gray-200 text-neutral-700 hover:bg-gray-100"
                                    }`}
                            >
                                {Icon && <Icon className="w-4 h-4 opacity-70" />}
                                {tech.name}
                            </span>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
