"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PlatformHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/division/div-hero.png"
          alt="Egolia Group — Our Companies"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-[84px] pb-48">

        <motion.p
          className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Egolia Group
        </motion.p>

        <div className="mb-6 space-y-0">
          {[
            { text: "Our", color: "text-white" },
            { text: "Companies.", color: "text-orange" },
          ].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%", opacity: 0, filter: "blur(4px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.1 }}
                className={`block text-[clamp(3.2rem,5vw,5.2rem)] font-bold leading-[1.1] tracking-[-0.03em] ${line.color}`}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="text-white/80 text-[18px] leading-[1.8] max-w-[560px] mx-auto mb-12"
        >
          Explore the businesses that form Egolia Group&apos;s integrated platform across development, investment, and innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="/investor"
            className="bg-orange hover:bg-[#d4691e] text-white text-[14px] font-semibold tracking-wide px-9 py-4 rounded-lg transition-colors duration-300"
          >
            Explore Investments
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/10 text-[14px] font-semibold tracking-wide px-9 py-4 rounded-lg transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
