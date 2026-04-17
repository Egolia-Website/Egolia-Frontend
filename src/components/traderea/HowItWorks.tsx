"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" />
      </svg>
    ),
    title: "Browse Assets",
    description: "Explore Curated Real Estate Opportunities Across Residential And Commercial Markets.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Invest Instantly",
    description: "Buy Fractional Ownership In Properties With The Ease Of Trading Stocks.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Trade Anytime",
    description: "Enter And Exit Positions With Real-Time Liquidity And Market Access.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-navy-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle network pattern bg */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-white/20 rounded-full" />
        <div className="absolute top-40 right-20 w-60 h-60 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-32 h-32 border border-white/15 rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.p
          className="text-center text-white/40 text-base mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Platform
        </motion.p>

        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-sans text-white mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          How TradeREA Works
        </motion.h2>

        <motion.p
          className="text-center text-white/70 text-xl leading-[1.7] max-w-2xl mx-auto mb-20 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          A Simple, Transparent Way To Access Real Estate Like Never Before.
        </motion.p>

        {/* 3 steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className={`text-center px-10 py-12 ${
                i < steps.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              <div className="w-20 h-20 mx-auto mb-8 border-2 border-orange/30 flex items-center justify-center text-orange">
                {step.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/70 text-base leading-[1.7] font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
