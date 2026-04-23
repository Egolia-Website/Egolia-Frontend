"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Search, BarChart3, ArrowRight, ShieldCheck, Scale, RefreshCw } from "lucide-react";

const strategies = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Strategic Market Selection",
    description: "Identifying high-quality opportunities across real estate and private markets through rigorous research and market insight.",
  },
  {
    icon: Search,
    number: "02",
    title: "Comprehensive Due Diligence",
    description: "Conducting in-depth analysis and risk assessment to ensure every investment meets our strict performance and quality criteria.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Active Asset Management",
    description: "Structuring, optimizing, and actively managing assets to enhance performance and deliver consistent returns.",
  },
];

export default function DisciplineSection() {
  return (
    <>
      {/* Section 1 — Discipline In Every Investment */}
      <section className="py-24 md:py-32 overflow-hidden relative" style={{ background: "linear-gradient(135deg, #ffffff 0%, #eef1f7 50%, #dde3ef 100%)" }}>

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full bg-orange/[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-blue-500/[0.04] blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* LEFT — Bold statement */}
            <div className="w-full lg:w-[38%] flex flex-col justify-start lg:sticky lg:top-6 self-start">
              <motion.p
                className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Philosophy
              </motion.p>

              <motion.h2
                className="text-[2.6rem] sm:text-[3.2rem] font-bold text-[#0F1C3F] leading-[1.06] tracking-[-0.03em] mb-6"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Discipline In<br />Every<br />
                <span className="text-orange">Investment.</span>
              </motion.h2>

              <motion.div className="w-12 h-[2px] bg-orange mb-7" initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} />

              <motion.p
                className="text-[#6e6e73] text-[16px] leading-[1.85] mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We deploy capital with precision — guided by research, structured execution, and a long-term investment perspective designed to perform across every market cycle.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                <Link
                  href="/investor"
                  className="group inline-flex items-center gap-3 rounded-lg bg-orange hover:bg-[#d4691e] px-7 py-3.5 text-[14px] font-bold text-white transition-colors duration-300"
                >
                  Explore Our Approach
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — Oversized numbered pillars */}
            <div className="w-full lg:w-[62%] flex flex-col divide-y divide-[#e8e8ed] border-t border-[#e8e8ed]">
              {[
                {
                  icon: ShieldCheck,
                  number: "01",
                  title: "Preserve Capital",
                  desc: "Every deployment decision prioritizes downside protection. We structure investments to withstand volatility and protect investor capital across all market conditions.",
                },
                {
                  icon: Scale,
                  number: "02",
                  title: "Optimize Returns",
                  desc: "We target risk-adjusted returns through disciplined underwriting, active management, and strategic capital structuring — not speculative exposure.",
                },
                {
                  icon: RefreshCw,
                  number: "03",
                  title: "Perform Across Cycles",
                  desc: "Our portfolio strategy is designed for consistency — building positions that compound steadily rather than relying on short-term market timing.",
                },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  className="group relative py-10 flex items-start gap-6 hover:bg-white transition-colors duration-300 px-4 -mx-4 rounded-2xl"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-orange/10 border-2 border-orange flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(232,121,43,0.2)] group-hover:bg-orange transition-all duration-300 mt-1">
                    <pillar.icon className="w-5 h-5 text-orange group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-[#1d1d1f] text-[22px] font-bold leading-snug mb-3 group-hover:text-orange transition-colors duration-300">{pillar.title}</h3>
                    <p className="text-[#6e6e73] text-[15px] leading-[1.8]">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 — Investment Strategy bento */}
      <section className="bg-[#f5f5f7] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <motion.p
                className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Investment Strategy
              </motion.p>
              <motion.h2
                className="text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                A Disciplined Approach<br />
                <span className="text-orange">To Capital Deployment.</span>
              </motion.h2>
            </div>
            <motion.p
              className="text-[#6e6e73] text-[16px] leading-[1.8] max-w-xs lg:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every decision is backed by rigorous research and a commitment to long-term value.
            </motion.p>
          </div>

          {/* Bento: 1 wide left + 2 stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* First card — full width on mobile, left col on desktop */}
            <motion.div
              className="group col-span-1 bg-white border border-[#e8e8ed] rounded-2xl p-8 flex flex-col justify-between lg:min-h-[320px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-orange/10 border-2 border-orange flex items-center justify-center shadow-[0_4px_16px_rgba(232,121,43,0.15)] group-hover:bg-orange transition-all duration-300">
                    <TrendingUp className="w-5 h-5 text-orange group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-[#1d1d1f] text-[20px] font-bold leading-snug mb-4">Strategic Market Selection</h3>
                <div className="w-8 h-[2px] bg-orange mb-4 group-hover:w-14 transition-all duration-300" />
                <p className="text-[#6e6e73] text-[15px] leading-[1.75]">Identifying high-quality opportunities across real estate and private markets through rigorous research and market insight.</p>
              </div>
            </motion.div>

            {/* Right column — side by side on mobile, stacked on desktop */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {strategies.slice(1).map((item, i) => (
                <motion.div
                  key={item.title}
                  className="group bg-white border border-[#e8e8ed] rounded-2xl p-7 flex items-start gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange/10 border-2 border-orange flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(232,121,43,0.15)] group-hover:bg-orange transition-all duration-300 mt-0.5">
                    <item.icon className="w-5 h-5 text-orange group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1d1d1f] text-[17px] font-bold leading-snug mb-2">{item.title}</h3>
                    <p className="text-[#6e6e73] text-[14px] leading-[1.75]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
