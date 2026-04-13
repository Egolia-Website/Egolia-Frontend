"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MetadataHero() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-[5.5rem] font-bold text-navy leading-[0.95] tracking-[-0.03em] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Research &
              <br />
              Intelligence
            </motion.h1>

            <motion.p
              className="text-navy font-bold text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Built On Precision, Intelligence, And Disciplined Analysis.
            </motion.p>

            <motion.p
              className="text-navy/80 font-semibold text-xl leading-[1.7] max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Leveraging Advanced Analytics, Real-Time Data, And Proprietary Research To Deliver Actionable Insights That Drive Informed Investment Decisions.
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/images/data-abstract.jpg"
                alt="Data visualization"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
