"use client";

import Image from "next/image";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  {
    company: "TechCorp Solutions",
    industry: "Software Development",
    image: "/case1.jpg",
    challenge: "Manual customer support consuming 40+ hours weekly",
    solution: "AI-powered chatbot with escalation workflows",
    metrics: [
      {
        icon: TrendingUp,
        value: "85%",
        label: "Reduction in support tickets",
      },
      {
        icon: Clock,
        value: "2 min",
        label: "Average response time",
      },
      {
        icon: DollarSign,
        value: "$50K",
        label: "Annual cost savings",
      },
    ],
  },
  {
    company: "RetailFlow Inc",
    industry: "E-commerce",
    image: "/case2.jpg",
    challenge: "Inventory management across 50+ locations",
    solution: "Automated inventory tracking and reorder system",
    metrics: [
      {
        icon: TrendingUp,
        value: "95%",
        label: "Inventory accuracy",
      },
      {
        icon: Clock,
        value: "Real-time",
        label: "Stock level updates",
      },
      {
        icon: DollarSign,
        value: "30%",
        label: "Reduction in overstock",
      },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-lightbg py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Real businesses. Measurable impact. Proven AI automation results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.company}
                  width={800}
                  height={500}
                  className="w-full h-[220px] sm:h-[280px] object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-primary text-white text-xs sm:text-sm px-4 py-1 rounded-full shadow">
                  {item.industry}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {item.company}
                </h3>

                <p className="text-gray-600 text-sm mb-2">
                  <strong>Challenge:</strong> {item.challenge}
                </p>

                <p className="text-gray-600 text-sm mb-8">
                  <strong>Solution:</strong> {item.solution}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  {item.metrics.map((metric, idx) => {
                    const Icon = metric.icon;

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                      >
                        <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-xl mb-3 group-hover:bg-primary transition">
                          <Icon
                            size={20}
                            className="text-primary group-hover:text-white transition"
                          />
                        </div>

                        <h4 className="text-xl font-bold text-primary">
                          {metric.value}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {metric.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}