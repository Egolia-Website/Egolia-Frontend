"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background image */}
      <Image
        src="/images/backImage.png"
        alt="About Egolia"
        fill
        className="object-cover object-center"
        priority
      />


      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14 w-full py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — content */}
          <div className="w-full lg:w-[55%]">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-orange text-[12px] font-bold tracking-[0.35em] uppercase mb-8">About Egolia</p>
            </motion.div>

            <motion.h2
              className="text-[2.4rem] sm:text-[3.2rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] mb-6 text-balance"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A vertically integrated <span className="text-orange">investment</span> platform.
            </motion.h2>

            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#4a4a4a] text-[17px] leading-[1.8]">
                Egolia Group is a multi-sector investment and development firm focused on creating long-term value through strategic execution across real estate, finance, and emerging markets.
              </p>
              <p className="text-[#4a4a4a] text-[17px] leading-[1.8]">
                By integrating acquisition, development, and asset management, we maintain control across the entire investment lifecycle — ensuring efficiency, transparency, and consistent performance.
              </p>
            </motion.div>

            <div className="w-full h-[1px] bg-[#e8e8ed] mb-5" />

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange to-[#d4691e] flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(232,121,43,0.3)]">
                <Building2 className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[#0F1C3F] text-[14px] font-bold">Integrated. Disciplined. Future-Focused.</p>
                <p className="text-[#6e6e73] text-[13px]">That&apos;s the Egolia Advantage.</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — round image */}
          <motion.div
            className="hidden sm:flex w-full lg:w-[45%] justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="relative w-[340px] h-[480px] sm:w-[400px] sm:h-[560px] lg:w-[460px] lg:h-[620px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/trn.png"
                alt="Toronto"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
