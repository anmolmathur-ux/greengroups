import React from "react";
import { motion } from "framer-motion";
import solutionImg from "../assets/golfcar.jpg";
import installationImg from "../assets/installation.jpg";
import supportImg from "../assets/support.png";

export default function Services() {
  const services = [
    {
      title: "BUSINESS DEVELOPMENT",
      image: solutionImg,
      description:
        "Comprehensive growth architecture, organizational structuring, and strategic capital positioning tailored specifically for the Green Groups network of partner companies.",
    },
    {
      title: "PROJECT DEVELOPMENT",
      image: installationImg,
      description:
        "Full-cycle design-build management solutions covering premium real estate assets across both residential and commercial property profiles.",
    },
    {
      title: "ESTATE MANAGEMENT",
      image: supportImg,
      description:
        "Dedicated corporate advisory, ongoing operational overwatch, property asset preservation, and high-level strategy coordination for private and institutional estates.",
    },
  ];

  return (
    <section className="py-24 bg-white relative z-10" id="services">
      <div className="text-center max-w-3xl mx-auto px-6">
        <span className="text-green-700 font-bold tracking-widest text-sm uppercase block mb-2">
          Vertical Operations
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Our Services & Capabilities
        </h2>
        <p className="text-gray-600 mt-4 mb-16 text-lg">
          Institutional solutions for enterprise growth and real estate development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="w-full h-52 overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}