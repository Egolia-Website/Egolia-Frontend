"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, Link2, FlaskConical, Zap } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    number: "01",
    title: "Operators, not passive allocators.",
    description: "We work inside the businesses and projects we back. That creates tighter feedback loops, stronger control, and better decision-making across the platform.",
  },
  {
    icon: Link2,
    number: "02",
    title: "Integrated capital formation.",
    description: "By aligning project flow with financing strategy, we reduce fragmentation between the asset, the structure, and the investor proposition.",
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Research-led execution.",
    description: "Our investment direction is supported by in-house data, analysis, and market intelligence rather than outsourced conviction.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Infrastructure with long-term upside.",
    description: "TradeREA extends the platform beyond project-level returns by introducing technology, access, and future transaction-based revenue potential.",
  },
];

export default function WhyInvest() {
  return (
    <section className="relative bg-white pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <Image src="/images/backImage.png" alt="" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-white/92" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">

        {/* Top header row */}
        <div className="mb-14">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-10 text-center lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Invest With Egolia
          </motion.p>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <motion.h2
              className="text-[#0F1C3F] text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.0] tracking-[-0.04em] max-w-[560px] text-center lg:text-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Built to own the full value chain.
            </motion.h2>

            <motion.p
              className="text-[#6e6e73] text-[17px] leading-[1.8] max-w-[480px] lg:pt-3 text-center lg:text-left"
              initial={{ opacity: 0, y: 16 }}
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
              className="group bg-[#f5f5f7] border border-[#e8e8ed] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0F1C3F] flex items-center justify-center group-hover:bg-orange transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="text-[#0F1C3F]/15 text-[2.5rem] font-bold leading-none select-none group-hover:text-orange/20 transition-colors duration-300">{item.number}</span>
              </div>
              <h3 className="text-[#1d1d1f] text-[22px] sm:text-[24px] font-bold leading-snug mb-4">{item.title}</h3>
              <p className="text-[#6e6e73] text-[15px] leading-[1.8]">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
