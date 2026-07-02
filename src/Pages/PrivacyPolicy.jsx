import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-green-700 mb-4">1. Information Collection</h2>
              <p className="text-gray-700 leading-relaxed">
                We may collect personal information such as your name, email address, and contact details when you use our website or interact with our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-green-700 mb-4">2. Use of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                The information collected is used to improve our services, respond to inquiries, and ensure underwriter compliance for business credit and estate management operations.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-green-700 mb-4">3. Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. However, no electronic transmission or storage is 100% secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-green-700 mb-4">4. Sharing of Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information, except for trusted third parties who assist us in operating our website, conducting our business, or servicing you.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
