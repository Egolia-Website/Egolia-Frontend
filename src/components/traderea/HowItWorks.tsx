"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, DollarSign, ArrowLeftRight } from "lucide-react";

const steps = [
  {
    icon: <Building2 className="w-7 h-7" strokeWidth={1.4} />,
    title: "Browse Assets",
    description: "Explore curated real estate opportunities across residential and commercial markets.",
  },
  {
    icon: <DollarSign className="w-7 h-7" strokeWidth={1.4} />,
    title: "Invest Instantly",
    description: "Buy fractional ownership in properties with the ease of trading stocks.",
  },
  {
    icon: <ArrowLeftRight className="w-7 h-7" strokeWidth={1.4} />,
    title: "Trade Anytime",
    description: "Enter and exit positions with real-time liquidity and full market access.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image src="/division/philo.png" alt="" fill className="object-cover object-center" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14">

        <div className="text-center mb-16">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Platform
          </motion.p>
          <motion.h2
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] mb-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            How TradeREA Works
          </motion.h2>
          <motion.p
            className="text-[#6e6e73] text-[17px] leading-[1.8] max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A simple, transparent way to access real estate like never before.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="group bg-white border border-[#e8e8ed] rounded-2xl p-7 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white mx-auto mb-6 group-hover:bg-orange transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-[#1d1d1f] text-[17px] font-bold leading-snug mb-3">{step.title}</h3>
              <div className="w-6 h-[2px] bg-orange mx-auto mb-4" />
              <p className="text-[#6e6e73] text-[14px] leading-[1.75]">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
