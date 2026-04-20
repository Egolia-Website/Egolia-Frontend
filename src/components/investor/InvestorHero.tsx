"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InvestorHero() {
  return (
    <section className="relative w-full min-h-[92vh] pt-[84px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/invest-hero.png"
        alt="Real estate investment"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Localized white overlay behind the content area */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[58%] bg-[radial-gradient(circle_at_34%_34%,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.84)_30%,rgba(255,255,255,0.46)_58%,rgba(255,255,255,0.10)_78%,rgba(255,255,255,0)_100%)] md:bg-[radial-gradient(circle_at_28%_40%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.76)_32%,rgba(255,255,255,0.36)_58%,rgba(255,255,255,0)_82%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 flex items-center pt-28 sm:pt-16 md:pt-20 lg:pt-12">
        <div className="max-w-[560px]">
          <motion.h1
            className="text-[#0F1C3F] text-[42px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] leading-[1.02] md:leading-[1.08] mb-5 md:mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Invest With{" "}
            <br />
            Conviction
          </motion.h1>

          <motion.p
            className="text-[#3a3a3f] text-[18px] sm:text-[18px] md:text-[19px] lg:text-[20px] leading-[1.75] max-w-[460px] mb-8 md:mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Egolia Group is a vertically integrated investment and development firm focused on delivering enduring value across real estate, finance, and emerging markets through disciplined strategy and execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Link
              href="/platform"
              className="inline-flex items-center gap-3 bg-[#0F1C3F] text-white text-[14px] font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-[#1A2B5C] transition-colors duration-300"
            >
              Explore Opportunities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
