"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectors = [
  {
    image: "/images/commercial.jpg",
    title: "Strategic Partnerships",
    description: "Collaborations with experienced operators and developers to unlock long-term value.",
  },
  {
    image: "/images/glass-building.jpg",
    title: "Structured Investments",
    description: "Strategically designed investment vehicles focused on stability and risk-adjusted returns.",
  },
  {
    image: "/images/residential.jpg",
    title: "Private Markets",
    description: "Access to high-growth opportunities across private equity and emerging sectors.",
  },
  {
    image: "/images/emerging.jpg",
    title: "Real Estate",
    description: "Institutional-quality investments across residential, commercial, and mixed-use assets in key markets.",
  },
];

export default function InvestmentFocus() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.p
          className="text-center text-navy italic text-lg mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Investment Focus
        </motion.p>

        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Targeted Opportunities Across
          <br />
          Core Asset Classes
        </motion.h2>

        <motion.p
          className="text-center text-navy/70 text-xl leading-[1.7] max-w-2xl mx-auto mb-20 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          We Allocate Capital Across Select Sectors With Strong Fundamentals, Disciplined Underwriting, And Long-Term Growth Potential.
        </motion.p>

        {/* 4 tall image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              className="group relative overflow-hidden aspect-[3/4] rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">{sector.title}</h3>
                <p className="text-white/70 text-base leading-[1.6] font-medium">{sector.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
