"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Disciplined Capital",
    description:
      "We apply rigorous analysis and structured decision-making to every investment, ensuring each deployment creates measurable long-term value.",
  },
  {
    number: "02",
    title: "Integrated Platform",
    description:
      "Four interconnected companies operating as a unified ecosystem — spanning development, capital markets, digital trading, and data intelligence.",
  },
  {
    number: "03",
    title: "Innovation-Led Growth",
    description:
      "We combine traditional investment discipline with modern technology to build next-generation infrastructure for real estate markets.",
  },
];

export default function DisciplinedApproach() {
  return (
    <section className="bg-[#FAFAF7] py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

        {/* Section heading */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <motion.span
            className="inline-block text-orange text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Egolia
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-sans text-navy leading-[1.1]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            A few reasons why investors{" "}
            <span className="text-orange">choose us</span>.
          </motion.h2>
        </div>

        {/* 3 elevated rounded cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              className="bg-white rounded-2xl p-10 shadow-[0_4px_24px_rgba(15,28,63,0.06)] hover:shadow-[0_20px_60px_rgba(15,28,63,0.12)] hover:-translate-y-1.5 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-orange/10 text-orange font-bold text-base mb-8 font-sans group-hover:bg-orange group-hover:text-white transition-all duration-300">
                {pillar.number}
              </div>
              <h3 className="text-navy text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-navy/55 text-sm leading-[1.85]">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detail split — image + content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(15,28,63,0.07)]">
          {/* Image */}
          <div className="relative w-full h-[380px] lg:h-[500px] overflow-hidden">
            <Image
              src="/images/glass-building.jpg"
              alt="Egolia investment approach"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
          </div>

          {/* Content */}
          <motion.div
            className="px-8 md:px-12 py-12 lg:py-0 lg:pr-16"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-orange text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">Our Approach</span>
            <h3 className="text-3xl md:text-4xl font-sans text-navy mb-5 leading-[1.15]">
              A Disciplined Approach<br />To Investment
            </h3>
            <p className="text-navy/55 text-base leading-[1.8] mb-8">
              Egolia is focused on long-term value creation through strategic capital, innovation, and disciplined execution across its integrated platform.
            </p>
            <ul className="space-y-3.5 mb-10">
              {[
                "Institutional-grade investment framework",
                "Integrated platform spanning 4 core businesses",
                "15+ years of combined real estate expertise",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-navy/65 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center text-orange">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-navy text-white font-bold text-sm rounded-full hover:bg-navy-light transition-colors duration-300"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
