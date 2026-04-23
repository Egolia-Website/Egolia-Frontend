"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "7,000+", label: "Units under development across the broader AvranceCorp pipeline" },
  { value: "$5B+", label: "Approximate development pipeline revenue referenced across projects" },
  { value: "4", label: "Core operating companies inside the Egolia platform" },
  { value: "Toronto", label: "Launch base for management, strategy, and investor engagement" },
];

const tableRows = [
  {
    focus: "Asset Pipeline",
    detail: "Active development opportunities provide the operating backbone for the group's long-term value creation strategy.",
  },
  {
    focus: "Capital Strategy",
    detail: "Egolia is aligning project-level capital formation with a broader platform roadmap, including institutional and strategic investor relationships.",
  },
  {
    focus: "Technology Commercialization",
    detail: "TradeREA expands the thesis from asset ownership into infrastructure, access, and future fee-driven platform economics.",
  },
  {
    focus: "Integrated Execution",
    detail: "The platform is designed so development, financing, research, and distribution can reinforce one another over time.",
  },
];

export default function DiverseOpportunities() {
  return (
    <section className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — metrics */}
          <motion.div
            className="bg-white border border-[#e8e8ed] rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-4">Track Record</p>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#0F1C3F] leading-[1.1] tracking-[-0.025em] mb-4">
              Scale Supported By Active Operating Experience.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-[1.8] mb-8">
              Egolia's investor proposition is strengthened by an underlying development and operating platform rather than a purely theoretical technology narrative.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.value}
                  className="bg-[#f5f5f7] rounded-xl p-5 border border-[#e8e8ed]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <div className="text-[2rem] font-bold text-[#0F1C3F] leading-none mb-2">{m.value}</div>
                  <p className="text-[#6e6e73] text-[14px] leading-[1.6]">{m.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#6e6e73]/60 text-[11px] leading-[1.6] mt-6">
              Select figures reflect current platform positioning and pipeline references used across Egolia and AvranceCorp materials.
            </p>
          </motion.div>

          {/* Right — table */}
          <motion.div
            className="bg-white border border-[#e8e8ed] rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-4">Current Platform Focus</p>
            <h3 className="text-[1.8rem] sm:text-[2rem] font-bold text-[#0F1C3F] leading-[1.1] tracking-[-0.025em] mb-8">
              What Investors Are Evaluating Today.
            </h3>

            <div className="divide-y divide-[#e8e8ed]">
              {tableRows.map((row, i) => (
                <motion.div
                  key={row.focus}
                  className="py-5 first:pt-0"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
                    <span className="text-[#1d1d1f] text-[15px] font-bold">{row.focus}</span>
                  </div>
                  <p className="text-[#6e6e73] text-[15px] leading-[1.75] pl-4">{row.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
