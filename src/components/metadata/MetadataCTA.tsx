"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MetadataCTA() {
  return (
    <section className="bg-black py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Access Market Intelligence
        </motion.h2>

        <motion.p
          className="text-white/65 font-semibold max-w-xl mx-auto text-xl leading-[1.7] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Leverage Data-Driven Insights To Support Smarter Real Estate Investment Decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="text-white text-lg font-semibold border-b-2 border-white/30 pb-1 hover:border-orange hover:text-orange transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
