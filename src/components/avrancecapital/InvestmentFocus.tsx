"use client";

import { motion } from "framer-motion";
import { Handshake, LayoutGrid, Globe, Building2 } from "lucide-react";

const sectors = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Collaborations with experienced operators and developers to unlock long-term value across real estate and private markets.",
    accent: "from-orange/20 to-transparent",
  },
  {
    icon: LayoutGrid,
    title: "Structured Investments",
    description: "Strategically designed investment vehicles focused on stability and risk-adjusted returns over the long term.",
    accent: "from-orange/15 to-transparent",
  },
  {
    icon: Globe,
    title: "Private Markets",
    description: "Access to high-growth opportunities across private equity and emerging sectors with disciplined underwriting.",
    accent: "from-orange/20 to-transparent",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Institutional-quality investments across residential, commercial, and mixed-use assets in key growth markets.",
    accent: "from-orange/15 to-transparent",
  },
];

export default function InvestmentFocus() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.p
              className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Investment Focus
            </motion.p>
            <motion.h2
              className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Targeted Opportunities<br />
              <span className="text-orange">Across Core Asset Classes.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-[#6e6e73] text-[16px] leading-[1.8] max-w-xs lg:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We allocate capital across select sectors with strong fundamentals and disciplined underwriting.
          </motion.p>
        </div>

        {/* 2x2 bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              className="group relative overflow-hidden rounded-2xl border border-[#e8e8ed] bg-[#f5f5f7] p-8 hover:border-orange/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Watermark icon — top right */}
              <div className="absolute top-5 right-5 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-300">
                <sector.icon className="w-20 h-20 text-[#0F1C3F]" strokeWidth={1} />
              </div>

              {/* Premium icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange to-[#d4691e] flex items-center justify-center mb-6 shadow-[0_6px_20px_rgba(232,121,43,0.3)] group-hover:scale-110 transition-transform duration-300">
                <sector.icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="text-[#1d1d1f] text-[20px] font-bold leading-snug mb-3">{sector.title}</h3>
              <div className="w-8 h-[2px] bg-orange mb-4 group-hover:w-14 transition-all duration-300" />
              <p className="text-[#6e6e73] text-[14px] leading-[1.8]">{sector.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
