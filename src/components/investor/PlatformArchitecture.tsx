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
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.p
              className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Platform Architecture
            </motion.p>
            <motion.h2
              className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.03em]"
              initial={{ opacity: 0, y: 25 }}
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
            className="text-[#6e6e73] text-[16px] leading-[1.8] max-w-sm lg:text-right"
            initial={{ opacity: 0, y: 15 }}
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
              className="group bg-[#f5f5f7] border border-[#e8e8ed] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F1C3F] to-[#1A2B5C] flex items-center justify-center text-orange group-hover:bg-orange group-hover:from-orange group-hover:to-[#d4691e] transition-all duration-300 shadow-[0_4px_20px_rgba(15,28,63,0.2)]">
                  {co.icon}
                </div>
                <span className="text-orange text-[11px] font-bold tracking-[0.2em] uppercase bg-orange/10 border border-orange/20 px-3 py-1 rounded-full">
                  {co.label}
                </span>
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
