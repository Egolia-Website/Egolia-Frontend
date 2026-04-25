"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, BarChart3, Zap, Users } from "lucide-react";

const capabilities = [
  {
    icon: Building2,
    label: "01",
    title: "Real Estate Development",
    description: "Designing and delivering high-quality residential and commercial developments focused on long-term value creation.",
  },
  {
    icon: BarChart3,
    label: "02",
    title: "Investment Management",
    description: "Structuring and managing investment opportunities that generate consistent returns across diverse asset classes.",
  },
  {
    icon: Zap,
    label: "03",
    title: "Financial Innovation",
    description: "Leveraging modern financial strategies and technology to enhance accessibility, efficiency, and scalability.",
  },
  {
    icon: Users,
    label: "04",
    title: "Strategic Partnerships",
    description: "Collaborating with industry leaders and stakeholders to execute and scale projects effectively.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="relative bg-white py-28 md:py-36 overflow-hidden">
      <Image src="/images/backImage.png" alt="" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-white/92" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-bold text-[#0F1C3F] leading-[1.06] tracking-[-0.03em] mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Core <span className="text-orange">Capabilities.</span>
          </motion.h2>
          <motion.p
            className="text-[#6e6e73] text-[15px] leading-[1.8] max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Four integrated capability areas, each designed to generate long-term value and reinforce our broader investment strategy.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="group bg-[#f5f5f7] border border-[#e8e8ed] rounded-2xl p-8 flex flex-col hover:bg-white hover:border-orange/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-[box-shadow,background-color,border-color] duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-[#d4691e] flex items-center justify-center mb-6 shadow-[0_6px_24px_rgba(232,121,43,0.3)] group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>

              {/* Number label */}
              <span className="text-orange/30 text-[11px] font-bold tracking-[0.25em] uppercase block mb-3">{item.label}</span>

              {/* Title */}
              <h3 className="text-[#1d1d1f] text-[17px] font-bold leading-snug mb-3">{item.title}</h3>

              {/* Underline */}
              <div className="w-8 h-[2px] bg-orange mb-4 group-hover:w-12 transition-all duration-300" />

              {/* Description */}
              <p className="text-[#6e6e73] text-[14px] leading-[1.8]">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
