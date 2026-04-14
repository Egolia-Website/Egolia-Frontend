"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AvranceHero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] flex items-center overflow-hidden">
      {/* Full-screen background */}
      <div className="absolute inset-0">
        <Image
          src="/images/avrancecorp.jpg"
          alt="Modern apartment building"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content centered */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 w-full py-20 md:py-28 flex items-center min-h-[calc(100vh-84px)]">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Eyebrow */}
          <motion.p
            className="text-orange text-sm font-semibold tracking-[0.15em] uppercase mb-6"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            Real Estate Development
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
          >
            Building Communities
            <br />
            That Create{" "}
            <span className="italic font-light">Long-Term Value</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-white/70 text-lg md:text-xl leading-[1.8] mt-8 max-w-xl font-medium"
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Residential And Mixed-Use Developments Across North America,
            Designed For Investors And Modern Living.
          </motion.p>

          {/* Divider + Link */}
          <motion.div
            className="mt-10 flex items-center gap-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="w-20 h-[1px] bg-white/40" />
            <Link
              href="/contact"
              className="text-white text-lg font-semibold hover:text-orange transition-colors duration-300 tracking-wide"
            >
              Partner With Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange via-orange/40 to-transparent" />
    </section>
  );
}
