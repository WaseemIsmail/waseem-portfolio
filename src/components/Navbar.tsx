import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const sections = [
  "home",
  "about",
  "projects",
  "experience",
  "publications",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section: string) =>
    `transition duration-300 ${
      active === section
        ? "text-blue-400"
        : "text-white hover:text-blue-400"
    }`;

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-500">

      {/* GLASS HEADER ALWAYS */}
      <div className="flex justify-center mt-4 transition-all duration-500">
        <div
          className="
            bg-white/10 
            backdrop-blur-xl 
            border border-white/20 
            rounded-full 
            px-6 md:px-12 py-3 md:py-4 
            shadow-lg
            flex items-center gap-6
          "
        >
          {/* Logo */}
          <a href="#home">
            <img
              src={logo}
              alt="Logo"
              className="w-6 h-6 md:w-8 md:h-8 object-contain hover:scale-110 transition"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className={linkClass("home")}>Home</a>
            <a href="#about" className={linkClass("about")}>About</a>
            <a href="#projects" className={linkClass("projects")}>Projects</a>
            <a href="#experience" className={linkClass("experience")}>Experience</a>
            <a href="#publications" className={linkClass("publications")}>Publications</a>
            <a href="#contact" className={linkClass("contact")}>Contact</a>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 mx-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-6 flex flex-col items-center gap-6 text-white text-lg shadow-lg">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setOpen(false)}
              className={active === section ? "text-blue-400" : ""}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
