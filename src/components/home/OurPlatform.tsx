"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const companies = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path d="M16 3L29 11V24L16 29L3 24V11L16 3Z" />
        <path d="M16 16L29 11M16 16V29M16 16L3 11" />
      </svg>
    ),
    name: "AvranceCorp",
    tag: "Real Estate Development",
    description:
      "Building modern communities across Ontario and Michigan, delivering long-term value through strategic design and disciplined execution.",
    href: "/platform/avrancecorp",
    linkLabel: "Visit AvranceCorp",
    accent: "from-orange/20 to-transparent",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <rect x="4" y="8" width="24" height="18" rx="1" />
        <path d="M10 20l4-5.5 4 3 4-6.5" />
        <path d="M10 12h12" />
      </svg>
    ),
    name: "TradeREA",
    tag: "Digital Trading Platform",
    description:
      "A digital marketplace redefining access to real estate investment through structured opportunities and innovative technology.",
    href: "/platform/traderea",
    linkLabel: "Visit TradeREA",
    accent: "from-gold/15 to-transparent",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l5 5" />
        <path d="M8 16h4M20 16h4" />
      </svg>
    ),
    name: "AvranceCapital",
    tag: "Strategic Capital Solutions",
    description:
      "Providing investors with disciplined access to private real estate capital markets and structured investment vehicles.",
    href: "/platform/avrancecapital",
    linkLabel: "Visit AvranceCapital",
    accent: "from-blue/15 to-transparent",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <rect x="3" y="6" width="26" height="20" rx="2" />
        <path d="M8 22l5-8 5 4 5-8" />
        <circle cx="8" cy="22" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    name: "Metadata & Research",
    tag: "Market Intelligence",
    description:
      "Proprietary research and data infrastructure powering informed investment decisions across the full Egolia ecosystem.",
    href: "/platform/metadata",
    linkLabel: "Learn More",
    accent: "from-white/10 to-transparent",
  },
];

export default function OurPlatform() {
  return (
    <section className="bg-navy py-28 md:py-36 relative overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #E8792B 0%, transparent 50%), radial-gradient(circle at 75% 75%, #2D5DAA 0%, transparent 50%)" }}
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.span
              className="inline-block text-orange text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Platform
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-sans text-white leading-[1.05]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Four integrated<br />
              <span className="text-white/70">companies.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold hover:text-orange transition-colors duration-300"
            >
              See All Companies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* 2×2 company card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              className="group relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/[0.08] p-8 md:p-10 hover:bg-white/[0.08] hover:border-white/[0.16] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Top gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background glow on hover */}
              <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${company.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-orange/50 mb-6 group-hover:text-orange transition-colors duration-400">
                  {company.icon}
                </div>

                {/* Tag */}
                <span className="inline-block text-white/35 text-[10px] font-bold tracking-[0.18em] uppercase mb-3">
                  {company.tag}
                </span>

                {/* Name */}
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {company.name}
                </h3>

                {/* Description */}
                <p className="text-white/45 text-sm leading-[1.8] mb-8">
                  {company.description}
                </p>

                {/* Link */}
                <Link
                  href={company.href}
                  className="inline-flex items-center gap-2 text-orange text-sm font-bold group-hover:gap-3 transition-all duration-300"
                >
                  {company.linkLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
