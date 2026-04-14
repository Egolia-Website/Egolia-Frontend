"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TradereaHero() {
  return (
    <section className="bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-[2px] bg-orange" />
              <span className="text-navy text-sm font-bold tracking-[0.1em] uppercase">The TradeREA Advantage</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[5.5rem] font-serif text-navy leading-[0.95] tracking-[-0.03em] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Trade Real Estate
              <br />
              <span className="text-orange italic">Like Stocks</span>
            </motion.h1>

            <motion.p
              className="text-navy/70 text-base sm:text-xl leading-[1.7] max-w-md mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Access, Buy, And Sell Real Estate Assets With The Speed And Liquidity Of Public Markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="text-navy text-lg font-semibold border-b-2 border-orange pb-1 hover:text-orange transition-colors duration-300"
              >
                Explore Platform
              </Link>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/tradingimage.jpeg"
                alt="Trading charts and data"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/20" />
            </div>
            {/* Gold L-corner */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 hidden lg:block">
              <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gold" />
              <div className="absolute bottom-0 right-0 h-full w-[3px] bg-gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
