"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PlatformCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 md:py-36">
      <Image
        src="/division/connectwithegolia.png"
        alt="Connect With Egolia"
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={100}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="whitespace-nowrap text-orange text-[13px] font-bold tracking-[0.28em] uppercase">
            Let&apos;s Connect
          </span>
        </motion.div>

        <motion.h2
          className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] mb-5 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Connect With Egolia
        </motion.h2>

        <motion.div
          className="w-12 h-[2px] bg-orange mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <motion.p
          className="text-[#4a5568] max-w-xl text-[15px] sm:text-[16px] leading-[1.8] mb-10 font-medium"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Learn More About Our Companies And Learn More Across Our Integrated Platform.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link
            href="/platform"
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#0F1C3F] text-white text-[14px] font-bold hover:bg-[#1A2B5C] transition-colors duration-300 text-center shadow-[0_16px_36px_rgba(15,28,63,0.16)]"
          >
            View Our Platform
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-lg border border-[#0F1C3F]/35 bg-white/70 text-[#0F1C3F] text-[14px] font-bold hover:border-orange hover:text-orange hover:bg-white transition-all duration-300 text-center"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
