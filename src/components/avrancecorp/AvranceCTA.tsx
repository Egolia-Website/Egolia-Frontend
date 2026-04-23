"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AvranceCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <Image src="/division/explore1.png" alt="" fill className="object-cover object-center" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14 text-center">

        <motion.p
          className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.p>

        <motion.h2
          className="text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.025em] mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Partner With{" "}
          <span className="text-orange">AvranceCorp</span>
        </motion.h2>

        <motion.p
          className="text-[#6e6e73] max-w-xl mx-auto text-[16px] sm:text-[17px] leading-[1.8] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you are an investor, developer, or strategic partner, AvranceCorp offers opportunities to grow and build lasting value together.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/investor"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-orange hover:bg-[#d4691e] px-8 py-4 text-[15px] font-bold text-white transition-colors duration-300 sm:w-auto"
          >
            Explore Investments
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-lg border border-[#1d1d1f]/15 hover:border-orange hover:text-orange px-8 py-4 text-[15px] font-bold text-[#1d1d1f] transition-all duration-300 sm:w-auto"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
