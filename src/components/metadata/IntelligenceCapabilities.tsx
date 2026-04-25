"use client";

import { motion } from "framer-motion";
import { Globe, Server, BarChart2, Compass } from "lucide-react";

const capabilities = [
  {
    icon: <Globe className="w-7 h-7" strokeWidth={1.4} />,
    title: "Market Intelligence",
    description: "In-depth analysis of macroeconomic trends, real estate dynamics, and regional performance indicators.",
  },
  {
    icon: <Server className="w-7 h-7" strokeWidth={1.4} />,
    title: "Data Infrastructure",
    description: "Scalable systems that structure and process complex datasets into reliable, decision-ready intelligence.",
  },
  {
    icon: <BarChart2 className="w-7 h-7" strokeWidth={1.4} />,
    title: "Quantitative Analytics",
    description: "Advanced models designed to evaluate performance, risk exposure, and investment potential.",
  },
  {
    icon: <Compass className="w-7 h-7" strokeWidth={1.4} />,
    title: "Strategic Insights",
    description: "Translating data into clear, actionable intelligence to support consistent capital allocation.",
  },
];

export default function IntelligenceCapabilities() {
  return (
    <section className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        <div className="text-center mb-16">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Capabilities
          </motion.p>
          <motion.h2
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Intelligence
            <br />
            <span className="text-orange">Capabilities</span>
          </motion.h2>
          <motion.p
            className="text-[#6e6e73] text-[17px] leading-[1.8] max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive suite of data-driven tools and research frameworks designed to support informed investment decisions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="group bg-white border border-[#e8e8ed] rounded-2xl p-7 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white mb-6 group-hover:bg-orange transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-[#1d1d1f] text-[17px] font-bold leading-snug mb-3">{item.title}</h3>
              <div className="w-6 h-[2px] bg-orange mb-4" />
              <p className="text-[#6e6e73] text-[14px] leading-[1.75]">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
