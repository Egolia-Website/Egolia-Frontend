"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectors = [
  {
    image: "/images/residential.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5M10.5 21V8.25a.75.75 0 01.75-.75h6a.75.75 0 01.75.75V21M3.75 21h1.5m0 0h1.5m-3 0V6.75A.75.75 0 015.25 6h1.5a.75.75 0 01.75.75V21" />
      </svg>
    ),
    title: "Residential Developments",
    description: "Thoughtfully designed residential assets aligned with evolving urban demand and long-term value appreciation.",
  },
  {
    image: "/images/commercial.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" />
      </svg>
    ),
    title: "Commercial Assets",
    description: "High-quality office, retail, and mixed-use properties focused on income stability and asset resilience.",
  },
  {
    image: "/images/mixed-use.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Mixed-Use Developments",
    description: "Integrated environments that combine living, working, and lifestyle — designed for sustained relevance and value creation.",
  },
  {
    image: "/images/emerging.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Emerging Market Strategies",
    description: "Selective exposure to high-growth markets, capturing long-term opportunities through disciplined, research-driven entry.",
  },
];

export default function DiverseOpportunities() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-[#f5f5f7] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Header — two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end mb-10 sm:mb-16">

          {/* Left — eyebrow + heading */}
          <div>
            <motion.p
              className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Where We Invest
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                className="text-[#1d1d1f] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-[1.08]"
                initial={{ y: "100%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Diverse Opportunities Across{" "}
                <span className="text-orange">Strategic Sectors</span>
              </motion.h2>
            </div>
          </div>

          {/* Right — description */}
          <motion.p
            className="text-[#3a3a3f] text-[16px] sm:text-[17px] leading-[1.75]"
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            We provide access to carefully curated investment opportunities across real estate, finance, and emerging markets — positioned for long-term growth.
          </motion.p>
        </div>

        {/* Cards grid — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* Image with overlapping icon badge */}
              <div className="relative mb-6">
                <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-[#0F1C3F]/0 group-hover:bg-[#0F1C3F]/10 transition-colors duration-400 rounded-2xl" />
                </div>

                {/* Icon badge — overlaps bottom center of image */}
                <motion.div
                  className="absolute -bottom-5 left-5 w-10 h-10 rounded-full bg-[#0F1C3F] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(15,28,63,0.25)]"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.55 + i * 0.1 }}
                  whileHover={{ scale: 1.12, backgroundColor: "#E8792B", transition: { duration: 0.2 } }}
                >
                  {sector.icon}
                </motion.div>
              </div>

              {/* Text content */}
              <div className="pt-2">
                <h3 className="text-[#1d1d1f] text-[17px] font-bold leading-snug mb-3">
                  {sector.title}
                </h3>
                <div className="w-6 h-[2px] bg-orange mb-3" />
                <p className="text-[#3a3a3f] text-[14px] leading-[1.75]">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
