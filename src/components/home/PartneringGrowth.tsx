"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Creativity",
    description: "We think beyond conventional frameworks to unlock opportunities others miss.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovative Thinking",
    description: "Technology and data intelligence drive every decision across our platform.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Rapid Solutions",
    description: "Operational excellence allows us to move quickly while maintaining quality.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Top-Notch Support",
    description: "Our teams are dedicated to the highest standards of service for all partners.",
  },
];

export default function PartneringGrowth() {
  return (
    <section className="bg-[#FAFAF7] py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: premium rounded image mosaic */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Large top image */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[16/8] shadow-[0_8px_32px_rgba(15,28,63,0.12)]">
              <Image
                src="/images/hero-city.jpg"
                alt="Egolia platform"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-transparent" />
            </div>
            {/* Two smaller images */}
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-[0_4px_20px_rgba(15,28,63,0.10)]">
              <Image
                src="/images/glass-building.jpg"
                alt="Investment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-[0_4px_20px_rgba(15,28,63,0.10)]">
              <Image
                src="/images/avrancecorp.jpg"
                alt="Development"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
            </div>
          </motion.div>

          {/* Right: heading + 2×2 feature mini-cards */}
          <div>
            <motion.span
              className="inline-block text-orange text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Makes Us Different?
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-sans text-navy mb-10 leading-[1.1]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              We bring{" "}
              <span className="text-orange">solutions</span>{" "}
              to build the future of real estate investment.
            </motion.h2>

            {/* 2×2 feature mini-cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-[0_2px_16px_rgba(15,28,63,0.06)] hover:shadow-[0_8px_32px_rgba(15,28,63,0.10)] transition-all duration-400 group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-orange/10 text-orange flex items-center justify-center mb-4 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-navy font-bold text-sm mb-2">{feature.title}</h3>
                  <p className="text-navy/50 text-xs leading-[1.75]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
