import React from "react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const corporateValuePillars = [
    {
      title: "Regulatory Precision",
      description: "Our corporate structures are aligned directly with commercial underwriting criteria, guaranteeing transparent reporting and asset verification paths."
    },
    {
      title: "Historical Viability",
      description: "Operating continuously across multiple decades gives our consulting network unparalleled institutional insight and risk mitigation capacity."
    },
    {
      title: "Validated Execution",
      description: "From municipal partnerships to private design-build developments, our project history proves our capacity to execute on massive infrastructure targets."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 text-white py-24">
      {/* Blurred background image pattern using abstract art asset */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-3xl scale-110 opacity-20 pointer-events-none"
        style={{ backgroundImage: `url('/4.jpg')` }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-400 font-bold tracking-widest text-sm uppercase block mb-2">
            The GreensGroup Advantage
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Why Underwriters & Enterprise Partners Trust Us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {corporateValuePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-bold text-green-400 mb-3">{pillar.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Advisory Leadership Contact Callout */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-green-900/40 to-slate-800/40 border border-green-500/20 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            {/* Aditi Sharma changed to English name corporate alias verbatim */}
            <h4 className="text-lg font-bold text-white">Jonathan Vance</h4>
            <p className="text-xs font-semibold text-green-400 tracking-wider uppercase">Senior Managing Consultant</p>
            <p className="text-sm text-gray-400 mt-2 max-w-md">
              "Our operational procedures conform completely to institutional standards, providing complete confidence for underwriting and credit alignment panels."
            </p>
          </div>
          <button className="px-6 py-3 bg-green-700 hover:bg-green-600 rounded-xl font-bold text-white whitespace-nowrap transition shadow-lg">
            Request Certification Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}