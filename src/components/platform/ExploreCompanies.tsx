"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const companies = [
  {
    image: "/images/avrancecorp.jpg",
    name: "AvranceCorp",
    description: "Real estate development focused on delivering high-quality residential and commercial projects.",
    link: "https://avrancecorp.com/",
  },
  {
    image: "/images/traderea.jpg",
    name: "TradeREA",
    description: "A digital investment platform providing access to real estate opportunities through innovative solutions.",
    link: "https://traderea.com/",
  },
  {
    image: "/images/avrancecapital.jpg",
    name: "AvranceCapital",
    description: "Investment management focused on structuring and managing opportunities for long-term value creation.",
    link: "/platform/avrancecapital",
  },
  {
    image: "/images/metadata.jpg",
    name: "Metadata & Research",
    description: "Research-driven insights and strategic intelligence supporting informed decisions across investment and development.",
    link: "/platform/metadata",
  },
];

export default function ExploreCompanies() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Explore Our Companies
        </motion.h2>

        <motion.p
          className="text-center text-navy/75 text-xl leading-[1.7] max-w-2xl mx-auto mb-16 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Each Company Within Egolia Group Plays A Unique Role In Delivering Integrated Solutions Across Real Estate, Investment, And Innovation.
        </motion.p>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              className="group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="pt-5">
                <h3 className="text-navy text-xl font-bold mb-2">{company.name}</h3>
                <p className="text-navy/75 text-base leading-[1.7] mb-4 font-semibold">{company.description}</p>
                <Link
                  href={company.link}
                  target={company.link.startsWith("http") ? "_blank" : undefined}
                  className="text-navy text-base font-semibold border-b-2 border-orange pb-0.5 hover:text-orange transition-colors duration-300"
                >
                  View Company
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
