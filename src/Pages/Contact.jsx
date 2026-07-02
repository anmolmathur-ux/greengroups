import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowRight,
} from "lucide-react";
import hero from "../assets/commercial.jpg";

export default function ContactPage() {
  return (
    <section className="relative bg-white text-gray-800 overflow-hidden">
      {/* Floating Gradient Circles */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-green-500/20 rounded-full blur-3xl"></div>

      {/* ---------------- HERO ---------------- */}
      <section
        className="relative h-[45vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white text-center"
        >
          Contact <span className="text-green-400">Us</span>
        </motion.h1>
      </section>

      {/* ---------------- CONTACT GRID ---------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-2 gap-16">

        {/* ---------- LEFT: Contact Form ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions about our landscaping services? We’re here to help!
          </p>

          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                rows="5"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

        {/* ---------- RIGHT: Contact Info ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-3xl font-bold text-green-700">
              Get in Touch
            </h2>
            <p className="text-gray-600 mt-3">
              We'd love to hear from you. Reach out to us using any method below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
              <Phone className="text-green-700" size={32} />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">920-939-9572</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
              <Mail className="text-green-700" size={32} />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">GreensGroupLtd2178@proton.me</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
              <MapPin className="text-green-700" size={32} />
              <div>
                <h3 className="font-semibold text-gray-800">Office</h3>
                <p className="text-gray-600">abc abc abc abc , abc</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
              <Clock className="text-green-700" size={32} />
              <div>
                <h3 className="font-semibold text-gray-800">Working Hours</h3>
                <p className="text-gray-600">Mon–Sat · 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---------------- MAP SECTION ---------------- */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Find Us On The Map
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-300">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224122.7047270186!2d77.2040034!3d28.5275827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5538dbbbf13%3A0x93e5d45c1bb28cc0!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="pb-24 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700">
          Let’s Build Something Beautiful Together
        </h2>
        <p className="text-gray-600 mt-3">
          From landscape design to full outdoor transformation — we’re ready to
          help.
        </p>
        <button className="mt-8 px-10 py-4 bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:bg-green-800 transition flex items-center gap-2 mx-auto">
          Book a Free Consultation <ArrowRight size={20} />
        </button>
      </section>
    </section>
  );
}
