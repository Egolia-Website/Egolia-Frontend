"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
    title: "Long-Term Investment Strategy",
    description: "We Focus On Sustainable Growth And Resilient Returns Across Market Cycles.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Access To Integrated Opportunities",
    description: "Gain Exposure To A Diversified Platform Spanning Development, Capital, And Innovation.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Disciplined Execution",
    description: "Our Approach Combines Deep Expertise, Rigorous Analysis, And Operational Excellence.",
  },
];

export default function PartneringGrowth() {
  return (
    <section className="bg-navy-dark">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-center">
          {/* Left content */}
          <div className="bg-navy p-10 md:p-16">
            <motion.p
              className="text-white/40 text-lg mb-5 italic"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              For Investor
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Partnering For
              <br />
              Long-Term Growth
            </motion.h2>

            <motion.p
              className="text-white/55 text-xl leading-[1.7] mb-12 max-w-md font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Egolia Partners With Investors To Deliver Long-Term Value Through Disciplined Strategies, Strategic Capital Allocation, And Access To Integrated Opportunities.
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-5 group"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 border border-gold/30 flex items-center justify-center text-gold group-hover:border-gold/60 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{feature.title}</h3>
                    <p className="text-white/55 text-base leading-[1.6] font-semibold">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[1/1] overflow-hidden">
              <Image
                src="/images/partnering.jpg"
                alt="Investors in modern office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
