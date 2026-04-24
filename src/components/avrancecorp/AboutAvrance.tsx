"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, BarChart3, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Building2 className="w-5 h-5" strokeWidth={1.6} />,
    title: "Disciplined Development",
    description: "Rigorous analysis and structured decision-making applied to every project opportunity.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" strokeWidth={1.6} />,
    title: "Market Intelligence",
    description: "Deep market insight to identify and position assets for long-term success.",
  },
  {
    icon: <Shield className="w-5 h-5" strokeWidth={1.6} />,
    title: "Value Creation",
    description: "High-quality assets designed for sustainable returns and lasting community impact.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" strokeWidth={1.6} />,
    title: "Strategic Growth",
    description: "Scalable development strategies built for consistent portfolio expansion.",
  },
];

export default function AboutAvrance() {
  return (
    <section className="relative py-24 md:py-32">
      <Image src="/division/philo.png" alt="" fill className="object-cover object-center" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* LEFT — sticky heading block */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-28 self-start">
            <motion.p
              className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About AvranceCorp
            </motion.p>
            <motion.h2
              className="text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.025em] mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A Development<br />Platform Built<br />
              <span className="text-orange">On Precision.</span>
            </motion.h2>
            <motion.div
              className="w-12 h-[2px] bg-orange mb-7"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.p
              className="text-[#6e6e73] text-[16px] sm:text-[17px] leading-[1.85]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              AvranceCorp is a real estate development platform focused on delivering high-quality residential and commercial projects. With a disciplined approach to planning, execution, and capital allocation, we create assets designed for long-term performance and sustainable growth.
            </motion.p>
          </div>

          {/* RIGHT — feature rows */}
          <div className="w-full lg:w-[58%] flex flex-col divide-y divide-[#e8e8ed] border-t border-[#e8e8ed]">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group flex items-start gap-6 py-8 hover:bg-[#fafafa] transition-colors duration-300 px-2 -mx-2 rounded-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#0F1C3F] flex items-center justify-center text-orange shrink-0 group-hover:bg-orange group-hover:text-white transition-all duration-300 mt-0.5">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1d1d1f] text-[17px] font-bold leading-snug mb-2">{feature.title}</h3>
                  <p className="text-[#6e6e73] text-[14px] leading-[1.75]">{feature.description}</p>
                </div>
                <span className="text-[#0F1C3F]/25 text-[2rem] font-bold leading-none shrink-0 group-hover:text-orange/50 transition-colors duration-300 mt-1 hidden sm:block">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
