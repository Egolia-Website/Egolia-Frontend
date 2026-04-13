"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Full-width heading spanning top */}
        <motion.p
          className="text-white/55 text-lg italic mb-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Egolia
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          A Vertically Integrated Investment Platform
        </motion.h2>

        {/* Horizontal orange line separator */}
        <motion.div
          className="h-[2px] bg-orange mb-14"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Two-column layout: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: two paragraphs stacked */}
          <div className="flex flex-col justify-center gap-8">
            <motion.p
              className="text-white/55 text-xl leading-[1.7] font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Egolia Group Is A Multi-Sector Investment And Development Firm Focused On Creating Long-Term Value Through Strategic Execution Across Real Estate, Finance, And Emerging Markets.
            </motion.p>

            <motion.p
              className="text-white/55 text-xl leading-[1.7] font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              By Integrating Acquisition, Development, And Asset Management, We Maintain Control Across The Entire Investment Lifecycle — Ensuring Efficiency, Transparency, And Consistent Performance.
            </motion.p>
          </div>

          {/* Right: tall glass building image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/images/glass-tower.jpg"
                alt="Modern glass tower"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
