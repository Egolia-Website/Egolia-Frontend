"use client";

import { motion } from "framer-motion";
import { Database, BarChart3, Zap } from "lucide-react";

const steps = [
  {
    icon: <Database className="w-6 h-6" strokeWidth={1.4} />,
    number: "01",
    title: "Data Aggregation",
    description: "We collect and structure data from diverse sources — market activity, economic indicators, and sector-specific intelligence — to build a comprehensive research foundation.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" strokeWidth={1.4} />,
    number: "02",
    title: "Analysis & Modeling",
    description: "Applying advanced analytical frameworks and quantitative models to identify patterns, assess risk exposure, and uncover high-value investment opportunities.",
  },
  {
    icon: <Zap className="w-6 h-6" strokeWidth={1.4} />,
    number: "03",
    title: "Insight & Execution",
    description: "Translating complex data into clear, actionable intelligence that supports strategic decisions and disciplined capital allocation across every market cycle.",
  },
];

export default function IntelligenceProcess() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div>
            <motion.p
              className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Framework
            </motion.p>
            <motion.h2
              className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A Structured
              <br />
              <span className="text-orange">Intelligence Process</span>
            </motion.h2>
          </div>
        </div>

        {/* Steps — full-width horizontal rows */}
        <div className="divide-y divide-[#e8e8ed] border-t border-[#e8e8ed]">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="group grid grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr_1fr] items-start gap-6 lg:gap-12 py-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Step number */}
              <span className="text-[4rem] lg:text-[5rem] font-bold text-[#e8e8ed] leading-none group-hover:text-orange/30 transition-colors duration-500 select-none">
                {step.number}
              </span>

              {/* Icon + title */}
              <div className="flex items-start gap-4 lg:items-center">
                <div className="w-11 h-11 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white shrink-0 group-hover:bg-orange transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-[#1d1d1f] text-[20px] font-bold leading-snug">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[#6e6e73] text-[15px] leading-[1.8] col-start-2 lg:col-start-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
