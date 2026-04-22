"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import {
  ArrowRight,
  Building2,
  Wallet,
  Database,
  ArrowLeftRight,
  Target,
  BarChart3,
  Users,
  ShieldCheck,
} from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home3() {
  return (
    <div className="bg-white text-[#1d1d1f] font-sans overflow-x-hidden antialiased">
      <Navbar />

      {/* ══════════════════════════════════════
          1 — HERO
      ══════════════════════════════════════ */}
      <section className="relative pt-20 pb-28 flex flex-col items-center text-center px-6 mt-[84px]">

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-6xl md:text-8xl font-semibold tracking-tight text-gray-900 max-w-5xl mb-8 leading-[1.05]"
        >
          Let&apos;s build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
            long-term value
          </span>{" "}
          together.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl mb-12 leading-relaxed"
        >
          We build companies and invest in assets that reshape how people live, invest, and grow — across real estate, technology, and private markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto h-14 px-10 rounded-full bg-gray-900 text-white text-[16px] font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
          </Link>
          <Link
            href="/platform"
            className="w-full sm:w-auto h-14 px-10 rounded-full bg-white text-gray-900 border border-gray-200 text-[16px] font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            Explore Our Platform
          </Link>
        </motion.div>

      </section>

      {/* ══════════════════════════════════════
          2 — HOW WE THINK
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left — Text */}
            <FadeUp className="w-full lg:w-[50%]">
              <p className="text-[13px] font-semibold tracking-[0.4em] uppercase text-blue-600 mb-6">
                How We Think
              </p>
              <h2 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#1d1d1f] mb-8">
                We don&apos;t follow markets.<br />We build them.
              </h2>
              <p className="text-[#6e6e73] text-[17px] sm:text-[18px] leading-[1.85]">
                While others react to market movements, we position ahead of them. Every opportunity we pursue is backed by original research, deep conviction, and the patience to let great investments compound into something extraordinary.
              </p>
            </FadeUp>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="w-full lg:w-[50%] relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/images/Home-3/img3.png"
                alt="How We Think"
                fill
                className="object-cover object-center"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3 — OUR PLATFORM
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#f9f9fb] border-t border-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

          <FadeUp className="text-center mb-16">
            <p className="text-[13px] font-semibold tracking-[0.4em] uppercase text-[#6e6e73] mb-5">
              Our Platform
            </p>
            <h2 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#1d1d1f]">
              Four companies. One unified vision.
            </h2>
          </FadeUp>

          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Building2 className="w-8 h-8" strokeWidth={1.5} />,
                iconBg: "bg-blue-50 text-blue-600",
                name: "AvranceCorp",
                tagline: "Real estate redefined for the long term.",
                desc: "Strategic investment across residential and commercial markets.",
                href: "/platform/avrancecorp",
                accentColor: "text-blue-600",
              },
              {
                icon: <Wallet className="w-8 h-8" strokeWidth={1.5} />,
                iconBg: "bg-orange-50 text-orange-500",
                name: "Avrance Capital",
                tagline: "Private capital, deployed with precision.",
                desc: "Institutional-grade credit and equity strategies for durable businesses.",
                href: "/platform/avrancecapital",
                accentColor: "text-orange-500",
              },
              {
                icon: <Database className="w-8 h-8" strokeWidth={1.5} />,
                iconBg: "bg-slate-100 text-slate-600",
                name: "Metadata & Research",
                tagline: "Intelligence that drives every decision.",
                desc: "Proprietary data and research powering Egolia's investment edge.",
                href: "/platform/metadata",
                accentColor: "text-slate-700",
              },
              {
                icon: <ArrowLeftRight className="w-8 h-8" strokeWidth={1.5} />,
                iconBg: "bg-blue-50 text-blue-600",
                name: "TradeREA",
                tagline: "Trade real estate like it's always been possible.",
                desc: "Next-gen real estate investment platform.",
                href: "/platform/traderea",
                accentColor: "text-blue-600",
              },
            ].map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-white border border-[#e8e8ed] rounded-2xl p-7 flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${company.iconBg}`}>
                  {company.icon}
                </div>

                {/* Name */}
                <h3 className={`text-[18px] font-bold mb-2 ${company.accentColor}`}>{company.name}</h3>

                {/* Tagline */}
                <p className="text-[15px] font-semibold text-[#1d1d1f] leading-snug mb-3">{company.tagline}</p>

                {/* Desc */}
                <p className="text-[14px] text-[#6e6e73] leading-[1.7] mb-7 flex-1">{company.desc}</p>

                {/* Link */}
                <Link
                  href={company.href}
                  className={`inline-flex items-center gap-1.5 text-[14px] font-semibold ${company.accentColor} group-hover:gap-3 transition-all duration-200`}
                >
                  Explore
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          4 — WHY INVEST WITH US
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

          <FadeUp className="text-center mb-16">
            <p className="text-[13px] font-semibold tracking-[0.4em] uppercase text-[#6e6e73] mb-5">
              Why Invest With Us
            </p>
            <h2 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#1d1d1f]">
              Where Capital Meets Conviction.
            </h2>
          </FadeUp>

          {/* 4 items horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Target className="w-7 h-7" strokeWidth={1.5} />,
                iconBg: "bg-[#f5f5f7] text-[#1d1d1f]",
                title: "Conviction Over Consensus",
                desc: "Deep research, clear thesis.",
              },
              {
                icon: <BarChart3 className="w-7 h-7" strokeWidth={1.5} />,
                iconBg: "bg-orange-50 text-orange-500",
                title: "Built to Compound",
                desc: "Long-term growth strategy.",
              },
              {
                icon: <Users className="w-7 h-7" strokeWidth={1.5} />,
                iconBg: "bg-blue-50 text-blue-600",
                title: "Operators, Not Just Allocators",
                desc: "Active involvement in companies.",
              },
              {
                icon: <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />,
                iconBg: "bg-[#f5f5f7] text-[#1d1d1f]",
                title: "Every Detail Is Intentional",
                desc: "Full lifecycle control.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex flex-col items-start gap-5"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.7]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          5 — WHO WE ARE + STATS
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#f9f9fb] border-t border-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">
          <div className="bg-white border border-[#e8e8ed] rounded-3xl p-10 sm:p-14 lg:p-16 flex flex-col lg:flex-row gap-14 lg:gap-24 items-start">

            {/* Left */}
            <FadeUp className="w-full lg:w-[45%]">
              <p className="text-[13px] font-semibold tracking-[0.4em] uppercase text-[#6e6e73] mb-6">
                Who We Are
              </p>
              <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.025em] text-[#1d1d1f] mb-6">
                Built on conviction.<br />Defined by results.
              </h2>
              <p className="text-[#6e6e73] text-[16px] sm:text-[17px] leading-[1.85] mb-10">
                Four companies working together as one system — data, capital, real estate, and platform all interconnected.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-[#1d1d1f] hover:bg-[#333] text-white text-[15px] font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
              >
                Learn About Egolia
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
              </Link>
            </FadeUp>

            {/* Right — Stats */}
            <div className="w-full lg:w-[55%] grid grid-cols-2 gap-x-12 gap-y-12">
              {[
                { value: "4", label: "Operating Companies", color: "text-blue-600" },
                { value: "$2B+", label: "Assets Under Management", color: "text-[#1d1d1f]" },
                { value: "7k+", label: "Units Under Development", color: "text-[#1d1d1f]" },
                { value: "3M+", label: "Platform Users", color: "text-orange-500" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <div className={`text-[3rem] sm:text-[3.6rem] font-bold tracking-tight leading-none mb-3 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-[15px] font-medium text-[#6e6e73]">{stat.label}</div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6 — CTA
      ══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">
          <FadeUp className="text-center">
            <p className="text-[13px] font-semibold tracking-[0.4em] uppercase text-[#6e6e73] mb-6">
              Get Started
            </p>
            <h2 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#1d1d1f] mb-6 max-w-3xl mx-auto">
              Ready to Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                That Lasts?
              </span>
            </h2>
            <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.8] max-w-2xl mx-auto mb-12">
              Whether you&apos;re an investor, a potential partner, or simply curious about what we&apos;re building — we&apos;d love to start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group w-full sm:w-auto h-14 px-10 rounded-full bg-[#1d1d1f] hover:bg-[#333] text-white text-[16px] font-semibold transition-all flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </Link>
              <Link
                href="/investor"
                className="w-full sm:w-auto h-14 px-10 rounded-full bg-white text-[#1d1d1f] border border-gray-200 text-[16px] font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                View Investor Relations
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
