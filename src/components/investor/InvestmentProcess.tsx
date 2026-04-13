"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Acquisition",
    description: "We identify high-potential opportunities through market research, strategic sourcing, and rigorous evaluation.",
  },
  {
    number: "2",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
      </svg>
    ),
    title: "Development & Execution",
    description: "We design, develop, and execute projects with precision, ensuring quality, efficiency, and long-term viability.",
  },
  {
    number: "3",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Asset Management",
    description: "We actively manage assets to optimize performance, enhance value, and deliver consistent long-term returns.",
  },
];

export default function InvestmentProcess() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Heading block */}
        <motion.p
          className="text-center text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-4"
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
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          A Structured Investment Process
        </motion.h2>

        <motion.p
          className="text-center text-navy/75 text-xl leading-[1.7] max-w-2xl mx-auto mb-24 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our investment strategy is built on disciplined research, strategic execution, and long-term value creation across every stage of the lifecycle.
        </motion.p>

        {/* Timeline section */}
        <div className="relative">
          {/* Horizontal connecting orange line */}
          <motion.div
            className="hidden md:block absolute top-[28px] left-[16.67%] right-[16.67%] h-[2px] bg-orange/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.15 }}
              >
                {/* Numbered orange circle */}
                <div className="w-14 h-14 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-10 relative z-10">
                  {step.number}
                </div>

                {/* Card with top orange border */}
                <div className="border-t-[3px] border-t-orange bg-white border-x border-b border-navy/8 p-10 hover:shadow-[0_12px_40px_rgba(15,28,63,0.08)] hover:-translate-y-1 transition-all duration-500">
                  <div className="text-orange mb-6 flex justify-center">{step.icon}</div>
                  <h3 className="text-navy text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-navy/75 text-base leading-[1.7] font-semibold">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
