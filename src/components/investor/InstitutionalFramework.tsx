"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const frameworkRows = [
  { label: "Governance", detail: "Centralized oversight across platform strategy, capital allocation, and execution priorities." },
  { label: "Origination", detail: "Project flow supported by direct operating involvement rather than passive third-party sourcing alone." },
  { label: "Research", detail: "Internal market analysis and intelligence strengthen underwriting, communication, and strategic timing." },
  { label: "Distribution", detail: "TradeREA is intended to develop with compliance-aware structuring and partnership-led market access where required." },
];

const perspectiveRows = [
  { label: "Why now", detail: "Private markets are demanding better access, better transparency, and better pathways to liquidity." },
  { label: "Why Egolia", detail: "Because it combines operating assets, financing capability, market insight, and infrastructure ambition under one coordinated strategy." },
  { label: "Why it matters", detail: "Platforms that control more of the value chain are better positioned to defend margins, scale efficiently, and create strategic optionality." },
];

export default function InstitutionalFramework() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <Image src="/images/backImage.png" alt="" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-white/92" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">

        <div className="text-center mb-16">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Investor Framework
          </motion.p>
          <motion.h2
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Disciplined
            <br />
            <span className="text-orange">By Design.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — Institutional Framework table */}
          <motion.div
            className="bg-[#f5f5f7] border border-[#e8e8ed] rounded-2xl p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-orange text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Institutional Framework</p>
            <h3 className="text-[#1d1d1f] text-[22px] font-bold mb-8 leading-snug">
              Egolia&apos;s growth strategy is built around disciplined execution, appropriate structuring, and a phased approach to market infrastructure.
            </h3>

            <div className="divide-y divide-[#e8e8ed]">
              {frameworkRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  className="py-5 first:pt-0 last:pb-0 grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <span className="text-[#0F1C3F] text-[15px] font-bold pt-0.5">{row.label}</span>
                  <p className="text-[#6e6e73] text-[15px] leading-[1.75]">{row.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Investor Perspective */}
          <motion.div
            className="bg-[#f5f5f7] border border-[#e8e8ed] rounded-2xl p-8 flex flex-col"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-orange text-[11px] font-bold tracking-[0.2em] uppercase mb-6">Investor Perspective</p>

            {/* Quote */}
            <div className="border-l-4 border-orange pl-6 mb-8">
              <blockquote className="text-[#1d1d1f] text-[20px] font-semibold leading-[1.55] italic mb-3">
                &ldquo;We are building Egolia to be more than a holding company. We are building a platform where ownership, intelligence, capital, and infrastructure compound together.&rdquo;
              </blockquote>
              <p className="text-[#6e6e73] text-[13px]">Egolia Group investor positioning statement</p>
            </div>

            <div className="divide-y divide-[#e8e8ed] mt-auto">
              {perspectiveRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  className="py-4 first:pt-0 last:pb-0 grid grid-cols-[80px_1fr] sm:grid-cols-[90px_1fr] gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <span className="text-[#0F1C3F] text-[15px] font-bold pt-0.5">{row.label}</span>
                  <p className="text-[#6e6e73] text-[15px] leading-[1.75]">{row.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
