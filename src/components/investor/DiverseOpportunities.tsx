"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectors = [
  {
    image: "/images/residential.jpg",
    title: "Residential Developments",
    description: "High-quality residential projects designed to meet growing demand in strategically selected markets.",
  },
  {
    image: "/images/commercial.jpg",
    title: "Commercial Assets",
    description: "Office, retail, and mixed-use properties positioned for long-term stability and value creation.",
  },
  {
    image: "/images/mixed-use.jpg",
    title: "Mixed-Use Projects",
    description: "Integrated developments that combine residential, commercial, and lifestyle spaces.",
  },
  {
    image: "/images/emerging.jpg",
    title: "Emerging Market Opportunities",
    description: "Forward-looking investments in high-growth markets and innovative asset classes.",
  },
];

export default function DiverseOpportunities() {
  return (
    <section className="bg-gray-light py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.p
          className="text-center text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Investment Opportunities
        </motion.p>

        <motion.div
          className="w-14 h-[2px] bg-orange mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 56 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Diverse Opportunities Across Key Sectors
        </motion.h2>

        <motion.p
          className="text-center text-navy/75 text-xl leading-[1.7] max-w-2xl mx-auto mb-20 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We provide access to carefully selected investment opportunities across real estate, finance, and emerging markets.
        </motion.p>

        {/* Portrait cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              className="group relative overflow-hidden aspect-[3/4]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
            >
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="w-10 h-[2px] bg-orange mb-4" />
                <h3 className="text-white text-xl font-bold mb-3">{sector.title}</h3>
                <p className="text-white/60 text-base leading-[1.6] font-semibold">{sector.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
