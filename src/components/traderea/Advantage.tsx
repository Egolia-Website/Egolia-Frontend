"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Instant Liquidity",
    description: "Enter And Exit Positions With Ease Without The Traditional Constraints Of Real Estate.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
    title: "Fractional Access",
    description: "Enter And Exit Positions With Ease — Without The Traditional Constraints Of Real Estate.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
    title: "Borderless Opportunities",
    description: "Participate In High-Value Assets Without The Need For Full Capital Commitment.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Institutional-Grade Security",
    description: "Built On A Transparent, Regulated Infrastructure Designed For Trust And Reliability.",
  },
];

export default function Advantage() {
  return (
    <section className="bg-gray-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-4">The TradeREA Advantage</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans text-navy leading-[1.1]">
              Redefining Real Estate
              <br />
              <span className="font-light">Access</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-navy/70 text-xl leading-[1.7] max-w-lg font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Unlock Liquidity, Access, And Control In A Market Traditionally Limited By Time And Capital.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white p-8 border-t-[3px] border-orange group hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(15,28,63,0.08)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <div className="text-navy mb-6">
                {item.icon}
              </div>
              <h3 className="text-navy text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-navy/70 text-base leading-[1.7] font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
