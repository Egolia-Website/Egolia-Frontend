"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Creativity",
    description: "We Think Beyond Conventional Frameworks To Unlock Opportunities Others Miss.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovative Thinking",
    description: "Technology And Data Intelligence Drive Every Decision Across Our Platform.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Rapid Solutions",
    description: "Operational Excellence Allows Us To Move Quickly While Maintaining Quality And Discipline.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Top-Notch Support",
    description: "Our Teams Are Dedicated To Delivering The Highest Standards Of Service To Partners.",
  },
];

export default function DisciplinedInvesting() {
  return (
    <section className="py-24 md:py-32 bg-gray-light border-t border-gray-medium">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

        {/* Center heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-orange" />
            <span className="text-orange text-xs font-bold tracking-[0.18em] uppercase">Our Approach</span>
            <div className="w-8 h-[2px] bg-orange" />
          </div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-sans text-navy mb-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            A Disciplined Approach To Investing
          </motion.h2>

          <motion.p
            className="text-navy/55 max-w-xl mx-auto text-base md:text-lg leading-[1.7]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We Take A Long-Term, Disciplined Approach—Focusing On Strategic Capital Allocation, Operational Excellence, And Innovation To Create Sustainable Value.
          </motion.p>
        </div>

        {/* 4 approach cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-medium divide-y sm:divide-y-0 sm:divide-x divide-gray-medium">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white p-8 md:p-10 group hover:bg-navy transition-colors duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="text-orange mb-6 group-hover:text-orange-light transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-navy text-lg font-bold mb-3 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-navy/55 text-sm leading-[1.7] group-hover:text-white/60 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
