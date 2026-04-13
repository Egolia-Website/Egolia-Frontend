"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Discipline",
    description:
      "Rigorous Analysis And Structured Decision-Making Applied To Every Opportunity.",
  },
  {
    title: "Market Insight",
    description:
      "Deep Market Intelligence To Identify And Position Assets For Success.",
  },
  {
    title: "Value Creation",
    description:
      "High-Quality Assets Designed For Sustainable Returns And Impact.",
  },
  {
    title: "Strategic Growth",
    description:
      "Scalable Development Strategies Built For Long-Term Portfolio Expansion.",
  },
];

export default function AboutAvrance() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left content */}
          <div>
            {/* Subtitle */}
            <motion.p
              className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About AvranceCorp
            </motion.p>

            {/* Orange divider */}
            <motion.div
              className="w-14 h-[2px] bg-orange mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            />

            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              A Development Platform Built On Precision And{" "}
              <span className="italic font-light">Long-Term Value</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-navy/75 text-xl leading-[1.85] mb-10 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AvranceCorp Developments Is A Real Estate Development Platform
              Focused On Delivering High-Quality Residential And Commercial
              Projects. With A Disciplined Approach To Planning, Execution, And
              Capital Allocation, The Company Creates Assets Designed For
              Long-Term Performance And Sustainable Growth. Every Decision Is
              Guided By Precision, Market Intelligence, And A Commitment To
              Building Communities That Endure.
            </motion.p>

            {/* Logo text divider */}
            <motion.div
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-[1px] flex-1 bg-navy/10" />
              <span className="text-navy/30 text-sm font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                AvranceCorp
              </span>
              <div className="h-[1px] flex-1 bg-navy/10" />
            </motion.div>

            {/* 2x2 feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="relative pl-5 border-l-2 border-orange/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                >
                  <h3 className="text-navy text-lg font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-navy/75 text-sm leading-[1.75] font-semibold">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <motion.div
            className="relative lg:sticky lg:top-24"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/images/glass-building.jpg"
                alt="Modern glass building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative orange corner accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-orange/40 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
