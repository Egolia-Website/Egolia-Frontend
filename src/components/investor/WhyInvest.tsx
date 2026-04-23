"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Operators, not passive allocators.",
    description: "We work inside the businesses and projects we back. That creates tighter feedback loops, stronger control, and better decision-making across the platform.",
  },
  {
    number: "02",
    title: "Integrated capital formation.",
    description: "By aligning project flow with financing strategy, we reduce fragmentation between the asset, the structure, and the investor proposition.",
  },
  {
    number: "03",
    title: "Research-led execution.",
    description: "Our investment direction is supported by in-house data, analysis, and market intelligence rather than outsourced conviction.",
  },
  {
    number: "04",
    title: "Infrastructure with long-term upside.",
    description: "TradeREA extends the platform beyond project-level returns by introducing technology, access, and future transaction-based revenue potential.",
  },
];

export default function WhyInvest() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Top header row */}
        <div className="mb-14">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Invest With Egolia
          </motion.p>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <motion.h2
              className="text-[#0F1C3F] text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.0] tracking-[-0.04em] max-w-[560px]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Built to own the full value chain.
            </motion.h2>

            <motion.p
              className="text-[#6e6e73] text-[17px] leading-[1.8] max-w-[480px] lg:pt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Most firms participate in one layer of the market. Egolia is being built to operate across origination, capital, intelligence, and distribution, allowing the platform to capture more value, tighten execution, and compound strategic advantage over time.
            </motion.p>
          </div>
        </div>

        {/* 2x2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.number}
              className="bg-[#f5f5f7] border border-[#e8e8ed] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <span className="text-orange text-[13px] font-bold tracking-[0.15em] mb-5 block">{item.number}</span>
              <h3 className="text-[#1d1d1f] text-[22px] sm:text-[24px] font-bold leading-snug mb-4">{item.title}</h3>
              <p className="text-[#6e6e73] text-[15px] leading-[1.8]">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
