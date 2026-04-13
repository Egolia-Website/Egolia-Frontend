"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-navy/75 text-xl leading-[1.7] max-w-2xl mx-auto mb-10 italic font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Whether You Have An Inquiry, Partnership Opportunity, Or Investment Interest, Our Team Is Here To Assist You.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="#"
            className="text-navy text-lg font-semibold border-b-2 border-navy pb-1 hover:text-orange hover:border-orange transition-all duration-300"
          >
            We Look Forward To Connecting With You.
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
