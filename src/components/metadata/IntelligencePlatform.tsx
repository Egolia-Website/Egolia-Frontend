"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Browse Assets",
    description: "Explore Curated Real Estate Opportunities Across Residential And Commercial Markets.",
  },
  {
    title: "Invest Instantly",
    description: "Buy Fractional Ownership In Properties With The Ease Of Trading Stocks.",
  },
  {
    title: "Trade Anytime",
    description: "Enter And Exit Positions With Real-Time Liquidity And Market Access.",
  },
];

export default function IntelligencePlatform() {
  return (
    <section className="bg-navy-dark py-24 md:py-32 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/5 rounded-full" />
      <div className="absolute top-20 right-24 w-20 h-20 border border-white/5 rounded-full" />
      <div className="absolute bottom-20 right-40 w-48 h-48 border border-white/3 rounded-full" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.p
          className="text-white/40 text-base mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Intelligence Platform
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-sans text-white leading-[1.1] mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Data-Led Insight For Strategic Decision-Making
        </motion.h2>

        <motion.p
          className="text-white/70 font-medium text-xl leading-[1.7] max-w-2xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Our Research Platform Combines Advanced Analytics, Proprietary Data, And Market Intelligence To Uncover High-Value Opportunities. By Integrating Real-Time Data With Structured Analysis, We Provide Clarity On Market Trends, Risk Exposure, And Performance Drivers.
        </motion.p>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className={`py-8 px-8 ${
                i < capabilities.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/70 font-medium text-base leading-[1.7]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
