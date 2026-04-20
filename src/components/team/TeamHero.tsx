"use client";

import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <section className="bg-white pt-14 pb-0 text-center">
      <div className="max-w-[800px] mx-auto px-6">

        <motion.h1
          className="text-[#1d1d1f] text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.15] mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          The People Behind
          <br />
          <span className="text-orange">Egolia Group</span>
        </motion.h1>

        <motion.p
          className="text-[#6e6e73] text-[15px] leading-[1.75] max-w-md mx-auto"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          A team of experienced professionals dedicated to building long-term value across real estate, capital markets, and digital infrastructure.
        </motion.p>

      </div>
    </section>
  );
}
