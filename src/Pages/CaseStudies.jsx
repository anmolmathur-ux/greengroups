import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/photo.jpg";
import img1 from "../assets/photo8.jpg";
import img2 from "../assets/photo2.jpg";
import img3 from "../assets/photo6.jpg";

export default function CaseStudy() {
    const images = [img1, img2, img3];

    return (
        <div className="relative overflow-hidden bg-gray-50">

            {/* BACKGROUND GREEN CIRCLES */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-100 -right-50 w-[350px] h-[350px] bg-green-600 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute bottom-0 left-1/2 w-[250px] h-[250px] bg-green-400 rounded-full blur-2xl opacity-40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24">

                {/* ---------------- HERO SECTION ---------------- */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center pt-28 mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-green-800">
                        Case Studies
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto mt-6 text-lg">
                        See how GreenGroups delivers premium outdoor transformations through
                        creativity, technical precision, and eco-friendly solutions.
                    </p>
                </motion.div>

                {/* ---------------- FEATURED CASE STUDY ---------------- */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
                    <motion.img
                        src={hero}
                        className="rounded-3xl shadow-xl object-cover"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl font-bold text-green-800">
                            Luxury Villa Garden Transformation
                        </h2>

                        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                            This villa backyard was redesigned into a multi-functional outdoor
                            living space featuring a lounge zone, layered landscaping, pathway
                            lighting, and climate-resistant turf.
                        </p>

                        <div className="mt-8 space-y-4">
                            <p><span className="font-semibold text-green-700">Location:</span> Green Valley, Sector 12</p>
                            <p><span className="font-semibold text-green-700">Timeline:</span> 45 Days</p>
                            <p><span className="font-semibold text-green-700">Scope:</span> Landscape Design, Turf, Lighting, Plantation</p>
                        </div>
                    </motion.div>
                </section>

                {/* ---------------- PROJECT BREAKDOWN ---------------- */}
                <div className="mt-20">
                    <h2 className="text-4xl font-bold text-green-800 text-center">
                        Project Breakdown
                    </h2>

                    <p className="mt-6 text-center text-gray-600 max-w-3xl mx-auto">
                        Every successful landscape transformation begins with a deep
                        understanding of the client’s needs, site limitations, and long-term
                        usability. Here’s how we approached this project from start to finish.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">

                        {/* CHALLENGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-green-700"
                        >
                            <h3 className="text-2xl font-bold text-green-800">The Challenge</h3>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                The outdoor area was uneven, lacked lighting, and had poorly
                                planned drainage. The client wanted a clean, modern, and
                                low-maintenance design suitable for all seasons.
                            </p>
                        </motion.div>

                        {/* APPROACH */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-green-700"
                        >
                            <h3 className="text-2xl font-bold text-green-800">Our Strategy</h3>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                We introduced seamless turf sections, stone pathways, mood
                                lighting, and layered greenery. Smart irrigation and
                                drainage upgrades ensured long-term durability.
                            </p>
                        </motion.div>

                        {/* RESULT */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-green-700"
                        >
                            <h3 className="text-2xl font-bold text-green-800">The Outcome</h3>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                The final space is functional, visually stunning, and designed
                                for relaxation. Soft lighting and greenery create a luxury outdoor
                                experience day and night.
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* ---------------- KEY HIGHLIGHTS ---------------- */}
                <div className="mt-28">
                    <h2 className="text-4xl font-bold text-green-800 text-center">
                        Key Highlights
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                        {[
                            "Premium turf installation with 10-year durability",
                            "Automated LED pathway lighting system",
                            "Natural stone sitting area",
                            "Climate-resistant decorative plants",
                            "Integrated water drainage system",
                            "Modern minimalistic design elements",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-md border border-green-200 hover:shadow-xl hover:-translate-y-1 transition"
                            >
                                <p className="text-green-900 font-semibold">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ---------------- MORE CASE STUDIES ---------------- */}
                <div className="mt-28">
                    <h2 className="text-4xl font-bold text-green-800 text-center mb-16">
                        More Transformations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
                            >
                                <img src={img} className="w-full h-56 object-cover" />

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-green-800">
                                        Residential Garden Makeover {i + 1}
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Turf installation, stone pathways, lighting & plantation.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>



                {/* ---------------- CTA ---------------- */}
                <div className="mt-28 text-center bg-green-700 text-white py-16 rounded-3xl shadow-2xl">
                    <h2 className="text-4xl font-bold mb-4">
                        Want Your Space Transformed?
                    </h2>
                    <p className="text-lg opacity-90">
                        Our design team is ready to create a custom outdoor experience.
                    </p>
                    <button className="mt-6 px-10 py-4 bg-white text-green-800 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition">
                        Contact Us
                    </button>
                </div>

            </div>
        </div>
    );
}
