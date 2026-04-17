"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.p
              className="text-orange text-sm font-bold tracking-[0.15em] uppercase mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Egolia
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-[2.8rem] font-sans text-white leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A Vertically Integrated
              <br />
              Investment Platform
            </motion.h2>

            <motion.div
              className="w-16 h-[2px] bg-orange mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <motion.p
              className="text-white/70 text-base sm:text-lg leading-[1.8] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Egolia Group Is A Multi-Sector Investment And Development Firm
              Focused On Creating Long-Term Value Through Strategic Execution
              Across Real Estate, Finance, And Emerging Markets.
            </motion.p>

            <motion.p
              className="text-white/70 text-base sm:text-lg leading-[1.8]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              By Integrating Acquisition, Development, And Asset Management, We
              Maintain Control Across The Entire Investment Lifecycle — Ensuring
              Efficiency, Transparency, And Consistent Performance.
            </motion.p>
          </div>

          {/* Right: Image with decorators */}
          <motion.div
            className="relative overflow-visible"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {/* Orange vertical bar left */}
            <div className="hidden md:block absolute -left-5 top-8 bottom-8 w-[3px] bg-orange" />

            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src="/images/glass-tower.jpg"
                alt="Modern glass tower"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Orange accent corner bottom-right */}
            <div className="hidden md:block absolute -bottom-3 -right-3 w-20 h-20">
              <div className="absolute bottom-0 right-0 w-full h-[3px] bg-orange" />
              <div className="absolute bottom-0 right-0 h-full w-[3px] bg-orange" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
