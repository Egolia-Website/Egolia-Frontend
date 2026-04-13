"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    ),
    title: "Real Estate Development",
    description:
      "Designing and delivering high-quality residential and commercial developments focused on long-term value creation.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Investment Management",
    description:
      "Structuring and managing investment opportunities that generate consistent returns across diverse asset classes.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Financial Innovation",
    description:
      "Leveraging modern financial strategies and technology to enhance accessibility, efficiency, and scalability.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Strategic Partnerships",
    description:
      "Collaborating with industry leaders and stakeholders to execute and scale projects effectively.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="bg-navy-dark py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Subtitle */}
        <motion.p
          className="text-center text-orange text-base font-semibold tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.p>

        <motion.div
          className="w-12 h-[2px] bg-orange mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        <motion.h2
          className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Our Core Capabilities
        </motion.h2>

        {/* Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative bg-white/5 border-t-[3px] border-t-orange border-b border-l border-r border-white/[0.06] p-8 group hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] transition-all duration-500"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="text-orange mb-7 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-white/55 text-base leading-[1.7] font-semibold">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
