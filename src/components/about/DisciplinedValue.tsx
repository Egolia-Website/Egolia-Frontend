"use client";

import { motion } from "framer-motion";

const checkpoints = [
  {
    title: "Strategic Market Selection",
    description:
      "Identifying high-potential markets through rigorous data analysis and on-the-ground intelligence.",
  },
  {
    title: "Risk-Managed Execution",
    description:
      "Implementing proven frameworks to mitigate downside risk while maximizing upside potential.",
  },
  {
    title: "Long-Term Value Creation",
    description:
      "Building assets and portfolios designed to deliver sustainable, compounding returns over time.",
  },
];

export default function DisciplinedValue() {
  return (
    <section className="bg-[#060E1F] py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + description */}
          <div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              A Disciplined Approach To Long-Term Value
            </motion.h2>

            <motion.div
              className="w-16 h-[2px] bg-orange mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />

            <motion.p
              className="text-white/55 text-xl leading-[1.7] font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              At Egolia Group, We Combine Strategic Insight With Disciplined Execution To Deliver Sustainable Growth. Our Integrated Approach Allows Us To Identify Opportunities, Manage Risk Effectively, And Create Lasting Value Across Every Stage Of The Investment Lifecycle.
            </motion.p>
          </div>

          {/* Right: 3 checklist items with left orange border */}
          <div className="space-y-6">
            {checkpoints.map((item, i) => (
              <motion.div
                key={item.title}
                className="border-l-[3px] border-orange pl-6 py-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    className="w-5 h-5 text-orange flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white text-xl font-semibold tracking-wide">
                    {item.title}
                  </span>
                </div>
                <p className="text-white/55 text-base leading-[1.7] pl-8 font-semibold">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
