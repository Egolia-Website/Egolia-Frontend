"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Layers, FileText, Repeat2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Target className="w-6 h-6" strokeWidth={1.4} />,
    number: "01",
    title: "Source High-Conviction Assets",
    description: "Projects begin with direct origination, land positioning, development strategy, and active advancement through the entitlement and execution cycle.",
  },
  {
    icon: <Layers className="w-6 h-6" strokeWidth={1.4} />,
    number: "02",
    title: "Structure The Right Capital Stack",
    description: "Each opportunity is matched with an appropriate financing strategy, balancing downside protection, execution needs, and investor alignment.",
  },
  {
    icon: <FileText className="w-6 h-6" strokeWidth={1.4} />,
    number: "03",
    title: "Translate Complexity Into Access",
    description: "Research, documentation, and digital workflows are designed to make sophisticated opportunities clearer and more accessible to qualified participants.",
  },
  {
    icon: <Repeat2 className="w-6 h-6" strokeWidth={1.4} />,
    number: "04",
    title: "Build For Repeatable Distribution",
    description: "TradeREA extends the platform from a project sponsor model toward a scalable distribution framework with technology-led operating leverage.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.4} />,
    number: "05",
    title: "Create A Path Toward Liquidity",
    description: "The long-term objective is to support earlier exit pathways and more efficient capital recycling through compliant market infrastructure and strategic partners.",
  },
];

export default function InvestmentProcess() {
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
            How It Compounds
          </motion.p>
          <motion.h2
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] mb-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            From Origination
            <br />
            <span className="text-orange">To Future Liquidity.</span>
          </motion.h2>
          <motion.p
            className="text-[#6e6e73] text-[17px] leading-[1.8] max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Egolia's advantage is the ability to carry opportunities through multiple layers of value creation instead of stopping at a single transaction.
          </motion.p>
        </div>

        {/* 5 steps — horizontal scroll on mobile, 5 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="group bg-white border border-[#e8e8ed] rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white group-hover:bg-orange transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="text-[2rem] font-bold text-[#e8e8ed] leading-none select-none group-hover:text-orange/20 transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-[#1d1d1f] text-[15px] font-bold leading-snug mb-3">{step.title}</h3>
              <div className="w-5 h-[2px] bg-orange mb-3" />
              <p className="text-[#6e6e73] text-[13px] leading-[1.75]">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
