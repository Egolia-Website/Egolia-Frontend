"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PlatformHero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] flex items-center justify-center overflow-hidden">

      {/* Background image — no overlay, image already has fading design */}
      <div className="absolute inset-0">
        <Image
          src="/division/div-hero.png"
          alt="Egolia Group — Our Companies"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content centered on image */}
      <div className="relative z-10 w-full text-center px-6 py-20">

        {/* Eyebrow — EGOLIA GROUP with gold lines */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-10 h-[1px] bg-orange" />
          <span className="text-orange text-[13px] font-semibold tracking-[0.35em] uppercase">
            Egolia Group
          </span>
          <div className="w-10 h-[1px] bg-orange" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3.5rem] sm:text-[5rem] lg:text-[7rem] font-bold text-white leading-[1.0] tracking-[-0.03em] mb-5"
        >
          Our Companies
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-10 h-[2px] bg-orange mx-auto mb-8"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white text-[18px] sm:text-[20px] leading-[1.75] max-w-2xl mx-auto mb-10 font-medium"
        >
          Explore the businesses that form Egolia Group&apos;s integrated platform across development, investment, and innovation.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/investor"
            className="inline-flex items-center gap-3 bg-orange hover:bg-[#d4691e] text-white text-[15px] font-semibold px-10 py-4 rounded-lg transition-colors duration-300"
          >
            Explore Investments
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
