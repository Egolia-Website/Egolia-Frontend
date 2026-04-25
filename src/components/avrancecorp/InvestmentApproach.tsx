"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ClipboardList, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search className="w-7 h-7" strokeWidth={1.4} />,
    title: "Identify",
    description: "We identify high-potential opportunities through deep market research, data analysis, and strategic positioning.",
  },
  {
    number: "02",
    icon: <ClipboardList className="w-7 h-7" strokeWidth={1.4} />,
    title: "Plan",
    description: "Every project is guided by detailed planning, financial discipline, and a clear long-term vision.",
  },
  {
    number: "03",
    icon: <Zap className="w-7 h-7" strokeWidth={1.4} />,
    title: "Execute",
    description: "We deliver with precision through strong partnerships, operational excellence, and hands-on oversight.",
  },
  {
    number: "04",
    icon: <TrendingUp className="w-7 h-7" strokeWidth={1.4} />,
    title: "Optimize",
    description: "We continuously refine and enhance asset performance to maximize long-term value and returns.",
  },
];

export default function InvestmentApproach() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image src="/division/philo.png" alt="" fill className="object-cover object-center" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Approach
          </motion.p>
          <motion.h2
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A Structured Investment Process
          </motion.h2>
          <motion.p
            className="text-[#6e6e73] text-[17px] leading-[1.8] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our strategy is built on disciplined research, strategic execution, and long-term value creation across every stage of the development lifecycle.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="relative">

          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[1.5px] bg-[#e8e8ed] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="group bg-white border border-[#e8e8ed] rounded-2xl p-7 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                {/* Icon circle */}
                <div className="w-[52px] h-[52px] rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white mx-auto mb-5 group-hover:bg-orange transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Step number badge */}
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-orange bg-orange/10 rounded-full px-3 py-1 mb-4">
                  STEP {step.number}
                </span>

                <h3 className="text-[#1d1d1f] text-[18px] font-bold leading-snug mb-3">{step.title}</h3>
                <div className="w-6 h-[2px] bg-orange mx-auto mb-4" />
                <p className="text-[#6e6e73] text-[14px] leading-[1.75]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
