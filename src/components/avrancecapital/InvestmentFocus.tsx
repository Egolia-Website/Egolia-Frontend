"use client";

import { motion } from "framer-motion";
import { Handshake, LayoutGrid, Globe, Building2 } from "lucide-react";

const sectors = [
  {
    icon: Handshake,
    number: "01",
    title: "Strategic Partnerships",
    description: "Collaborations with experienced operators and developers to unlock long-term value.",
  },
  {
    icon: LayoutGrid,
    number: "02",
    title: "Structured Investments",
    description: "Strategically designed investment vehicles focused on stability and risk-adjusted returns.",
  },
  {
    icon: Globe,
    number: "03",
    title: "Private Markets",
    description: "Access to high-growth opportunities across private equity and emerging sectors.",
  },
  {
    icon: Building2,
    number: "04",
    title: "Real Estate",
    description: "Institutional-quality investments across residential, commercial, and mixed-use assets in key markets.",
  },
];

export default function InvestmentFocus() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Header — left aligned */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
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

        {/* Horizontal row list */}
        <div className="border-t border-[#e8e8ed]">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              className="group flex items-center gap-6 sm:gap-10 py-7 border-b border-[#e8e8ed] hover:bg-[#fafafa] transition-colors duration-300 px-3 -mx-3 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Faded number */}
              <span className="text-[2.5rem] font-bold text-[#0F1C3F]/10 leading-none w-12 shrink-0 group-hover:text-orange/20 transition-colors duration-300 hidden sm:block">
                {sector.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-orange/10 border-2 border-orange flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(232,121,43,0.15)] group-hover:bg-orange transition-all duration-300">
                <sector.icon className="w-5 h-5 text-orange group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[#1d1d1f] text-[18px] font-bold leading-snug mb-1">{sector.title}</h3>
                <p className="text-[#6e6e73] text-[14px] leading-[1.7]">{sector.description}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
