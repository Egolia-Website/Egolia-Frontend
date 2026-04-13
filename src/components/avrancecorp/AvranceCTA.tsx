"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AvranceCTA() {
  return (
    <section className="bg-[#2A2A2A] py-24 md:py-36 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        {/* Small decorative mark */}
        <motion.div
          className="w-3 h-3 bg-orange mx-auto mb-10 rotate-45"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        />

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Partner With Us On
          <br />
          <span className="italic font-light">Future Developments</span>
        </motion.h2>

        <motion.div
          className="w-14 h-[2px] bg-orange mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 56 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />

        <motion.p
          className="text-white/55 text-xl leading-[1.8] max-w-2xl mx-auto mb-12 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Explore Development Opportunities Or Connect With Our Team To Learn
          More About AvranceCorp&apos;s Projects And Strategic Initiatives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Link
            href="/contact"
            className="inline-block text-white text-lg font-semibold border-b-2 border-orange pb-1 hover:text-orange transition-colors duration-300 tracking-wide"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
