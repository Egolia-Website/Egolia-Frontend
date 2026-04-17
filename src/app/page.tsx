"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";
// useScroll and useTransform used in ParallaxImage
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// ─────────────────────────────────────────
// Fade up on scroll
// ─────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────
// Parallax image section
// ─────────────────────────────────────────
function ParallaxImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full scale-110">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────
// Animated counter
// ─────────────────────────────────────────
function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => {
        setDisplay(
          target >= 1000
            ? Math.floor(v).toLocaleString()
            : target % 1 !== 0
            ? v.toFixed(1)
            : Math.floor(v).toString()
        );
      },
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────
export default function Home() {
  return (
    <div className="bg-white text-[#1d1d1f] font-sans overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════
          1 — HERO
          Split: text left on light bg,
          large photo flush right
      ══════════════════════════════════════ */}
      <section className="relative h-screen pt-[84px] overflow-hidden">

        {/* Background image — no zoom, natural size, pinned right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero4.png"
            alt="Egolia — Building Long-Term Value"
            fill
            className="object-contain object-right"
            priority
          />
        </motion.div>

        {/* Left fade overlay — image bleeds through on right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(244,245,247,0.97) 20%, rgba(244,245,247,0.6) 32%, transparent 45%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 sm:px-16 lg:px-20 xl:px-24 lg:max-w-[55%] -mt-[25px]">

          {/* Decorative tick marks */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-1.5 mb-8"
          >
            <div className="w-[4px] h-6 rounded-full rotate-[-20deg]" style={{ background: "linear-gradient(to bottom, #E8792B, #0F1C3F)" }} />
            <div className="w-[4px] h-6 rounded-full rotate-[-20deg]" style={{ background: "linear-gradient(to bottom, #E8792B, #0F1C3F)" }} />
          </motion.div>

          {/* Headline */}
          <div className="mb-2 space-y-0">
            {[
              { text: "Let's build", color: "text-[#0F1C3F]" },
              { text: "long-term", color: "text-orange" },
              { text: "value together.", color: "text-[#0F1C3F]" },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
                  className={`block text-[clamp(3.2rem,5vw,5.2rem)] font-bold leading-[1.1] tracking-[-0.03em] whitespace-nowrap ${line.color}`}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="h-[2px] w-16 rounded-full mt-4 mb-8 origin-left"
            style={{ background: "linear-gradient(90deg, #E8792B, #0F1C3F)" }}
          />

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.75, duration: 0.9 }}
            className="text-[#6e6e73] text-[18px] leading-[1.8] max-w-[460px] mb-12"
          >
            Egolia is a disciplined investment group deploying capital
            across real estate, fintech, and private markets, built
            for lasting impact and generational value.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[14px] font-semibold tracking-wide px-9 py-4 rounded-lg border border-transparent transition-colors duration-300"
            >
              Get In Touch
            </Link>
            <Link
              href="/investor"
              className="bg-transparent border border-orange text-orange hover:bg-orange hover:text-white text-[14px] font-semibold tracking-wide px-9 py-4 rounded-lg transition-all duration-300"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2 — OUR PHILOSOPHY
      ══════════════════════════════════════ */}
      <section className="relative bg-white py-32 lg:py-44 px-6 overflow-hidden">

        {/* Large faded watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-[20vw] font-black text-[#0F1C3F]/[0.03] leading-none tracking-tighter whitespace-nowrap">
            EGOLIA
          </span>
        </div>

        {/* Soft orange glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-orange/6 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[860px] mx-auto text-center">

          {/* Label — same style as For Investors */}
          <FadeUp>
            <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-8">
              Our Philosophy
            </p>
          </FadeUp>

          {/* Headline */}
          {["We don't follow markets.", "We build them."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.12 }}
                className={`block text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-[-0.03em] ${i === 1 ? "text-orange" : "text-[#0F1C3F]"}`}
              >
                {line}
              </motion.h2>
            </div>
          ))}

          {/* Body */}
          <FadeUp delay={0.4} className="mt-10">
            <p className="text-[#6e6e73] text-[18px] lg:text-[19px] leading-[1.8] max-w-2xl mx-auto">
              Egolia is a private investment group deploying disciplined capital across real estate, fintech, and private markets. We invest with conviction, operate with integrity, and build with a horizon measured in decades, not quarters.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3 — FOR INVESTORS
          Left heading + right 3 pillars
      ══════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] py-28 lg:py-36 px-6 lg:px-14">
        <div className="max-w-[1200px] mx-auto">

          {/* Top: label + heading + description */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <div className="lg:max-w-[560px]">
              <FadeUp>
                <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5">
                  For Investors
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em]">
                  A Disciplined Approach To{" "}
                  <span className="text-orange">Long-Term Growth</span>
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.15} className="lg:max-w-[440px]">
              <p className="text-[#6e6e73] text-[16px] leading-[1.75]">
                We take a long-term, structured approach to investing, combining strategic capital, deep expertise, and operational discipline to create durable value.
              </p>
            </FadeUp>
          </div>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">

            {/* Horizontal line behind cards */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block absolute top-0 left-0 right-0 h-[1px] origin-left"
              style={{ background: "linear-gradient(90deg, #E8792B, #0F1C3F)" }}
            />

            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: "Discipline",
                desc: "Structured decision-making backed by rigorous analysis.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Long-Term Focus",
                desc: "Sustainable growth over short-term gains.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Strategic Execution",
                desc: "Capital, expertise, and innovation aligned for consistent performance.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative pt-10 pb-2 px-6 first:pl-0 last:pr-0"
              >
                {/* Animated top dot marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden md:block absolute top-[-5px] left-6 first:left-0 w-[10px] h-[10px] rounded-full"
                  style={{ background: "linear-gradient(135deg, #E8792B, #0F1C3F)" }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white"
                  style={{ background: "linear-gradient(135deg, #E8792B, #0F1C3F)" }}
                >
                  {pillar.icon}
                </div>

                <h3 className="text-[#0F1C3F] font-bold text-[20px] leading-snug mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#6e6e73] text-[15px] leading-[1.7] max-w-[280px]">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          4 — PLATFORM
          Apple product-card style:
          each company = its own full-width
          cinematic section
      ══════════════════════════════════════ */}
      <section className="bg-white pt-28 pb-10">
        {/* Section header — consistent with other sections */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">
          <FadeUp className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5">
              Our Platform
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] leading-[1.1] tracking-[-0.025em] max-w-2xl mx-auto">
              Four companies.{" "}
              <span className="text-orange">One unified vision.</span>
            </h2>
          </FadeUp>
        </div>

        {/* Apple-style 2×2 equal grid — no border radius, full bleed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[7px] px-[7px]">

          {[
            {
              image: "/images/avrCr.png",
              logo: "/images/avr.png",
              logoAlt: "AvranceCorp",
              title: "Real estate redefined for the long term.",
              desc: "Strategic investment across residential and commercial markets.",
              href: "/platform/avrancecorp",
              logoWidth: 130,
              logoHeight: 36,
              useBlend: false,
            },
            {
              image: "/images/avrCap.png",
              logo: "/images/avrCapital.png",
              logoAlt: "Avrance Capital",
              title: "Private capital, deployed with precision.",
              desc: "Institutional-grade credit and equity strategies for durable businesses.",
              href: "/platform/avrancecapital",
              logoWidth: 130,
              logoHeight: 36,
              useBlend: false,
            },
            {
              image: "/images/metadaImage.png",
              logo: "/images/metaLogo.png",
              logoAlt: "Metadata & Research",
              title: "Intelligence that drives every decision.",
              desc: "Proprietary data and research powering Egolia's investment edge.",
              href: "/platform/metadata",
              logoWidth: 240,
              logoHeight: 60,
              bigLogo: true,
              useBlend: true,
            },
            {
              image: "/images/trd.png",
              logo: "/images/new logo trade rea website.png",
              logoAlt: "TradeREA",
              title: "Trade real estate like it's always been possible.",
              desc: "The next-generation platform democratising real estate investment.",
              href: "/platform/traderea",
              logoWidth: 180,
              logoHeight: 48,
              useBlend: true,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden bg-[#1d1d1f] aspect-[16/10] flex flex-col justify-end rounded-[3px]"
            >
              <Link href={card.href} className="absolute inset-0 z-20" />

              {/* Background image — subtle zoom on hover */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <Image src={card.image} alt={card.logoAlt} fill className="object-cover object-center" />
              </div>

              {/* Cinematic multi-layer vignette — fades gently */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.08) 60%, transparent 80%),
                    linear-gradient(to right, rgba(0,0,0,0.2) 0%, transparent 50%)
                  `,
                }}
              />

              {/* Content */}
              <div className="relative z-10 px-8 pb-8 lg:px-10 lg:pb-10 flex items-end justify-between gap-6">
                <div>
                  {/* Logo */}
                  <div className={`flex items-center mb-4 ${(card as any).bigLogo ? "h-12" : "h-8"}`}>
                    <Image
                      src={card.logo}
                      alt={card.logoAlt}
                      width={card.logoWidth}
                      height={card.logoHeight}
                      className={`object-contain object-left w-auto ${(card as any).bigLogo ? "max-h-12" : "max-h-8"}`}
                      style={
                        card.useBlend
                          ? { filter: "brightness(20) saturate(0)", mixBlendMode: "screen" }
                          : { filter: "brightness(0) invert(1)" }
                      }
                    />
                  </div>

                  <h3 className="text-[20px] md:text-[24px] font-bold text-white leading-[1.2] tracking-[-0.02em] mb-1.5 max-w-xs">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-[14px] leading-[1.55] max-w-[300px]">
                    {card.desc}
                  </p>
                </div>

                <span className="bg-white text-[#1d1d1f] text-[12px] font-semibold tracking-wide px-5 py-2.5 rounded-lg shrink-0 group-hover:bg-white/90 transition-colors duration-300">
                  View More
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          5 — OUR FIRM
          Split: image left, content right
      ══════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[85vh]">

          {/* LEFT — Image */}
          <FadeUp className="relative lg:w-[50%] min-h-[400px] lg:min-h-0">
            <Image
              src="/images/our Firm.png"
              alt="Our Firm"
              fill
              className="object-cover"
            />
          </FadeUp>

          {/* RIGHT — Content */}
          <div className="lg:w-[50%] flex flex-col justify-center px-10 sm:px-16 lg:px-20 xl:px-24 py-20 lg:py-0">

            <FadeUp>
              <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-6">
                Our Firm
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] mb-6">
                Built on{" "}
                <span className="text-orange">conviction.</span>
                <br />
                Defined by results.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-[#6e6e73] text-[17px] leading-[1.75] max-w-[480px] mb-10">
                Egolia operates with the rigor of an institution and the agility of a founder-led firm. Our integrated platform spans real estate, fintech, capital markets, and proprietary intelligence, with each company amplifying the others.
              </p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.3}>
              <div className="flex gap-16 mb-12">
                {[
                  { value: "$2B+", label: "Assets Under Management" },
                  { value: "4", label: "Operating Companies" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p
                      className="text-4xl md:text-5xl font-bold mb-1 tracking-tight"
                      style={{
                        background: "linear-gradient(135deg, #E8792B, #0F1C3F)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[#6e6e73] text-[13px] font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[14px] font-semibold px-8 py-4 rounded-lg transition-colors duration-300 tracking-wide"
              >
                Learn About Egolia
              </Link>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          6 — BY THE NUMBERS
          Luxury glassmorphism + animated counters
      ══════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-14 overflow-hidden bg-[#f5f5f7]">

        {/* Ambient glow orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-orange/6 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue/6 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto">

          {/* Header */}
          <FadeUp className="text-center mb-8">
            <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5">
              By The Numbers
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] max-w-2xl mx-auto">
              Built For{" "}
              <span className="text-orange">Long-Term</span> Value
            </h2>
          </FadeUp>

          <FadeUp delay={0.1} className="text-center mb-20">
            <p className="text-[#6e6e73] text-[17px] leading-[1.75] max-w-xl mx-auto">
              Four platforms. Billions in real assets. Millions of users. The numbers behind Egolia's disciplined approach to building generational wealth.
            </p>
          </FadeUp>

          {/* Glassmorphism stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { target: 4, prefix: "", suffix: "", label: "Core Investment Platforms" },
              { target: 4, prefix: "$", suffix: "B+", label: "Active Real Estate Portfolio" },
              { target: 7000, prefix: "", suffix: "+", label: "Units Under Development" },
              { target: 3, prefix: "", suffix: "M+", label: "Platform Users & Growing" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden py-12 px-6 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.45) 100%)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(232,121,43,0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <p
                  className="relative z-10 text-5xl md:text-6xl font-bold mb-3 tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #E8792B 0%, #0F1C3F 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <AnimatedNumber target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="relative z-10 text-[#6e6e73] text-[13px] font-medium tracking-wide leading-[1.4] group-hover:text-[#1d1d1f] transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          7 — FINAL CTA
      ══════════════════════════════════════ */}
      <section className="relative bg-white py-20 lg:py-28 px-6 text-center overflow-hidden">

        {/* Concentric rings — pulsing outward from center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          {[280, 460, 660, 900, 1160].map((size, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                border: `1px solid rgba(15,28,63,${0.09 - i * 0.015})`,
              }}
            />
          ))}

          {/* Rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full"
            style={{
              width: "560px",
              height: "560px",
              border: "1px dashed rgba(232,121,43,0.12)",
            }}
          />

          {/* Slow counter-rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full"
            style={{
              width: "800px",
              height: "800px",
              border: "1px dashed rgba(15,28,63,0.06)",
            }}
          />

          {/* Orbiting dot — orange */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ width: "460px", height: "460px" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange/40" />
          </motion.div>

          {/* Orbiting dot — navy */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ width: "660px", height: "660px" }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0F1C3F]/30" />
          </motion.div>

          {/* Center glow */}
          <div className="absolute w-[200px] h-[200px] rounded-full bg-orange/[0.04] blur-[60px]" />
          <div className="absolute w-[320px] h-[320px] rounded-full bg-[#0F1C3F]/[0.02] blur-[50px]" />
        </div>

        {/* Content — staggered cinematic entrance */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5"
          >
            Partner With Us
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] max-w-3xl mx-auto"
            >
              Let's Build{" "}
              <span className="text-orange">Enduring Value</span>{" "}
              Together
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#6e6e73] text-[17px] leading-[1.75] max-w-2xl mx-auto mb-12"
          >
            We take a long-term, disciplined approach to investing, deploying capital with precision, leveraging deep expertise, and driving operational excellence to deliver consistent, durable performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[14px] font-semibold px-9 py-4 rounded-lg transition-colors duration-300 tracking-wide"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
