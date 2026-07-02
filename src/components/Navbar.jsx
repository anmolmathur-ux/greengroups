import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full bg-white-90 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <NavLink to="/" onClick={scrollToTop} className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 cursor-pointer" />
            <span className="text-2xl font-bold text-green-700 cursor-pointer">
              GreensGroup
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
          <NavLink
            to="/"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `pb-1 border-b-4 ${isActive ? "border-green-600 text-green-700" : "border-transparent"} hover:text-green-700`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `pb-1 border-b-4 ${isActive ? "border-green-600 text-green-700" : "border-transparent"} hover:text-green-700`
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/WhyUs"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `pb-1 border-b-4 ${isActive ? "border-green-600 text-green-700" : "border-transparent"} hover:text-green-700`
            }
          >
            WHY US
          </NavLink>

          {/* Commented out for Underwriter Compliance
          <NavLink
            to="/CaseStudies"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `pb-1 border-b-4 ${isActive ? "border-green-600 text-green-700" : "border-transparent"} hover:text-green-700`
            }
          >
            CASE STUDIES
          </NavLink>

          <NavLink
            to="/Blog"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `pb-1 border-b-4 ${isActive ? "border-green-600 text-green-700" : "border-transparent"} hover:text-green-700`
            }
          >
            BLOG
          </NavLink>
          */}

          <NavLink
            to="/contact"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `pb-1 border-b-4 ${isActive ? "border-green-600 text-green-700" : "border-transparent"} hover:text-green-700`
            }
          >
            CONTACT
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-1 w-7 bg-green-700 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-1 w-7 bg-green-700 transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-1 w-7 bg-green-700 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-inner transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-4" : "max-h-0"}`}
      >
        <nav className="flex flex-col items-start gap-4 px-6 text-lg font-semibold">
          <NavLink to="/" onClick={() => { scrollToTop(); setOpen(false); }} className="hover:text-green-700">HOME</NavLink>
          <NavLink to="/about" onClick={() => { scrollToTop(); setOpen(false); }} className="hover:text-green-700">ABOUT</NavLink>
          <NavLink to="/whyus" onClick={() => { scrollToTop(); setOpen(false); }} className="hover:text-green-700">WHY US</NavLink>
          {/* Commented out for Underwriter Compliance
          <NavLink to="/casestudies" onClick={() => { scrollToTop(); setOpen(false); }} className="hover:text-green-700">CASE STUDIES</NavLink>
          <NavLink to="/blog" onClick={() => { scrollToTop(); setOpen(false); }} className="hover:text-green-700">BLOG</NavLink>
          */}
          <NavLink to="/contact" onClick={() => { scrollToTop(); setOpen(false); }} className="hover:text-green-700">CONTACT</NavLink>
        </nav>
      </div>
    </header>
  );
}