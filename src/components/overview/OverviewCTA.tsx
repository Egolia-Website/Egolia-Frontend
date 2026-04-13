"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OverviewCTA() {
  return (
    <section className="bg-navy-dark py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          className="w-3 h-3 bg-orange mx-auto mb-10 rotate-45"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        />

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Start Your Journey
        </motion.h2>

        <motion.div
          className="w-16 h-[2px] bg-orange mx-auto mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.p
          className="text-white/60 max-w-xl mx-auto text-xl leading-[1.7] mb-14 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Whether You&apos;re An Investor, Developer, Or Strategic Partner — Egolia Offers Opportunities To Grow And Succeed Together.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            href="/investor"
            className="text-white text-lg font-medium border-b-2 border-white/30 pb-1 hover:border-orange hover:text-orange transition-all duration-300"
          >
            For Investors
          </Link>
          <Link
            href="/platform"
            className="text-white text-lg font-medium border-b-2 border-white/30 pb-1 hover:border-orange hover:text-orange transition-all duration-300"
          >
            Our Platform
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
