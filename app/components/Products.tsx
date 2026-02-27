"use client";

import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    badge: "⭐ Most Popular",
    name: "SupportBot Pro",
    image: "/support.jpg",
    description:
      "AI-powered customer support agent that handles inquiries, resolves issues, and escalates complex cases.",
    price: "$299/month",
    stats: [
      { value: "< 2 sec", label: "Response Time" },
      { value: "87%", label: "Resolution Rate" },
      { value: "4.8/5", label: "Satisfaction" },
    ],
    features: [
      "24/7 multilingual support",
      "Smart ticket routing",
      "Knowledge base integration",
      "Sentiment analysis",
      "Real-time escalation",
    ],
  },
  {
    name: "SalesAccelerator AI",
    image: "/sales.jpg",
    description:
      "Intelligent sales agent that qualifies leads, schedules meetings, and nurtures prospects.",
    price: "$599/month",
    stats: [
      { value: "+45%", label: "Conversion" },
      { value: "78%", label: "Show Rate" },
      { value: "-30%", label: "Sales Cycle" },
    ],
    features: [
      "Lead qualification scoring",
      "Automated follow-ups",
      "Meeting scheduling",
      "CRM integration",
      "Performance analytics",
    ],
  },
  {
    name: "DataMind Analytics",
    image: "/datamind.jpg",
    description:
      "Advanced AI agent that processes and generates insights from business data.",
    price: "$799/month",
    stats: [
      { value: "10x faster", label: "Processing" },
      { value: "99.2%", label: "Accuracy" },
      { value: "Real-time", label: "Insights" },
    ],
    features: [
      "Automated data processing",
      "Predictive modeling",
      "Real-time dashboards",
      "Anomaly detection",
      "Custom reporting",
    ],
  },
  {
    name: "WorkflowMaster",
    image: "/workflow.jpg",
    description:
      "Comprehensive workflow automation that eliminates manual tasks.",
    price: "$399/month",
    stats: [
      { value: "75%", label: "Time Savings" },
      { value: "92%", label: "Error Reduction" },
      { value: "+160%", label: "Efficiency" },
    ],
    features: [
      "Process automation",
      "API integrations",
      "Approval workflows",
      "Error handling",
      "Performance monitoring",
    ],
  },
];

export default function Products() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Our AI Product Suite
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Powerful AI agents designed to automate, optimize, and transform
            critical business functions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white/80 backdrop-blur rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              {product.badge && (
                <div className="bg-primary text-white px-6 py-3 text-sm font-medium">
                  {product.badge}
                </div>
              )}

              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={350}
                  className="w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-semibold mb-4">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-700 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="grid grid-cols-3 text-center border-t pt-6 mb-6">
                  {product.stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting at</p>
                    <p className="font-semibold">{product.price}</p>
                  </div>

                  <div className="flex gap-3">
                    <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                      Learn More
                    </button>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition">
                      Start Trial <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="mt-24 text-center">
          <div className="bg-white rounded-3xl border p-10 sm:p-16 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
              Need a Custom AI Solution?
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
              We build bespoke AI systems tailored to your exact business
              workflows and operational goals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Request Custom Solution
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}