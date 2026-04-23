"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Search, BarChart3 } from "lucide-react";
import { ArrowRight } from "lucide-react";

const strategies = [
  {
    icon: <TrendingUp className="w-7 h-7" strokeWidth={1.4} />,
    number: "01",
    title: "Strategic Market Selection",
    description: "Identifying high-quality opportunities across real estate and private markets through rigorous research and market insight.",
  },
  {
    icon: <Search className="w-7 h-7" strokeWidth={1.4} />,
    number: "02",
    title: "Comprehensive Due Diligence",
    description: "Conducting in-depth analysis and risk assessment to ensure every investment meets our strict performance and quality criteria.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" strokeWidth={1.4} />,
    number: "03",
    title: "Active Asset Management",
    description: "Structuring, optimizing, and actively managing assets to enhance performance and deliver consistent returns.",
  },
];

export default function DisciplineSection() {
  return (
    <>
      {/* Section 1 — Discipline In Every Investment */}
      <section className="bg-white py-24 md:py-32 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[60vh]">

          {/* Left: Content */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-24 py-16 lg:py-0">
            <motion.p
              className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Company
            </motion.p>

            <motion.h2
              className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.03em] mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Discipline In Every
              <br />
              <span className="text-orange">Investment</span>
            </motion.h2>

            <motion.div
              className="w-16 h-[2px] bg-orange mb-7"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <motion.p
              className="text-[#6e6e73] text-[17px] sm:text-[18px] leading-[1.8] mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We deploy capital with precision — guided by research, structured execution, and a long-term investment perspective. Our approach is designed to preserve capital, optimize returns, and perform across market cycles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/investor"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-orange hover:bg-[#d4691e] px-8 py-4 text-[15px] font-bold text-white transition-colors duration-300"
              >
                Explore Our Approach
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="relative w-full lg:w-[50%] min-h-[320px] lg:min-h-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/nyc-skyline.jpg"
              alt="City skyline"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 pointer-events-none lg:hidden" style={{ background: "linear-gradient(to top, white 0%, transparent 40%)" }} />
          </motion.div>

        </div>
      </section>

      {/* Section 2 — Investment Strategy 3 cards */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src="/division/philo.png" alt="" fill className="object-cover object-center" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14">

          <div className="text-center mb-16">
            <motion.p
              className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Investment Strategy
            </motion.p>
            <motion.h2
              className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] mb-5"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A Disciplined, Data-Driven
              <br />
              Approach To Capital Deployment
            </motion.h2>
            <motion.p
              className="text-[#6e6e73] text-[17px] leading-[1.8] max-w-xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every investment decision is backed by rigorous research, structured execution, and a commitment to long-term value creation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {strategies.map((item, i) => (
              <motion.div
                key={item.title}
                className="group bg-white border border-[#e8e8ed] rounded-2xl p-7 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white mx-auto mb-6 group-hover:bg-orange transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-[#1d1d1f] text-[17px] font-bold leading-snug mb-3">{item.title}</h3>
                <div className="w-6 h-[2px] bg-orange mx-auto mb-4" />
                <p className="text-[#6e6e73] text-[14px] leading-[1.75]">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
