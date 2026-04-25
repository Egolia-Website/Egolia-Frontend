"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PartnerCTA() {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden">
      <Image src="/division/explore1.png" alt="" fill className="object-cover object-center" />

      {/* Subtle dark left overlay to improve text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14">
        <div className="max-w-2xl">

          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-[2.8rem] sm:text-[3.6rem] lg:text-[4.5rem] font-bold text-[#1d1d1f] leading-[1.06] tracking-[-0.03em]"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Partner With{" "}
              <span className="text-orange">Egolia</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-[#4a4a4a] text-[17px] sm:text-[18px] leading-[1.8] mb-12 max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Whether you are an investor, developer, or strategic partner, Egolia offers opportunities to grow and succeed together.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="/investor"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-orange hover:bg-[#d4691e] px-9 py-4 text-[15px] font-bold text-white transition-colors duration-300"
            >
              Explore Investments
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-lg border border-[#1d1d1f]/20 hover:border-orange hover:text-orange bg-white/60 backdrop-blur-sm px-9 py-4 text-[15px] font-bold text-[#1d1d1f] transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
