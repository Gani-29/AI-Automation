"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-lightbg py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Tag */}
          <div className="inline-block bg-primary/10 text-primary text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6">
            About AutomateFlow
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Pioneering the Future of Business Automation
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            We are a team of AI specialists, software engineers, and business
            strategists dedicated to transforming how businesses operate through
            intelligent automation solutions.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Founded in 2019, AutomateFlow has been at the forefront of the AI
            automation revolution. We combine cutting-edge artificial intelligence
            with deep business understanding to create solutions that not only
            automate processes but genuinely transform organizations.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
            Our approach goes beyond simple task automation. We design intelligent
            systems that learn, adapt, and evolve with your business,
            ensuring long-term value and continuous improvement.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              "5+ years of AI automation expertise",
              "200+ successful implementations",
              "50+ enterprise clients served",
              "99.9% system uptime guarantee",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  className="text-primary mt-1 flex-shrink-0"
                  size={18}
                />
                <p className="text-sm sm:text-base text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative order-first lg:order-last"
        >
          {/* Background accent */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary/10 rounded-3xl"></div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/about.jpg"
              alt="About AutomateFlow"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}