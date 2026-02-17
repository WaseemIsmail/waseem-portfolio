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
      // Glass appears only after scroll
      setScrolled(window.scrollY > 60);

      // Detect active section using viewport center
      const viewportMiddle = window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

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

      {/* ===== TOP HEADER (NO GLASS) ===== */}
      {!scrolled && (
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between md:justify-center items-center text-white">

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-widest">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={linkClass(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      )}

      {/* ===== GLASS NAVBAR (ON SCROLL) ===== */}
      {scrolled && (
        <div className="flex justify-center mt-4">
          <div
            className="
              bg-white/10 backdrop-blur-xl border border-white/20
              rounded-full shadow-lg
              px-6 md:px-12 py-3 md:py-4
              flex items-center gap-6
              transition-all duration-500
            "
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-6 h-6 md:w-8 md:h-8 object-contain hover:scale-110 transition"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={linkClass(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <div className="md:hidden text-white">
              <button onClick={() => setOpen(!open)}>
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MOBILE DROPDOWN ===== */}
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
