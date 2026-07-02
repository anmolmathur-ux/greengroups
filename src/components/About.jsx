import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Abstract art images present in the public folder
const slides = ["/3.jpg", "/4.jpg", "/5.jpg"];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically transition slides every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden min-h-screen flex items-center">
      
      {/* Background Slider Implementation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.25, scale: 1 }} // Keeps opacity low so text remains readable
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center filter blur-xl scale-105 pointer-events-none"
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-6 md:px-12 items-center relative z-10">

        {/* Left Side: Visual Frame featuring abstract art / logo overlay */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-green-400/20 rounded-3xl blur-xl"></div>
          <img
            src="/logo.png"
            alt="GreensGroup Visionary Art"
            className="w-full h-[450px] relative z-10 object-cover rounded-2xl shadow-2xl border border-white/25"
          />
        </motion.div>

        {/* Right Side: Corporate History Copy */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="px-0 md:pr-10"
        >
          <span className="text-green-700 font-bold tracking-widest text-sm uppercase block mb-2">
            Corporate Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Our Journey Since 1966
          </h2>

          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            For over 40 years, <span className="font-semibold text-green-700">GreensGroup</span> has built an enduring legacy in foundational business development and corporate scaling solutions. We serve as the core advisory network overseeing multiple Green Groups companies.
          </p>

          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our strategic capabilities extend into premium estate management and sophisticated project development across both commercial and residential properties. By coordinating design-build solutions, we maximize capital security and structural asset value for our partners.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
            <div>
              <h4 className="text-2xl font-bold text-green-700">1966</h4>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Inception & Launch</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-700">40+ Years</h4>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Proven Excellence</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}