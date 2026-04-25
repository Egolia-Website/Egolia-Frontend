"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, DollarSign, Database, ArrowLeftRight, ArrowRight } from "lucide-react";

const companies = [
  {
    icon: <Building2 className="w-7 h-7" strokeWidth={1.4} />,
    label: "AvranceCorp Developments",
    title: "Real asset origination and development execution.",
    description: "AvranceCorp advances residential, mixed-use, and large-scale development opportunities. It represents the operating engine behind the group's asset pipeline and provides tangible project flow for long-duration value creation.",
    href: "/platform/avrancecorp",
  },
  {
    icon: <ArrowLeftRight className="w-7 h-7" strokeWidth={1.4} />,
    label: "TradeREA",
    title: "The access and liquidity layer for private markets.",
    description: "TradeREA is being developed to expand investor access to real assets through digital issuance, structured participation, and future secondary market connectivity through regulated partnerships.",
    href: "/platform/traderea",
  },
  {
    icon: <DollarSign className="w-7 h-7" strokeWidth={1.4} />,
    label: "Avrance Capital",
    title: "Private capital, deployed with precision.",
    description: "Avrance Capital structures financing solutions across debt, equity, and hybrid strategies — supporting both internal pipeline needs and external investment opportunities where risk and return are properly aligned.",
    href: "/platform/avrancecapital",
  },
  {
    icon: <Database className="w-7 h-7" strokeWidth={1.4} />,
    label: "Metadata & Research",
    title: "Intelligence that strengthens every decision.",
    description: "Research, market data, analytics, and whitepaper production are core to how Egolia underwrites, communicates, and builds strategic advantage — not peripheral functions.",
    href: "/platform/metadata",
  },
];

export default function PlatformArchitecture() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.p
              className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5 text-center lg:text-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Platform Architecture
            </motion.p>
            <motion.h2
              className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.03em] text-center lg:text-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Four Companies.
              <br />
              <span className="text-orange">One Investment System.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-[#6e6e73] text-[16px] leading-[1.8] max-w-sm text-center lg:text-right"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The businesses inside Egolia are structured to reinforce one another — what one division originates, another can structure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {companies.map((co, i) => (
            <motion.div
              key={co.label}
              className="group bg-[#f5f5f7] border border-[#e8e8ed] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="relative mb-5">
                <span className="absolute top-0 right-0 text-white text-[9px] font-bold tracking-[0.08em] uppercase bg-[#0F1C3F] px-2.5 py-1 rounded-full whitespace-nowrap">
                  {co.label}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F1C3F] to-[#1A2B5C] flex items-center justify-center transition-shadow duration-300 shadow-[0_4px_20px_rgba(15,28,63,0.2)] group-hover:shadow-[0_6px_24px_rgba(232,121,43,0.25)]">
                  <span className="text-orange">{co.icon}</span>
                </div>
              </div>
              <h3 className="text-[#1d1d1f] text-[22px] font-bold leading-snug mb-3">{co.title}</h3>
              <div className="w-6 h-[2px] bg-orange mb-4" />
              <p className="text-[#6e6e73] text-[16px] leading-[1.75] mb-6">{co.description}</p>
              <Link
                href={co.href}
                className="inline-flex items-center gap-2 text-[#0F1C3F] text-[15px] font-bold group-hover:text-orange transition-colors duration-300"
              >
                View Details
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
