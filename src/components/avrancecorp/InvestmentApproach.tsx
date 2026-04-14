"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Identify",
    description:
      "We Identify High-Potential Opportunities Through Deep Market Research, Data Analysis, And Strategic Positioning.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Every Project Is Guided By Detailed Planning, Financial Discipline, And A Clear Long-Term Vision.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We Deliver With Precision Through Strong Partnerships, Operational Excellence, And Hands-On Oversight.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We Continuously Refine And Enhance Asset Performance To Maximize Long-Term Value.",
  },
];

export default function InvestmentApproach() {
  return (
    <section className="bg-[#3A3A3A] py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Approach
          </motion.p>

          <motion.div
            className="w-14 h-[2px] bg-orange mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          />

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            A Structured
            <br />
            <span className="italic font-light">Investment Process</span>
          </motion.h2>

          <motion.p
            className="text-white/70 text-xl leading-[1.8] max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Investment Strategy Is Built On Disciplined Research, Strategic
            Execution, And Long-Term Value Creation Across Every Stage Of The
            Lifecycle.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <motion.div
            className="hidden md:block absolute top-0 left-0 right-0 h-[2px] bg-white/15"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          {/* Orange dots on the line */}
          <div className="hidden md:flex absolute top-0 left-0 right-0 justify-between">
            {steps.map((_, i) => (
              <motion.div
                key={i}
                className="relative -top-[5px] w-3 h-3 bg-orange rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + i * 0.15,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border border-orange/30 animate-ping" />
              </motion.div>
            ))}
          </div>

          {/* Step columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              >
                {/* Step number */}
                <span className="text-orange/30 text-5xl font-bold absolute -top-2 right-0 select-none hidden md:block">
                  {step.number}
                </span>
                <h3 className="text-white text-xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-white/70 text-base leading-[1.8] font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
