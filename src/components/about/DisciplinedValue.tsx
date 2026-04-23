"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const checkpoints = [
  {
    number: "01",
    title: "Strategic Market Selection",
    description: "Identifying high-potential markets through rigorous data analysis and on-the-ground intelligence.",
  },
  {
    number: "02",
    title: "Risk-Managed Execution",
    description: "Implementing proven frameworks to mitigate downside risk while maximizing upside potential.",
  },
  {
    number: "03",
    title: "Long-Term Value Creation",
    description: "Building assets and portfolios designed to deliver sustainable, compounding returns over time.",
  },
];

export default function DisciplinedValue() {
  return (
    <section className="relative overflow-hidden">
      <Image src="/division/philo.png" alt="" fill className="object-cover object-center" />

      <div className="relative z-10">

        {/* Top band — dark navy with heading */}
        <div className="bg-[#0F1C3F]/90 px-8 sm:px-16 lg:px-24 py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.p
                className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Approach
              </motion.p>
              <motion.h2
                className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4.5rem] font-bold text-white leading-[1.04] tracking-[-0.03em]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                A Disciplined Approach
                <br />
                <span className="text-orange">To Long-Term Value</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-white/60 text-[16px] sm:text-[17px] leading-[1.85] max-w-sm lg:pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Egolia Group, we combine strategic insight with disciplined execution to deliver sustainable growth across every stage of the investment lifecycle.
            </motion.p>
          </div>
        </div>

        {/* Bottom band — 3 step cards side by side */}
        <div className="bg-white/90 backdrop-blur-sm px-8 sm:px-16 lg:px-24 py-0">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e8ed]">
              {checkpoints.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="group py-14 px-8 sm:px-10 hover:bg-orange/5 transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <span className="block text-[4.5rem] font-black text-[#0F1C3F]/[0.07] leading-none mb-4 group-hover:text-orange/20 transition-colors duration-300 select-none">
                    {item.number}
                  </span>
                  <h3 className="text-[#0F1C3F] text-[18px] font-bold tracking-[-0.01em] mb-3 leading-snug">{item.title}</h3>
                  <div className="w-6 h-[2px] bg-orange mb-4" />
                  <p className="text-[#6e6e73] text-[14px] sm:text-[15px] leading-[1.8]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
