"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CapitalCTA() {
  return (
    <section className="bg-navy-dark py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white italic mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Invest With Confidence
        </motion.h2>

        <motion.div
          className="w-16 h-[2px] bg-gold mx-auto mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p
          className="text-white/55 max-w-xl mx-auto text-xl leading-[1.7] mb-12 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Partner With AvranceCapital To Access Strategically Structured Real Estate Investment Opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link
            href="/contact"
            className="text-white text-lg font-semibold border-b-2 border-gold pb-1 hover:text-gold transition-colors duration-300"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
