import React from "react";
import logo from "/logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LOGO + GENERAL COMPLIANCE DESCRIPTION */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} className="w-12 h-12 object-contain" alt="logo" />
            <h2 className="text-2xl font-bold tracking-tight">GreensGroup</h2>
          </div>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm">
            Institutional project development, asset coordination, and corporate group consulting operations established in 1966.
          </p>
        </div>

        {/* QUICK COMPLIANT LINKS */}
        <div>
          <h3 className="text-sm font-semibold text-green-400 mb-4 tracking-wider uppercase">Corporate Directories</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><NavLink to="/" onClick={scrollToTop} className="hover:text-white transition">Home</NavLink></li>
            <li><NavLink to="/whyus" onClick={scrollToTop} className="hover:text-white transition">Why Us</NavLink></li>
            <li><NavLink to="/about" onClick={scrollToTop} className="hover:text-white transition">About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={scrollToTop} className="hover:text-white transition">Contact</NavLink></li>
          </ul>
        </div>

        {/* CORPORATE SERVICE VERTICALS */}
        <div>
          <h3 className="text-sm font-semibold text-green-400 mb-4 tracking-wider uppercase">Operating Verticals</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Business Development Operations</li>
            <li>Design-Build Project Scoping</li>
            <li>Commercial Real Estate Logistics</li>
            <li>Estate Management Advisory</li>
          </ul>
        </div>

      </div>

      {/* COMPLIANCE LEGAL MATRICES */}
      <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-gray-500 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} GreensGroup. All Financial and Corporate Rights Reserved.[cite: 2]
        </div>
        <div className="flex gap-6 tracking-wide">
          <span className="hover:underline cursor-pointer">Underwriting Verification Portal</span>
          <span className="hover:underline cursor-pointer">Terms of Operation</span>
          <span className="hover:underline cursor-pointer">Privacy Framework</span>
        </div>
      </div>
    </footer>
  );
}