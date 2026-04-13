"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/city-skyline-hq.jpg"
          alt=""
          fill
          className="object-cover grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.p
          className="text-center text-orange text-base font-semibold tracking-[0.08em] uppercase mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Vision & Mission
        </motion.p>

        <motion.div
          className="w-12 h-[2px] bg-orange mx-auto mb-20"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        {/* Two large white cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            className="bg-white p-10 md:p-14"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-orange mb-6">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="w-10 h-[2px] bg-orange mb-6" />
            <h3 className="text-navy text-2xl font-bold uppercase tracking-wide mb-6">
              Vision
            </h3>
            <p className="text-navy/75 text-xl leading-[1.7] font-semibold">
              To Redefine How Individuals And Institutions Access And Benefit
              From High-Quality Investment Opportunities.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white p-10 md:p-14"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="text-orange mb-6">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <div className="w-10 h-[2px] bg-orange mb-6" />
            <h3 className="text-navy text-2xl font-bold uppercase tracking-wide mb-6">
              Mission
            </h3>
            <p className="text-navy/75 text-xl leading-[1.7] font-semibold">
              To Deliver Innovative, Accessible, And Performance-Driven
              Investment Solutions Backed By Strategic Development And
              Disciplined Execution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
