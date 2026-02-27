"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-lightbg py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm mb-6">
            ⚡ AI-Powered Automation
          </div>

          <motion.div
          initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>
          </motion.div>

          

          <p className="text-gray-600 mt-6 max-w-xl text-sm sm:text-base leading-relaxed">
            Scale your operations, reduce costs, and increase efficiency
            with custom AI automation systems that eliminate repetitive work
            and streamline complex workflows.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-xl text-center font-medium shadow-lg shadow-primary/20 hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
            >
              Start Your Automation Journey →
            </a>

            <a
              href="#case-studies"
              className="border border-gray-300 px-6 py-3 rounded-xl text-center font-medium hover:bg-gray-100 transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center sm:text-left mt-14">
            {[
              { value: "500+", label: "Processes Automated" },
              { value: "85%", label: "Average Cost Reduction" },
              { value: "24/7", label: "Automated Operations" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-last lg:order-last"
        >
          {/* Glow background */}
          <div className="absolute -z-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full top-10 left-10"></div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/hero.jpg"
              alt="AI Automation"
              width={600}
              height={400}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}