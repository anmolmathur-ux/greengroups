import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img from "../assets/commercial4.jpg";
import img1 from "../assets/support.png";
import img2 from "../assets/photo7.jpg";
import img3 from "../assets/photo2.jpg";

export default function BlogPage() {
  const posts = [
    {
      title: "Top 7 Landscaping Trends for 2025",
      excerpt:
        "Discover the latest trends transforming outdoor spaces this year — from eco-friendly materials to AI-driven garden planning.",
      image: img1,
      category: "Trends",
      date: "Nov 12, 2025",
    },
    {
      title: "How Proper Lawn Care Boosts Property Value",
      excerpt:
        "A well-maintained landscape can increase your property's market value by up to 15%. Learn the key strategies.",
      image: img2,
      category: "Guides",
      date: "Oct 28, 2025",
    },
    {
      title: "Sustainable Landscaping: A Complete Starter Guide",
      excerpt:
        "From rainwater harvesting to native plants — understand the essentials of building an eco-friendly outdoor environment.",
      image: img3,
      category: "Sustainability",
      date: "Oct 10, 2025",
    },
  ];

  /* popular posts */
  const popular = [
    "5 Ways To Upgrade Your Backyard in 2025",
    "Why Synthetic Turf Is Becoming a Homeowner Favorite",
    "How to Build Low-Maintenance Outdoor Spaces",
    "Choosing Plants That Thrive All Year",
  ];

  return (
    <section className="relative w-full min-h-screen bg-white text-gray-800 py-20 px-6 overflow-hidden">
      {/* Floating Green Gradient Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-green-700 tracking-tight"
        >
          Our Blog
        </motion.h1>
        <p className="mt-4 text-gray-600 text-lg">
          Insights, guides, and professional landscaping inspiration.
        </p>
      </div>

      {/* Featured Highlight Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto mb-20 bg-green-700 text-white p-10 rounded-3xl shadow-xl flex flex-col md:flex-row gap-6 items-center"
      >
        <img
          src={img}
          className="w-full md:w-1/3 rounded-xl shadow-lg object-cover h-48"
        />

        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold">Featured Spotlight</h2>
          <p className="mt-3 text-gray-100">
            Learn how modern landscape design blends innovation, sustainability,
            and craftsmanship to create visually stunning outdoor living spaces.
          </p>
          <button className="mt-5 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
            Explore Featured Article <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <div className="w-full h-52 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                {post.category}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <p className="mt-4 text-gray-400 text-xs">{post.date}</p>

              <button className="mt-5 inline-flex items-center gap-2 text-green-700 font-semibold hover:underline">
                Read More <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-green-700 text-center">
          Browse by Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {["Landscaping", "Guides", "Sustainability", "Outdoor Design"].map(
            (cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 text-center bg-gray-100 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-green-50 hover:border-green-400 hover:text-green-700 cursor-pointer shadow"
              >
                {cat}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Popular Posts Section */}
      <section className="max-w-4xl mx-auto mb-28">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Popular Reads
        </h2>

        <div className="space-y-4">
          {popular.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg cursor-pointer flex justify-between items-center"
            >
              <p className="font-medium text-gray-700">{item}</p>
              <ArrowRight className="text-green-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-700 text-white py-20 px-6 rounded-3xl max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Stay Updated With Our Latest Articles
        </h2>
        <p className="mt-4 text-center opacity-90">
          Subscribe to our newsletter and get weekly outdoor inspiration.
        </p>

       <div className="mt-8 flex flex-col sm:flex-row justify-center w-full px-4 sm:px-0 gap-3 sm:gap-0">
  <input
    type="email"
    placeholder="Enter your email"
    className="
      px-4 py-3
      rounded-xl sm:rounded-l-xl sm:rounded-r-none
      w-full sm:w-72 
      text-black
      border border-white
      focus:outline-none focus:ring-2 focus:ring-green-600
    "
  />

  <button
    className="
      bg-white text-green-700 
      px-6 py-3 
      rounded-xl sm:rounded-r-xl sm:rounded-l-none
      font-semibold 
      w-full sm:w-auto 
    "
  >
    Subscribe
  </button>
</div>

      </section>

      {/* CTA Section */}
      <section className="text-center max-w-4xl mx-auto pb-20">
        <h2 className="text-4xl font-bold text-green-700">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="mt-4 text-gray-600">
          Let our experts craft a beautiful, sustainable, and lasting design for you.
        </p>
        <button className="mt-8 bg-green-700 text-white px-8 py-4 rounded-xl shadow hover:bg-green-800 transition">
          Get Free Consultation
        </button>
      </section>
    </section>
  );
}
