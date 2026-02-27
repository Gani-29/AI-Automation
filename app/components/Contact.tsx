"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [responseType, setResponseType] = useState<"success" | "error" | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);
    setResponseType(null);

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          full_name: form.fullName,
          email: form.email,
          company: form.company || null,
          service: form.service,
          message: form.message,
        },
      ]);

      if (error) throw new Error(error.message);

      setResponseType("success");
      setResponseMessage(
        "Message sent successfully! Our team will contact you within 12 hours."
      );

      setForm({
        fullName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      setResponseType("error");
      setResponseMessage(
        error?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);

      setTimeout(() => {
        setResponseMessage(null);
        setResponseType(null);
      }, 8000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-lightbg to-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Let’s Automate Your Business
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Book a free strategy consultation and discover how AI can save
            you time, reduce costs, and scale your operations.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            🔒 100% confidential • No spam • Free consultation
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT FORM */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200 p-8 space-y-6"
          >
            <h3 className="text-xl font-semibold text-primary">
              Send us a message
            </h3>

            {responseMessage && (
              <div
                className={`p-4 rounded-lg text-sm font-medium ${
                  responseType === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {responseMessage}
              </div>
            )}

            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="">Select a service *</option>
              <option>AI Chatbots & Assistants</option>
              <option>Process Automation</option>
              <option>Data Processing & Analysis</option>
              <option>Communication Automation</option>
              <option>Business Intelligence</option>
              <option>Custom AI Solutions</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your automation needs..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Sending..." : "Get Free Consultation →"}
            </button>
          </motion.form>

          {/* RIGHT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Mail, title: "Email Us", text: "hello@automateflow.com" },
              { icon: Phone, title: "Call Us", text: "+1 (555) 123-4567" },
              { icon: MapPin, title: "Visit Us", text: "123 Innovation Drive, CA" },
              { icon: Clock, title: "Business Hours", text: "Mon–Fri 9AM–6PM" },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border p-6 flex gap-4 items-start hover:shadow-xl transition"
                >
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon className="text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}