"use client";

import { motion } from "framer-motion";
import { Eye, RefreshCw } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="bg-white py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="mb-20">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Vision & Mission
          </motion.p>
          <motion.h2
            className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] font-bold text-[#0F1C3F] leading-[1.06] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            What Drives Us
            <br />
            <span className="text-orange">Forward</span>
          </motion.h2>
        </div>

        {/* Two panels — full height, dramatic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Vision */}
          <motion.div
            className="group relative bg-[#f5f5f7] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Top orange bar */}
            <div className="h-[3px] bg-orange w-full" />

            <div className="p-12 md:p-16">
              {/* Large faded "V" watermark */}
              <span className="absolute top-6 right-8 text-[10rem] font-black text-[#0F1C3F]/[0.04] leading-none select-none">
                V
              </span>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#0F1C3F] flex items-center justify-center text-white mb-8">
                  <Eye className="w-8 h-8" strokeWidth={1.3} />
                </div>

                <p className="text-orange text-[13px] font-bold tracking-[0.25em] uppercase mb-3">Vision</p>
                <div className="w-10 h-[2px] bg-orange mb-6" />

                <p className="text-[#1d1d1f] text-[1.5rem] sm:text-[1.75rem] font-bold leading-[1.3] tracking-[-0.015em]">
                  To redefine how individuals and institutions access and benefit from high-quality investment opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="group relative bg-[#0F1C3F] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Top orange bar */}
            <div className="h-[3px] bg-orange w-full" />

            <div className="p-12 md:p-16">
              {/* Large faded "M" watermark */}
              <span className="absolute top-6 right-8 text-[10rem] font-black text-white/[0.04] leading-none select-none">
                M
              </span>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-orange flex items-center justify-center text-white mb-8">
                  <RefreshCw className="w-8 h-8" strokeWidth={1.3} />
                </div>

                <p className="text-orange text-[13px] font-bold tracking-[0.25em] uppercase mb-3">Mission</p>
                <div className="w-10 h-[2px] bg-orange mb-6" />

                <p className="text-white text-[1.5rem] sm:text-[1.75rem] font-bold leading-[1.3] tracking-[-0.015em]">
                  To deliver innovative, accessible, and performance-driven investment solutions backed by strategic development and disciplined execution.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
