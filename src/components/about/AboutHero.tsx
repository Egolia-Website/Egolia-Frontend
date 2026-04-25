"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/wh.png"
          alt="Who We Are"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14 w-full py-24">

        <motion.p
          className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who We Are
        </motion.p>

        <div className="mb-8 max-w-[700px]">
          {[
            { text: "Building Enduring", color: "text-white" },
            { text: "Future.", color: "text-orange" },
          ].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
                className={`block text-[clamp(2.4rem,4.5vw,4rem)] font-bold leading-[1.08] tracking-[-0.03em] ${line.color}`}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          className="text-white/75 text-[17px] sm:text-[18px] leading-[1.8] max-w-[500px] mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Egolia Group is a vertically integrated investment and development firm focused on delivering long-term value across real estate, finance, and emerging markets.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-lg bg-orange hover:bg-[#d4691e] px-8 py-4 text-[15px] font-bold text-white transition-colors duration-300"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
          </Link>
          <Link
            href="/investor"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 text-white text-[15px] font-semibold px-7 py-4 rounded-lg transition-colors duration-300"
          >
            Our Platform
            <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
          </Link>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-white/40 text-[11px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
