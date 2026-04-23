"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbulb, Zap, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: <Lightbulb className="w-6 h-6" strokeWidth={1.4} />,
    label: "Backed By Insight",
  },
  {
    icon: <Zap className="w-6 h-6" strokeWidth={1.4} />,
    label: "Driven By Execution",
  },
  {
    icon: <BarChart3 className="w-6 h-6" strokeWidth={1.4} />,
    label: "Consistent Performance",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background image */}
      <Image
        src="/division/philo.png"
        alt="Our Philosophy"
        fill
        className="object-cover object-center"
      />


      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12 text-center">

        {/* Eyebrow */}
        <motion.p
          className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Philosophy
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Backed By Insight.
          <br />
          <span className="text-orange">Driven By Execution.</span>
        </motion.h2>

        {/* Orange divider */}
        <motion.div
          className="w-12 h-[2px] bg-orange mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Description */}
        <motion.p
          className="text-[#4a5568] text-[17px] sm:text-[18px] leading-[1.8] max-w-2xl mx-auto mb-14 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Egolia Group combines market research, strategic planning, and disciplined execution to deliver consistent performance across its companies.
        </motion.p>

        {/* 3 icon pills */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {pillars.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-[#e8e8ed] rounded-full px-6 py-3 text-[#0F1C3F] text-[14px] font-semibold"
            >
              <span className="text-orange">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
