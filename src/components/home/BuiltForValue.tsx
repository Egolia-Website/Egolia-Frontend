"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "$5B+", label: "Development Pipeline", sub: "Across active projects" },
  { value: "7,000+", label: "Units In Portfolio", sub: "Residential & mixed-use" },
  { value: "150+", label: "Years Combined Experience", sub: "Across all leadership" },
  { value: "4", label: "Integrated Companies", sub: "One unified platform" },
];

export default function BuiltForValue() {
  return (
    <section className="relative bg-[#070E1C] py-28 md:py-36 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange/[0.05] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Top: heading + image split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left heading */}
          <div>
            <motion.span
              className="inline-block text-orange text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Impact
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-sans text-white leading-[1.05] mb-7"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Built for{" "}
              <span className="text-orange">long-term</span>{" "}
              value at scale.
            </motion.h2>
            <motion.p
              className="text-white/45 text-base leading-[1.8] max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              From sourcing capital to delivering returns, Egolia&apos;s integrated platform is purpose-built to create measurable, lasting value for investors and communities alike.
            </motion.p>
          </div>

          {/* Right image in a premium rounded frame */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/partnering.jpg"
                alt="Egolia investors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070E1C]/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats row — 4 glassmorphism cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 md:p-8 hover:bg-white/[0.08] hover:border-orange/20 transition-all duration-400 group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-sans text-orange font-bold mb-2 group-hover:text-orange-light transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-white/75 text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-white/30 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
