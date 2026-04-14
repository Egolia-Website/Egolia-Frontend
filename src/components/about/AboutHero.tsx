"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Toronto_skyline%2C_2024_%2852592814618%29.jpg/3840px-Toronto_skyline%2C_2024_%2852592814618%29.jpg"
          alt="Toronto skyline"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 w-full pb-20 sm:pb-32 md:pb-40 pt-20 sm:pt-32">
        <motion.p
          className="text-white/70 text-lg italic mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who We Are
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[1] tracking-[-0.02em] max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-white block">Building Enduring</span>
          <span className="text-orange block italic mt-2">Future</span>
        </motion.h1>

        <motion.p
          className="text-white/70 text-base sm:text-xl leading-[1.7] mt-6 sm:mt-10 max-w-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Egolia Group Is A Vertically Integrated Investment And Development Firm Focused On Delivering Long-Term Value Across Real Estate, Finance, And Emerging Markets.
        </motion.p>
      </div>
    </section>
  );
}
