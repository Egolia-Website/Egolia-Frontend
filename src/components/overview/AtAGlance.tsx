"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$5B+", label: "Development Pipeline" },
  { value: "7,000+", label: "Units In Portfolio" },
  { value: "150+", label: "Years Combined Experience" },
  { value: "4", label: "Integrated Companies" },
];

export default function AtAGlance() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange text-sm font-bold tracking-[0.15em] uppercase mb-4">Egolia At A Glance</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans text-navy leading-[1.1]">
              Building Long-Term Value Through
              <br />
              <span className="font-light">Disciplined Strategy</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-navy/70 text-base sm:text-xl leading-[1.7] font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Egolia Group Is A Multi-Sector Investment And Development Firm. We Combine Strategic Capital Allocation, Operational Excellence, And Innovation To Create Sustainable Value Across Real Estate, Finance, And Emerging Markets.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative text-center py-8 md:py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              {/* Vertical divider between stats on desktop */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-navy/15" />
              )}
              <div className="text-orange text-4xl sm:text-5xl md:text-[3.5rem] font-bold mb-2">{stat.value}</div>
              <p className="text-navy/70 text-sm sm:text-base font-semibold uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
