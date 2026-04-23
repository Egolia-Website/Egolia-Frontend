"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row-reverse min-h-[85vh]">

        {/* Right: Image */}
        <motion.div
          className="relative w-full lg:w-[50%] min-h-[360px] lg:min-h-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/glass-tower.jpg"
            alt="Egolia — Investment Platform"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />
        </motion.div>

        {/* Right: Content */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">

          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Egolia
          </motion.p>

          <motion.h2
            className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-bold text-[#0F1C3F] leading-[1.06] tracking-[-0.03em] mb-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A Vertically Integrated
            <br />
            <span className="text-orange">Investment Platform</span>
          </motion.h2>

          <motion.div
            className="w-16 h-[2px] bg-orange mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.p
            className="text-[#6e6e73] text-[17px] sm:text-[18px] leading-[1.85] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Egolia Group is a multi-sector investment and development firm focused on creating long-term value through strategic execution across real estate, finance, and emerging markets.
          </motion.p>

          <motion.p
            className="text-[#6e6e73] text-[17px] sm:text-[18px] leading-[1.85]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            By integrating acquisition, development, and asset management, we maintain control across the entire investment lifecycle — ensuring efficiency, transparency, and consistent performance.
          </motion.p>


        </div>
      </div>
    </section>
  );
}
