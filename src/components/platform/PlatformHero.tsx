"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PlatformHero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/julian-gentile-DebGwQPrTj4-unsplash.jpg"
          alt="City skyline"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 w-full text-center py-20">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-sans text-white leading-[1.05] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Companies
        </motion.h1>

        <motion.p
          className="text-white/70 text-base sm:text-xl leading-[1.7] mt-8 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore The Businesses That Form Egolia Group&apos;s Integrated Platform Across Development, Investment, And Innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/overview"
            className="inline-block mt-8 text-white text-lg font-medium border-b-2 border-white/30 pb-1 hover:border-orange hover:text-orange transition-all duration-300"
          >
            Explore Opportunities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
