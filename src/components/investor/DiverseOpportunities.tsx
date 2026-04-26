"use client";

import { motion } from "framer-motion";
import { Home, TrendingUp, Building2, MapPin, BarChart3, Cpu, Link2, Layers } from "lucide-react";

const metrics = [
  { icon: Home, value: "7,000+", label: "Units under development across the broader AvranceCorp pipeline" },
  { icon: TrendingUp, value: "$5B+", label: "Approximate development pipeline revenue referenced across projects" },
  { icon: Building2, value: "5", label: "Core operating companies inside the Egolia platform" },
  { icon: MapPin, value: "Toronto", label: "Launch base for management, strategy, and investor engagement" },
];

const tableRows = [
  {
    icon: BarChart3,
    focus: "Asset Pipeline",
    detail: "Active development opportunities provide the operating backbone for the group's long-term value creation strategy.",
  },
  {
    icon: Layers,
    focus: "Capital Strategy",
    detail: "Egolia is aligning project-level capital formation with a broader platform roadmap, including institutional and strategic investor relationships.",
  },
  {
    icon: Cpu,
    focus: "Technology Commercialization",
    detail: "TradeREA expands the thesis from asset ownership into infrastructure, access, and future fee-driven platform economics.",
  },
  {
    icon: Link2,
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-4 text-center lg:text-left">Track Record</p>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#0F1C3F] leading-[1.1] tracking-[-0.025em] mb-4 text-center lg:text-left">
              Scale Supported By Active Operating Experience.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-[1.8] mb-8 text-center lg:text-left">
              Egolia&apos;s investor proposition is strengthened by an underlying development and operating platform rather than a purely theoretical technology narrative.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.value}
                  className="group bg-[#f5f5f7] rounded-xl p-4 border border-[#e8e8ed] hover:border-orange/30 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center mb-2.5 shadow-[0_4px_12px_rgba(232,121,43,0.35)]">
                    <m.icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-[1.4rem] sm:text-[2rem] font-bold text-[#0F1C3F] leading-none mb-2 group-hover:text-orange transition-colors duration-300">{m.value}</div>
                  <p className="text-[#6e6e73] text-[10px] sm:text-[13px] leading-[1.5] line-clamp-3">{m.label}</p>
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-4 text-center lg:text-left">Current Platform Focus</p>
            <h3 className="text-[1.8rem] sm:text-[2rem] font-bold text-[#0F1C3F] leading-[1.1] tracking-[-0.025em] mb-8 text-center lg:text-left">
              What Investors Are Evaluating Today.
            </h3>

            <div className="divide-y divide-[#e8e8ed]">
              {tableRows.map((row, i) => (
                <motion.div
                  key={row.focus}
                  className="py-5 first:pt-0"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0F1C3F] flex items-center justify-center shrink-0">
                      <row.icon className="w-3.5 h-3.5 text-orange" strokeWidth={2} />
                    </div>
                    <span className="text-[#1d1d1f] text-[15px] font-bold mt-1">{row.focus}</span>
                  </div>
                  <p className="text-[#6e6e73] text-[15px] leading-[1.75] pl-11">{row.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
