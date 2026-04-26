"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    logo: "/images/home/logo-avrancecorp.png",
    logoW: 140, logoH: 48,
    name: "AvranceCorp Developments",
    description: "Real estate development focused on delivering high-quality residential and commercial projects.",
    link: "https://avrancecorp.com/",
    external: true,
  },
  {
    logo: "/images/TradeREA-Light-Logo.png",
    logoW: 160, logoH: 48,
    name: "TradeREA",
    description: "A digital investment platform providing access to real estate opportunities through innovative solutions.",
    link: "https://traderea.com/",
    external: true,
  },
  {
    logo: "/images/home/logo-avrance-capital.png",
    logoW: 140, logoH: 48,
    name: "Avrance Capital",
    description: "Investment management focused on structuring and managing opportunities for long-term value creation.",
    link: "/platform/avrancecapital",
    external: false,
  },
  {
    logo: "/images/metada.png",
    logoW: 220, logoH: 72,
    name: "Metadata & Research",
    description: "Research-driven insights and strategic intelligence supporting informed decision-making and development.",
    link: "/platform/metadata",
    external: false,
  },
  {
    logo: "/images/mining-logo.png",
    logoW: 150, logoH: 48,
    name: "Avrance Mining",
    description: "Mining operations and resource development focused on responsible growth and sustainable value.",
    link: "/platform/avrancemining",
    external: false,
  },
];

export default function ExploreCompanies() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <Image
        src="/division/explore1.png"
        alt="Explore Our Companies"
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={100}
        priority
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase">Our Operating Network</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-center text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Explore Our Companies
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center text-[#4a5568] text-[17px] leading-[1.75] max-w-2xl mx-auto mb-16 font-medium"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Each company within Egolia Group plays a unique role in delivering integrated solutions across real estate, investment, and innovation.
        </motion.p>

        {/* 5-column cards — scroll on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group bg-white border border-[#e8e8ed] rounded-2xl p-7 flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              {/* Logo */}
              <div className="h-16 flex items-center mb-5">
                {company.logo ? (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={company.logoW}
                    height={company.logoH}
                    className={`object-contain object-left w-auto ${company.name === "Metadata & Research" ? "max-h-10 sm:max-h-8" : "max-h-10"}`}
                    quality={100}
                  />
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white text-[10px] font-bold tracking-wide">
                    AM
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-[#0F1C3F] font-bold text-[17px] leading-snug mb-3">{company.name}</h3>

              {/* Underline */}
              <div className="w-7 h-[2px] bg-orange mb-4" />

              {/* Description */}
              <p className="text-[#6e6e73] text-[13px] leading-[1.75] flex-1 mb-6">{company.description}</p>

              {/* Link */}
              <Link
                href={company.link}
                target={company.link.startsWith("http") ? "_blank" : undefined}
                className="inline-flex items-center gap-2 text-[#0F1C3F] text-[13px] font-bold group-hover:text-orange transition-colors duration-300"
              >
                View Company
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
