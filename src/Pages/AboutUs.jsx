import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Abstract art images present in the public folder verbatim
const slides = ["/3.png", "/4.png", "/2.png", "/5.png"];

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically transition background slides every 5 seconds (Matching Hero component logic)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    /* Changed bg utility to transparent so the background slider animation remains completely visible */
    <div className="relative overflow-hidden bg-transparent min-h-screen">

      {/* FULL-HEIGHT HERO-STYLE BACKGROUND SLIDER IMPLEMENTATION */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.45, scale: 1 }} // Low opacity ensures text layers retain excellent readability
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          />
        </AnimatePresence>
      </div>

      {/* UNDERWRITER READABILITY DARK MASK & BLUR OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-slate-900/70 z-10"></div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10"></div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-24 text-white">

        {/* HEADER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-green-400 font-bold tracking-widest text-sm uppercase block mb-3">
            Corporate Profile
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
            About GreensGroup
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto mt-6 text-xl leading-relaxed font-medium drop-shadow-md">
            GreensGroup coordinates foundational business development, enterprise portfolio strategies, and bespoke design-build estate management across premier asset classes.
          </p>
        </motion.div>

        {/* ABOUT IMAGE & TEXT OVERHAUL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Side: Using abstract art image with yellow green color in the bg verbatim */}
          <motion.img
            src="/logo.png"
            alt="GreensGroup Asset Strategy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl shadow-2xl h-[450px] w-full object-cover border border-white/20"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-bold text-white tracking-tight drop-shadow">
              What <span className="text-6xl text-green-400"> We Do</span>
            </h2>
            <p className="mt-6 text-gray-200 leading-relaxed text-lg font-medium">
              GreensGroup operates as a centralized consulting entity directing high-level strategy for our collective group companies. We unify capital growth frameworks with structural project positioning.
            </p>
            <p className="mt-4 text-gray-200 leading-relaxed text-lg font-medium">
              By pairing experienced management advisors with professional design-build coordinators, we maintain comprehensive overwatch across complex commercial and luxury residential properties.
            </p>
          </motion.div>

        </div>

        {/* CORE OPERATIONAL STRATEGIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-28">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white/10 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-green-400">Business Development Objective</h3>
            <p className="mt-4 text-gray-300 leading-relaxed font-medium">
              To construct risk-mitigated corporate foundations for group companies, validating entity creditworthiness, optimizing market positioning, and enabling sustainable asset scaling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white/10 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-green-400">Project Strategy Execution</h3>
            <p className="mt-4 text-gray-300 leading-relaxed font-medium">
              To coordinate design-build project development vectors that bridge technical architectural guidelines with premium land asset preservation for private and municipal operations.
            </p>
          </motion.div>

        </div>

        {/* UPDATED HISTORY JOURNEY FLOW (SINCE 1966 OVER 40 YEARS) */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-white text-center mb-4 tracking-tight drop-shadow">
            Our Journey & Milestones
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-xl mx-auto font-medium">
            A chronological breakdown of entity longevity and multi-decade project development.
          </p>

          <div className="space-y-6">
            {[
              { year: "1966", text: "Inception of foundational operations and private property strategy advisory." },
              { year: "1986", text: "Expanded target verticals to incorporate multi-tier commercial and residential design-build programs." },
              { year: "2006", text: "Passed historical benchmark of over 40 years of continuous active operational presence." },
              { year: "2026", text: "Solidified formal group entity configuration to coordinate integrated compliance consulting and estate logistics." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 bg-white/5 rounded-2xl p-6 shadow-md border border-white/10 backdrop-blur-sm"
              >
                <span className="text-3xl font-black text-green-400 w-24 shrink-0">
                  {item.year}
                </span>
                <p className="text-gray-200 text-base font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COMPLIANCE REAL CUSTOMER & ADDRESS REFERENCES */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-white text-center mb-4 tracking-tight drop-shadow">
            Municipal References & Registered Deployments
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-xl mx-auto font-medium">
            Direct validation of historic public consulting engagements and physical project locations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "City of Palm Desert",
                location: "73510 Fred Waring Dr, Palm Desert, CA 92260",
                desc: "Strategic urban planning layouts and structural commercial design-build advisory."
              },
              {
                title: "City of Rancho Mirage",
                location: "69825 Highway 111, Rancho Mirage, CA 92270",
                desc: "Premium residential spatial integration blueprints and multi-tier zoning consultations."
              },
              {
                title: "City of Desert Hot Springs",
                location: "11999 Palm Dr, Desert Hot Springs, CA 92240",
                desc: "Municipal asset management analysis and industrial infrastructure advisory workflows."
              }
            ].map((ref, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{ref.title}</h3>
                  <p className="text-xs text-green-400 font-bold tracking-wider uppercase mb-4">{ref.location}</p>
                  <div className="h-px bg-white/20 w-12 mb-4"></div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {ref.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NON-TRADITIONAL ACHIEVEMENT NUMBERS */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "40+ Years", label: "Corporate Continuity" },
            { value: "Group Companies", label: "Operational Matrix Configuration" },
            { value: "Commercial & Residential", label: "Design-Build Market Segments" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/50 text-white p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-black text-green-400">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-400 font-bold uppercase text-xs tracking-widest">{item.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}