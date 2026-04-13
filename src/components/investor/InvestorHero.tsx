"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InvestorHero() {
  return (
    <section className="bg-navy min-h-[calc(100vh-84px)] relative overflow-hidden">
      {/* Right side image */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full">
        <Image
          src="/images/skyscrapers.jpg"
          alt="City skyscrapers"
          fill
          className="object-cover"
          priority
          sizes="60vw"
        />
        {/* Gradient fade from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 min-h-[calc(100vh-84px)] flex flex-col justify-center">
        <div className="max-w-xl py-20">
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-[2px] bg-orange" />
            <span className="text-orange text-sm font-semibold tracking-[0.08em] uppercase">For Investors</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[0.95] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Invest With
            <br />
            <span className="text-orange italic">Confidence</span>
          </motion.h1>

          <motion.p
            className="text-white/55 text-xl leading-[1.7] mt-10 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Egolia Group Is A Vertically Integrated Investment And Development Firm Focused On Delivering Long-Term Value Across Real Estate, Finance, And Emerging Markets.
          </motion.p>

          <motion.div
            className="flex items-center gap-8 mt-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/overview"
              className="text-white text-lg font-medium border-b-2 border-orange pb-1 hover:text-orange transition-colors duration-300"
            >
              Explore Opportunities
            </Link>
            <Link
              href="/contact"
              className="text-white/40 text-lg font-medium hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
