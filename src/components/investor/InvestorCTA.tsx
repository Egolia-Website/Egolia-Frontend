"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "$2B+", label: "Assets Under Management" },
  { value: "4", label: "Operating Companies" },
  { value: "3M+", label: "Platform Users" },
];

export default function InvestorCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#f5f5f7] py-20 sm:py-28 px-6 text-center overflow-hidden">

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="text-[22vw] font-black text-[#1d1d1f]/[0.03] leading-none tracking-tighter whitespace-nowrap">
          EGOLIA
        </span>
      </div>

      {/* Top orange glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(232,121,43,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[680px] mx-auto">

        {/* Eyebrow */}
        <motion.p
          className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get Started
        </motion.p>

        {/* Heading */}
        <div className="overflow-hidden mb-5">
          <motion.h2
            className="text-[#1d1d1f] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.08]"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Begin Your{" "}
            <span className="text-orange">Investment Journey</span>
          </motion.h2>
        </div>

        {/* Body */}
        <motion.p
          className="text-[#3a3a3f] text-[15px] sm:text-[17px] leading-[1.75] mb-12"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Connect with our team to explore current and upcoming opportunities tailored for long-term value creation.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center gap-8 sm:gap-14 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] tracking-tight leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#6e6e73] font-medium tracking-wide leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-14 h-[1px] bg-[#1d1d1f]/10 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <Link
            href="/platform"
            className="w-full sm:w-auto bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[14px] font-semibold px-8 py-4 rounded-lg transition-colors duration-300 tracking-wide text-center"
          >
            Explore Opportunities
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-[#1d1d1f] text-[14px] font-semibold px-8 py-4 rounded-lg border border-[#1d1d1f]/15 hover:border-orange hover:text-orange transition-all duration-300 tracking-wide text-center"
          >
            Contact Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
