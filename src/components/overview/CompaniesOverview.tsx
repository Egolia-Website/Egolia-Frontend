"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const companies = [
  {
    logo: "/images/avr.png",
    name: "AvranceCorp",
    description: "Real Estate Development Focused On Building Modern Communities And Delivering Long-Term Value.",
    href: "https://avrancecorp.com/",
    color: "border-orange",
  },
  {
    logo: "/images/TradeREA-Light-Logo.png",
    name: "TradeREA",
    description: "A Digital Marketplace Redefining Access To Real Estate Investment Through Innovative Technology.",
    href: "https://traderea.com/",
    color: "border-blue",
  },
  {
    logo: "/images/avrCapital.png",
    name: "AvranceCapital",
    description: "Investment Management Focused On Structuring Opportunities For Long-Term Value Creation.",
    href: "/platform/avrancecapital",
    color: "border-gold",
  },
  {
    name: "Metadata & Research",
    description: "Research-Driven Insights And Strategic Intelligence Supporting Informed Investment Decisions.",
    href: "/platform/metadata",
    color: "border-navy-light",
  },
];

export default function CompaniesOverview() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.p
          className="text-center text-orange text-sm font-bold tracking-[0.1em] uppercase mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Platform
        </motion.p>

        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Four Companies, One Vision
        </motion.h2>

        <motion.p
          className="text-center text-white/60 text-xl leading-[1.7] max-w-2xl mx-auto mb-20 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Each Company Operates Independently While Contributing To A Unified Strategy Focused On Long-Term Value.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              className={`bg-white/5 border-t-[3px] ${company.color} p-8 group hover:-translate-y-2 hover:bg-white/10 transition-all duration-500`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              {/* Logo or name */}
              <div className="h-12 mb-6 flex items-center">
                {company.logo ? (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={40}
                    className="object-contain brightness-0 invert"
                  />
                ) : (
                  <span className="text-white text-lg font-bold">{company.name}</span>
                )}
              </div>

              <p className="text-white/55 text-base leading-[1.7] mb-6 font-semibold">{company.description}</p>

              <Link
                href={company.href}
                target={company.href.startsWith("http") ? "_blank" : undefined}
                className="text-white text-sm font-semibold border-b border-white/30 pb-0.5 hover:border-orange hover:text-orange transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
