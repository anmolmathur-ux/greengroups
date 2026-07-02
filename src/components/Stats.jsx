import React from "react";

export default function Stats() {
  const corporateMetrics = [
    { label: "Decades of Market Presence", value: "40+" },
    { label: "Municipal Framework Agreements", value: "Validated" },
    { label: "Operating Matrix Structure", value: "Group Entity" },
    { label: "Real Estate Segments Managed", value: "Commercial & Residential" }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {corporateMetrics.map((metric, idx) => (
          <div key={idx} className="p-4">
            <div className="text-2xl md:text-3xl font-extrabold text-green-400 mb-2">
              {metric.value}
            </div>
            <div className="text-xs md:text-sm text-gray-400 font-medium tracking-wider uppercase">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}