"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4", label: "Core Businesses" },
  { value: "1", label: "Integrated Platform" },
  { value: "Long-Term", label: "Investment Focus" },
  { value: "Data-Driven", label: "Decision Making" },
];

export default function AtAGlance() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange text-sm font-bold tracking-[0.1em] uppercase mb-4">Egolia At A Glance</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-[1.1]">
              Building Long-Term Value Through
              <br />
              <span className="italic font-light">Disciplined Strategy</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-navy/80 text-xl leading-[1.7] font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Egolia Group Is A Multi-Sector Investment And Development Firm. We Combine Strategic Capital Allocation, Operational Excellence, And Innovation To Create Sustainable Value Across Real Estate, Finance, And Emerging Markets.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white text-center py-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-light text-navy italic mb-3">{stat.value}</div>
              <p className="text-navy/75 text-base font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
