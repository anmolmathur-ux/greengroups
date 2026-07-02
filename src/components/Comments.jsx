import React from "react";

export default function Comments() {
  const corporateClients = [
    {
      client: "City of Palm Desert",
      jurisdiction: "California, USA",
      scope: "Municipal Infrastructure Consultation & Commercial Project Planning"
    },
    {
      client: "City of Rancho Mirage",
      jurisdiction: "California, USA",
      scope: "Institutional Design-Build Development Advisory & Structural Overviews"
    },
    {
      client: "City of Desert Hot Springs",
      jurisdiction: "California, USA",
      scope: "Zoning Strategy Coordination & Residential Expansion Frameworks"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative z-10" id="references">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-green-700 font-bold tracking-widest text-sm uppercase block mb-2">
            Proven Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Validated Municipal References
          </h2>
          <p className="text-gray-600 mt-3">
            Long-term client relationships established across municipal offices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corporateClients.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.client}</h3>
                <p className="text-xs text-green-700 font-semibold tracking-wider uppercase mb-4">{item.jurisdiction}</p>
                <div className="h-px bg-gray-200 w-12 mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}