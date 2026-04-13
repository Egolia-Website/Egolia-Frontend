"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DisciplinedApproach() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.p
              className="text-white/55 text-lg mb-5 italic"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Firm
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A Disciplined Approach To Investment
            </motion.h2>

            <motion.p
              className="text-white/55 mt-8 text-xl leading-[1.7] max-w-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Egolia Is An Investment Company Focused On Long-Term Value Creation Through Strategic Capital, Innovation, And Disciplined Execution Across Its Platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-block mt-8 text-white text-lg font-medium border-b-2 border-orange pb-1 hover:text-orange transition-colors duration-300"
              >
                Our Firm
              </Link>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="relative overflow-visible"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Orange vertical bar left */}
            <div className="absolute -left-5 top-8 bottom-8 w-[3px] bg-orange" />

            <div className="relative w-full aspect-[3/2] overflow-hidden">
              <Image
                src="/images/glass-building.jpg"
                alt="Modern glass building"
                fill
                className="object-cover"
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
