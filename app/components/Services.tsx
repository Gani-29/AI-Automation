"use client";

import {
  Bot,
  Workflow,
  Database,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "Deploy intelligent chatbots that handle customer inquiries and support tickets 24/7.",
    features: [
      "Natural Language Processing",
      "Multi-platform Integration",
      "Custom Training",
    ],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Automate complex workflows and eliminate manual operational bottlenecks.",
    features: ["Workflow Design", "API Integrations", "Error Handling"],
  },
  {
    icon: Database,
    title: "Data Processing & Analysis",
    description:
      "Transform raw data into actionable insights using AI-powered processing.",
    features: ["Data Mining", "Predictive Analytics", "Real-time Processing"],
  },
  {
    icon: MessageSquare,
    title: "Communication Automation",
    description:
      "Streamline internal and external communications with automated systems.",
    features: ["Email Sequences", "SMS Automation", "Slack Integration"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Generate automated dashboards and reports for real-time decision making.",
    features: ["Custom Dashboards", "Automated Reports", "KPI Tracking"],
  },
  {
    icon: Settings,
    title: "Custom AI Solutions",
    description:
      "Tailored AI systems built specifically for your unique business needs.",
    features: ["Bespoke Development", "Machine Learning", "AI Model Training"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-lightbg py-20 sm:py-24 lg:py-32"
    >
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
            Our AI Automation Services
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We provide comprehensive AI automation solutions that transform
            how modern businesses operate.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-700">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}