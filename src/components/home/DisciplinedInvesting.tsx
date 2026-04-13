"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Discipline",
    description: "We Apply Rigorous Analysis And Structured Decision-Making To Every Investment.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Long-Term Focus",
    description: "We Prioritize Sustainable Growth Over Short-Term Gains.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Strategic Execution",
    description: "We Combine Capital, Expertise, And Innovation To Deliver Consistent Results.",
  },
];

export default function DisciplinedInvesting() {
  return (
    <section className="py-24 md:py-32 bg-gray-light">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Center heading */}
        <motion.p
          className="text-center text-navy text-lg italic mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          For Investor
        </motion.p>

        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          A Disciplined Approach To Investing
        </motion.h2>

        <motion.div
          className="w-16 h-[2px] bg-orange mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p
          className="text-center text-navy/75 max-w-2xl mx-auto text-xl leading-[1.7] mb-20 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          We Take A Long-Term, Disciplined Approach To Investing—Focusing On Strategic Capital Allocation, Operational Excellence, And Innovation To Create Sustainable Value Across Our Platform.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white p-10 border-t-[3px] border-orange hover:shadow-[0_8px_30px_rgba(15,28,63,0.06)] transition-all duration-500 group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="text-orange mb-6 group-hover:text-orange-light transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-navy text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-navy/75 text-lg leading-[1.7] font-semibold">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
