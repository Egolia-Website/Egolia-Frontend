"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "$5B+", label: "Development Pipeline" },
  { value: "7,000+", label: "Units In Portfolio" },
  { value: "50+", label: "Years Combined Experience" },
  { value: "5", label: "Integrated Companies" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#070E1C] overflow-hidden flex flex-col">

      {/* Background image with layered overlays */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-city.jpg"
          alt="Egolia"
          fill
          className="object-cover opacity-[0.45] sm:opacity-[0.22]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070E1C] sm:from-[#070E1C] via-[#070E1C]/50 sm:via-[#070E1C]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070E1C] via-transparent to-[#070E1C]/30 sm:to-[#070E1C]/50" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-24 left-[8%] w-[500px] h-[500px] rounded-full bg-orange/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-[12%] w-[400px] h-[400px] rounded-full bg-blue/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-navy-light/20 blur-[80px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 w-full py-24">
          <div className="max-w-3xl">

            {/* Glassmorphism badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 mb-10 px-5 py-2.5 bg-white/[0.08] backdrop-blur-md border border-white/[0.14] rounded-full"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              <span className="text-white/70 text-[11px] font-semibold tracking-[0.15em] uppercase">
                Premium Investment Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-sans text-white leading-[0.92] tracking-[-0.02em] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              Building<br />
              Long-Term<br />
              <span className="text-orange">Value.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-white/50 text-lg md:text-xl leading-[1.8] max-w-md mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Egolia is an investment company building sustainable wealth through strategic capital, innovation, and integrated platforms.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link
                href="/platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-orange text-white font-bold text-sm rounded-full tracking-wide hover:bg-orange-light transition-colors duration-300 shadow-[0_8px_32px_rgba(232,121,43,0.35)]"
              >
                Explore Our Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/[0.08] backdrop-blur-sm border border-white/[0.18] text-white font-bold text-sm rounded-full tracking-wide hover:bg-white/[0.14] hover:border-white/30 transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom: glassmorphism stats bar */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 w-full pb-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-2xl px-6 py-5 hover:bg-white/[0.1] transition-colors duration-300"
            >
              <div className="text-2xl md:text-3xl font-sans text-orange font-bold mb-1">{stat.value}</div>
              <div className="text-white/45 text-xs font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
