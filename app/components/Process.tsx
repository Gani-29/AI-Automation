"use client";

import { Search, Lightbulb, Cog, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We analyze your current processes, identify automation opportunities, and understand your business objectives.",
    points: [
      "Process mapping",
      "Pain point identification",
      "ROI assessment",
      "Technical feasibility study",
    ],
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Design",
    description:
      "Our experts design a custom automation strategy tailored to your specific needs and goals.",
    points: [
      "Solution architecture",
      "Technology selection",
      "Implementation roadmap",
      "Success metrics definition",
    ],
  },
  {
    icon: Cog,
    number: "03",
    title: "Development & Integration",
    description:
      "We build and integrate your AI automation solutions with rigorous testing and quality assurance.",
    points: [
      "Custom development",
      "API integrations",
      "Testing & validation",
      "Security implementation",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deployment & Optimization",
    description:
      "We deploy your solution, provide training, and continuously optimize performance.",
    points: [
      "Production deployment",
      "Team training",
      "Performance monitoring",
      "Continuous improvement",
    ],
  },
];

export default function Process() {
  return (
    <section className="bg-lightbg py-20 sm:py-24 lg:py-32 relative overflow-hidden">
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
            Our Proven Process
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            A structured, strategic approach designed to maximize ROI and
            deliver scalable AI automation solutions.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative"
              >
                {/* Top */}
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-primary/10 group-hover:bg-primary transition rounded-xl p-4">
                    <Icon
                      size={22}
                      className="text-primary group-hover:text-white transition"
                    />
                  </div>

                  <span className="text-4xl font-bold text-gray-200 group-hover:text-primary/20 transition">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}