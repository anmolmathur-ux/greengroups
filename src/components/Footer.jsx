import React from "react";
import logo from "/logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass = "hover:text-white transition-colors duration-200 block py-0.5 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-200";

  return (
    <footer className="bg-slate-950 text-slate-200 py-16 border-t border-slate-900 relative z-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

        {/* LOGO + BRAND DESCRIPTION */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
            <img src={logo} className="w-10 h-10 object-contain filter drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]" alt="logo" />
            <h2 className="text-xl font-bold text-green-400 transition-colors duration-200">
              GreenGroups
            </h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Commercial and residential property development.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="md:col-span-3 md:col-start-7">
          <h3 className="text-xs font-semibold text-green-400 mb-5 tracking-widest uppercase">
            Corporate Directories
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><NavLink to="/" onClick={scrollToTop} className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/whyus" onClick={scrollToTop} className={linkClass}>Why Us</NavLink></li>
            <li><NavLink to="/about" onClick={scrollToTop} className={linkClass}>About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={scrollToTop} className={linkClass}>Contact</NavLink></li>
          </ul>
        </div>

        {/* SERVICE VERTICALS */}
        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold text-green-400 mb-5 tracking-widest uppercase">
            Operating Verticals
          </h3>
          <ul className="space-y-3 text-sm text-slate-400 border-l border-slate-800 pl-4 md:pl-0 md:border-l-0">
            <li className="hover:text-slate-200 transition-colors cursor-default">Business Development Operations</li>
            <li className="hover:text-slate-200 transition-colors cursor-default">Design-Build Project Scoping</li>
            <li className="hover:text-slate-200 transition-colors cursor-default">Commercial Real Estate Logistics</li>
            <li className="hover:text-slate-200 transition-colors cursor-default">Estate Management Advisory</li>
          </ul>
        </div>

      </div>

      {/* LEGAL & COMPLIANCE MATRICES */}
      <div className="mt-16 border-t border-slate-900 pt-8 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} Group Group Companies. All Rights Reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 tracking-wide text-slate-400">
          <span className="hover:text-white cursor-pointer transition-colors">Underwriting Verification Portal</span>
          <NavLink to="/terms" onClick={scrollToTop} className="hover:text-white transition-colors">Terms of Operation</NavLink>
          <NavLink to="/privacy" onClick={scrollToTop} className="hover:text-white transition-colors">Privacy Framework</NavLink>
        </div>
      </div>
    </footer>
  );
}