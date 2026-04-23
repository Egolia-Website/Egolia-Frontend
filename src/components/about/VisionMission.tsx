"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Compass } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="overflow-hidden relative bg-[#f5f5f7]">
      <Image src="/images/companyy.png" alt="" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-white/80" />
<div className="relative z-10 max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-14 py-16 md:py-28">

        <motion.p
          className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-5 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Direction
        </motion.p>
        <motion.h2
          className="text-[2rem] sm:text-[2.6rem] font-bold text-[#0F1C3F] leading-[1.06] tracking-[-0.03em] mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Vision & <span className="text-orange">Mission.</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Vision card */}
          <motion.div
            className="relative w-full lg:w-1/2 bg-white border border-[#e8e8ed] rounded-2xl px-8 sm:px-10 py-10 overflow-hidden group hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-orange/[0.05] blur-[80px] pointer-events-none" />

            {/* Giant watermark */}
            <span className="absolute -bottom-6 -right-4 text-[16rem] font-black text-[#0F1C3F]/[0.03] leading-none select-none pointer-events-none">V</span>

            <div className="relative z-10 text-center">
              {/* Top accent */}
              <div className="w-12 h-[3px] bg-orange mb-10 mx-auto" />

              <div className="w-14 h-14 rounded-2xl bg-orange/10 border-2 border-orange flex items-center justify-center shadow-[0_4px_20px_rgba(232,121,43,0.18)] mb-8 group-hover:bg-orange transition-all duration-300 mx-auto">
                <Eye className="w-6 h-6 text-orange group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
              </div>

              <p className="text-orange text-[13px] font-bold tracking-[0.35em] uppercase mb-4">Vision</p>

              <p className="text-[#1d1d1f] text-[16px] leading-[1.85]">
                We envision a future where sophisticated investment infrastructure is not reserved for the few — built with the discipline, intelligence, and transparency that every investor deserves.
              </p>
            </div>
          </motion.div>

          {/* Mission card */}
          <motion.div
            className="relative w-full lg:w-1/2 bg-white border border-[#e8e8ed] rounded-2xl px-8 sm:px-10 py-10 overflow-hidden group hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          >
            {/* Ambient glow */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-orange/[0.05] blur-[80px] pointer-events-none" />

            {/* Giant watermark */}
            <span className="absolute -bottom-6 -right-4 text-[16rem] font-black text-[#0F1C3F]/[0.03] leading-none select-none pointer-events-none">M</span>

            <div className="relative z-10 text-center">
              {/* Top accent */}
              <div className="w-12 h-[3px] bg-orange mb-10 mx-auto" />

              <div className="w-14 h-14 rounded-2xl bg-orange/10 border-2 border-orange flex items-center justify-center shadow-[0_4px_20px_rgba(232,121,43,0.25)] mb-8 group-hover:bg-orange transition-all duration-300 mx-auto">
                <Compass className="w-6 h-6 text-orange group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
              </div>

              <p className="text-orange text-[13px] font-bold tracking-[0.35em] uppercase mb-4">Mission</p>

              <p className="text-[#1d1d1f] text-[16px] leading-[1.85]">
                Through an integrated platform of development, capital, research, and distribution — Egolia compounds advantage at every layer, creating durable outcomes for investors and communities alike.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
