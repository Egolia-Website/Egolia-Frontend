"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CapitalHero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/glass-building.jpg"
          alt="Glass building"
          fill
          className="object-cover grayscale"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 w-full text-center py-20">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/avrCapital.png"
            alt="AvranceCapital"
            width={280}
            height={100}
            className="object-contain"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Investment Strategy
        </motion.h1>

        <motion.p
          className="text-white/55 text-xl leading-[1.7] max-w-2xl mx-auto mb-16 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A Disciplined, Data-Driven Approach To Capital Deployment And Long-Term Value Creation.
        </motion.p>

        {/* 3 Strategy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              ),
              title: "Strategic Market Selection",
              description: "Identifying High-Quality Opportunities Across Real Estate And Private Markets Through Rigorous Research And Market Insight.",
            },
            {
              icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              ),
              title: "Comprehensive Due Diligence",
              description: "Conducting In-Depth Analysis And Risk Assessment To Ensure Every Investment Meets Our Strict Performance And Quality Criteria.",
            },
            {
              icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Active Asset Management",
              description: "Structuring, Optimizing, And Actively Managing Assets To Enhance Performance And Deliver Consistent Returns.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center group hover:-translate-y-2 hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <div className="text-gold mb-5 flex justify-center">{item.icon}</div>
              <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-white/55 text-base leading-[1.7] font-semibold">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
