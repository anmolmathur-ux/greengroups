import React from "react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms and Conditions</h1>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-green-700 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the website of Group Group companies, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-green-700 mb-4">2. Services Provided</h2>
              <p className="text-gray-700 leading-relaxed">
                Group Group companies provides business development and estate management services, as well as design build project development for commercial and residential properties.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-green-700 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, logos, and materials provided on this site are the property of Group Group companies. Unauthorized use of any materials may violate copyright, trademark, and other laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-green-700 mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Group Group companies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
