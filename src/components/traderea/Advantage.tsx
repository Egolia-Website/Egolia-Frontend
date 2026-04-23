"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, PieChart, Globe, Shield } from "lucide-react";

const advantages = [
  {
    number: "01",
    icon: <Zap className="w-7 h-7" strokeWidth={1.4} />,
    title: "Instant Liquidity",
    description: "Enter and exit positions with ease without the traditional constraints of real estate.",
  },
  {
    number: "02",
    icon: <PieChart className="w-7 h-7" strokeWidth={1.4} />,
    title: "Fractional Access",
    description: "Participate in high-value assets without the need for full capital commitment.",
  },
  {
    number: "03",
    icon: <Globe className="w-7 h-7" strokeWidth={1.4} />,
    title: "Borderless Opportunities",
    description: "Unlock access to high-value properties across global markets.",
  },
  {
    number: "04",
    icon: <Shield className="w-7 h-7" strokeWidth={1.4} />,
    title: "Institutional-Grade Security",
    description: "Built on a transparent, regulated infrastructure designed for trust and reliability.",
  },
];

export default function Advantage() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The TradeREA Advantage
          </motion.p>
          <motion.h2
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] mb-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Redefining Real Estate Access
          </motion.h2>
          <motion.p
            className="text-[#6e6e73] text-[17px] sm:text-[18px] leading-[1.8] font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Unlock liquidity, access, and control in a market traditionally limited by time and capital.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e8e8ed] rounded-2xl overflow-hidden">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              className={`group relative p-8 overflow-hidden transition-all duration-300 hover:bg-[#0F1C3F]
                ${i < 3 ? "border-r border-[#e8e8ed] lg:border-r" : ""}
                ${i < 2 ? "sm:border-b sm:border-[#e8e8ed] lg:border-b-0" : ""}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              {/* Large faded number */}
              <span className="absolute -top-4 -right-2 text-[6rem] font-bold text-[#e8e8ed] leading-none select-none group-hover:text-white/10 transition-colors duration-300">
                {item.number}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white mb-8 group-hover:bg-orange transition-colors duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-[#1d1d1f] text-[17px] font-bold leading-snug mb-3 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <div className="w-6 h-[2px] bg-orange mb-4" />
              <p className="relative z-10 text-[#6e6e73] text-[14px] leading-[1.75] group-hover:text-white/70 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
