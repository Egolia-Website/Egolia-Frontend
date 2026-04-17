"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DisciplineSection() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.p
              className="text-gold text-sm font-semibold tracking-[0.1em] uppercase mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Company
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-sans text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Discipline In Every Investment
            </motion.h2>

            <motion.p
              className="text-white/70 text-xl leading-[1.7] mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We Deploy Capital With Precision — Guided By Research, Structured Execution, And A Long-Term Investment Perspective. Our Approach Is Designed To Preserve Capital, Optimize Returns, And Perform Across Market Cycles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/investor"
                className="text-white text-lg font-medium border-b-2 border-gold pb-1 hover:text-gold transition-colors duration-300"
              >
                Explore Our Approach
              </Link>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/nyc-skyline.jpg"
                alt="City skyline"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
