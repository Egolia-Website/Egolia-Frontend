"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OverviewCTA() {
  return (
    <section className="bg-navy-dark py-24 sm:py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          className="w-3 h-3 bg-orange mx-auto mb-10 rotate-45"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        />

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Start Your Journey
        </motion.h2>

        <motion.div
          className="w-16 h-[2px] bg-orange mx-auto mb-8 sm:mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.p
          className="text-white/70 max-w-xl mx-auto text-base sm:text-xl leading-[1.7] mb-10 sm:mb-14 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Whether You&apos;re An Investor, Developer, Or Strategic Partner — Egolia Offers Opportunities To Grow And Succeed Together.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            href="/investor"
            className="w-full sm:w-auto px-10 py-4 bg-orange text-white text-base font-bold hover:bg-orange/90 transition-colors duration-300 text-center"
          >
            For Investors
          </Link>
          <Link
            href="/investor"
            className="w-full sm:w-auto px-10 py-4 border-2 border-white/25 text-white text-base font-bold hover:border-orange hover:text-orange transition-all duration-300 text-center"
          >
            Our Platform
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-4 border-2 border-white/25 text-white text-base font-bold hover:border-orange hover:text-orange transition-all duration-300 text-center"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
