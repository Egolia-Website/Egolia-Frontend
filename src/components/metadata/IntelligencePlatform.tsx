"use client";

import { motion } from "framer-motion";
import { Database, LineChart, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Database className="w-6 h-6" strokeWidth={1.4} />,
    title: "Proprietary Data Systems",
    description: "Structured data pipelines that aggregate, clean, and process complex datasets into reliable, decision-ready intelligence across markets.",
  },
  {
    icon: <LineChart className="w-6 h-6" strokeWidth={1.4} />,
    title: "Advanced Analytics",
    description: "Quantitative models and analytical frameworks designed to evaluate performance, assess risk exposure, and identify high-value opportunities.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" strokeWidth={1.4} />,
    title: "Actionable Intelligence",
    description: "Translating complex data into clear, strategic insights that inform capital allocation decisions and long-term investment positioning.",
  },
];

export default function IntelligencePlatform() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Editorial split: heading left, feature list right */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left — sticky heading block */}
          <div className="lg:w-[40%] lg:sticky lg:top-32 lg:self-start">
            <motion.p
              className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Intelligence Platform
            </motion.p>
            <motion.h2
              className="text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.03em] mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Data-Led Insight
              <br />
              For Strategic
              <br />
              <span className="text-orange">Decision-Making</span>
            </motion.h2>
            <motion.div
              className="w-16 h-[2px] bg-orange mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.p
              className="text-[#6e6e73] text-[16px] leading-[1.8]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our research platform combines advanced analytics, proprietary data, and market intelligence to uncover high-value opportunities and support informed capital allocation.
            </motion.p>
          </div>

          {/* Right — stacked feature rows */}
          <div className="lg:w-[60%] divide-y divide-[#e8e8ed]">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                className="group flex gap-6 py-10 first:pt-0 last:pb-0"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white group-hover:bg-orange transition-colors duration-300 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#1d1d1f] text-[18px] font-bold mb-3">{item.title}</h3>
                  <p className="text-[#6e6e73] text-[15px] leading-[1.8]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
