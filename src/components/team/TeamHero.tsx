"use client";

import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <section className="bg-navy py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          className="w-14 h-[3px] bg-orange mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 56 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          The People Behind
          <br />
          <span className="text-orange italic">Egolia Group</span>
        </motion.h1>

        <motion.p
          className="text-white/55 text-xl leading-[1.7] mt-10 max-w-2xl mx-auto font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A Team Of Experienced Professionals Driving Egolia Group&apos;s Vision Across Real Estate, Finance, And Strategic Development.
        </motion.p>
      </div>
    </section>
  );
}
