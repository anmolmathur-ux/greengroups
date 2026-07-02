import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Referencing abstract art images present in the public folder verbatim
const slides = ["/1.png", "/2.png", "/3.png", "/4.png"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden bg-white-10">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Corporate Visual Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-slate-900/60 z-10"></div>
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-10"></div>

      {/* Main Corporate Typography */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-2xl"
        >
          Design build project development <br />
          <span className="text-green-400">commercial, residential...</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl mt-6 text-gray-200 leading-relaxed max-w-3xl mx-auto drop-shadow-md"
        >
          Business development and estate management- services. Group Group companies.
        </motion.p>

        {/* Buttons - 'Learn More' Button Explicitly Removed */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-xl bg-green-700 hover:bg-green-600 transition shadow-2xl font-bold text-white tracking-wider text-lg"
          >
            Connect With Our Advisors
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}