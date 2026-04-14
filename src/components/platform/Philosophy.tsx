"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="bg-navy-dark py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.p
          className="text-orange text-base font-semibold tracking-[0.08em] mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Philosophy
        </motion.p>

        <motion.div
          className="w-12 h-[2px] bg-orange mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-white italic leading-[1.15] mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Backed By Insight.
          <br />
          Driven By Execution.
        </motion.h2>

        <motion.p
          className="text-white/70 text-xl leading-[1.7] max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Egolia Group Combines Market Research, Strategic Planning, And Disciplined Execution To Deliver Consistent Performance Across Its Companies.
        </motion.p>
      </div>
    </section>
  );
}
