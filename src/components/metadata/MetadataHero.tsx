"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MetadataHero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/data-abstract.jpg"
          alt="Metadata & Research"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14 w-full py-24">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image
            src="/images/metada.png"
            alt="Metadata & Research"
            width={220}
            height={50}
            className="object-contain object-left h-10 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </motion.div>

        <motion.p
          className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Data & Research
        </motion.p>

        <div className="mb-6">
          {[
            { text: "Research &", color: "text-white" },
            { text: "Intelligence.", color: "text-orange" },
          ].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
                className={`block text-[clamp(2.8rem,5vw,4.8rem)] font-bold leading-[1.08] tracking-[-0.03em] ${line.color}`}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          className="text-white/80 text-[17px] sm:text-[18px] leading-[1.8] max-w-[520px] mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Built on precision, intelligence, and disciplined analysis. Leveraging advanced analytics, real-time data, and proprietary research to deliver actionable insights that drive informed investment decisions.
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
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
