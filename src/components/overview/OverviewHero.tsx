"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OverviewHero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/skyscrapers.jpg"
          alt="City skyline"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 w-full text-center py-20">
        <motion.div
          className="w-14 h-[3px] bg-orange mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 56 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-sans text-white leading-[1] tracking-[-0.02em] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          One Platform.
          <br />
          <span className="text-orange">Multiple Opportunities.</span>
        </motion.h1>

        <motion.p
          className="text-white/70 text-xl md:text-2xl leading-[1.7] max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Egolia Group Brings Together Development, Investment, Research, And Innovation Under One Vertically Integrated Platform.
        </motion.p>
      </div>
    </section>
  );
}
