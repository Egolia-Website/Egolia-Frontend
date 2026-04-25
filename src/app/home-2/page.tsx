"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import {
  ArrowRight,
  Building2,
  Layers,
  Target,
  BarChart3,
  ShieldCheck,
  Share2,
  CheckCircle,
  Compass,
  TrendingUp,
} from "lucide-react";

const GOLD = "#B8960C";
const NAVY = "#0F1C3F";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home2() {
  return (
    <div className="bg-white text-[#0F1C3F] font-sans overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════
          1 — HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen pt-[84px] overflow-hidden">

        {/* Full-screen background image — no fades */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="absolute inset-0 top-[84px]"
        >
          <Image
            src="/images/home2-hero.png"
            alt="Egolia — City"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>

        {/* Content — bottom-left overlay */}
        <div className="relative z-10 flex flex-col justify-end h-full min-h-[calc(100vh-84px)] px-8 sm:px-14 lg:px-16 xl:px-20 pb-20 lg:pb-24 max-w-[640px]">

          {/* Gold top accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-10 h-[2px] mb-8 origin-left"
            style={{ backgroundColor: GOLD }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[1.07] tracking-[-0.03em] text-[#0F1C3F] mb-7"
          >
            Building <br />Long-Term Value
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[18px] text-slate-600 leading-[1.85] max-w-[400px] mb-10"
          >
            Egolia is an investment company focused on building long-term value through strategic capital, innovation, and disciplined growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/investor"
              className="inline-flex items-center justify-center gap-2 text-white text-[14px] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              style={{ backgroundColor: NAVY }}
            >
              Learn More
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/80 border border-[#0F1C3F]/20 hover:border-[#0F1C3F] text-[#0F1C3F] text-[14px] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Our Firm
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2 — PLATFORM
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

          <FadeUp className="text-center mb-12">
            <p className="text-[13px] font-bold tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
              Our Platform
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] text-[#0F1C3F]">
              A Strong Ecosystem. One Integrated Platform.
            </h2>
          </FadeUp>

          {/* Two cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                logo: "/images/home/logo-avrancecorp.png",
                name: "AvranceCorp",
                desc: "Private investments across real estate, infrastructure, and alternative assets for durable, long-term value.",
                image: "/images/our-platform-avr.png",
                href: "/platform/avrancecorp",
              },
              {
                logo: "/images/TradeREA-Light-Logo.png",
                name: "TradeREA",
                desc: "A modern real estate platform empowering smarter decisions through data and technology.",
                image: "/images/tradereaCard.png",
                href: "/platform/traderea",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex overflow-hidden bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                style={{ minHeight: 240 }}
              >
                {/* Content left */}
                <div className="flex flex-col justify-between p-8 flex-1 z-10">
                  <div>
                    {/* Logo */}
                    <div className="relative h-7 w-32 mb-2">
                      <Image
                        src={card.logo}
                        alt={card.name}
                        fill
                        className="object-contain object-left"
                        style={{}}
                      />
                    </div>
                    {/* Gold underline */}
                    <div className="w-8 h-[2px] mb-5" style={{ backgroundColor: GOLD }} />
                    <p className="text-[15px] text-slate-500 leading-relaxed max-w-[200px]">
                      {card.desc}
                    </p>
                  </div>

                  {/* Circle arrow */}
                  <Link
                    href={card.href}
                    className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-[#0F1C3F] hover:bg-[#0F1C3F] group/btn transition-all duration-300 mt-6"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/btn:text-white transition-colors" strokeWidth={2} />
                  </Link>
                </div>

                {/* Image right */}
                <div className="relative w-[45%] shrink-0 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3 — STATS BAR (dark navy)
      ══════════════════════════════════════ */}
      <section className="relative py-14 overflow-hidden">
        <Image
          src="/images/stats.png"
          alt="Stats background"
          fill
          className="object-cover object-center"
        />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: <Building2 className="w-9 h-9" strokeWidth={1.2} />, value: "4", label: "Core Businesses" },
              { icon: <Layers className="w-9 h-9" strokeWidth={1.2} />, value: "1", label: "Integrated Platform" },
              { icon: <Target className="w-9 h-9" strokeWidth={1.2} />, value: "Long-Term", label: "Investment Focus" },
              { icon: <BarChart3 className="w-9 h-9" strokeWidth={1.2} />, value: "Data-Driven", label: "Decision Making" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center px-6 py-6 gap-3"
              >
                <span style={{ color: GOLD }}>{stat.icon}</span>
                <p className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">{stat.value}</p>
                <p className="text-[14px] font-medium text-white/50 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4 — FOR INVESTORS
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

          <FadeUp className="text-center mb-12">
            <p className="text-[13px] font-bold tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
              For Investors
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] text-[#0F1C3F]">
              Built For Long-Term Partners
            </h2>
          </FadeUp>

          {/* 3 feature cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />,
                title: "Long-Term Investment Strategy",
                desc: "We focus on durable value creation through disciplined allocation, patient capital, and strong risk management.",
              },
              {
                icon: <Share2 className="w-8 h-8" strokeWidth={1.5} />,
                title: "Access To Integrated Opportunities",
                desc: "Our integrated platform unlocks synergies across industries and markets — creating more ways to win.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" strokeWidth={1.5} />,
                title: "Disciplined Execution",
                desc: "We execute with precision, leverage data-driven insights, and maintain a relentless focus on results.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 border border-slate-200 rounded-2xl hover:shadow-md hover:border-slate-300 transition-[box-shadow,border-color] duration-300"
              >
                {/* Circle icon */}
                <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-5" style={{ color: GOLD, borderColor: GOLD + "55", backgroundColor: GOLD + "10" }}>
                  {item.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[#0F1C3F] mb-2 leading-snug">{item.title}</h3>
                {/* Gold underline */}
                <div className="w-6 h-[2px] mb-4" style={{ backgroundColor: GOLD }} />
                <p className="text-[15px] text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5 — PHILOSOPHY
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

          <FadeUp className="text-center mb-14">
            <p className="text-[13px] font-bold tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] text-[#0F1C3F] mb-4">
              A Disciplined Approach To Investing
            </h2>
            {/* Centered gold line */}
            <div className="w-12 h-[2px] mx-auto" style={{ backgroundColor: GOLD }} />
          </FadeUp>

          {/* 3 principle columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="w-8 h-8" strokeWidth={1.5} />,
                title: "Principled Decision Making",
                desc: "We are guided by a clear set of principles that ensure alignment, integrity, and long-term thinking.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
                title: "Long-Term Value Creation",
                desc: "We invest with conviction and patience to build sustainable value across market cycles.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />,
                title: "Risk-Aware Discipline",
                desc: "We embrace disciplined processes and rigorous risk management to protect and compound capital.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-5"
              >
                {/* Circle icon */}
                <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5" style={{ color: GOLD, borderColor: GOLD + "55", backgroundColor: GOLD + "10" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#0F1C3F] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6 — CTA (dark navy with city bg)
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 md:py-24">
        {/* Background image — no overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/partnerwithus.png"
            alt="Partner With Us"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <p className="text-[13px] font-bold tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
              Partner With Us
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.025em] text-white leading-[1.1] mb-10 max-w-xl">
              Let&apos;s Build <br />Long-Term Value Together
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/investor"
                className="inline-flex items-center justify-center gap-2 text-[#0F1C3F] text-[14px] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                style={{ backgroundColor: GOLD }}
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white text-[14px] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
