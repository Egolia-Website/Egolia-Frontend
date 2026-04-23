"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years of Experience", description: "Delivering high-quality real estate projects across North America." },
  { value: "50+", label: "Projects Delivered", description: "Residential and commercial developments built to last." },
  { value: "$10M+", label: "Development Value", description: "Capital deployed across strategic growth markets." },
  { value: "100%", label: "Long-Term Focus", description: "Every decision guided by sustainable value creation." },
];

export default function Performance() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image src="/division/whatwedo.png" alt="" fill className="object-cover object-center" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">

        {/* Header — left aligned */}
        <div className="mb-16 max-w-xl">
          <motion.p
            className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Track Record
          </motion.p>
          <motion.h2
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] font-bold text-[#1d1d1f] leading-[1.06] tracking-[-0.025em]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Built On Experience<br />
            <span className="text-orange">And Execution.</span>
          </motion.h2>
        </div>

        {/* Stats — horizontal with vertical dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#e8e8ed] border border-[#e8e8ed] rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="group px-8 py-10 hover:bg-white transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-[3.2rem] sm:text-[3.8rem] font-bold text-[#0F1C3F] leading-none tracking-[-0.03em] mb-3 group-hover:text-orange transition-colors duration-300">
                {stat.value}
              </div>
              <div className="w-8 h-[2px] bg-orange mb-4" />
              <h3 className="text-[#1d1d1f] text-[14px] font-bold mb-2 tracking-wide">{stat.label}</h3>
              <p className="text-[#6e6e73] text-[13px] leading-[1.7]">{stat.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
