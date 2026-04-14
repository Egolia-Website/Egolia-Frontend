"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const platforms = [
  {
    icon: (
      <svg className="w-14 h-14" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path d="M20 5L35 15V30L20 35L5 30V15L20 5Z" />
        <path d="M20 20L35 15M20 20V35M20 20L5 15" />
      </svg>
    ),
    name: "AvranceCorp",
    description:
      "Real Estate Development Focused On Building Modern Communities And Delivering Long-Term Value Through Strategic Design And Execution.",
    link: { label: "View Company", href: "https://avrancecorp.com/" },
  },
  {
    icon: (
      <svg className="w-14 h-14" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path d="M8 10H18L22 5H32V30H8V10Z" />
        <path d="M15 20H25M15 25H22" />
      </svg>
    ),
    name: "TradeRea",
    description:
      "A Digital Marketplace Redefining Access To Real Estate Investment Through Structured Opportunities And Innovative Technology.",
    link: { label: "View Platform", href: "https://traderea.com/" },
  },
];

export default function OurPlatform() {
  return (
    <section className="py-24 md:py-32 bg-gray-light">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Title centered */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-light text-navy italic mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Platform
        </motion.h2>

        {/* Full-width stacked cards */}
        <div className="space-y-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              className="bg-white border-l-[3px] border-orange p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center gap-10 group hover:shadow-[0_8px_30px_rgba(15,28,63,0.06)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Icon */}
              <div className="text-navy flex-shrink-0 group-hover:text-orange transition-colors duration-300">
                {platform.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-navy text-2xl md:text-3xl font-semibold mb-3">
                  {platform.name}
                </h3>
                <p className="text-navy/70 text-lg leading-[1.7] max-w-2xl font-medium">
                  {platform.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={platform.link.href}
                target="_blank"
                className="flex-shrink-0 text-navy text-lg font-semibold border-b-2 border-orange pb-1 hover:text-orange transition-colors duration-300"
              >
                {platform.link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom description */}
        <motion.p
          className="text-center text-navy/70 text-lg italic mt-16 max-w-2xl mx-auto leading-[1.7] font-medium"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Egolia Operates Across A Unified Platform Of Businesses Delivering Integrated Investment And Development Solutions.
        </motion.p>
      </div>
    </section>
  );
}
