"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" />
      </svg>
    ),
    title: "Institutional-Grade Strategy",
    description:
      "A research-led investment philosophy grounded in rigorous analysis, prudent risk management, and long-term capital preservation.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Fully Integrated Platform",
    description:
      "From acquisition to development and asset management, we maintain end-to-end control to ensure alignment, efficiency, and performance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Curated Investment Access",
    description:
      "We originate and structure high-quality opportunities across global markets, with a focus on resilience and long-term upside.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Consistent, Risk-Adjusted Returns",
    description:
      "Our strategy is designed to deliver stable performance through disciplined execution, active management, and strategic growth.",
  },
];

export default function WhyInvest() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="bg-[#f5f5f7]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch lg:min-h-[800px]">

        {/* Left — Text Content */}
        <div className="bg-[#f5f5f7] py-12 sm:py-14 px-5 sm:px-10 lg:px-14 flex flex-col justify-center">

          {/* Eyebrow */}
          <motion.p
            className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5"
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Why Egolia
          </motion.p>

          {/* Heading — clip reveal */}
          <div className="overflow-hidden mb-8">
            <motion.h2
              className="text-[#1d1d1f] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-[1.08]"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              A Disciplined Approach To{" "}
              <span className="text-orange">Enduring Value</span>
            </motion.h2>
          </div>

          {/* Reason list */}
          <div className="space-y-7">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-5"
                initial={{ opacity: 0, x: -24, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-full bg-white text-[#0F1C3F] flex items-center justify-center shrink-0 cursor-default shadow-[0_2px_12px_rgba(15,28,63,0.10)]"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(232,121,43,0.12)",
                    color: "#E8792B",
                    boxShadow: "0 0 0 5px rgba(232,121,43,0.08)",
                    transition: { duration: 0.22 },
                  }}
                >
                  {item.icon}
                </motion.div>

                <div>
                  <h3 className="text-[#1d1d1f] text-[17px] font-bold mb-1.5">{item.title}</h3>
                  <p className="text-[#3a3a3f] text-[14px] leading-[1.75]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — cinematic image reveal */}
        <motion.div
          className="relative hidden lg:block lg:min-h-0 overflow-hidden"
          initial={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/why egolia.png"
            alt="Why Egolia"
            fill
            className="object-cover"
          />
          {/* Sheen sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)" }}
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "200%" } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

      </div>
    </section>
  );
}
