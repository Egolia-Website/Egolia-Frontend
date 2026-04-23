"use client";

import { motion } from "framer-motion";
import { Building2, BarChart3, Zap, Users } from "lucide-react";

const capabilities = [
  {
    icon: <Building2 className="w-7 h-7" strokeWidth={1.4} />,
    title: "Real Estate Development",
    description: "Designing and delivering high-quality residential and commercial developments focused on long-term value creation.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" strokeWidth={1.4} />,
    title: "Investment Management",
    description: "Structuring and managing investment opportunities that generate consistent returns across diverse asset classes.",
  },
  {
    icon: <Zap className="w-7 h-7" strokeWidth={1.4} />,
    title: "Financial Innovation",
    description: "Leveraging modern financial strategies and technology to enhance accessibility, efficiency, and scalability.",
  },
  {
    icon: <Users className="w-7 h-7" strokeWidth={1.4} />,
    title: "Strategic Partnerships",
    description: "Collaborating with industry leaders and stakeholders to execute and scale projects effectively.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="bg-white py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Centered header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] font-bold text-[#0F1C3F] leading-[1.06] tracking-[-0.03em] mb-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Core
            <br />
            <span className="text-orange">Capabilities</span>
          </motion.h2>
          <motion.div
            className="w-16 h-[2px] bg-orange mx-auto mb-7"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-[#6e6e73] text-[17px] sm:text-[18px] leading-[1.85] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Egolia Group operates across four integrated capability areas, each designed to generate long-term value and reinforce our broader investment strategy.
          </motion.p>
        </div>

        {/* 4-col cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-[#e8e8ed] bg-[#f5f5f7] p-8 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <span className="absolute top-4 right-5 text-[5rem] font-black text-[#0F1C3F]/[0.04] leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-white mb-6 group-hover:bg-orange transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-[#1d1d1f] text-[17px] font-bold leading-snug mb-3">{item.title}</h3>
                <div className="w-6 h-[2px] bg-orange mb-4" />
                <p className="text-[#6e6e73] text-[14px] leading-[1.8]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
