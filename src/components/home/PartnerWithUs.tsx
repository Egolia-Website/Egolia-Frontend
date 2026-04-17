"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnerWithUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 md:py-40">

      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#070E1C]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-orange/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue/[0.06] blur-[140px] pointer-events-none" />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 mb-10 px-5 py-2.5 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            <span className="text-white/60 text-[11px] font-semibold tracking-[0.15em] uppercase">
              Let&apos;s Build Together
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-sans text-white leading-[1.0] tracking-[-0.02em] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Partner<br />
            <span className="text-orange">With Us.</span>
          </motion.h2>

          <motion.p
            className="text-white/45 text-base md:text-xl leading-[1.8] mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            We take a long-term, disciplined approach to investing — focusing on strategic capital allocation, operational excellence, and innovation to create sustainable value.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-orange text-white font-bold text-sm rounded-full tracking-wide hover:bg-orange-light transition-all duration-300 shadow-[0_8px_40px_rgba(232,121,43,0.35)]"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/investor"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/[0.08] backdrop-blur-sm border border-white/[0.18] text-white font-bold text-sm rounded-full tracking-wide hover:bg-white/[0.14] hover:border-white/30 transition-all duration-300"
            >
              Investor Relations
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
