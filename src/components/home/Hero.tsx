"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white min-h-[calc(100vh-84px)] flex items-center">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 w-full py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-visible">
          {/* Left content */}
          <div>
            <motion.h1
              className="text-[3.2rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[6rem] font-bold leading-[1] tracking-[-0.03em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-navy block">Building</span>
              <span className="text-navy block">Long-Term</span>
              <span className="text-orange block italic">Value</span>
            </motion.h1>

            <motion.p
              className="text-navy/75 text-xl md:text-2xl leading-[1.7] mt-10 max-w-xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Egolia Is An Investment Company Focused On Building Long-Term Value Through Strategic Capital, Innovation, And Disciplined Growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/overview"
                className="inline-block mt-8 text-navy text-lg font-semibold underline underline-offset-[6px] decoration-orange decoration-2 hover:text-orange transition-colors duration-300"
              >
                Explore Opportunities
              </Link>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            className="relative overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Orange vertical bar left */}
            <div className="absolute -left-5 top-8 bottom-8 w-[3px] bg-orange" />

            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/hero-city.jpg"
                alt="Modern city buildings"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Orange accent corner bottom-right */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20">
              <div className="absolute bottom-0 right-0 w-full h-[3px] bg-orange" />
              <div className="absolute bottom-0 right-0 h-full w-[3px] bg-orange" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
