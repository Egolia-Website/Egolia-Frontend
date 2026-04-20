"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Acquisition",
    description:
      "We identify high-conviction opportunities through proprietary sourcing, in-depth market intelligence, and rigorous underwriting.",
  },
  {
    number: "2",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1.5 4.5m9-4.5l1.5 4.5m0 0H7.5" />
      </svg>
    ),
    title: "Development & Execution",
    description:
      "We deliver projects with precision — balancing design excellence, operational efficiency, and long-term durability.",
  },
  {
    number: "3",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Asset Management",
    description:
      "We actively manage and optimize assets to enhance performance, unlock value, and deliver consistent long-term returns.",
  },
];

export default function InvestmentProcess() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef}>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden">

        {/* Image banner with bottom fade */}
        <motion.div
          className="relative w-full h-[220px] sm:h-[280px] overflow-hidden"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/our-approach.png"
            alt="Our Approach"
            fill
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(255,255,255,0.8) 65%, white 90%)" }}
          />
        </motion.div>

        {/* Content */}
        <div className="bg-white px-5 sm:px-8 pt-6 pb-14">

          {/* Eyebrow */}
          <motion.p
            className="text-[11px] font-semibold tracking-[0.45em] uppercase text-orange mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Approach
          </motion.p>

          {/* Heading */}
          <div className="overflow-hidden mb-4">
            <motion.h2
              className="text-[#1d1d1f] text-3xl sm:text-4xl font-bold tracking-[-0.025em] leading-[1.08]"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              A Structured{" "}
              <span className="text-orange">Investment Framework</span>
            </motion.h2>
          </div>

          {/* Subtext */}
          <motion.p
            className="text-[#3a3a3f] text-[15px] leading-[1.75] mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Our approach is built on deep market insight, disciplined execution, and a commitment to creating sustainable value at every stage of the investment lifecycle.
          </motion.p>

          {/* Vertical timeline steps */}
          <div className="relative">
            {/* Vertical connecting line */}
            <motion.div
              className="absolute left-[17px] top-[36px] bottom-[36px] w-[2px] bg-gradient-to-b from-[#0F1C3F]/30 via-orange/40 to-[#0F1C3F]/30 origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex gap-5 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.45 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Number badge */}
                <motion.div
                  className="w-9 h-9 rounded-full bg-[#0F1C3F] text-white text-[13px] font-bold flex items-center justify-center shrink-0 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.55 + i * 0.15 }}
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Icon circle */}
                    <div className="w-10 h-10 rounded-full bg-[#0F1C3F]/8 text-[#0F1C3F] flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <h3 className="text-[#1d1d1f] text-[16px] font-bold leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#3a3a3f] text-[14px] leading-[1.7] pl-[52px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:block relative min-h-[680px] overflow-hidden">

        {/* Background image — cinematic reveal */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06, filter: "blur(6px)" }}
          animate={isInView ? { scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/our-approach.png"
            alt="Our Approach"
            fill
            className="object-cover object-right"
          />
        </motion.div>

        {/* Directional gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.97) 30%, rgba(255,255,255,0.88) 50%, rgba(255,255,255,0.45) 68%, transparent 85%)",
          }}
        />

        {/* Orange glow */}
        <motion.div
          className="absolute bottom-0 left-0 w-[360px] h-[260px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom left, rgba(232,121,43,0.08) 0%, transparent 70%)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
        />

        {/* Content */}
        <div className="relative z-10 py-28 px-8 lg:px-16">
          <div className="max-w-[1200px] mx-auto">

            <motion.p
              className="text-[11px] font-semibold tracking-[0.45em] uppercase text-orange mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Our Approach
            </motion.p>

            <div className="overflow-hidden mb-5 max-w-[560px]">
              <motion.h2
                className="text-[#1d1d1f] text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-[1.08]"
                initial={{ y: "100%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                A Structured{" "}
                <span className="text-orange">Investment Framework</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-[#3a3a3f] text-[15px] lg:text-[17px] leading-[1.75] max-w-[520px] mb-16"
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Our approach is built on deep market insight, disciplined execution, and a commitment to creating sustainable value at every stage of the investment lifecycle.
            </motion.p>

            {/* Steps — horizontal grid */}
            <div className="relative grid grid-cols-3 gap-10 max-w-[820px]">

              {/* Horizontal connecting line */}
              <motion.div
                className="absolute top-[17px] left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-[#0F1C3F]/30 via-orange/50 to-[#0F1C3F]/30 z-0 origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />

              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="relative z-10 text-center group"
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.45 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="w-9 h-9 rounded-full bg-[#0F1C3F] text-white text-[13px] font-bold flex items-center justify-center mx-auto mb-5"
                    initial={{ scale: 0, rotate: -15 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.55 + i * 0.15 }}
                  >
                    {step.number}
                  </motion.div>

                  <motion.div
                    className="w-16 h-16 rounded-full bg-white text-[#0F1C3F] flex items-center justify-center mx-auto mb-5 shadow-[0_2px_16px_rgba(0,0,0,0.07)] cursor-default"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.65 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{
                      scale: 1.12,
                      boxShadow: "0 0 0 6px rgba(232,121,43,0.12), 0 4px 24px rgba(0,0,0,0.1)",
                      transition: { duration: 0.25 },
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <motion.h3
                    className="text-[#1d1d1f] text-[17px] font-bold mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.75 + i * 0.15 }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-[#3a3a3f] text-[14px] leading-[1.7] max-w-[240px] mx-auto"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.82 + i * 0.15 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
