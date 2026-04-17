"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CapitalCTA() {
  return (
    <section className="bg-navy-dark py-20 sm:py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-10"
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
          className="text-white/70 max-w-xl mx-auto text-xl leading-[1.7] mb-12 font-medium"
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
            className="inline-block px-12 py-4 bg-gold text-white text-base font-bold hover:bg-gold/90 transition-colors duration-300"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
