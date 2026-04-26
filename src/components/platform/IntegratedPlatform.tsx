"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, TrendingUp, Search, Gem, Users, Target, BarChart3 } from "lucide-react";

const flowItems = [
  {
    icon: <Search className="w-8 h-8" strokeWidth={1.3} />,
    label: "Research",
    bg: "bg-[#1a56db]",
    labelColor: "text-[#1a56db]",
  },
  {
    icon: <TrendingUp className="w-8 h-8" strokeWidth={1.3} />,
    label: "Investment",
    bg: "bg-[#0F1C3F]",
    labelColor: "text-[#0F1C3F]",
  },
  {
    icon: <Building2 className="w-8 h-8" strokeWidth={1.3} />,
    label: "Development",
    bg: "bg-[#1e3a5f]",
    labelColor: "text-[#1e3a5f]",
  },
  {
    icon: <Gem className="w-8 h-8" strokeWidth={1.3} />,
    label: "Value Creation",
    bg: "bg-[#E8792B]",
    labelColor: "text-[#E8792B]",
  },
];

const pillars = [
  {
    icon: <Users className="w-6 h-6" strokeWidth={1.4} />,
    bg: "bg-[#0F1C3F]",
    title: "Integrated Execution",
    desc: "Seamless collaboration across development, investment, and research.",
  },
  {
    icon: <Target className="w-6 h-6" strokeWidth={1.4} />,
    bg: "bg-[#0F1C3F]",
    title: "Strategic Alignment",
    desc: "A unified vision guiding every company and initiative.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" strokeWidth={1.4} />,
    bg: "bg-[#E8792B]",
    title: "Long-Term Value",
    desc: "Focused on sustainable growth and consistent performance.",
  },
];

export default function IntegratedPlatform() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/division/whatwedo.png"
          alt="What We Do"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — heading + description */}
          <motion.div
            className="w-full lg:w-[35%] shrink-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-[#E8792B] text-[14px] font-bold tracking-[0.3em] uppercase">What We Do</span>
            </div>
            <h2 className="text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F1C3F] mb-5">
              Built As One<br />Integrated Platform
            </h2>
            <p className="text-[#1d1d1f] text-[15px] leading-[1.85] font-medium">
              Each company within Egolia Group operates independently while contributing to a unified strategy focused on long-term value creation, disciplined execution, and sustainable growth.
            </p>
          </motion.div>

          {/* RIGHT — flow circles top + 3 cards bottom */}
          <div className="w-full lg:w-[65%] flex flex-col gap-10">

            {/* Flow circles with arrows — horizontal on sm+, vertical on mobile */}
            <div className="hidden sm:relative sm:flex sm:items-start sm:justify-between sm:gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="absolute top-[35px] flex items-center"
                  style={{ left: `calc(${(i + 1) * 25}% - 18px)`, transformOrigin: "left" }}
                >
                  <div className="w-10 h-[1.5px] bg-[#E8792B]/50" />
                  <svg className="w-2.5 h-2.5 text-[#E8792B] -ml-[1px]" fill="currentColor" viewBox="0 0 6 6">
                    <path d="M0 0l6 3-6 3V0z" />
                  </svg>
                </motion.div>
              ))}
              {flowItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className="flex flex-col items-center gap-3 z-10 w-[25%]"
                >
                  <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white/80 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[14px] font-bold text-center ${item.labelColor}`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mobile — reference design */}
            <div className="sm:hidden flex flex-col">
              {[
                { item: flowItems[0], step: "01", desc: "Identify opportunities and gather insights.", color: "#1a56db", lightBg: "#eff4ff", delay: 0.1 },
                { item: flowItems[1], step: "02", desc: "Allocate resources and build strategic partnerships.", color: "#0F1C3F", lightBg: "#eef0f5", delay: 0.2 },
                { item: flowItems[2], step: "03", desc: "Build, execute, and scale with excellence.", color: "#1e3a5f", lightBg: "#edf2f7", delay: 0.3 },
                { item: flowItems[3], step: "04", desc: "Deliver impact and sustainable growth.", color: "#E8792B", lightBg: "#fff4ec", delay: 0.4 },
              ].map(({ item, step, desc, color, lightBg, delay }, i, arr) => (
                <div key={step}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay }}
                    className="bg-white rounded-2xl shadow-sm border border-[#f0f0f0] overflow-hidden flex"
                  >
                    {/* Left colored bar */}
                    <div className="w-[6px] shrink-0" style={{ backgroundColor: color }} />

                    {/* Content */}
                    <div className="flex items-center gap-3 px-4 py-4 flex-1">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: lightBg }}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: color }}>
                          <div className="scale-75">{item.icon}</div>
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#0F1C3F] font-bold text-[15px] mb-0.5">{item.label}</h3>
                        <p className="text-[#6e6e73] text-[11px] leading-[1.6]">{desc}</p>
                      </div>

                      {/* Step number + dot grid */}
                      <div className="shrink-0 flex flex-col items-center gap-1.5">
                        <span className="text-[22px] font-bold leading-none" style={{ color }}>{step}</span>
                        <div className="grid grid-cols-4 gap-[3px]">
                          {Array.from({ length: 12 }).map((_, j) => (
                            <div key={j} className="w-[3px] h-[3px] rounded-full" style={{ backgroundColor: color, opacity: 0.25 }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connector arrow — aligned to icon center: 6px bar + 16px padding + 28px (half of icon) = 50px */}
                  {i < arr.length - 1 && (
                    <div className="flex flex-col items-start pl-[50px]">
                      <div className="w-2 h-2 rounded-full mt-1" style={{ backgroundColor: color }} />
                      <div className="w-[2px] h-4 ml-[3px]" style={{ backgroundColor: color, opacity: 0.35 }} />
                      <svg className="w-[10px] h-[10px] ml-[-1px]" fill={color} viewBox="0 0 10 10"><path d="M0 0h10L5 10z" /></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 3 pillar cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm border border-[#e8e8ed] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Rounded square icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-md ${item.bg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-[#0F1C3F] font-bold text-[15px] mb-2">{item.title}</h3>
                  <div className="w-6 h-[2px] bg-[#E8792B] mb-3" />
                  <p className="text-[#3a3a3c] text-[13px] leading-[1.7] font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
