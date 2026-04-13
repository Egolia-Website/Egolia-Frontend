"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const capabilities = [
  {
    image: "/images/world-map.jpg",
    title: "Market Intelligence",
    description: "In-depth analysis of macroeconomic trends, real estate dynamics, and regional performance indicators.",
  },
  {
    image: "/images/data-library.jpg",
    title: "Data Infrastructure",
    description: "Scalable systems that structure and process complex datasets into reliable, decision-ready intelligence.",
  },
  {
    image: "/images/metadata.jpg",
    title: "Quantitative Analytics",
    description: "Advanced models designed to evaluate performance, risk exposure, and investment potential.",
  },
  {
    image: "/images/network-dark.jpg",
    title: "Strategic Insights",
    description: "Translating data into clear, actionable intelligence to support consistent capital allocation.",
  },
];

export default function IntelligenceCapabilities() {
  return (
    <section className="bg-gray-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Intelligence Capabilities
        </motion.h2>

        <motion.p
          className="text-center text-navy/80 font-semibold text-xl leading-[1.7] max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A Comprehensive Suite Of Data-Driven Tools And Research Frameworks Designed To Support Informed Investment Decisions.
        </motion.p>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden aspect-[16/10]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 font-semibold text-base leading-[1.6]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
