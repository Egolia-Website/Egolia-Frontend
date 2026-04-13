"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Vertically Integrated",
    description: "We Control The Entire Investment Lifecycle — From Acquisition And Development To Management And Exit.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Disciplined Execution",
    description: "Every Decision Is Backed By Research, Structured Analysis, And A Long-Term Investment Perspective.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Sustainable Returns",
    description: "We Build For The Long Term — Creating Assets And Portfolios Designed To Compound Value Over Time.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovation-Led",
    description: "From Digital Platforms To Data Intelligence, We Leverage Technology To Unlock New Opportunities.",
  },
];

export default function WhyEgolia() {
  return (
    <section className="bg-gray-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.p
          className="text-center text-navy text-sm font-bold tracking-[0.1em] uppercase mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Egolia
        </motion.p>

        <motion.div
          className="w-12 h-[2px] bg-orange mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          What Sets Us Apart
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white p-10 border-l-[3px] border-orange group hover:shadow-[0_12px_40px_rgba(15,28,63,0.06)] transition-all duration-500"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="text-orange mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-navy text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-navy/75 text-lg leading-[1.7] font-semibold">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
