"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-[#1d1d1f] font-sans overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════
          1 — HERO
      ══════════════════════════════════════ */}

      {/* MOBILE hero — stacked */}
      <div className="lg:hidden pt-[72px]">
        {/* Image top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="relative w-full h-[52vw] min-h-[220px] max-h-[360px]"
        >
          <Image
            src="/images/home/hero-toronto.png"
            alt="Egolia — Building Long-Term Value"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Soft bottom fade into content */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 50%, white 100%)" }} />
        </motion.div>

        {/* Content below */}
        <div className="px-6 pt-6 pb-14 bg-white">
          <div className="mb-2">
            {[
              { text: "Let's build", color: "text-[#1d1d1f]" },
              { text: "long-term", color: "text-orange" },
              { text: "value together.", color: "text-[#1d1d1f]" },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
                  className={`block text-[2.4rem] font-bold leading-[1.1] tracking-[-0.03em] ${line.color}`}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="text-[#6e6e73] text-[15px] leading-[1.8] mt-4 mb-8"
          >
            Egolia is a disciplined investment group deploying capital across real estate, fintech, and private markets, built for lasting impact and generational value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <Link href="/contact" className="bg-orange hover:bg-[#d4691e] text-white text-[13px] font-semibold tracking-wide px-6 py-3.5 rounded-lg transition-colors duration-300">
              Get In Touch
            </Link>
            <Link href="/investor" className="bg-transparent border border-[#0F1C3F] text-[#0F1C3F] text-[13px] font-semibold tracking-wide px-6 py-3.5 rounded-lg transition-all duration-300">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP hero — full screen */}
      <section className="relative h-screen pt-[84px] overflow-hidden hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute top-[84px] inset-x-0 bottom-0"
        >
          <Image
            src="/images/home/hero-toronto.png"
            alt="Egolia — Building Long-Term Value"
            fill
            className="object-cover object-top"
            quality={100}
            priority
          />
        </motion.div>

        {/* Base fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(8,14,35,0.97) 25%, rgba(8,14,35,0.82) 38%, rgba(8,14,35,0.4) 54%, rgba(8,14,35,0.1) 68%, transparent 82%)",
          }}
        />

        <div className="relative z-10 flex flex-col justify-center h-full px-20 xl:px-24 max-w-[55%] mt-4">
          <div className="mb-2 space-y-0">
            {[
              { text: "Let's build", color: "text-white" },
              { text: "long-term", color: "text-orange" },
              { text: "value together.", color: "text-white" },
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

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.65, duration: 0.9 }}
            className="text-white/80 text-[18px] leading-[1.8] max-w-[460px] mt-6 mb-12"
          >
            Egolia is a disciplined investment group deploying capital
            across real estate, fintech, and private markets, built
            for lasting impact and generational value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <Link href="/contact" className="bg-orange hover:bg-[#d4691e] text-white text-[14px] font-semibold tracking-wide px-9 py-4 rounded-lg transition-colors duration-300">
              Get In Touch
            </Link>
            <Link href="/investor" className="bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/10 text-[14px] font-semibold tracking-wide px-9 py-4 rounded-lg transition-all duration-300">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2 — OUR PHILOSOPHY
      ══════════════════════════════════════ */}
      <section className="relative bg-white py-24 sm:py-32 lg:py-44 px-6 overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-[20vw] font-black text-[#1d1d1f]/[0.03] leading-none tracking-tighter whitespace-nowrap">
            EGOLIA
          </span>
        </div>
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-orange/6 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <FadeUp>
            <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-8">
              Our Philosophy
            </p>
          </FadeUp>

          {["We don't follow markets.", "We build them."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.12 }}
                className={`block text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em] ${i === 1 ? "text-orange" : "text-[#1d1d1f]"}`}
              >
                {line}
              </motion.h2>
            </div>
          ))}

          <FadeUp delay={0.4} className="mt-8 sm:mt-10">
            <p className="text-[#6e6e73] text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.8] max-w-2xl mx-auto">
              Egolia is a private investment group deploying disciplined capital across real estate, fintech, and private markets. We invest with conviction, operate with integrity, and build with a horizon measured in decades, not quarters.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3 — FOR INVESTORS
      ══════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] py-20 sm:py-28 lg:py-36 px-6 lg:px-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* LEFT — Fancy animated collage */}
            <div className="w-full lg:w-[48%] shrink-0">
              <div className="flex flex-col gap-3">

                {/* Row 1 — main image, cinematic reveal */}
                <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9]">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image src="/images/home/investors-main.png" alt="Egolia" fill className="object-cover" />
                  </motion.div>
                  {/* Sheen overlay that sweeps across */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "200%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)" }}
                  />
                </div>

                {/* Row 2 — two images sliding in from sides */}
                <div className="flex gap-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-[55%]">
                    <motion.div
                      initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image src="/images/home/wasaga.png" alt="Egolia" fill className="object-cover" />
                    </motion.div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-[45%]">
                    <motion.div
                      initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image src="/images/home/investors-right.png" alt="Egolia" fill className="object-cover" />
                    </motion.div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT — Label + heading + 2x2 pillars */}
            <div className="w-full lg:w-[52%]">
              <FadeUp>
                <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5">
                  For Investors
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] mb-10">
                  A Disciplined Approach To{" "}
                  <span className="text-orange">Long-Term Growth</span>
                </h2>
              </FadeUp>

              {/* 2×2 pillars — no icons, just bold title + desc */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {[
                  {
                    title: "Discipline",
                    desc: "Structured decision-making backed by rigorous analysis.",
                  },
                  {
                    title: "Long-Term Focus",
                    desc: "Sustainable growth over short-term gains.",
                  },
                  {
                    title: "Strategic Execution",
                    desc: "Capital, expertise, and innovation aligned for consistent performance.",
                  },
                  {
                    title: "Operational Excellence",
                    desc: "Active management across every portfolio company we own.",
                  },
                ].map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h3 className="text-[#1d1d1f] font-bold text-[17px] leading-snug mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-[#6e6e73] text-[14px] leading-[1.7]">
                      {pillar.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <FadeUp delay={0.3} className="mt-10">
                <Link
                  href="/investor"
                  className="inline-flex items-center gap-2 bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[14px] font-semibold px-8 py-4 rounded-lg transition-colors duration-300 tracking-wide"
                >
                  Investor Relations
                </Link>
              </FadeUp>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4 — PLATFORM
      ══════════════════════════════════════ */}
      <section className="bg-white pt-20 sm:pt-28 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">
          <FadeUp className="text-center mb-12 sm:mb-16">
            <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5">
              Our Platform
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1d1f] leading-[1.1] tracking-[-0.025em] max-w-2xl mx-auto">
              Four companies.{" "}
              <span className="text-orange">One unified vision.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[7px] px-[7px]">
          {[
            {
              image: "/images/home/platform-avrancecorp.png",
              logo: "/images/home/logo-avrancecorp.png",
              logoAlt: "AvranceCorp",
              title: "Real estate redefined for the long term.",
              desc: "Strategic investment across residential and commercial markets.",
              href: "/platform/avrancecorp",
              logoWidth: 130,
              logoHeight: 36,
              useBlend: false,
            },
            {
              image: "/images/home/platform-avrance-capital.png",
              logo: "/images/home/logo-avrance-capital.png",
              logoAlt: "Avrance Capital",
              title: "Private capital, deployed with precision.",
              desc: "Institutional-grade credit and equity strategies for durable businesses.",
              href: "/platform/avrancecapital",
              logoWidth: 130,
              logoHeight: 36,
              useBlend: false,
            },
            {
              image: "/images/home/platform-metadata.png",
              logo: "/images/home/logo-metadata.png",
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
              image: "/images/home/platform-traderea.png",
              logo: "/images/home/logo-traderea.png",
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
              className="group relative overflow-hidden bg-[#1d1d1f] aspect-[4/3] sm:aspect-[16/10] flex flex-col justify-end rounded-[3px]"
            >
              <Link href={card.href} className="absolute inset-0 z-20" />

              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <Image src={card.image} alt={card.logoAlt} fill className="object-cover object-center" />
              </div>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.1) 55%, transparent 75%),
                    linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 45%)
                  `,
                }}
              />

              <div className="relative z-10 px-5 pb-5 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <div className={`flex items-center mb-3 sm:mb-4 ${(card as any).bigLogo ? "h-10 sm:h-12" : "h-7 sm:h-8"}`}>
                    <Image
                      src={card.logo}
                      alt={card.logoAlt}
                      width={card.logoWidth}
                      height={card.logoHeight}
                      className={`object-contain object-left w-auto ${(card as any).bigLogo ? "max-h-10 sm:max-h-12" : "max-h-7 sm:max-h-8"}`}
                      style={
                        card.useBlend
                          ? { filter: "brightness(20) saturate(0)", mixBlendMode: "screen" }
                          : { filter: "brightness(0) invert(1)" }
                      }
                    />
                  </div>

                  <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-bold text-white leading-[1.2] tracking-[-0.02em] mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-[13px] sm:text-[14px] leading-[1.55] hidden sm:block max-w-[300px]">
                    {card.desc}
                  </p>
                </div>

                <span className="bg-white text-[#1d1d1f] text-[11px] sm:text-[12px] font-semibold tracking-wide px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg shrink-0 group-hover:bg-white/90 transition-colors duration-300">
                  View More
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          5 — OUR FIRM
      ══════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[auto] lg:min-h-[85vh]">

          <FadeUp className="relative w-full lg:w-[50%] min-h-[280px] sm:min-h-[400px] lg:min-h-0">
            <Image
              src="/images/home/our-firm.png"
              alt="Our Firm"
              fill
              className="object-cover"
            />
            {/* Fade into content on mobile */}
            <div className="absolute inset-0 pointer-events-none lg:hidden" style={{ background: "linear-gradient(to bottom, transparent 50%, #f5f5f7 100%)" }} />
          </FadeUp>

          <div className="lg:w-[50%] flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-24 py-14 sm:py-20 lg:py-0">

            <FadeUp>
              <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-6">
                Our Firm
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] mb-6">
                Built on{" "}
                <span className="text-orange">conviction.</span>
                <br />
                Defined by results.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-[#6e6e73] text-[15px] sm:text-[17px] leading-[1.75] max-w-[480px] mb-10">
                Egolia operates with the rigor of an institution and the agility of a founder-led firm. Our integrated platform spans real estate, fintech, capital markets, and proprietary intelligence, with each company amplifying the others.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex gap-10 sm:gap-16 mb-10 sm:mb-12">
                {[
                  { value: "$2B+", label: "Assets Under Management" },
                  { value: "4", label: "Operating Companies" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 tracking-tight text-[#1d1d1f]">
                      {stat.value}
                    </p>
                    <p className="text-[#6e6e73] text-[12px] sm:text-[13px] font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[13px] sm:text-[14px] font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-colors duration-300 tracking-wide self-start"
              >
                Learn About Egolia
              </Link>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          6 — BY THE NUMBERS
      ══════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-6 lg:px-14 overflow-hidden bg-[#f5f5f7]">

        <div className="absolute top-[-20%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-orange/6 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue/6 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto">

          <FadeUp className="text-center mb-6 sm:mb-8">
            <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-5">
              By The Numbers
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] max-w-2xl mx-auto">
              Built For{" "}
              <span className="text-orange">Long-Term</span> Value
            </h2>
          </FadeUp>

          <FadeUp delay={0.1} className="text-center mb-12 sm:mb-20">
            <p className="text-[#6e6e73] text-[15px] sm:text-[17px] leading-[1.75] max-w-xl mx-auto">
              Four platforms. Billions in real assets. Millions of users. The numbers behind Egolia's disciplined approach to building generational wealth.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                className="group relative rounded-2xl overflow-hidden py-8 sm:py-12 px-4 sm:px-6 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.45) 100%)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(232,121,43,0.08) 0%, transparent 70%)" }}
                />
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <p className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 tracking-tight text-[#1d1d1f]">
                  <AnimatedNumber target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="relative z-10 text-[#6e6e73] text-[11px] sm:text-[13px] font-medium tracking-wide leading-[1.4] group-hover:text-[#1d1d1f] transition-colors duration-300">
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
      <section className="relative bg-white py-20 sm:py-28 px-6 text-center overflow-hidden">

        {/* Rings — scaled down on mobile */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          {[
            { desk: 280, mob: 160 },
            { desk: 460, mob: 260 },
            { desk: 660, mob: 360 },
            { desk: 900, mob: 480 },
            { desk: 1160, mob: 600 },
          ].map(({ desk, mob }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute rounded-full"
              style={{
                width: `min(${desk}px, ${mob / 4 * 100}vw)`,
                height: `min(${desk}px, ${mob / 4 * 100}vw)`,
                border: `1px solid rgba(15,28,63,${0.09 - i * 0.015})`,
              }}
            />
          ))}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full"
            style={{ width: "min(560px, 90vw)", height: "min(560px, 90vw)", border: "1px dashed rgba(232,121,43,0.12)" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full"
            style={{ width: "min(800px, 95vw)", height: "min(800px, 95vw)", border: "1px dashed rgba(15,28,63,0.06)" }}
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ width: "min(460px, 80vw)", height: "min(460px, 80vw)" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange/40" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ width: "min(660px, 90vw)", height: "min(660px, 90vw)" }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0F1C3F]/30" />
          </motion.div>

          <div className="absolute w-[200px] h-[200px] rounded-full bg-orange/[0.04] blur-[60px]" />
          <div className="absolute w-[320px] h-[320px] rounded-full bg-[#0F1C3F]/[0.02] blur-[50px]" />
        </div>

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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] max-w-3xl mx-auto"
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
            className="text-[#6e6e73] text-[15px] sm:text-[17px] leading-[1.75] max-w-2xl mx-auto mb-10 sm:mb-12"
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
              className="inline-flex items-center gap-2 bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[13px] sm:text-[14px] font-semibold px-8 sm:px-9 py-3.5 sm:py-4 rounded-lg transition-colors duration-300 tracking-wide"
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
