"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InvestorCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-24 md:py-32 px-6 text-center">

      <div className="max-w-[600px] mx-auto">

        <motion.p
          className="text-[11px] font-semibold tracking-[0.45em] uppercase text-orange mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get Started
        </motion.p>

        <div className="overflow-hidden mb-5">
          <motion.h2
            className="text-[#1d1d1f] text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.08]"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Begin Your{" "}
            <span className="text-orange">Investment Journey</span>
          </motion.h2>
        </div>

        <motion.p
          className="text-[#3a3a3f] text-[15px] sm:text-[17px] leading-[1.75] mb-10"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Connect with our team to explore current and upcoming opportunities tailored for long-term value creation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link
            href="/platform"
            className="w-full sm:w-auto bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[14px] font-semibold px-8 py-4 rounded-lg transition-colors duration-300 tracking-wide text-center"
          >
            Explore Opportunities
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-[#1d1d1f] text-[14px] font-semibold px-8 py-4 rounded-lg border border-[#1d1d1f]/15 hover:border-orange hover:text-orange transition-all duration-300 tracking-wide text-center"
          >
            Contact Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
