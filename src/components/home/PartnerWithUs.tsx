"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnerWithUs() {
  return (
    <section className="bg-navy py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.p
          className="text-white/40 text-lg italic mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Build Long-Term Value Together.
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Partner With Us
        </motion.h2>

        <motion.div
          className="w-16 h-[2px] bg-orange mx-auto mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.p
          className="text-white/55 max-w-2xl mx-auto text-xl leading-[1.7] mb-12 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          We Take A Long-Term, Disciplined Approach To Investing—Focusing On Strategic Capital Allocation, Operational Excellence, And Innovation To Create Sustainable Value Across Our Platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            href="/contact"
            className="inline-block text-white text-lg font-medium border-b-2 border-orange pb-1 hover:text-orange transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
