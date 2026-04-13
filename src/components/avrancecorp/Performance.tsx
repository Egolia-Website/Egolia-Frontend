"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "$10M+", label: "Development Value" },
  { value: "Long-Term", label: "Value Creation" },
];

export default function Performance() {
  return (
    <section className="bg-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Performance
          </motion.p>

          <motion.div
            className="w-14 h-[2px] bg-orange mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          />

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Built On Experience
            <br />
            <span className="italic font-light">And Execution</span>
          </motion.h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`relative text-center py-8 md:py-10 ${
                i < stats.length - 1 ? "md:border-r md:border-navy/10" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
            >
              {/* Orange top accent */}
              <motion.div
                className="w-8 h-[2px] bg-orange mx-auto mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              />
              <div className="text-4xl md:text-5xl font-light text-navy italic mb-4 tracking-tight">
                {stat.value}
              </div>
              <p className="text-navy/75 text-sm md:text-base tracking-wide font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-16 h-[1px] bg-navy/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </section>
  );
}
