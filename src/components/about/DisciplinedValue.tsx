"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$5B+", label: "Development Pipeline" },
  { value: "7,000+", label: "Units In Portfolio" },
  { value: "4", label: "Integrated Companies" },
  { value: "150+", label: "Combined Experience" },
];

const checkpoints = [
  { title: "Strategic Market Selection", description: "Identifying high-potential markets through rigorous data analysis and on-the-ground intelligence." },
  { title: "Risk-Managed Execution", description: "Implementing proven frameworks to mitigate downside risk while maximizing upside potential." },
  { title: "Long-Term Value Creation", description: "Building assets and portfolios designed to deliver sustainable, compounding returns over time." },
];

const bars = [
  { x: 50,  h: 52,  y: 188 },
  { x: 108, h: 90,  y: 150 },
  { x: 166, h: 128, y: 112 },
  { x: 224, h: 168, y: 72  },
  { x: 282, h: 210, y: 30  },
];

export default function DisciplinedValue() {
  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* LEFT — eyebrow + title + checkpoints */}
          <div className="w-full lg:w-[52%]">

            <motion.p
              className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Approach
            </motion.p>

            <motion.h2
              className="text-[2.4rem] sm:text-[3.2rem] font-bold text-[#0F1C3F] leading-[1.1] tracking-[-0.03em] mb-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A Disciplined Approach<br />
              <span className="text-orange">To Long-Term Value.</span>
            </motion.h2>

            <div className="flex flex-col divide-y divide-[#e8e8ed] border-t border-[#e8e8ed]">
              {checkpoints.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="py-4 flex items-start gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-orange mt-1.5 shrink-0" />
                  <div>
                    <h3 className="text-[#1d1d1f] text-[18px] font-bold mb-2">{item.title}</h3>
                    <p className="text-[#6e6e73] text-[15px] leading-[1.8]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT — chart */}
          <motion.div
            className="w-full lg:w-[48%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg viewBox="0 0 380 280" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c2cfe8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#dce8f8" stopOpacity="0.35" />
                </linearGradient>
                <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="55%" stopColor="#dde6f5" stopOpacity="0" />
                  <stop offset="100%" stopColor="#c4d2ea" stopOpacity="0.55" />
                </radialGradient>
              </defs>


              {/* Dot grid — top right */}
              {[0,1,2,3,4].map(col => [0,1,2,3].map(row => (
                <circle key={`tr-${col}-${row}`} cx={308 + col * 11} cy={18 + row * 11} r="2" fill="#c8d4ed" opacity="0.5" />
              )))}

              {/* Dot grid — bottom left */}
              {[0,1,2,3].map(col => [0,1,2].map(row => (
                <circle key={`bl-${col}-${row}`} cx={18 + col * 11} cy={244 + row * 11} r="2" fill="#c8d4ed" opacity="0.5" />
              )))}

              {/* Bars */}
              {bars.map((bar, i) => (
                <motion.rect
                  key={i}
                  x={bar.x} y={bar.y} width={46} height={bar.h} rx={7}
                  fill="url(#barGrad)"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.65, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: `${bar.x + 23}px 242px` }}
                />
              ))}

              {/* Baseline */}
              <line x1="30" y1="242" x2="350" y2="242" stroke="#d0daea" strokeWidth="1.5" strokeLinecap="round" />

              {/* Orange curve — flat start, steep rise */}
              <motion.path
                d="M 20 242 C 100 240, 268 140, 284 18"
                stroke="#E8792B" strokeWidth="3" strokeLinecap="round" fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
              />

              {/* Arrow head — 45° up-right */}
              <motion.path
                d="M 286 8 L 276 24 L 293 26 Z"
                fill="#E8792B"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.3, delay: 1.85 }}
                style={{ transformOrigin: "284px 18px" }}
              />
            </svg>

            {/* Stats below chart */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#e8e8ed] border border-[#e8e8ed] rounded-2xl overflow-hidden mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-white px-5 py-4 text-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="text-[1.5rem] font-bold text-orange leading-none tracking-[-0.02em] mb-1">{stat.value}</div>
                  <p className="text-[#6e6e73] text-[11px] leading-[1.4]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
