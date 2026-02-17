import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-500">

      {/* NORMAL HEADER */}
      {!scrolled && (
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-center items-center text-white">

          <nav className="flex gap-10 text-sm font-medium uppercase tracking-widest">
            <a href="#" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#publications" className="nav-link">Publications</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

        </div>
      )}

      {/* GLASS PILL HEADER (ON SCROLL) */}
      {scrolled && (
        <div className="flex justify-center mt-4 transition-all duration-500">
          <div className="
            bg-white/10 
            backdrop-blur-xl 
            border border-white/20 
            rounded-full 
            px-12 py-4 
            shadow-lg
          ">
            
            <nav className="flex gap-8 text-sm font-medium uppercase tracking-widest text-white">
               <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
              <a href="#" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#publications" className="nav-link">Publications</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      )}

    </div>
  );
}
