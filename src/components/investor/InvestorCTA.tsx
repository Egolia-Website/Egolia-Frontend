"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function InvestorCTA() {
  return (
    <section className="bg-navy-dark py-32 md:py-40">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.p
          className="text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get Started
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Start Your Investment Journey
        </motion.h2>

        <motion.div
          className="w-16 h-[2px] bg-orange mx-auto mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.p
          className="text-white/55 max-w-xl mx-auto text-xl leading-[1.7] mb-14 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Connect with our team to explore current and upcoming investment opportunities.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            href="/overview"
            className="text-white text-lg font-medium border-b-2 border-white/30 pb-1 hover:border-orange hover:text-orange transition-all duration-300"
          >
            Explore Opportunities
          </Link>
          <Link
            href="/contact"
            className="text-orange text-lg font-medium border-b-2 border-orange pb-1 hover:text-orange-light transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
